const wasteTypesMap = {
  Concrete: "Blocks, slabs, and foundations",
  Bricks: "Whole or broken bricks",
  Tiles: "Ceramic, porcelain, or stone tiles",
  Soil: "Including topsoil and subsoil",
  Sand: "Building or garden sand",
  Gravel: "Stone and aggregate",
  Rubble: "Mixed construction debris",
};

const SelectedWasteDisplay = ({ selectedWaste }) => {
  if (selectedWaste.length === 0) return null;

  return (
    <div className="selected-waste-display p-3  rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Selected heavy waste types:</h3>
      <div className="selected-waste-grid flex flex-wrap gap-3">
        {selectedWaste.map((label) => (
          <div key={label} className="selected-waste-card w-fit inline-block p-3  border border-gray-300 rounded-lg shadow-sm">
            <strong className="text-lg font-semibold">{label}</strong>
            <p className="mt-2 text-sm text-gray-300">{wasteTypesMap[label]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedWasteDisplay;