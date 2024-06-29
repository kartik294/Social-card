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
      <div className="flex items-center justify-center w-full bg-amber-400 min-h-screen">
        <div className="bg-white flex flex-col border border-gray-950 mt-10 p-6 w-full max-w-md mx-4 rounded-2xl relative">
          <div className="mx-auto mt-10">
            <Image
              src="/images/article.svg"
              width={300}
              height={300}
              alt="Article Image"
              className="rounded-2xl"
            />
          </div>
          <span className="block bg-yellow-400 text-center font-semibold px-4 py-2 mt-6 mx-auto rounded-lg">
            Learning
          </span>
          <p className="pt-2 text-center">Published 21 Dec 2023</p>
          <p className="font-black text-xl sm:text-2xl mt-4 text-center whitespace-nowrap">
            HTML & CSS foundations
          </p>
          <p className="pt-4 text-base text-gray-400 text-center">
            These languages are the backbone of every
            <br />
            website, defining structure, content, and
            <br />
            presentation.
          </p>

          <div className="flex justify-center items-center mt-12">
            <Image
              src="/images/avatar.jpg"
              width={40}
              height={40}
              alt="Avatar Image"
              className="rounded-full"
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
