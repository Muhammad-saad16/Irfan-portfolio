"use client";
import Image from "next/image";
import Link from "next/link";
import porfolioPic from "../../Images/porfolio-pic.webp";
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <section className="text-gray-600 body-font bg-gray-100">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        I am a 
                        <br className="hidden lg:inline-block" />
                        <Typewriter
                            options={{
                                strings: [
                                    "Certified Quran Tutor",
                                    "Imam of Masjid",
                                    "religious leader",
                                 
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    
                    <div className="w-[100px] h-[2px] bg-blue-700"></div>
                    <p className="mb-8 leading-relaxed">
                    I am a dedicated <b>Qari and Imam</b>, committed to leading the community in prayer and teaching the Quran with proper Tajweed and a melodious recitation. My mission is to inspire individuals to develop a deep connection with the Quran, enhance their recitation skills, and cultivate a strong spiritual bond with the words of Allah, while serving as a guide and leader in the masjid.
                    </p>
                    <div className="flex justify-center">
                        <Link href={"/"}>
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                Facebook
                            </button>
                        </Link>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link href={"/"}>
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                Linkedin
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        className="object-cover object-center rounded mx-auto w-[15rem]"
                        alt="hero"
                        width={500}
                        height={500}
                        src={porfolioPic}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

