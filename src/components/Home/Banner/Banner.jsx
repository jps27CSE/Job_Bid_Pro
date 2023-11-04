import BannerPic from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div
        className="hero  h-3"
        style={{
          backgroundImage: `url(${BannerPic})`,
          height: "550px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              Welcome to JobBidPro Your Ultimate Job Marketplace!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
