"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon, Icons } from "@/components/ui/icons";
import { Slider } from "@/components/ui/slider";
import { Music, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useHowl, Play } from "rehowl";
import { PlayPauseButton } from "./play-pause-button";
import { Sound as SoundType } from "@/types";
import { Sound } from "./sound";

const sounds: SoundType[] = [
    { name: "River", url: "sounds/nature/river.mp3", icon: Icons.river },
    { name: "Rain", url: "sounds/rain/rain.mp3", icon: Icons.rain },
];

export const AudioMixer = () => {
    const [play, setPlay] = useState(false);

    const { howl, state, error, load } = useHowl({
        src: sounds.map((sound) => sound.url),
        preload: true,
    });

    return (
        <section className="fixed bottom-0 left-0 right-0 bg-foreground text-background p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    {sounds.map((sound) => (
                        <Sound key={sound.name} sound={sound} />
                    ))}
                </div>
            </div>
        </section>
    );
};
