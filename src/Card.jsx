export default function Card() {
  return (
    <article className="bg-white rounded-xl md:w-4xl md:grid md:grid-cols-[40%_60%] md:grid-rows-[1fr, auto] ">
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

        <input
          className="w-10 p-2.5 h-auto rounded-full bg-Light-Grayish-Blue"
          type="image"
          id="share"
          alt="share"
          src="/icon-share.svg"
        />
      </div>
    </article>
  );
}
