const WastePercentageSelector = ({ heavyPercentage, setHeavyPercentage }) => {
  const percentageOptions = [
    { label: "No heavy waste", message: "No heavy waste in your skip" },
    { label: "Up to 5%", message: "A small amount of heavy waste" },
    { label: "5-20%", message: "A moderate amount of heavy waste" },
    { label: "Over 20%", message: "A large amount of heavy waste" },
  ];

  const selectedMessage = percentageOptions.find(option => option.label === heavyPercentage)?.message;

  return (
    <div className="waste-percentage p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Approximate percentage of heavy waste:</h3>
      <div className="pill-group flex flex-wrap gap-2">
        {percentageOptions.map((option) => (
          <button
            key={option.label}
            className={`pill-button px-3 py-1 text-sm font-medium border-2 rounded-md shadow-sm transition-all duration-300 ease-in-out 
              ${heavyPercentage === option.label ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-blue-400 hover:scale-105 hover:shadow-md'}`}
            onClick={() => setHeavyPercentage(option.label)}
          >
            {option.label}
          </button>
        ))}
      </div>
      {selectedMessage && <p className="mt-4 text-lg text-gray-300">{selectedMessage}</p>}
    </div>
  );
};

export default WastePercentageSelector;