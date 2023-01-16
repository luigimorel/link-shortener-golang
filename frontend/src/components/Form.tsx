import { FormEvent, useState } from "react";

export const Form = () => {
  const url = "http://localhost:8080/api/v1/create";

  const [copySuccess, setCopySuccess] = useState("Copy");
  const [longLink, setLongLink] = useState("");
  const [loading, setLoading] = useState(false);

  const copyToClipBoard = async (shortLink: string) => {
    try {
      await navigator.clipboard.writeText(shortLink);
      setCopySuccess("Copied! 🚀");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    postShortLink(longLink);
    setLoading(true);
  };

  const postShortLink = async (formData: unknown) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      return await response.json();
    } catch (error) {
      return error;
    }
  };

  return (
    <section className="bg-whit sm:mt-20 mt-8 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Generate short <link rel="stylesheet" href="" />
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className=" flex justify-center items-center w-full bg-purple-primary sm:p-8 p-2 rounded-lg">
                <div className="relative w-full">
                  <label
                    htmlFor="long_link"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Long link
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                  <input
                    className="block p-5 pl-10 w-full text-sm text-gray-900 bg-gray-50 placeholder:text-gray-900 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter long link"
                    type="url"
                    onChange={(e) => setLongLink(e.target.value)}
                    value={longLink}
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
            By clicking Generate, you are agreeing to{" "}
            <a href="/terms" className=" underline">
              Terms of Service and Privacy Policy
            </a>
            .
          </p>

          <div className=" bg-gray-700 flex rounded py-4 px-5 justify-between  sm:mx-16">
            <p className=" text-white ">Lorem ipsum dolor sit amet.</p>
            <button
              disabled={loading ? true : false}
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
