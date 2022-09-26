import React from "react";

export const Form = () => {
  const [copySuccess, setCopySuccess] = React.useState("Copy");

  const copyToClipBoard = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied! 🚀");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <section className="bg-whit sm:mt-20 mt-8 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Sign up for our newsletter
          </h2>

          <form action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className=" flex justify-center items-center w-full bg-purple-primary sm:p-8 p-2 rounded-lg">
                <div className="relative w-full">
                  <label
                    htmlFor="url"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                  <input
                    className="block p-5 pl-10 w-full text-sm text-gray-900 bg-gray-50 placeholder:text-gray-900 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter long link"
                    type="url"
                    id="url"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="py-5 px-5 w-full text-sm font-medium text-center text-white rounded-lg border bg-purple-primary border-gray-300 cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </form>
          <p className=" text-sm mb-4  text-gray-500">
            By clicking Generate, you are agreeing to Terms of Service and Privacy Policy.
          </p>

          <div className=" bg-gray-700 flex rounded py-4 px-5 justify-between  sm:mx-16">
            <p className=" text-white ">Lorem ipsum dolor sit amet.</p>
            <button
              onClick={() => copyToClipBoard("some text to copy")}
              className=" text-white"
            >
              {copySuccess}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
