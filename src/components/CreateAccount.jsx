import { useDispatch } from "react-redux";
import exit from "../assets/svg/exit.svg";
import { setShowCreateAccount } from "../redux/appSlice";

const CreateAccount = () => {
  const dispatch = useDispatch();
  return (
    <div className="z-50 fixed -top-8 left-0 w-screen h-screen bg-black/50 flex items-center justify-center">
      <div className=" ">
        <img
          src={exit}
          alt=""
          className="ml-auto cursor-pointer "
          onClick={() => dispatch(setShowCreateAccount(false))}
        />
        <div className="border w-[736px] mt-[12px] mr-[12px] rounded-[8px] overflow-hidden">
          <p className="flex items-center justify-center font-ibm-md text-[14px] text-[#008A45] bg-[#EFFFF4] h-[50px]">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
          <div className="bg-white flex gap-[24px] justify-center items-center p-[36px] pt-[24px]">
            <div className="flex-1">
              <h1 className="font-ibm-bd text-[24px]">Create Account</h1>
              <form>
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-[#D9D9DB]"
                />
              </form>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
