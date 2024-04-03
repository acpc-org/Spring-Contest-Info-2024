import Image from "next/image";

import * as React from "react"

// fonts
import { rowdies } from "../app/fonts";

interface PrizeItemProps {
    item: string,
    description: string,
    pic: string,
}

export default function PrizeItem(params: PrizeItemProps) {

    return (
      <div className="border-[1px] border-slate-200 rounded-lg w-[26vw]">
        <Image src={params.pic} alt={params.description} width={500} height={500}></Image>
        <div className="flex items-center justify-between gap-4 p-4 border-slate-400 border-t-[1px]">
            <div className="text-3xl font-bold">
                3x
            </div>
            <div className="">
                <h5 className="text-lg font-bold" style={ rowdies.style }>
                    {params.item}
                </h5>
                <p className="text-sm">{params.description}</p>
            </div> 
        </div>
      </div>
    );
  }
  