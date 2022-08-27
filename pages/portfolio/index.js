import Head from "next/head";
import Link from "next/link";
import React from "react";

const ChallengeItem = ({ linkEndpoint, imgUrl }) => {
  return (
    <Link href={`./portfolio/${linkEndpoint}`}>
      <a target="__blank">
        <div className="w-52 h-52 rounded-2xl overflow-hidden">
          <div
            className={
              "w-52 h-52 bg-cover bg-center hover:opacity-90 hover:scale-150 "
            }
            style={{
              backgroundImage: `url(${imgUrl})`,
            }}
          />
        </div>
      </a>
    </Link>
  );
};

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="James' Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-14 py-12">
        <h2 className="text-5xl tracking-wider font-semibold uppercase">
          Portfolio
        </h2>
        <div className="mt-10">
          <h3 className="text-2xl tracking-wide font-medium uppercase">
            Works
          </h3>
          <div className="mt-5">
            <div className="w-80 h-40 bg-fem-darkblue rounded-xl flex justify-center items-center hover:opacity-80">
              <p className="text-white font-medium uppercase tracking-widest">
                Coming Soon
              </p>
            </div>
          </div>
          <h3 className="text-2xl tracking-wide font-medium uppercase mt-8">
            Others
          </h3>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            <ChallengeItem
              linkEndpoint={"interactive-rating-component"}
              imgUrl="./web-preview/desktop-interactive.jpg"
            />
            <ChallengeItem
              linkEndpoint={"product-preview-card-component"}
              imgUrl="./web-preview/desktop-product-card.jpg"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
