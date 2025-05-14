const SkipCard = ({ skip }) => {
  return (
    <div className="skip-card p-4 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{skip.name}</h2>
      <p className="mt-2 text-lg text-gray-600">Price: ${skip.price}</p>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200">
        Select
      </button>
    </div>
  );
};

export default SkipCard;