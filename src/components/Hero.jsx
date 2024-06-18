import hero from "../assets/images/hero.jpg";
import back_arrow from "../assets/svg/back-arrow.svg";
const Hero = () => {
  return (
    <div className="relative">
      <img
        src={hero}
        alt=""
        className="md:aspect-[36/11] object-cover w-full"
      />
      <BlackTint />
      <BackArrow />
      <JoinGroup />
      <div className="absolute left-[16px] sm:left-[3%] min-[1380px]:left-[200px] bottom-[32px] sm:bottom-[20%] lg:bottom-[80px] text-white  lg:space-y-3">
        <p className="font-ibm-bd text-xl lg:text-[36px]">
          Computer Engineering
        </p>
        <p className="font-ibm text-sm lg:text-[18px]">
          142,765 Computer Engineers follow this
        </p>
      </div>
    </div>
  );
};
const BlackTint = () => {
  return (
    <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/45  to-black/60"></div>
  );
};

const BackArrow = () => {
  return (
    <img
      src={back_arrow}
      alt=""
      className="min-[835px]:hidden absolute top-[16px] left-[16px] cursor-pointer"
    />
  );
};

const JoinGroup = () => {
  return (
    <button className=" min-[835px]:hidden absolute top-[14px] right-[18px] text-white py-1 px-2 border border-white rounded-md">
      Join Group
    </button>
  );
};

export default Hero;
