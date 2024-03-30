import Image from "next/image";

// components
import Header from './../components/header'
import Magnifier from "./../components/magnifier";

// fonts
import { krona } from "./fonts";

// icons
import { SewingPinFilledIcon, ClockIcon, FaceIcon } from '@radix-ui/react-icons'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-12 px-4 pb-4 bg-gray-950">
      <Header></Header>
      <div className="flex flex-col gap-4 items-center justify-center text-center mt-28">
        <h1 className="text-5xl sm:text-6xl font-bold text-white uppercase" style={krona.style}>
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
      </div>
    </main>
  );
}
