import React, { useState } from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <div
      className={
        "bg-pod-green hover:bg-[#B3FFE2] rounded-[1.75rem] py-[0.563rem] md:px-[1.688rem] flex justify-center " +
        className
      }
      style={{
        boxShadow: "0px 25px 20px -20px rgba(84, 230, 175, 0.2)",
      }}
      onClick={onClick}
    >
      <p className="font-Chivo text-sm text-pod-black leading-7">{children}</p>
    </div>
  );
};

const TextInput = ({ errorText, showError, value, setValue }) => {
  console.log("this is show error", showError);
  return (
    <div>
      <div className="rounded-[1.75rem] bg-pod-darkgrey py-3.5 px-8">
        <input
          className="bg-pod-darkgrey placeholder:text-[rgba(255,255,255,0.5)] text-white font-Chivo text-sm w-full"
          placeholder="Email Address"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {showError && (
        <p className="mt-2 text-xs font-Chivo text-[#FB3E3E] ml-8">
          {errorText}
        </p>
      )}
    </div>
  );
};

const PodLandingPage = () => {
  const [email, setEmail] = useState("");
  const [showErr, setShowErr] = useState(false);

  const checkEmail = () => {
    const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    console.log("this is isvalid", isValid);

    if (!isValid) {
      setShowErr(true);
      return;
    }
    setShowErr(false);
  };

  return (
    <>
      <div className="hidden lg:flex flex-col pl-[10.313rem] py-[8.125rem] bg-pod-black  min-h-screen">
        <div className="bg-pod-bg-desktop bg-no-repeat bg-auto bg-right-top">
          <img
            src="/logo/pod-logo.svg"
            alt="pod logo"
            width={134}
            className="mt-[-28px]"
          />
          <div className="flex items-end justify-between">
            <div className="bg-pod-black pr-[3.625rem] mt-[6.438rem] pt-[5.5rem]">
              <div>
                <p className="pod-title text-pod-green text-center md:text-left">
                  Publish your podcasts
                </p>
                <p className="pod-title text-white text-center md:text-left">
                  everywhere
                </p>
              </div>
              <p className="pod-body text-pod-lightgrey text-center mt-4 md:mt-[1.938rem] lg:mt-6 md:text-left md:max-w-[27.813rem]">
                Upload your audio to Pod with a single click. We’ll then
                distribute your podcast to Spotify, Apple Podcasts, Google
                Podcasts, Pocket Casts and more!
              </p>
              <div className="md:flex md:flex-col-reverse">
                <div className="mt-[2.063rem] md:mt-16 flex flex-row justify-between items-center">
                  <img
                    src="/logo/spotify.svg"
                    alt="spotify logo"
                    className="h-[17px] md:h-[26px]"
                  />
                  <img
                    src="/logo/apple-podcast.svg"
                    alt="apple podcast logo"
                    className="h-[17px] md:h-[26px]"
                  />
                  <img
                    src="/logo/google-podcasts.svg"
                    alt="google podcast logo"
                    className="h-[17px] md:h-[26px]"
                  />
                  <img
                    src="/logo/pocket-casts.svg"
                    alt="pocket cast logo"
                    className="h-[17px] md:h-[26px]"
                  />
                </div>
                {showErr && (
                  <p className="mt-2 text-xs font-Chivo text-[#FB3E3E] ml-8">
                    Oops! Please check your email
                  </p>
                )}
                <div className="hidden md:flex justify-between items-center md:mt-10 rounded-[1.75rem] bg-pod-darkgrey p-[0.313rem] max-h-[3.5rem] ">
                  <input
                    className="flex flex-grow outline-none bg-inherit ml-8 font-Chivo text-sm text-white"
                    placeholder="Email address"
                  />
                  <Button onClick={() => checkEmail()}>Request Access</Button>
                </div>
              </div>
            </div>
            <img
              src="/illustration/bg-pattern-dots.svg"
              alt="dot illustration"
              width={232}
              className="mb-[-52px]"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden px-6 md:px-[2.438rem] bg-pod-black flex flex-col md:justify-between items-center md:items-start min-h-screen md:h-[64rem] bg-pod-bg bg-no-repeat bg-cover md:bg-auto md:bg-right-top shadow-[inset_0_0_0_1000px_rgba(18,23,37,0.8)] md:shadow-[inset_0_0_0_1000px_rgba(18,23,37,0.2)]">
        <img
          src="/logo/pod-logo.svg"
          alt="pod logo"
          width={134}
          className="mt-[3.875rem]"
        />
        <div className="md:bg-pod-black md:pr-10 lg:pr-[3.625rem] lg:mt-[6.438rem]">
          <div className="mt-[3.563rem] md:mt-[5.813rem] lg:mt-[5.5rem]">
            <p className="pod-title text-pod-green text-center md:text-left">
              Publish your podcasts
            </p>
            <p className="pod-title text-white text-center md:text-left">
              everywhere
            </p>
          </div>
          <p className="pod-body text-pod-lightgrey text-center mt-4 md:mt-[1.938rem] lg:mt-6 md:text-left md:max-w-[27.813rem]">
            Upload your audio to Pod with a single click. We’ll then distribute
            your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket
            Casts and more!
          </p>
          <div className="md:flex md:flex-col-reverse">
            <div className="mt-[2.063rem] md:mt-16 flex flex-row justify-between items-center">
              <img
                src="/logo/spotify.svg"
                alt="spotify logo"
                className="h-[17px] md:h-[26px]"
              />
              <img
                src="/logo/apple-podcast.svg"
                alt="apple podcast logo"
                className="h-[17px] md:h-[26px]"
              />
              <img
                src="/logo/google-podcasts.svg"
                alt="google podcast logo"
                className="h-[17px] md:h-[26px]"
              />
              <img
                src="/logo/pocket-casts.svg"
                alt="pocket cast logo"
                className="h-[17px] md:h-[26px]"
              />
            </div>
            <div className="mt-12 md:hidden ">
              <TextInput
                errorText={"Oops! Please check your email"}
                showError={showErr}
                value={email}
                setValue={setEmail}
              />
              <Button
                className={"mt-[1.563rem]"}
                onClick={() => {
                  console.log("clicked here");
                  checkEmail();
                }}
              >
                Request Access
              </Button>
            </div>
            <div className="hidden md:flex justify-between items-center md:mt-10 rounded-[1.75rem] bg-pod-darkgrey p-[0.313rem] max-h-[3.5rem] ">
              <input
                className="flex flex-grow outline-none bg-inherit ml-8 font-Chivo text-sm text-white"
                placeholder="Email address"
              />

              <Button onClick={() => checkEmail()}>Request Access</Button>
            </div>
            {showErr && (
              <p className="mt-2 text-xs font-Chivo text-[#FB3E3E] ml-8">
                Oops! Please check your email
              </p>
            )}
          </div>
        </div>
        <div className="hidden md:flex md:ml-[-0.563rem] lg:ml-0 lg:absolute lg:right-0 lg:bottom-0">
          <img
            src="/illustration/bg-pattern-dots.svg"
            alt="dot illustration"
            width={232}
          />
        </div>
      </div>
    </>
  );
};

export default PodLandingPage;
