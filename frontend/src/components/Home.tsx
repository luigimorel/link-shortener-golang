import React, { ChangeEvent } from "react";

export const Home = () => {
  const [url, setUrl] = React.useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setUrl(e.target.value);
  };

  // const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   console.log(`${url}`);
  // };

  return (
     <div className=" flex  justify-center items-center flex-col sm:mt-32 mt-4 ">
      <div className="   mb-3 sm:w-3/5 w-full  h-full ">
        <h2 className=" text-[#8e61e9] text-center font-bold mb-8 text-xl">
          Shorta
        </h2>

        <h2 className=" text-[#333333] mb-8 mx-4 ">
          Create an instant shareable short link from your long URL
        </h2>

        <form action="POST" className=" flex mx-4  flex-col">
          <input
            type="url"
            name="url"
            id="url"
            value={url}
            onChange={() => handleChange}
            placeholder="Long web URL"
            className=" placeholder:text-gray-300 mb-4 py-4 border focus:border-none text-sm text-gray-800  rounded-sm "
          />

          <div className="justify-center flex flex-row">
            <button
              type="submit"
              className=" bg-blend-lighten sm:w-1/5 w-28 bg-[#ff5aa6] rounded-sm mb-8   font-semibold py-1.5 text-white   "
            >
              Create Short Link
            </button>
          </div>
        </form>
      </div>

      <div className="flex sm:px-14  w-3/5 py-4 bg-gray-200 text-gray-900 flex-row">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus
        </p>
        <span className=" float-right right-0">Copy</span>
      </div>

      <div className=" flex sm:px-0 px-5 mb-16 bottom-0 fixed  flex-row justify-between">
        <p className=" text-[#828282] text-sm">
          Created with ♥ by{" "}
          <a
            href="https://github.com/morelmiles"
            rel="noreferrer"
            target={"_blank"}
            className=" text-[#828282] underline font-bold"
          >
            Luigi Morel
          </a>
        </p>
    </div>
   </div>
  );
};
