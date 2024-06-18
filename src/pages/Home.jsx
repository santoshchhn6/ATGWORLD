import { useState } from "react";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import { useSelector } from "react-redux";
import CreateAccount from "../components/CreateAccount";

const Home = () => {
  const { showCreateAccount, showSignIn } = useSelector((state) => state.app);
  return (
    <div className="space-y-[30px] mb-96">
      <Hero />
      <Posts />
      {showCreateAccount && <CreateAccount />}
    </div>
  );
};

export default Home;
