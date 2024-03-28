import Image from "next/image";
import Magnifier from "./../components/magnifier";
// import yourImage from "./path/to/image";

import { krona } from "./fonts";

import Header from './../components/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12 py-4 bg-gray-950">
      <Header></Header>
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-white uppercase" style={krona.style}>
          ACPC Spring Contest
        </h1>
        <div className="flex items-center gap-4">
          <div className="text-xs sm:text-sm border-white border-2 rounded-3xl py-1 px-2">
            April 14th
          </div>
          <div className="text-xs sm:text-sm border-white border-2 rounded-3xl py-1 px-2">
            Peterson Building
          </div>
          <div className="text-xs sm:text-sm border-white border-2 rounded-3xl py-1 px-2">
            Food + Prizes
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
