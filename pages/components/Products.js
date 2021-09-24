import Image from "next/image";
import Product from "./Product";

const product1Img =
  "https://images.samsung.com/is/image/samsung/assets/pk/PCD_KV_Merchandising_264X264.png?$264_264_PNG$";

const product2Img =
  "https://images.samsung.com/is/image/samsung/assets/pk/HOME_B2_KV_Merchandising_192X192.png?$192_192_PNG$";

export default function MonthsPick({
  heading,
  option1,
  option2,
  option3,
  option4,
  option5,
}) {
  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="text-4xl font-medium">{heading}</h1>

        <div className="option-link my-5">
          <h2
            className="inline border-b-2
          border-black cursor-pointer"
          >
            {option1}
          </h2>
          <h2 className="inline option-h">{option2}</h2>
          <h2 className="inline option-h">{option3}</h2>
          <h2 className="inline option-h">{option4}</h2>
          <h2 className="inline option-h">{option5}</h2>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex items-center space-x-4 product">
          <Image src={product1Img} width={150} height={150} loading="lazy" />

          <div>
            <h1>Galaxy Z Fold3 5G</h1>
            <p className="text-xs text-gray-500 mr-3">
              ready to unfold your world
            </p>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-2 justify-items-center 
          my-5 space-y-2 items-center"
      >
        <Product
          img={product2Img}
          title="Galaxy Z Flip3 5G"
          description="The watch that knows you best"
        />
        <Product
          img={product2Img}
          title="Galaxy Z Flip3 5G"
          description="The watch that knows you best"
        />
        <Product
          img={product2Img}
          title="Galaxy Z Flip3 5G"
          description="The watch that knows you best"
        />
        <Product
          img={product2Img}
          title="Galaxy Z Flip3 5G"
          description="The watch that knows you best"
        />
      </div>
    </div>
  );
}
