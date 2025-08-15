import { useState } from "react";
export default function Card() {
  const [clicked, setClicked] = useState(!false);

  return (
    <article
      className="
        rounded-xl md:w-4xl md:grid md:grid-cols-[40%_60%] md:grid-rows-[1fr, auto]"
    >
      <img
        className="rounded-t-xl h-56 w-full md:h-full  md:row-span-2 md:rounded-t-none md:rounded-l-xl"
        src="/drawers.jpg"
        alt="Image of drawers"
      />
      <div className="flex flex-col gap-2 px-10 pt-10 pb-5  md:col-start-2">
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

      {clicked === true ? (
        <div className="grid grid-cols-[50px_minmax(150px,_1fr)_50px] items-center  px-8 py-4 md:col-start-2">
          <img
            className="h-10 w-auto rounded-full"
            src="/avatar-michelle.jpg"
            alt="Picture of Michelle"
          />
          <div>
            <h3 className="font-bold text-Very-Dark-Grayish-Blue text-base">
              Michelle Appleton
            </h3>
            <p className="text-Grayish-Blue text-sm">28 Jun 2020</p>
          </div>

          <button
            className="w-9 p-2.5 h-auto rounded-full bg-Light-Grayish-Blue cursor-pointer"
            onClick={() => setClicked((prev) => !prev)}
          >
            <img src="/icon-share.svg" alt="share" />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4  items-center justify-items-center px-8 py-4 md:col-start-2 bg-Very-Dark-Grayish-Blue rounded-b-xl">
          <h3 className="uppercase tracking-[0.2em] text-Grayish-Blue">
            Share
          </h3>
          <div className="flex gap-3">
            <a href="#">
              <img src="/icon-facebook.svg" alt="Facebook link" />
            </a>
            <a href="#">
              <img src="/icon-twitter.svg" alt="Twitter link" />
            </a>
            <a href="#">
              <img src="/icon-pinterest.svg" alt="Pinterestlink" />
            </a>
          </div>

          <button
            className="w-9 p-2.5 h-auto rounded-full bg-Light-Grayish-Blue cursor-pointer"
            onClick={() => setClicked((prev) => !prev)}
          >
            <img src="/icon-share.svg" alt="share" />
          </button>
        </div>
      )}
    </article>
  );
}
