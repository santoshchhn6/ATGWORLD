import menu from "../assets/svg/menu.svg";
import visibility from "../assets/svg/visibility.svg";
import share from "../assets/svg/share.svg";
import locationIcon from "../assets/svg/location.svg";
import job from "../assets/svg/job.svg";
import calender from "../assets/svg/calender.svg";

const Post = ({
  type,
  img,
  title,
  description,
  user,
  views,
  location,
  date,
  company,
  website,
}) => {
  const getIcon = () => {
    switch (type) {
      case "Article":
        return <span>✍️</span>;
      case "Education":
        return <span>🔬️</span>;
      case "Meetup":
        return <span>🗓️</span>;
      case "Job":
        return <span>💼️</span>;

      default:
        break;
    }
  };
  return (
    <div className="w-full max-w-[692px] border border-[#E0E0E0] overflow-hidden rounded-[4px]">
      {img && (
        <img src={img} alt="" className="w-full h-[220px] object-cover" />
      )}

      <div className=" p-[20px]">
        <div className="font-ibm-md text-[18px] mb-[10px] flex gap-1">
          <p className=" -mt-[3px]">{getIcon()}</p> <p className="">{type}</p>
        </div>
        <div className="flex  justify-between">
          <p className="font-ibm-sb text-[22px]">{title}</p>
          <img
            src={menu}
            alt=""
            className="cursor-pointer h-fit w-fit hover:bg-[#BFBFC0] rounded-[4px]"
          />
        </div>

        {description && (
          <p className="font-ibm text-[19px] text-[#5C5C5C] line-clamp-1 mt-[12px] mb-[32px]">
            {description}
          </p>
        )}

        {location && (
          <div className="flex gap-[40px] items-center mt-[12px] mb-[16px]">
            {date && <Date date={date} />}
            {company && <Company company={company} />}
            <Location location={location} />
          </div>
        )}

        {website && (
          <div className="w-full mt-[16px] mb-[32px] cursor-pointer border border-[#A9AEB8] rounded-[8px] text-center font-ibm-sb text-[13px] text-[#02B875] hover:text-[#E56135] py-[9px] ">
            {website?.title}
          </div>
        )}

        <div className=" flex items-center justify-between">
          <User {...user} />
          <div className="flex gap-[40px]">
            <Views views={views} />
            <Share />
          </div>
        </div>
      </div>
    </div>
  );
};

const Date = ({ date }) => {
  return (
    <div className="flex gap-1 items-center font-ibm-md text-[15px]">
      <img src={calender} alt="" />
      {date}
    </div>
  );
};

const Company = ({ company }) => {
  return (
    <div className="flex gap-1 items-center font-ibm-md text-[15px]">
      <img src={job} alt="" />
      {company}
    </div>
  );
};

const Location = ({ location }) => {
  return (
    <div className="flex gap-1 items-center font-ibm-md text-[15px]">
      <img src={locationIcon} alt="" />
      {location}
    </div>
  );
};

const User = ({ name, img }) => {
  return (
    <div className="flex gap-[10px] items-center">
      <img
        src={img}
        alt=""
        className="w-[48px] aspect-square rounded-full object-cover"
      />
      <p className="font-ibm-sb text-[18px]">{name}</p>
    </div>
  );
};

const Views = ({ views }) => {
  return (
    <div className="flex gap-[8px] items-center">
      <img src={visibility} alt="" className=" " />
      <p className="font-ibm-md text-[14px] text-[#525252]">{views} views</p>
    </div>
  );
};

const Share = () => {
  return (
    <img
      src={share}
      alt=""
      className="rounded-[4px] py-[9px] px-[12px] bg-[#EDEEF0] cursor-pointer"
    />
  );
};

export default Post;
