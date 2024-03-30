import Image from "next/image";

// components
import Header from './../components/header'
import Magnifier from "./../components/magnifier";

// fonts
import { rowdies } from "./fonts";

// icons
import { SewingPinFilledIcon, ClockIcon, FaceIcon } from '@radix-ui/react-icons'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-20 px-4 sm:px-12 pb-4 bg-gray-950">
      <Header></Header>
      <div className="flex flex-col gap-4 items-center justify-center text-center mt-28">
        <h1 className="text-5xl sm:text-6xl font-bold text-white uppercase" style={rowdies.style}>
          ACPC Spring Contest
        </h1>
        <div className="flex items-center gap-4">
          <div className="text-xs sm:text-sm border-white border-2 rounded-3xl py-1 px-2 flex-grow flex items-center gap-0 sm:gap-2">
            <ClockIcon></ClockIcon><p>April 14th - 1:00 PM</p>
          </div>
          <div className="text-xs sm:text-sm border-white border-2 rounded-3xl py-1 px-2 flex-grow flex items-center gap-0 sm:gap-2">
            <SewingPinFilledIcon></SewingPinFilledIcon><p>Peterson Building</p>
          </div>
          <div className="text-xs sm:text-sm border-white border-2 rounded-3xl py-1 px-2 flex-grow flex items-center gap-0 sm:gap-2">
            <FaceIcon></FaceIcon><p>Food + Prizes</p>
          </div>
        </div>
        <div className="z-[0]">
          <Magnifier src="/dead_pineapple.png"
            magnifierHeight={100} magnifierWidth={100} zoomLevel={2} />
        </div>
        <p className="italic">Trouble's brewing at Spring Contest 2024… Sign up and help us figure out what's going on!</p>
      </div>
      <div className="w-full bg-slate-900 border-slate-700 border-[1px] rounded-lg p-8">
        <h2 className="text-4xl font-bold uppercase mb-4" style={ rowdies.style }>
          What is it?
        </h2>
        <p className="mb-4">
          Welcome to ACPC's spring competitive programming contest!
          Here, <s>criminals</s> participants work in groups of 3 to solve well-defined 
          problems by writing 
          programs under time limits to test their algorithmic knowledge, programming 
          skills, logical reasoning, and ability to perform under pressure. 
        </p>
        <p className="mb-8">
          Compete for the chance to win prizes, enjoy free food, have fun with
          friends, and <span className="bg-red-700">qualify for the ACM ICPC World Finals!</span>
        </p>
        <a className="glow py-2 px-4 rounded-lg hover:bg-[rgba(44,53,76,0.5)]" href="/apply">
          Apply Now
        </a>
      </div>
      <div className="w-full p-8">
        <h2 className="text-4xl font-bold uppercase" style={ rowdies.style }>
          Overview
        </h2>
        <p>

        </p>
      </div>

    </main>
  );
}
