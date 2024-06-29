"use client";

import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <>
      <style jsx global>{`
        body,
        html {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
        }

        #__next {
          height: 100%;
        }
      `}</style>
      <div className="flex items-center justify-center w-full bg-amber-400 h-full">
        <div className="bg-white flex flex-col border border-gray-950 mt-15 p-6 w-96 mx-8 rounded-2xl relative">
          <div className="mx-10 mt-10">
            <Image
              src="/images/article.svg"
              width={300}
              height={300}
              alt="Article Image"
              className="rounded-2xl"
            />
          </div>
          <span className="block w-min bg-yellow-400 text-center font-semibold px-4 py-2 mt-6 ml-10 rounded-lg">
            Learning
          </span>
          <p className="pt-2 px-10">Published 21 Dec 2023</p>
          <p className="font-black text-2xl mt-4 px-10">
            HTML & CSS foundations
          </p>
          <p className="pt-4 px-6 text-base text-gray-400">
            These languages are the backbone of every
            <br />
            website, defining structure, content, and
            <br />
            presentation.
          </p>

          <div className="mx-10 mt-12 flex flex-row">
            <Image
              src="/images/avatar.jpg"
              width={40}
              height={40}
              alt="Avatar Image"
              className="rounded-2xl pb-10"
            />
            <p className="font-bold align-middle mt-2 ml-2">Greg Hooper</p>
          </div>

          {/* Custom borders */}
          <div className="absolute inset-0 border-black border-b-8 rounded-2xl border-r-8"></div>
        </div>
      </div>
    </>
  );
};

export default Blog;
