"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Icons } from "../ui/icons";
import { cn } from "@/lib/utils";

export const CTA = () => {
    return (
        <section id="cta" className="w-full">
            <div className="relative flex items-center justify-center h-screen overflow-hidden -mt-20">
                <div className="px-4 md:px-6 max-w-screen-lg">
                    <div className="flex flex-col space-y-6">
                        <h2
                            className={cn(
                                "text-5xl md:text-8xl leading-relaxed font-serif",
                                "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-fit px-2"
                            )}
                        >
                            I’m honored to accompany you on your journey.
                        </h2>
                        <Link
                            href="#my-approach"
                            className={buttonVariants({
                                variant: "ghost",
                                className: "capitalize w-fit font-serif",
                            })}
                        >
                            Learn more <Icons.chevronRight className="ml-1 align-middle justify-center h-4 w-4 shrink-0" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
