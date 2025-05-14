const wasteLevels = {
  "No heavy waste": 0,
  "Up to 5%": 25,
  "5-20%": 50,
  "Over 20%": 100,
};

const HeavyWasteVisual = ({ percentageLabel }) => {
  const fillLevel = wasteLevels[percentageLabel] || 0;

  return (
    <div className="heavy-waste-visual">
      <h3 className="text-xl font-semibold mb-2">Estimated heavy waste volume:</h3>
      <div className="w-full h-6 border-2 border-gray-500 rounded-md overflow-hidden bg-gray-800 mb-2">
        <div
          className="w-full h-full transition-all duration-300 ease-in-out"
          style={{
            width: `${fillLevel}%`,
            backgroundColor: '#4caf50',
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeavyWasteVisual;