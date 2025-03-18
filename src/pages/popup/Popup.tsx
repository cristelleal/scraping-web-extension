import logo from "../../../public/article.png";

const Popup = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
      <header className="flex flex-col items-center justify-center text-white">
        <img src={logo} className="h-24" alt="logo" />
        <h1 className="text-2xl font-bold">Web scraping page extension ✨</h1>
        <p className="text-md">We summarize all your articles</p>
        <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Summarize now
        </button>
      </header>
    </div>
  );
};

export default Popup;

