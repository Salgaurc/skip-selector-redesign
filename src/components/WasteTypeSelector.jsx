const WasteTypeSelector = ({ selectedWaste, setSelectedWaste }) => {
  const wasteTypes = [
    { label: "Concrete", description: "Blocks, slabs, and foundations" },
    { label: "Bricks", description: "Whole or broken bricks" },
    { label: "Tiles", description: "Ceramic, porcelain, or stone tiles" },
    { label: "Soil", description: "Including topsoil and subsoil" },
    { label: "Sand", description: "Building or garden sand" },
    { label: "Gravel", description: "Stone and aggregate" },
    { label: "Rubble", description: "Mixed construction debris" },
  ];

  const toggleWasteType = (label) => {
    setSelectedWaste((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="waste-types p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Select heavy waste types:</h3>
      <div className="waste-options-grid flex flex-wrap gap-2">
        {wasteTypes.map(({ label }) => {
          const isSelected = selectedWaste.includes(label);
          return (
            <button
              type="button"
              key={label}
              className={`waste-card px-3 py-1 text-sm font-medium border-2 rounded-md shadow-sm transition-all duration-300 ease-in-out 
                ${isSelected ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-blue-400 hover:scale-105 hover:shadow-md'}`}
              onClick={() => toggleWasteType(label)}
            >
              <strong className="font-medium">{label}</strong>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WasteTypeSelector;