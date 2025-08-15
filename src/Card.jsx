import { useState } from "react";

export default function Card() {
  const [clicked, setClicked] = useState(false);

  return (
    <article className="rounded-xl bg-white md:w-4xl md:grid md:grid-cols-[40%_60%] md:grid-rows-[1fr, auto] ">
      <img
        className="rounded-t-xl h-56 w-full md:h-full md:row-span-2 md:rounded-t-none md:rounded-l-xl"
        src="/drawers.jpg"
        alt="Image of drawers"
      />

      <div className="flex flex-col gap-2 px-10 pt-10 pb-5 md:col-start-2">
        <h1 className="text-2xl font-bold text-Very-Dark-Grayish-Blue">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="text-Very-Dark-Grayish-Blue text-base">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="md:hidden">
        {clicked ? (
          // Mobile active share bar
          <div className="grid grid-cols-3 gap-4 items-center justify-items-center px-8 py-4 bg-Very-Dark-Grayish-Blue rounded-b-xl text-white">
            <h3 className="uppercase tracking-[0.2em] text-Grayish-Blue">
              Share
            </h3>
            <div className="flex gap-3">
              <a href="#">
                <img src="/icon-facebook.svg" alt="Facebook" />
              </a>
              <a href="#">
                <img src="/icon-twitter.svg" alt="Twitter" />
              </a>
              <a href="#">
                <img src="/icon-pinterest.svg" alt="Pinterest" />
              </a>
            </div>
            <button
              className="w-9 p-2.5 h-auto rounded-full bg-Light-Grayish-Blue cursor-pointer"
              onClick={() => setClicked(false)}
            >
              <img src="/icon-share.svg" alt="share" />
            </button>
          </div>
        ) : (
          // Mobile footer
          <div className="grid grid-cols-[50px_1fr_50px] items-center px-8 py-4  rounded-b-xl">
            <img
              className="h-10 w-auto rounded-full"
              src="/avatar-michelle.jpg"
              alt="Michelle"
            />
            <div>
              <h3 className="font-bold text-Very-Dark-Grayish-Blue text-base">
                Michelle Appleton
              </h3>
              <p className="text-Grayish-Blue text-sm">28 Jun 2020</p>
            </div>
            <button
              className="w-9 p-2.5 h-auto rounded-full bg-Light-Grayish-Blue cursor-pointer"
              onClick={() => setClicked(true)}
            >
              <img src="/icon-share.svg" alt="share" />
            </button>
          </div>
        )}
      </div>
      {/* DESKTOP LAYOUT */}
      <div className="hidden md:grid grid-cols-[50px_minmax(150px,_1fr)_50px] items-center px-8 py-4 bg-white rounded-b-xl relative">
        <img
          className="h-10 w-auto rounded-full"
          src="/avatar-michelle.jpg"
          alt="Michelle"
        />
        <div>
          <h3 className="font-bold text-Very-Dark-Grayish-Blue text-base">
            Michelle Appleton
          </h3>
          <p className="text-Grayish-Blue text-sm">28 Jun 2020</p>
        </div>
        <div className="relative">
          <button
            className="w-9 p-2.5 h-auto rounded-full bg-Light-Grayish-Blue cursor-pointer"
            onClick={() => setClicked((prev) => !prev)}
          >
            <img src="/icon-share.svg" alt="share" />
          </button>
          {clicked && (
            <div className="absolute w-64 bottom-full left-1/2 -translate-x-1/2 ml-[-10px] mb-3">
              <div className="bg-Very-Dark-Grayish-Blue text-white flex items-center justify-around gap-4 px-6 py-3 rounded-lg relative">
                <h3 className="uppercase tracking-[0.2em] text-Grayish-Blue">
                  Share
                </h3>
                <div className="flex gap-3">
                  <a href="#">
                    <img src="/icon-facebook.svg" alt="Facebook" />
                  </a>
                  <a href="#">
                    <img src="/icon-twitter.svg" alt="Twitter" />
                  </a>
                  <a href="#">
                    <img src="/icon-pinterest.svg" alt="Pinterest" />
                  </a>
                </div>
                {/* Speech bubble tail */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-Very-Dark-Grayish-Blue"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
