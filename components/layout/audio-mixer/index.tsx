"use client";

import { Icons } from "@/components/ui/icons";
import { Sound as SoundType } from "@/types";
import { Sound } from "./sound";

const sounds: SoundType[] = [
    { name: "River", url: "sounds/nature/river.mp3", icon: Icons.river },
    { name: "Rain", url: "sounds/rain/rain.mp3", icon: Icons.rain },
];

export const AudioMixer = () => {

    return (
        <section className="fixed bottom-0 left-0 right-0 bg-foreground text-background p-4">
            <div className="container mx-auto">
                <div className="flex space-x-4">
                    {sounds.map((sound) => (
                        <Sound key={sound.name} sound={sound} />
                    ))}
                </div>
            </div>
        </section>
    );
};
