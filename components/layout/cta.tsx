'use client'

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Icons } from "../ui/icons";
import { cn } from "@/lib/utils";
import { useVideoStore } from "@/hooks/use-video-store";

export const CTA = () => {

    const video = useVideoStore((state) => state.video);

    console.log(video)

    return (
        <section className="w-full">
            <div className="relative flex items-center justify-center h-screen overflow-hidden -mt-20">
                {video && (
                    <>
                        <div className="absolute -z-10"></div>
                        <video
                            className="absolute inset-0 object-cover w-full h-full -z-20"
                            autoPlay
                            loop
                            muted
                        >
                            <source src={video.url} type="video/mp4" />
                        </video>
                    </>
                )}
                <div className="px-4 md:px-6 max-w-screen-lg">
                    <div className="flex flex-col space-y-6">
                        <p className="font-medium text-md font-mono uppercase text-muted-foreground">
                            Individuals and couples
                        </p>
                        <h2
                            className={cn(
                                "text-7xl md:text-8xl font-bold tracking-tighter"
                            )}
                        >
                            Let me help you create the life you deserve.
                        </h2>
                        <p className="leading-relaxed text-muted-foreground text-md">
                            Online therapy services for the NYC area and all
                            over New York State.
                        </p>
                        <Link
                            href="/booking"
                            className={buttonVariants({
                                variant: "default",
                                className: "capitalize w-fit",
                            })}
                        >
                            Book a free consultation <Icons.chevronRight />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
