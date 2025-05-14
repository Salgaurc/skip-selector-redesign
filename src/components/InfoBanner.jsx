const InfoBanner = () => {
  return (
    <div className="bg-blue-100 border-l-4 border-yellow-500 p-4 text-yellow-800">
      <strong className="font-bold text-xl">Skip Size Restrictions</strong>
      <p className="mt-2 text-sm">
        For safety reasons, heavy waste can only be disposed of in skips up to 8 yards.
        Larger skips will not be available if heavy waste is selected.
      </p>
    </div>
  );
};

export default InfoBanner;