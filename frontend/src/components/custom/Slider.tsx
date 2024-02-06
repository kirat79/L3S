export const Slider = () => {
  const className = "h-[30px] animate-slide";

  return (
    <div className="w-[100vw] h-[72px] mt-8 mb-8">
      <div className="flex overflow-hidden space-x-8">
        {new Array(10).fill(0).map((_) => (
          <>
            <img
              src={"/main/hyperlane.png"}
              className={className}
              alt="logo1"
            />
            <img src={"/main/avail.png"} className={className} alt="logo2" />
            <img
              src={"/main/arbitrum-orbit.png"}
              className={className}
              alt="logo3"
            />
            <img
              src={"/main/blockscout.png"}
              className={className}
              alt="logo4"
            />
          </>
        ))}
      </div>
    </div>
  );
};
