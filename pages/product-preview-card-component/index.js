import Head from "next/head";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const ProductPrevCardComp = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Product Preview Card Component</title>
        <meta
          name="description"
          content="Product Preview Card Component by Fronted Mentor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 py-7 md:px-0 md:py-0 bg-cream-bg min-h-screen flex justify-center items-center">
        <div className="flex flex-col md:grid md:grid-cols-2 w-[37.5rem] rounded-lg overflow-hidden">
          <div className="h-60 md:h-auto bg-[url('/bg/productprev.png')] bg-center bg-cover bg-no-repeat" />
          <div className="p-8 bg-white">
            <p className="text-xs font-mono uppercase tracking-widest font-medium">
              Perfume
            </p>
            <p className="font-bold font-serif text-3xl text-gunmetal mt-5">
              Gabrielle Essence Eau De Parfum
            </p>
            <p className="font-medium font-mono text-sm text-aurometal-saurus mt-6">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex items-center mt-7">
              <p className="font-bold font-serif text-3xl text-deep-aquamarine">
                $149.99
              </p>
              <p className="font-medium font-mono text-xs line-through text-aurometal-saurus ml-5">
                $169.99
              </p>
            </div>
            <div className="bg-deep-aquamarine rounded-lg w-full py-4 flex justify-center items-center mt-7 hover:bg-deep-aquamarine-hv cursor-pointer">
              <ShoppingCartIcon className="h-4 text-white" />
              <p className="text-sm font-bold text-white ml-2">Add to Cart</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPrevCardComp;
