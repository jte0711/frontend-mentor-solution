import Head from "next/head";
import React from "react";
import useScreenSize from "../../../src/hooks/windowSize";

const MeetH1 = ({ children, styleTailwind }) => {
  return (
    <p
      className={
        "text-[4rem] leading-[4rem] font-RedHatDisplay font-black " +
        styleTailwind
      }
    >
      {children}
    </p>
  );
};

const MeetH2 = ({ children, styleTailwind }) => {
  return (
    <p
      className={
        "md:text-[2.5rem] md:leading-[2.75rem] font-RedHatDisplay font-black " +
        styleTailwind
      }
    >
      {children}
    </p>
  );
};

const MeetOverline = ({ children, styleTailwind }) => {
  return (
    <p
      className={
        "text-base leading-[1.625rem] tracking-[0.25rem] uppercase font-RedHatDisplay font-black text-meet-greenblue " +
        styleTailwind
      }
    >
      {children}
    </p>
  );
};

const MeetBody = ({ children, styleTailwind }) => {
  return (
    <p
      className={
        "text-[1.125rem] leading-[1.625rem] font-RedHatDisplay font-medium text-meet-grey " +
        styleTailwind
      }
    >
      {children}
    </p>
  );
};

const MeetButton = ({
  isPurple = false,
  children,
  additionalText,
  styleTailwind,
}) => {
  return (
    <div
      className={`rounded-[29px] flex justify-center items-center py-4 px-[1.875rem] hover:cursor-pointer ${
        isPurple
          ? "bg-meet-purple hover:bg-[#B18BDD]"
          : "bg-meet-greenblue hover:bg-[#71C0D4]"
      } ${styleTailwind}`}
    >
      <p className="text-white font-RedHatDisplay font-black text-base text-">
        {children}
      </p>
      {additionalText && (
        <p
          className={`ml-1 font-RedHatDisplay font-black text-base ${
            isPurple ? "text-meet-l-purple" : "text-meet-cyan"
          }`}
        >
          {additionalText}
        </p>
      )}
    </div>
  );
};

const Number = ({ children, styleTw }) => {
  return (
    <div className={`flex flex-col items-center z-10 ${styleTw}`}>
      <div className="border-[1px] border-solid border-meet-grey h-[5.25rem] opacity-25 w-[1px]"></div>
      <div className="bg-meet-white flex justify-center items-center w-14 h-14 border-[1px] border-solid border-[rgba(135, 135, 157, 0.25)] rounded-full">
        <p className="text-meet-grey font-RedHatDisplay font-black text-base">
          {children}
        </p>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="mt-[3.375rem] md:mt-[4rem] lg:mt-[3.813rem] mx-[-2rem] overflow-hidden">
      <div className="hidden lg:flex">
        <img src="/illustration/meet-hero-left.png" />
        <div className="px-[5.5rem]">
          <MeetH1 styleTailwind={"text-center text-meet-black"}>
            Group Chat for Everyone
          </MeetH1>
          <MeetBody styleTailwind={"text-center mt-[2.125rem]"}>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </MeetBody>
          <div className="mt-8 flex items-center justify-center">
            <MeetButton additionalText="v1.3">Download</MeetButton>
            <MeetButton isPurple={true} styleTailwind="ml-4">
              What is it?
            </MeetButton>
          </div>
        </div>
        <img src="/illustration/meet-hero-right.png" />
      </div>
      <div className="flex flex-col justify-center items-center lg:hidden">
        <div className="flex flex-row justify-center">
          <img src="/illustration/meet-hero-left.png" />
          <img src="/illustration/meet-hero-right.png" />
        </div>
        <div className="mt-12 md:mt-[4.5rem] w-[20.438rem] md:w-[28.563rem]">
          <MeetH1
            styleTailwind={
              "text-center text-meet-black text-[2.5rem] md:text-[3rem]"
            }
          >
            Group Chat for Everyone
          </MeetH1>
          <MeetBody styleTailwind={"text-center mt-6 text-[1rem]"}>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </MeetBody>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center">
            <MeetButton additionalText="v1.3">Download</MeetButton>
            <MeetButton isPurple={true} styleTailwind="mt-4 md:mt-0 md:ml-4">
              What is it?
            </MeetButton>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

const Pictures = () => {
  return (
    <div className="mt-16 md:mt-[4.188rem] lg:mt-16 px-6 md:px-0 flex flex-wrap justify-evenly">
      <img
        src="/illustration/meet-woman-in-videocall.jpg"
        className="w-[9.438rem] md:w-[10.25rem] lg:w-[15.938rem] rounded-lg mb-6 md:mb-0"
      />
      <img
        src="/illustration/meet-women-videochatting.jpg"
        className="w-[9.438rem] md:w-[10.25rem] lg:w-[15.938rem] rounded-lg mb-6 md:mb-0 md:ml-[0.688rem] xl:ml-[1.875rem]"
      />
      <img
        src="/illustration/meet-men-in-meeting.jpg"
        className="w-[9.438rem] md:w-[10.25rem] lg:w-[15.938rem]  rounded-lg md:ml-[0.688rem] xl:ml-[1.875rem]"
      />
      <img
        src="/illustration/meet-man-texting.jpg"
        className="w-[9.438rem] md:w-[10.25rem] lg:w-[15.938rem]  rounded-lg md:ml-[0.688rem] xl:ml-[1.875rem]"
      />
    </div>
  );
};

const Features = () => {
  return (
    <div className="flex flex-col items-center px-6 md:w-[33.75rem] mt-16 md:mt-12 lg:mt-20">
      <MeetOverline>Built for modern use</MeetOverline>
      <MeetH2
        styleTailwind={"mt-8 md:mt-4 text-center text-[2rem] leading-[2.25rem]"}
      >
        Smarter meetings, all in one place
      </MeetH2>
      <MeetBody styleTailwind={"mt-8 text-center md:text-base"}>
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </MeetBody>
    </div>
  );
};

const Cta = () => {
  return (
    <div className="mt-[-1.75rem] lg:pt-[7.25rem] pt-[5.75rem] px-6 md:px-[10.313rem] pb-[4.5rem] lg:pb-[6.5rem] md:pb-[4.125rem] w-full bg-[url('/bg/meet-footer.jpg')] bg-no-repeat bg-cover shadow-[inset_0_0_0_1000px_rgba(77,150,169,0.8)]">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <MeetH2
          styleTailwind={
            "w-[21.875rem] text-meet-white text-center text-[2rem]"
          }
        >
          Experience more together
        </MeetH2>
        <MeetBody
          styleTailwind={
            "w-[21.875rem] text-meet-white mt-6 md:mt-8 text-center"
          }
        >
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </MeetBody>
        <MeetButton
          additionalText={"v1.3"}
          isPurple
          styleTailwind={"mt-8 md:mt-10"}
        >
          Download
        </MeetButton>
      </div>
    </div>
  );
};

const MeetLandingPage = () => {
  const { width: winWidth, height: winHeight } = useScreenSize();

  return (
    <div>
      <Head>
        <title>Portfolio | Meet Landing Page</title>
        <meta
          name="description"
          content="Meet Landing Page challenge by Fronted Mentor, coded by James"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center bg-meet-white overflow-hidden">
        <div className="mt-[3rem] lg:mt-[5rem]">
          <img src="/logo/meet-logo.svg" />
        </div>
        <Hero />
        <Number styleTw={"mt-16 lg:mt-[6.875rem] md:mt-20"}>01</Number>
        <Pictures />
        <Features />
        <Number styleTw={"mt-16 md:mt-20 lg:mt-[4.5rem]"}>02</Number>
        <Cta />
      </main>
    </div>
  );
};

export default MeetLandingPage;
