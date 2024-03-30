import Image from "next/image";

// components
import Header from './../components/header'
import Magnifier from "./../components/magnifier";
import Footer from "./../components/footer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// fonts
import { rowdies } from "./fonts";

// icons
import { SewingPinFilledIcon, ClockIcon, FaceIcon } from '@radix-ui/react-icons'

// lists
const schedule = [
  {
    time: "12:00 PM - 1:00 PM",
    event: "Check-In / Pre Contest"
  },
  {
    time: "1:00 PM - 6:00 PM",
    event: "Contest"
  },
  {
    time: "6:00 PM - 6:15 PM",
    event: "Pizza / Break"
  },
  {
    time: "6:15 PM - 7:00 PM",
    event: "Prizes & Solutions"
  }
]

const sponsors = [
  {
    name: "Bellflight",
    logo: "/bellflight.png",
    link: "https://www.bellflight.com/"
  },
  {
    name: "Roblox",
    logo: "/roblox.png",
    link: "https://www.roblox.com/"
  },
  {
    name: "Optiver",
    logo: "/optiver.png",
    link: "https://www.optiver.com/"
  },
  {
    name: "Chevron",
    logo: "/chevron.png",
    link: "https://www.chevron.com/"
  },
]


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-20 px-4 sm:px-12 bg-gray-950">
      <Header></Header>
      <div className="flex flex-col gap-4 items-center justify-center text-center mt-28">
        <h1 className="text-5xl sm:text-6xl font-bold text-white uppercase" style={rowdies.style}>
          ACPC Spring Contest
        </h1>
        <div className="flex items-center gap-4">
          <div className="text-xs sm:text-sm border-white border-[1px] rounded-3xl py-1 px-2 flex-grow flex items-center gap-0 sm:gap-2">
            <ClockIcon></ClockIcon><p>April 14th - 1:00 PM</p>
          </div>
          <div className="text-xs sm:text-sm border-white border-[1px] rounded-3xl py-1 px-2 flex-grow flex items-center gap-0 sm:gap-2">
            <SewingPinFilledIcon></SewingPinFilledIcon><p>Peterson Building</p>
          </div>
          <div className="text-xs sm:text-sm border-white border-[1px] rounded-3xl py-1 px-2 flex-grow flex items-center gap-0 sm:gap-2">
            <FaceIcon></FaceIcon><p>Food + Prizes</p>
          </div>
        </div>
        <div className="z-[0]">
          <Magnifier src="/dead_pineapple.png"
            magnifierHeight={100} magnifierWidth={100} zoomLevel={2} />
        </div>
        <p className="italic">Trouble's brewing at Spring Contest 2024… Sign up and help us figure out what's going on!</p>
      </div>
      <div className="w-full border-gray-700 border-[1px] rounded-lg p-8 hover:bg-black duration-500">
        <h2 id="what" className="text-4xl font-bold uppercase mb-4" style={ rowdies.style }>
          What is going on???
        </h2>
        <p className="mb-4">
          Welcome to 
          the <a href="https://tamuacpc.com/about" target="_blank" rel="noopener noreferrer" className="underline decoration-dashed hover:decoration-solid ">
            Aggie Competitive Programming Club
          </a>'s 
          Spring <s className="text-slate-300">underground crime ring</s> competitive 
          programming contest!
          Here, <s className="text-slate-300">criminals</s> participants 
          work in groups of 3 to solve well-defined 
          problems by writing 
          programs in 5 hours to test their algorithmic knowledge, programming 
          skills, logical reasoning, and ability to perform under pressure. 
        </p>
        <p className="mb-8">
          Compete for the chance to win prizes, enjoy free food, have fun with
          friends, and qualify for 
          the <a href="https://icpc.global/" target="_blank" rel="noopener noreferrer" className="underline decoration-dashed hover:decoration-solid">
            ACM ICPC World Finals
          </a>!
        </p>
        <a className="glow py-2 px-4 rounded-lg hover:bg-[rgba(44,53,76,0.5)]" href="/apply">
          Apply Now
        </a>
      </div>
      <div className="w-full p-8">
        <h2 id="overview" className="text-4xl font-bold uppercase" style={ rowdies.style }>
          Overview
        </h2>
        <div>
          
        </div>
      </div>
      <div className="w-full">
        <h2 id="schedule" className="text-4xl font-bold uppercase" style={ rowdies.style } px-8>
          Schedule
        </h2>
        <div>
          {
            schedule.map((event, index) => (
              <div key={index} className="flex items-center justify-between border-gray-700 border-[1px] rounded-lg p-4 my-4 hover:bg-black duration-500">
                <p className="text-xl font-bold">{event.time}</p>
                <p className="text-lg">{event.event}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div id="prizes" className="w-full p-8">
        <h2 className="text-4xl font-bold uppercase" style={ rowdies.style }>
          Prizes
        </h2>
        <div>
          {}
        </div>
      </div>
      <div className="w-full p-8">
        <h2 id="sponsors" className="text-4xl font-bold uppercase" style={ rowdies.style }>
          Sponsors
        </h2>
        <div className="flex items-center gap-8 justify-between">
          {sponsors.map((sponsor, index) => (
            <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a href={sponsor.link} key={index} className="flex items-center gap-4 hover:scale-[1.1] duration-200">
                  <Image src={sponsor.logo} alt={sponsor.name} width={100} height={100}></Image>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{sponsor.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          ))}
        </div>
      </div>
      <div id="faq" className="w-full p-8">
        <h2 className="text-4xl font-bold uppercase" style={ rowdies.style }>
          FAQ
        </h2>
        <div>
          {}
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
