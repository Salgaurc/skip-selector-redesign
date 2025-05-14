const WarningBanner = () => {
  return (
    <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded-lg shadow-md mb-4">
      <strong className="text-xl font-semibold">Important Notice</strong>
      <p className="mt-2 text-lg">
        Heavy waste types have specific requirements and restrictions. Some skip sizes may not be available for heavy waste disposal.
      </p>
    </div>
  );
};

export default WarningBanner;