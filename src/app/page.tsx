"use client";

import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col  w-full  justify-center m-auto ">
      <Header />
      <section
        id="hero"
        className="bg-[#171F67] m-auto w-full p-4 items-center text-center gap-8 flex flex-col justify-center h-[90vh] text-white"
      >
        <h1 className="text-4xl md:text-5xl text-center font-bold max-w-[1000px] leading-normal">
          Create Amazing Digital Product For Your Business
        </h1>
        <p className="md:text-lg font-extralight max-w-[855px]">
          We are a professional digital agency that has been established since
          2016, we present a variety of digital services that can help you solve
          problems in your business
        </p>
        <button className="p-4 md:px-[32px] md:py-[23px] bg-white text-black flex gap-2 font-medium">
          Get Started <img src="./ArrouRight.svg" />
        </button>
      </section>
      <section
        id="counter"
        className="max-w-[1000px] w-full md:flex justify-between items-center m-auto p-8 grid grid-cols-2 gap-8"
      >
        <div className="text-center flex flex-col items-center">
          <p className="font-medium text-2xl">1.2K+</p>
          <span>Happy Clients</span>
        </div>

        <div className="text-center flex flex-col items-center">
          <p className="font-medium text-2xl">1.1K+</p>
          <span>Project Completed</span>
        </div>

        <div className="text-center flex flex-col items-center">
          <p className="font-medium text-2xl">3.5K+</p>
          <span>Working Hours</span>
        </div>

        <div className="text-center flex flex-col items-center">
          <p className="font-medium text-2xl">30+</p>
          <span>Certificates</span>
        </div>
      </section>
      <section id="services" className="bg-[#F9F9F9] py-[60px]">
        <div className="flex flex-col gap-10 max-w-screen-xl m-auto p-4">
          <div>
            <span className="text-lg font-extralight">Our Services</span>
            <h2 className="text-2xl font-medium">We Provide What You Need</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 grid-cols-1">
            <div className="bg-white p-6 shadow-md items-center flex flex-col m-auto text-center justify-center max-w-[300px]">
              <img src="./FigmaLogo.svg" />
              <h3 className="text-xl font-semibold">UI/UX Designer</h3>
              <p className="text-md mt-4 font-extralight">
                We are ready to make your website more friendly and efficient in
                the eyes of users
              </p>
            </div>
            <div className="bg-white p-6 shadow-md items-center flex flex-col m-auto text-center justify-center max-w-[290px]">
              <img src="./Code.svg" />
              <h3 className="text-xl font-semibold">Web Development</h3>
              <p className="text-md mt-4 font-extralight">
                We are ready to make your website more friendly and efficient in
                the eyes of users
              </p>
            </div>
            <div className="bg-white p-6 shadow-md items-center flex flex-col m-auto text-center justify-center max-w-[290px]">
              <img src="./PresentationChart.svg" />
              <h3 className="text-xl font-semibold">Mobile Development</h3>
              <p className="text-md mt-4 font-extralight">
                We are ready to make your website more friendly and efficient in
                the eyes of users
              </p>
            </div>
            <div className="bg-white p-6 shadow-md items-center flex flex-col m-auto text-center justify-center max-w-[290px]">
              <img src="./PenNib.svg" />
              <h3 className="text-xl font-semibold">UI/UX Designer</h3>
              <p className="text-md mt-4 font-extralight">
                We are ready to make your website more friendly and efficient in
                the eyes of users
              </p>
            </div>
            <div className="bg-white p-6 shadow-md items-center flex flex-col m-auto text-center justify-center max-w-[290px]">
              <img src="./VideoCamera.svg" />
              <h3 className="text-xl font-semibold">UI/UX Designer</h3>
              <p className="text-md mt-4 font-extralight">
                We are ready to make your website more friendly and efficient in
                the eyes of users
              </p>
            </div>
            <div className="bg-white p-6 shadow-md items-center flex flex-col m-auto text-center justify-center max-w-[290px]">
              <img src="./ArticleMedium.svg" />
              <h3 className="text-xl font-semibold">UI/UX Designer</h3>
              <p className="text-md mt-4 font-extralight">
                We are ready to make your website more friendly and efficient in
                the eyes of users
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="hero"
        className="bg-[#171F67] m-auto w-full p-14 items-center text-center gap-8 flex flex-col justify-center  text-white"
      >
        <h2 className="text-4xl md:text-5xl text-center font-bold max-w-[660px] leading-normal">
          Have a project idea and want to make it come true?
        </h2>
        <p className="md:text-lg font-extralight max-w-[635px]">
          Please contact us and we will discuss about your project, don&apos;t
          forget we are always here for you
        </p>
        <button className="p-4 md:px-[32px] md:py-[23px] bg-white text-black flex gap-2 font-medium">
          Contact Us <img src="./ArrouRight.svg" />
        </button>
      </section>
    </main>
  );
}
