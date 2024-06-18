import Logo from "./Logo";
import Search from "./Search";
import down_arrow from "../assets/svg/down-arrow.svg";
import { useDispatch } from "react-redux";
import { setShowCreateAccount } from "../redux/appSlice";

const Header = () => {
  return (
    <div className="h-[72px] px-8 min-[920px]:px-[72px] hidden min-[835px]:flex items-center justify-between">
      <Logo />
      <Search placeholder={"Search for your favorite group in ATG"} />
      <CreateAccount />
    </div>
  );
};

const CreateAccount = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(setShowCreateAccount(true))}
      className="flex text-[16px] cursor-pointer"
    >
      <span className="font-ibm-md text-[#2E2E2E]">Create account.</span>
      <span className="text-[#2F6CE5] font-ibm-bd">It's free!</span>
      <img src={down_arrow} alt="" />
    </div>
  );
};

export default Header;
