import Head from "next/head";
import Image from "next/image";
import React from "react";

const OrderSummary = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Order Summary Component</title>
        <meta
          name="description"
          content="Order Summary Component challenge by Fronted Mentor, coded by James"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-order-paleb min-h-screen min-w-full flex justify-center">
        <div
          className="max-w-[20.438rem] lg:max-w-[28.125rem] my-[4.438rem] rounded-[20px] overflow-hidden bg-white z-10"
          style={{
            boxShadow: "0px 40px 40px -20px rgba(13, 48, 189, 0.151826)",
          }}
        >
          <img src={"/illustration/order-illust-hero.svg"} alt="hero" />
          <div className="px-4 py-8 flex flex-col lg:p-12 lg:pt-[2.813rem]">
            <h3 className=" text-[hsla(223, 46%, 23%, 1)] text-[1.375rem] lg:text-[1.75rem] leading-[1.819rem] text-center font-RedHatDisplay font-black">
              Order Summary
            </h3>
            <p className=" text-order-desab font-RedHatDisplay font-medium text-[0.938rem] lg:text-base leading-[1.563rem] text-center mt-4 lg:mt-[1.063rem]">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
            <div className="flex items-center px-4 py-[1.063rem] bg-[#F7F9FF] rounded-[11px] mt-6 lg:mt-5">
              <img src={"/icon/icon-music.svg"} alt="music icon" />
              <div className="flex flex-col flex-grow px-5">
                <p className="text-sm lg:text-base text-[hsla(223, 46%, 23%, 1)] font-RedHatDisplay font-black leading-[1.158rem]">
                  Annual Plan
                </p>
                <p className="mt-[0.188rem] text-sm lg:text-base font-RedHatDisplay font-medium leading-[1.158rem] text-order-desab">
                  $59.99/year
                </p>
              </div>
              <p className=" font-RedHatDisplay font-bold text-[0.813rem] lg:text-sm leading-[1.075rem] underline text-order-brightb">
                Change
              </p>
            </div>
            <div
              className="py-[0.938rem] w-full bg-order-brightb rounded-[11px] flex justify-center mt-6 lg:mt-8 hover:cursor-pointer hover:bg-[#766CF1]"
              style={{ boxShadow: "0px 20px 20px rgba(56, 42, 225, 0.190291)" }}
            >
              <p className=" font-RedHatDisplay font-black text-[0.938rem] leading-[19.85px] text-white">
                Proceed to Payment
              </p>
            </div>
            <div className="flex justify-center mt-6 lg:mt-8">
              <p className=" font-RedHatDisplay font-black text-[0.938rem] leading-[19.85px] text-order-desab">
                Cancel Order
              </p>
            </div>
          </div>
        </div>
        <img
          src="/bg/order-pattern-bg-desktop.svg"
          className="hidden absolute lg:block top-0 w-full"
        />
        <img
          src="/bg/order-pattern-bg-mobile.svg"
          className="absolute block lg:hidden top-0 w-full"
        />
      </main>
    </>
  );
};

export default OrderSummary;
