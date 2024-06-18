import { useState } from "react";
import down_arrow from "../assets/svg/down-arrow.svg";
import group_add from "../assets/svg/group_add.svg";
import locationIcon from "../assets/svg/location.svg";
import edit from "../assets/svg/edit.svg";
import edit2 from "../assets/svg/edit2.svg";
import error from "../assets/svg/error.svg";
import Post from "./Post";
import { posts } from "../data";

const Posts = () => {
  return (
    <div className=" min-[835px]:px-[3%] min-[1380px]:px-[200px] space-y-[28px]">
      <PostHeader />
      <PostHeaderPhone />
      <AllPosts />
      <WritePostPhone />
    </div>
  );
};

const PostHeaderPhone = () => {
  return (
    <div className="min-[835px]:hidden w-full max-w-[692px] mx-auto px-[20px]  flex items-center justify-between">
      <span>Post(368)</span>
      <div className="flex items-center bg-[#F1F3F5] p-[11px] rounded-md">
        <span>Filter:</span>
        <select className="bg-transparent outline-none">
          <option value="all">All</option>
          <option value="education">Education</option>
          <option value="meetup">Meetup</option>
          <option value="job">Job</option>
        </select>
      </div>
    </div>
  );
};

const WritePostPhone = () => {
  return (
    <button className="min-[835px]:hidden fixed bottom-[18px] right-[18px] w-[54px] aspect-square rounded-full bg-gradient-to-b from-[#FF5C5C] to-[#F0568A] flex items-center justify-center">
      <img src={edit2} alt="" className="text-white" />
    </button>
  );
};

const AllPosts = () => {
  return (
    <div className="flex gap-3 justify-between">
      <div className=" space-y-[16px] mx-auto min-[970px]:mx-0">
        {posts?.map((e) => (
          <Post key={e.id} {...e} />
        ))}
      </div>
      <YourLocation />
    </div>
  );
};

const YourLocation = () => {
  const [location, setLocation] = useState("Noida, India");
  return (
    <div className=" hidden min-[970px]:block w-[243px] mt-[56px] ">
      <div className="flex gap-[4px] items-center pb-[10px] border-b border-[#B8B8B8]">
        <img src={locationIcon} alt="" />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full outline-none text-[14px] font-ibm"
        />
        <img src={edit} alt="" />
      </div>

      <div className="flex gap-[7px] mt-[32px]">
        <img src={error} alt="" className="h-fit" />
        <p className="font-ibm text-[12px] text-[##929292]">
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
    </div>
  );
};

const PostHeader = () => {
  return (
    <div className="hidden min-[835px]:block">
      <div className="flex items-center justify-between">
        <Tabs />
        <div className="flex gap-[16px]">
          <WritePost />
          <JoinGroup />
        </div>
      </div>
      <hr className="w-full -mt-[2px] h-1 bg-[#E0E0E0]" />
    </div>
  );
};

const WritePost = () => {
  return (
    <button className="flex gap-[10px] text-black bg-[#EDEEF0] text-[15px] font-ibm-md py-[8px] px-[12px] rounded-[4px]">
      Write a Post
      <img src={down_arrow} alt="" />
    </button>
  );
};

const JoinGroup = () => {
  return (
    <button className="flex gap-[10px] text-white bg-[#2F6CE5] text-[15px] font-ibm-md py-[8px] px-[12px] rounded-[4px]">
      <img src={group_add} alt="" />
      Join Group
    </button>
  );
};

const Tabs = () => {
  const [active, setAtive] = useState("All Post(32)");
  const tabs = ["All Post(32)", "Article", "Event", "Education", "Job"];
  return (
    <div className="flex gap-[20px]">
      {tabs.map((e) => (
        <Tab key={e} title={e} active={active} onClick={() => setAtive(e)} />
      ))}
    </div>
  );
};

const Tab = ({ title, active, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`py-[20px] font-ibm text-[16px] cursor-pointer ${
        active == title
          ? "text-black border-b-2 border-black"
          : "text-[#8A8A8A]"
      }`}
    >
      {title}
    </span>
  );
};

export default Posts;
