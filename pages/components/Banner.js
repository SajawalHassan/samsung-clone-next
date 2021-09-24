const bannerImg =
  "https://images.samsung.com/is/image/samsung/assets/pk/Mobile-Homepage-banner---With-Out-text1.png?imwidth=360";

export default function Banner() {
  return (
    <div className="relative">
      <img className="w-screen" src={bannerImg} alt="" />

      <div
        className="text-center absolute top-20
      space-y-10"
      >
        <h1
          className="text-5xl font-medium 
        overflow-hidden"
        >
          Free up your life with Galaxy Week Deals
        </h1>

        <p className="text-xl font-light">
          Enjoy everything Galaxy Week has to offer, with plenty of deals
          waiting for you for a limited time only
        </p>

        <h2
          className="text-white bg-black
           hover:bg-gray-800 w-36 button"
        >
          Buy Now
        </h2>
      </div>
    </div>
  );
}
