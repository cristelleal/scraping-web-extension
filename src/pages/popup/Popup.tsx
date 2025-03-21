import { useState } from "react";
import Panel from "../panel/Panel";
import PopupSVG from "./PopupSVG";

const Popup = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [summary, setSummary] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleButtonClick = async () => {
    try {
      setIsLoading(true);
      setShowPanel(true);
      setErrorMessage("");

      const currentUrl = encodeURIComponent(window.location.href);
      const queryUrl = `https://a2cd-78-243-204-14.ngrok-free.app/api/v1/ia/resume?url=${currentUrl}`;
      const response = await fetch(queryUrl);
      if (!response.ok) {
        throw new Error("Impossible de récupérer les données");
      }
      const data = await response.json();
      setSummary(data);
    } catch (error) {
      console.error("Erreur attrapée:", error);
      setErrorMessage("Impossible de générer un résumé. Veuillez réessayer.");
      setSummary(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClosePanel = () => {
    setShowPanel(false);
  };

  return (
    <section>
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full overflow-auto">
        <div className="w-full max-w-xs mx-auto p-6 bg-gradient-to-b from-white to-gray-50 bg-[url(../../../public/meshgradient.jpg)] bg-cover">
          <header className="flex flex-col items-center justify-center">
            <div className="h-14 w-14 mb-3 hover:w-16 hover:h-16 transition-all duration-300 ease-in-out">
              <PopupSVG />
            </div>

            <h1 className="text-2xl font-bold text-indigo-700 mb-2">
              WebSummary ✨
            </h1>
            <p className="text-sm text-indigo-500 mb-6 font-semibold px-4 text-center">
              Transformez vos articles en résumés intelligents
            </p>

            <div className="relative w-full">
              <button
                className="cursor-pointer w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-lg flex items-center justify-center"
                onClick={handleButtonClick}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <span className="mr-2">Résumer maintenant</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {showTooltip && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-2 px-3 rounded shadow-md z-10 whitespace-nowrap">
                  Extraire et résumer le contenu de cette page
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                </div>
              )}
            </div>
          </header>
          <footer>
            <p className="text-xs text-gray-600 font-semibold mt-6">
              En cliquant sur "Résumer maintenant", vous acceptez les conditions
              d'utilisation et la politique de confidentialité.
            </p>
            <hr className="my-6 border-gray-600" />
            <p className="text-xs text-gray-600 mt-6 font-light text-center">
              © 2025 WebSummary. Tous droits réservés.
            </p>
          </footer>
        </div>
      </div>
      {showPanel && (
        <Panel
          summary={summary}
          isLoading={isLoading}
          onClose={handleClosePanel}
          errorMessage={errorMessage}
        />
      )}
    </section>
  );
};

export default Popup;
