import search_icon from "../assets/svg/search_icon.svg";
const Search = ({ value, onChange, placeholder, className }) => {
  return (
    <div
      className={`w-[360px] h-[42px] rounded-full bg-[#f2f2f2] text-[14px] font-ibm-md px-[14px] flex items-center gap-[14px] ${className} `}
    >
      <img src={search_icon} alt="" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-transparent outline-none`}
      />
    </div>
  );
};

export default Search;
