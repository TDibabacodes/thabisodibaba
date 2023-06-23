import Image from "next/image";
import P1 from "../public/images/P1.jpg";

const Banner = () => {
  return (
    /*<div className="py-20 wrapper flex flex-col md:flex-row items-center gap-10 border-b-[1px] border-b-slate-600">*/
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={P1}
          alt="P1"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white">Thabiso Mathebula</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Software Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Welcome to my portfolio! I'm Thabiso, I have completed all my theory
          modules in National Diploma Information Technology(Software
          Development) from Tshwane University of Technology. I am looking for
          work intergrated learning or industry exposure of a minimum of 6
          months to obtain my qualification. Join me on this journey as we dive
          into my world of software development.
        </p>
      </div>
    </div>
  );
};

export default Banner;
