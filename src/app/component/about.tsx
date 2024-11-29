import Image from "next/image";
import React from "react";
import porfolioPic from "../../Images/porfolio-pic.webp";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="hero"
              src={porfolioPic}
              width={300}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
          Assalamu Alaikum, I am <b>Muhammad Irfan Attari</b>, a dedicated <b>Imam</b> and Quran <b>teacher</b> at <b>Madrassatul Madina Noori</b>. With a deep passion for the Holy Quran, I guide students in their journey of <b>Hifz</b> and <b>Nazra</b>, while also leading the community in prayers and religious guidance as an Imam. My mission is to nurture a strong connection with the Quran, instill Islamic values, and inspire individuals to lead righteous and purposeful lives. Through patience, dedication, and spiritual leadership, I aim to make the learning and practice of Islam a transformative and enriching experience for all.
            </p>
            <div className="flex justify-center">
              <a href={"/"}>
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

      