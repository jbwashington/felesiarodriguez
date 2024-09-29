import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Sound as SoundType } from "@/types";
import { stat } from "fs";
import { useState } from "react";
import { useHowl, Play } from "rehowl";
import { PlayPauseButton } from "./play-pause-button";
import { badgeVariants } from "@/components/ui/badge";

export const Sound = ({ sound }: { sound: SoundType }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const { howl, state, error, load } = useHowl({
        src: sound.url,
        preload: true,
    });

    return (
        <div className="inline-flex items-center align-middle">
            <sound.icon className="w-4 h-4 mr-2" />
            <PlayPauseButton play={isPlaying} setPlay={setIsPlaying} />
            {isPlaying ? (
                <Play howl={howl}>
                    {({ playing }) => (
                        <>
                            This is the child of the play component! Playing:{" "}
                            {playing().toString()}
                        </>
                    )}
                </Play>
            ) : null}
        </div>
    );
};
