import React from "react";
import cooking from "../assets/img/cooking.png";
import egg from "../assets/img/fried-egg.png";
import dish from "../assets/img/dish.png";
import delivery from "../assets/img/delivery-man.png";
import fastFood from "../assets/img/fast-food.png";
import map from "../assets/img/map.png";
const HeroSection = () => {
  return (
    <div className="custom-grid mt-4 text-white   gap-5">
      {/*  */}
      <div className="bg-[#213656]/20   rounded-3xl  px-4 pt-5 pb-3  lg:col-start-1 lg:col-span-3">
        <h2 className="hero-title text-center mb-2.5">Welcome to MOS</h2>
        <p className="mb-3 px-3 text-justify text-gray-400">
          At MOS, we reimagine burgers as culinary art. Each creation is
          carefully crafted, blending Japanese inspiration with fresh, premium
          ingredients.Our burgers aren't just meals – they're delicious
          experiences made with passion and precision, prepared perfectly for
          you in the moment.
        </p>
        <span className="text-center block text-[1.3rem] text-[#b3bdcb] font-semibold">
          More than fast food. More than a meal. This is MOS !
        </span>
      </div>
      {/*  */}
      <div className="bg-[#1e2d55]/50 rounded-3xl px-4 py-3  lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3">
        <div className="hero-img">
          <img src={cooking} alt="" />
        </div>
        <h2 className="hero-title text-center mt-3 mb-4">
          Passion Grilled into Every Delicious Bite
        </h2>
        <p className="text-gray-400 mb-3">
          Conveys the emotional and skillful approach to burger preparation,
          suggesting that passion is an actual ingredient in the cooking process
          transforming simple ingredients into culinary masterpieces with
          dedication and love.
        </p>
        <div className="hero-img ms-auto">
          <img src={egg} alt="" />
        </div>
      </div>
      {/*  */}
      <div className="border border-amber-100/20 rounded-3xl px-4 py-3  lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4">
        <div className="hero-img">
          <img src={dish} alt="" />
        </div>
        <h3 className="hero-title text-center my-3.5">Your Mos Moment</h3>
        <p className="text-gray-400 text-center">
          A flavor adventure that's totally you, right here, right now!
        </p>
        <button className="mt-10 py-2 cursor-pointer hover:bg-amber-500 transition-all px-5 mx-auto block bg-amber-600 rounded-full">
          <span className="font-extrabold">order now</span>
        </button>
      </div>
      {/*  */}
      <div className="bg-[#00003d]/30 rounded-3xl  px-4 py-3 lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-4">
        <div className="hero-img ms-auto">
          <img src={delivery} alt="" />
        </div>
        <h3 className="hero-title text-center my-3">
          Making People Happy Though Food
        </h3>
        <p className="text-gray-400 text-justify mb-8">
          Our commitment to quality means hand-preparing fresh vegetables every
          morning and cooking burgers only after you order, guaranteeing the
          best taste and freshest ingredients.
        </p>
        <div className="hero-img ">
          <img src={fastFood} alt="" />
        </div>
      </div>
      {/*  */}
      <div className="border border-amber-100/20 rounded-3xl px-4 py-3 grid gap-8">
        <div className="flex gap-4 justify-center items-center ">
          <img src={map} alt="" className="hero-img block " />
          <h3 className="hero-title">Locate Us</h3>
        </div>
        <button className="py-2 cursor-pointer hover:bg-amber-500 transition-all px-5 mx-auto block bg-amber-600 rounded-full">
          <span className="font-extrabold">swing-by</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
