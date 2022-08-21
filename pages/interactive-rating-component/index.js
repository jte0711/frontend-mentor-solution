import Head from "next/head";
import React, { useState } from "react";

const ratingArr = [1, 2, 3, 4, 5];

const RatingCard = ({ onSelect, onSubmit, selectedNb }) => {
  return (
    <>
      <div className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-fem-darkblue flex justify-center items-center">
        <img src="/icon/icon-star.svg" />
      </div>
      <p className="font-bold font-Overpass text-white text-2xl md:text-[1.75rem] mt-[1.875rem]">
        How did we do?
      </p>
      <p className="font-normal font-Overpass text-sm md:text-base text-fem-lightgrey mt-4">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="mt-6 flex justify-between">
        {ratingArr.map((el, index) => (
          <div
            className={` w-[3.188rem] h-[3.188rem] rounded-full flex justify-center items-center cursor-pointer hover:bg-fem ${
              selectedNb === el
                ? "bg-fem-orange text-white"
                : "bg-fem-darkblue text-fem-mediumgrey hover:text-white hover:bg-fem-mediumgrey "
            }`}
            key={"container" + index}
            onClick={() => onSelect(el)}
          >
            <p
              className="font-bold font-Overpass text-sm md:text-base text-inherit text-center tracking-[0.2px]"
              key={"number" + index}
            >
              {el}
            </p>
          </div>
        ))}
      </div>
      <div
        className="bg-fem-orange active:bg-white text-white active:text-fem-orange w-full rounded-3xl flex justify-center py-3 mt-8 cursor-pointer"
        onClick={onSubmit}
      >
        <p className="text-inherit uppercase text-sm md:text-base font-semibold tracking-[2px] font-Overpass">
          Submit
        </p>
      </div>
    </>
  );
};

const ThankYouCard = ({ number }) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img src="/illustration/illustration-thank-you.svg" />
      </div>
      <div className="py-1 px-5 flex justify-center items-center rounded-[22.5rem] bg-fem-darkblue mt-8">
        <p className="font-normal font-Overpass text-center text-sm md:text-[0.938rem] text-fem-orange">
          {`You selected ${number} out of 5`}
        </p>
      </div>
      <p className="font-Overpress font-bold text-2xl md:text-[1.75rem] text-white mt-8">
        Thank you!
      </p>
      <p className="font-Overpress font-normal text-sm md:text-[0.938rem] mb-4 md:mb-0 text-center text-fem-lightgrey mt-[0.438rem]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

const InteractiveRatingComp = () => {
  const [showRating, setShowRating] = useState(true);
  const [ratingNb, setRatingNb] = useState(0);

  const onSubmitHandler = () => {
    setShowRating(false);
  };

  const onSelectRatingHandler = (nb) => {
    setRatingNb(nb);
  };

  return (
    <>
      <Head>
        <title>Portfolio | Interactive Rating Component</title>
        <meta
          name="description"
          content="Interactive Rating Component by Fronted Mentor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-fem-verydarkblue flex justify-center items-center h-screen px-6 md:px-0">
        <div
          className="md:p-8 p-6 bg-fem-black-grad md:w-[25.75rem] w-full rounded-[1.875rem]"
          style={{
            background:
              "radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)",
          }}
        >
          {showRating ? (
            <RatingCard
              onSubmit={onSubmitHandler}
              onSelect={onSelectRatingHandler}
              selectedNb={ratingNb}
            />
          ) : (
            <ThankYouCard number={ratingNb} />
          )}
        </div>
      </div>
    </>
  );
};

export default InteractiveRatingComp;
