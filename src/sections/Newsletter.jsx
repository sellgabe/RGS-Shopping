import React from 'react';

const Newsletter = () => {
  return (
    <section
      className="font-blinker flex flex-row justify-evenly gap-3 items-center bg-neutral-800 p-10 max-lg:flex-col"
      id="contact-us"
    >
      <div className="text-white">
        <h3 className="text-[1.5rem] ">Subscribe to Our Newsletter!</h3>
        <p className="text-[1rem]">
          Sign up to receive the latest news and exclusive offers every week.
        </p>
      </div>
      <div className="w-full max-w-md flex justify-between items-center px-2 py-1 rounded-full gap-2 max-sm:flex-col">
        <input
          type="text"
          placeholder="subscribe@fakestore.com"
          className="flex justify-between outline-none w-full text-slate-gray text-sm rounded-full p-3"
        />
        <div className="flex items-center justify-center max-sm:w-full">
          <button className="bg-neutral-700 text-md font-semibold text-white rounded-full w-[5rem] py-2 px-2 max-sm:w-full">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
