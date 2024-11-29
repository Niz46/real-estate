import { Link } from "react-router-dom";
import { heroData } from "../constants/data";
import Motion from "./ui/Motion";

const Hero = () => {
  return (
    <Motion>
      {heroData &&
        heroData.map((item, index) => (
          <div key={index} className="max-padd-container pt-[99px] h-[600px]">
            <div className="max-padd-container h-[699px] w-full rounded-3xl">
              <div className="relative top-32 xs:top-52">
                <span className="medium-18 text-amber-600">{item.title}</span>
                <h1 className="h2 capitalize max-w-[40rem] font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">{item.heading}</h1>
                <p className="my-7 max-w-[33rem]">{item.description}</p>
                {/* button */}
                <div className="inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl">
                  <div className="text-center regular-14 leading-tight pl-5">
                    <h5 className="uppercase font-bold">{item.offer}</h5>
                    <p className="regular-14">{item.tag}</p>
                  </div>
                  <Link to={"/properties/buy"} className="btn-secondary rounded-xl flexCenter capitalize !py-5">buy now</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </Motion>
  );
};

export default Hero;
