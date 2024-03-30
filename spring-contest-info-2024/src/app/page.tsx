import Image from "next/image";

// components
import Header from './../components/header'
import Magnifier from "./../components/magnifier";
import Allowed from "@/components/allowed";
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
import { SewingPinFilledIcon, ClockIcon, FaceIcon, } from '@radix-ui/react-icons'

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

const allowedLanguages = [
  { option: "GNU C11", value: "c.gcc11" },
  { option: "C++14 (GCC 6-32)", value: "cpp.g++14" },
  { option: "C++17 (GCC 7-32)", value: "cpp.g++17" },
  { option: "C++20 (GCC 13-64)", value: "cpp.gcc13-64-winlibs-g++20" },
  { option: "C# 8", value: "csharp.dotnet-core" },
  { option: "C# 10", value: "csharp.dotnet-sdk-6" },
  { option: "Mono C#", value: "csharp.mono" },
  { option: "D", value: "d" },
  { option: "Go", value: "go" },
  { option: "Haskell", value: "haskell.ghc" },
  { option: "Java 21", value: "java21" },
  { option: "Java 8", value: "java8" },
  { option: "Kotlin 1.7", value: "kotlin17" },
  { option: "Kotlin 1.9", value: "kotlin19" },
  { option: "OCaml", value: "ocaml" },
  { option: "Delphi", value: "pas.dpr" },
  { option: "FPC", value: "pas.fpc" },
  { option: "PascalABC.NET", value: "pas.pascalabc" },
  { option: "Perl", value: "perl.5" },
  { option: "PHP", value: "php.5" },
  { option: "Python 2", value: "python.2" },
  { option: "Python 3", value: "python.3" },
  { option: "PyPy 2", value: "python.pypy2" },
  { option: "PyPy 3", value: "python.pypy3" },
  { option: "PyPy 3-64", value: "python.pypy3-64" },
  { option: "Ruby 3", value: "ruby.3" },
  { option: "Rust 2021", value: "rust.2021" },
  { option: "Scala", value: "scala" },
  { option: "JavaScript", value: "v8.3" },
  { option: "Node.js", value: "v8.nodejs" },
  { option: "Tcl", value: "tcl" },
  { option: "Io", value: "io" },
  { option: "Pike", value: "pike" },
  { option: "Befunge", value: "befungee" },
  { option: "Cobol", value: "opencobol" },
  { option: "Factor", value: "factor" },
  { option: "Secret_171", value: "intercal" },
  { option: "Roco", value: "roco" },
  { option: "Ada", value: "ada" },
  { option: "Mysterious Language", value: "fortran.g95" },
  { option: "FALSE", value: "false" },
  { option: "Picat", value: "picat" },
  { option: "GNU C++11 ZIP", value: "cpp-zip.g++11" },
  { option: "Java 8 ZIP", value: "java8-zip" },
  { option: "J", value: "j" },
  { option: "Q#", value: "qsharp" },
  { option: "Text", value: "text" },
  { option: "UnknownX", value: "arnoldc" },
  { option: "Secret 2021", value: "seriously" }
];


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
            <SewingPinFilledIcon></SewingPinFilledIcon><p>PETR 118</p>
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
        <p>

        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col items-center justify-center gap-2 border-[1px] p-8 rounded-lg hover:px-10 hover:bg-slate-800 duration-500">
            <p className="text-8xl font-bold">
              5
            </p>
            <p className="text-xl">
              Hours
            </p>
          </div>
          <div className="flex-grow flex flex-wrap gap-4 duration-200">
            <div className="flex-grow flex items-center justify-center border-[1px] p-4 rounded-lg hover:scale-[1.05] hover:bg-slate-600 duration-500">
              <div>
                <div className="text-2xl font-bold flex items-center gap-2">
                  <ClockIcon></ClockIcon>              
                  <p>
                    April 14th
                  </p>
                </div>
                <p className="text-lg">
                  1:00 PM - 6:00 PM
                </p>
              </div>    
            </div>
            <div className="flex-grow flex items-center justify-center border-[1px] p-4 rounded-lg hover:scale-[1.05] hover:bg-slate-500 duration-500">
              <div>
                <div className="text-2xl font-bold flex items-center gap-2">
                  <SewingPinFilledIcon></SewingPinFilledIcon>              
                  <p>
                    Peterson Building
                  </p>
                </div>
                <p className="text-lg">
                  Room 118
                </p>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center text-lg font-bold border-[1px] p-4 rounded-lg hover:scale-[1.05] hover:bg-slate-800 duration-500">
              All Majors and Classifications welcome
            </div>
            <div className="flex-grow border-[1px] p-4 rounded-lg hover:scale-[1.05] hover:bg-slate-600 duration-500">
              <p className="text-4xl font-bold">
                $2000+ in Prizes
              </p>
              <p className="text-md">
                also free food, glory, and chance to compete at ICPC World Finals
              </p>
            </div>
            <div className="flex-grow border-[1px] p-4 rounded-lg hover:bg-slate-700 duration-500">
              <p className="text-lg font-bold mb-8">C++, Java, Python, and more allowed</p>
              <Allowed items={allowedLanguages} 
                notAllowed="None of these???" 
                allowedMessage="Yes it is! You can use it at the contest." 
                notAllowedMessage="Bruh just pick a different one."
                buttonName="See if your language is allowed!"
                panelPosition="Choose a Language"
              ></Allowed>
            </div>
            <div className="flex gap-4">
              <div className="border-[1px] p-4 rounded-lg hover:scale-[1.05] hover:bg-slate-800 duration-500">
                <p className="text-2xl font-bold">
                  Teams of 3
                </p>
                <p className="text-md mt-2">
                  You can all write code at the same time.
                </p>
                <p className="text-md  mt-2">
                  Collaboration only allowed among your teammates.
                </p>
              </div>
              <div className=" border-[1px] p-4 rounded-lg hover:scale-[1.05] hover:bg-slate-600 duration-500">
                <p className="text-4xl font-bold">
                  Internet Allowed??
                </p>
                <p className="text-md  mt-2">
                  It is allowed to search the Internet and use code which can be proved to have been published before the contest began. 
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center text-md border-[1px] p-4 rounded-lg hover:scale-[1.05] hover:bg-slate-600 duration-500">
              <div className="flex gap-4">
                <p className="text-xl font-bold">
                  Only basic knowledge of programming is required
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-md">
                    Write programs to solve well-defined algorithmic problems.
                  </p>
                  <p className="text-md">
                    Problems are of the type that help prepare you for interviews and coding challenges. 
                  </p>
                  <p>
                    Some problems should be solvable by all those with basic prior programming knowledge --
                    but some problems will be much tougher!
                  </p>
                </div>
              </div>
            </div>
          </div>
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
