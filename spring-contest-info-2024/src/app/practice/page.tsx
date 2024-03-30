import Image from "next/image";

// components
import Header from '../../components/header'

// fonts
import { rowdies } from "../fonts";

export default function Practice() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
        <Header></Header>
        <div className="flex flex-col gap-8 my-28">
            <h1 className="text-6xl font-bold uppercase " style={ rowdies.style }> 
                Practice Problem
            </h1>
            <div>

            </div>
        </div>
    </main>
  );
}
