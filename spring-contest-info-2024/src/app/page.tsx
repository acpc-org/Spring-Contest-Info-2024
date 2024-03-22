import Image from "next/image";
// import Magnifier from "react-magnifier";
// import yourImage from "./path/to/image";

import { arvo } from "./fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="" style={arvo.style}>
          ACPC Spring Contest
        </h1>
        <div className="flex items-center gap-4">
          <div className="">
            April 14th
          </div>
          <div className="">
            Peterson Building
          </div>
          <div className="">
            Food + Prizes
          </div>
        </div>
        <div>
          {/* <Magnifier src={yourImage} width={500} /> */}
        </div>
      </div>
    </main>
  );
}
