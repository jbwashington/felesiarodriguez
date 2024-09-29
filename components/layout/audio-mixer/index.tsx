'use client'

import { Button, buttonVariants } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Icon, Icons } from "@/components/ui/icons";
import { Slider } from "@/components/ui/slider";
import { Music, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Sound {
    name: string;
    url: string;
    icon: Icon;
}
const sounds: Sound[] = [
    { name: 'River', url: 'sounds/nature/river.mp3', icon: Icons.river },
    { name: 'Rain', url: 'sounds/rain/rain.mp3', icon: Icons.rain },
]

export const AudioMixer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volumes, setVolumes] = useState<number[]>(sounds.map(() => 0.5));
    const [isMuted, setIsMuted] = useState<boolean[]>(sounds.map(() => false));
    const audioContextRef = useRef<AudioContext | null>(null);
    const sourceNodesRef = useRef<AudioBufferSourceNode[]>([]);
    const gainNodesRef = useRef<GainNode[]>([]);

    useEffect(() => {
        audioContextRef.current = new (window.AudioContext ||
            (window as any).webkitAudioContext)();

        const loadSounds = async () => {
            for (let i = 0; i < sounds.length; i++) {
                const response = await fetch(sounds[i].url);
                const arrayBuffer = await response.arrayBuffer();
                const audioBuffer =
                    await audioContextRef.current!.decodeAudioData(arrayBuffer);

                const sourceNode =
                    audioContextRef.current!.createBufferSource();
                sourceNode.buffer = audioBuffer;

                const gainNode = audioContextRef.current!.createGain();
                gainNode.gain.value = volumes[i];

                sourceNode.connect(gainNode);
                gainNode.connect(audioContextRef.current!.destination);

                sourceNodesRef.current[i] = sourceNode;
                gainNodesRef.current[i] = gainNode;
            }
        };

        loadSounds();

        return () => {
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, [volumes]);

    const togglePlayPause = () => {
        if (isPlaying) {
            sourceNodesRef.current.forEach((node) => node.stop());
        } else {
            sourceNodesRef.current.forEach((node, index) => {
                node.start();
                node.loop = true;
                if (isMuted[index]) {
                    gainNodesRef.current[index].gain.setValueAtTime(
                        0,
                        audioContextRef.current!.currentTime
                    );
                }
            });
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (index: number, newVolume: number) => {
        const newVolumes = [...volumes];
        newVolumes[index] = newVolume;
        setVolumes(newVolumes);

        if (gainNodesRef.current[index] && !isMuted[index]) {
            gainNodesRef.current[index].gain.setValueAtTime(
                newVolume,
                audioContextRef.current!.currentTime
            );
        }
    };

    const toggleMute = (index: number) => {
        const newMuted = [...isMuted];
        newMuted[index] = !newMuted[index];
        setIsMuted(newMuted);

        if (gainNodesRef.current[index]) {
            gainNodesRef.current[index].gain.setValueAtTime(
                newMuted[index] ? 0 : volumes[index],
                audioContextRef.current!.currentTime
            );
        }
    };

    return (
        <section className="fixed bottom-0 left-0 right-0 bg-foreground text-background p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    {isPlaying ? (
                        <Icons.pause
                            aria-label="Pause"
                            onClick={togglePlayPause}
                            className="w-4 h-4"
                        />
                    ) : (
                        <Icons.play
                            aria-label="Play"
                            onClick={togglePlayPause}
                            className="w-4 h-4"
                        />
                    )}
                    <div className="flex items-center space-x-4">
                        {sounds.map((sound, index) => (
                            <DropdownMenu key={sound.name}>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        aria-label={`${sound.name} controls`}
                                    >
                                        <sound.icon className="h-6 w-6" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 bg-foreground text-background p-4">
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium">
                                                {sound.name}
                                            </span>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() =>
                                                    toggleMute(index)
                                                }
                                                aria-label={`${
                                                    isMuted[index]
                                                        ? "Unmute"
                                                        : "Mute"
                                                } ${sound.name}`}
                                            >
                                                {isMuted[index] ? (
                                                    <VolumeX className="h-4 w-4" />
                                                ) : (
                                                    <Volume2 className="h-4 w-4" />
                                                )}
                                            </Button>
                                        </div>
                                        <Slider
                                            min={0}
                                            max={1}
                                            step={0.01}
                                            value={[volumes[index]]}
                                            onValueChange={(value) =>
                                                handleVolumeChange(
                                                    index,
                                                    value[0]
                                                )
                                            }
                                            aria-label={`${sound.name} volume`}
                                        />
                                        <span className="text-sm text-right">
                                            {Math.round(volumes[index] * 100)}%
                                        </span>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}