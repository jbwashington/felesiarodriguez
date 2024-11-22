"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Icons } from "../ui/icons";
import { cn } from "@/lib/utils";
import { useVideoStore } from "@/store/use-video";
import { useEffect, useRef } from "react";

export const CTA = () => {
    const video = useVideoStore((state) => state.video);

    console.log(video);

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current && video) {
            const source = videoRef.current.querySelector("source");
            if (source) {
                source.src = video.url;
                videoRef.current.load();
            }
        }
    }, [video]);

    return (
        <section className="w-full">
            <div className="relative flex items-center justify-center h-screen overflow-hidden -mt-20">
                {video && (
                    <>
                        <div
                            className={cn(
                                "h-full w-[100vw]",
                                "bg-transparent",
                                "absolute -z-20",
                                video.slug
                            )}
                        ></div>
                        <video
                            className="absolute inset-0 object-cover w-full h-full -z-20"
                            ref={videoRef}
                            controls
                            autoPlay
                            loop
                            muted
                            playsInline
                            disablePictureInPicture
                        >
                            <source src={video.url} type="video/mp4" />
                        </video>
                    </>
                )}
                <div className="px-4 md:px-6 max-w-screen-lg">
                    <div className="flex flex-col space-y-6">
                        <h2
                            className={cn(
                                "text-7xl md:text-8xl font-bold tracking-tighter",
                                "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-fit px-2"
                            )}
                        >
                            I’m honored to accompany you on your journey.
                        </h2>
                        <Link
                            href="#my-approach"
                            className={buttonVariants({
                                variant: "default",
                                className: "capitalize w-fit",
                            })}
                        >
                            Learn more <Icons.chevronRight />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
