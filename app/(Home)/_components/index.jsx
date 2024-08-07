"use client";
import { Camera, Lock } from "lucide-react";
import Link from "next/link";
import React from "react";
const HomeIndex = () => {
  return (
    <div className="w-full">
      <Navbar />
      <MainContent/>
      <Footer/>
    </div>
  );
};

const Navbar = () => {
  const navbarlist = ["About", "Contact"];

  return (
    <div className="w-full sticky top-0 py-6 bg-[#000] flex">
      <div className="w-full px-8 flex items-center justify-between">
        <span className="text-2xl font-bold flex items-center gap-3 text-white">
          <Lock />
          Secure Voting
        </span>
        <div className="flex items-center gap-4 justify-end">
          <div className="hidden lg:flex items-center gap-4">
            {navbarlist?.map((nav, index) => {
              return (
                <Link
                  key={index}
                  className="text-base font-normal text-[#fff]"
                  href={"/"}
                >
                  {nav}
                </Link>
              );
            })}
          </div>
          <div className="p-2 px-4 rounded-sm text-base font-normal text-dark bg-[#f7f7f7]">
            Sign Up
          </div>

          <div className="p-2 px-4 rounded-sm text-base font-normal hover:text-[#000] text-[#fff] cursor-pointer hover:bg-[#f7f7f7]">
            Sign In
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {

  return (
    <div className="w-full items-center justify-center py-6 flex flex-col gap-4">
      <div className="w-[90%] rounded-2xl md:w-[500px] mx-auto border p-8 flex flex-col gap-8 ">
        <span className="text-3xl font-bold gap-3 text-[#000]">
          Verify Your Identity
          <span className="block font-normal text-base text-grey">
            To cast your vote, we need to verify your age and identity.
          </span>
        </span>
        <div className="flex flex-col gap-4">
          <label
            htmlFor="age"
            className="text-base flex flex-col gap-2 font-semibold"
          >
            Age
            <input
              type="number"
              className="font-normal px-6 rounded-md w-full h-[50px] border outline-none"
            />
          </label>

          <div className="text-base flex flex-col gap-2 font-semibold">
            Facial Authentication
            <div className="w-full bg-[#FBF6F7] rounded-md flex items-center justify-center text-2xl h-[300px]">
              <div className="w-[60px] bg-[#fff] shadow-sm rounded-lg flex items-center justify-center text-2xl h-[60px]">
                <Camera />
              </div>
            </div>
            <span className="block text-sm font-normal" >
              Hold your face in front of the camera for facial authentication.
            </span>
            <div className="p-3 hover:opacity-[.6] cursor-pointer px-4 rounded-sm text-base text-center font-semibold text-[#fff] bg-[#000]">
              Take Photo
            </div>
          </div>
        </div>
      </div>

      {/* community voting */}
      <div className="w-[90%] rounded-2xl md:w-[500px] mx-auto border p-8 flex flex-col gap-8 ">
        <span className="text-3xl font-bold gap-3 text-[#000]">
          Community Voting
          <span className="block font-normal text-base text-grey">
            Review the projects and cast your secure vote.
          </span>
        </span>
        <div className="flex flex-col gap-4">
          <div className="text-base flex items-center justify-between gap-4 font-semibold">
            <span className="block text-base font-bold">
              Upgrade Community Center
              <span className="block text-sm font-normal">
                Renovate and expand the community center.
              </span>
            </span>
            <div className="p-2 hover:opacity-[.78] cursor-pointer px-4 rounded-sm text-base text-center font-semibold border">
              Vote
            </div>
          </div>

          <div className="text-base flex items-center justify-between gap-4 font-semibold">
            <span className="block text-base font-bold">
              Upgrade Community CenterInstall Solar Panels{" "}
              <span className="block text-sm font-normal">
                Implement a solar energy system for the community.
              </span>
            </span>
            <div className="p-2 hover:opacity-[.78] cursor-pointer px-4 rounded-sm text-base text-center font-semibold border">
              Vote
            </div>
          </div>

          <div className="text-base flex items-center justify-between gap-4 font-semibold">
            <span className="block text-base font-bold">
              Improve Local Park
              <span className="block text-sm font-normal">
                Renovate and expand the community park.
              </span>
            </span>
            <div className="p-2 hover:opacity-[.78] cursor-pointer px-4 rounded-sm text-base text-center font-semibold border">
              Vote
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const navbarlist = ["About", "Contact"];

  return (
    <div className="w-full sticky bottom-0 py-3 bg-[#000] flex">
      <div className="w-full px-8 flex items-center justify-between">
        <span className="text-sm font-normal flex items-center gap-3 text-white">
          © 2024 Secure Voting. All rights reserved.
        </span>
        <div className="flex items-center gap-8 justify-end">
          <div className="text-sm font-semibold text-[#fff] ">
            Powered by Vercel
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeIndex;
