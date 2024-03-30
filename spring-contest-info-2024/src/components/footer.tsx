"use client"

import Image from "next/image";

import React, { useState } from "react";

// icons
import { GlobeIcon, InstagramLogoIcon, DiscordLogoIcon, HeartIcon } from '@radix-ui/react-icons'

// socials
const socials = [
  {
    name: "Website",
    icon: <GlobeIcon></GlobeIcon>,
    link: "https://acpc.io"
  },
  {
    name: "Instagram",
    icon: <InstagramLogoIcon></InstagramLogoIcon>,
    link: "https://www.instagram.com/acpc.io/"
  },
  {
    name: "Discord",
    icon: <DiscordLogoIcon></DiscordLogoIcon>,
    link: "https://discord.gg/4fX3Xj9"
  }
]

export default function Footer() {
    return (
        <footer className="flex justify-between w-[100vw] p-8 border-t-[1px] bg-gradient-to-r from-slate-800 from-10% via-slate-950 via-30% to-slate-950 border-slate-500">
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-2">
                    <p className="text-white">Made with</p>
                    <HeartIcon className=""></HeartIcon>
                    <p>by the 2024 ACPC Officers</p>
                </div>
                <Image src="/acpc-logo.svg" alt="" width={100} height={100}></Image>
            </div>
            <div className="flex  flex-col items-end">
                {socials.map((social) => (
                    <a href={social.link} key={social.name} className="flex items-center gap-2 text-white">
                        {social.icon}
                        <p>{social.name}</p>
                    </a>
                ))}
            </div>
        </footer>
    );
  }
  