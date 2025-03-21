interface PanelProps {
  summary: any;
  isLoading: boolean;
  onClose: () => void;
  errorMessage: string;
}

const Panel = ({ summary, isLoading, onClose, errorMessage }: PanelProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 m-4 max-h-[80vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-indigo-700">Résumé</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : errorMessage ? (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        ) : summary ? (
          <div className="prose prose-indigo max-w-none">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Points clés</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              {summary.summary || "Pas de résumé disponible"}
            </div>
            {summary.keyPoints && Array.isArray(summary.keyPoints) && (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {summary.keyPoints.map((point: string, index: number) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <p className="text-gray-600">Impossible de générer un résumé. Veuillez réessayer.</p>
        )}
      </div>
    </div>
  );
};

export default Panel;
