import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
export const CTA = () => {
    return (
        <section 
        className="w-full h-screen">
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <div
                    className={cn(
                        "h-full w-[100vw]",
                        "bg-transparent bg-beach",
                        "absolute -z-20"
                    )}
                ></div>
                <video
                    src="/videos/beach.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={cn(
                        "absolute -z-0 min-h-full min-w-full object-cover",
                    )}
                >
                    <source src="/videos/beach.mp4" type="video/mp4" />
                </video>
                <div className="container px-4 md:px-6 py-auto z-10 max-w-screen-sm">
                    <div className="flex flex-col space-y-4">
                        <div className="space-y-6">
                            <h2 className="text-8xl font-bold tracking-tighter">
                                You deserve peace and healing.
                            </h2>
                            <p className="font-semibold leading-relaxed text-2xl">Online therapy services for the NYC area and all over New York</p>
                        </div>
                        <div className="space-x-4">
                            <Link
                                href="/booking"
                                className={buttonVariants({
                                    variant: "default",
                                    size: "lg",
                                    className: "capitalize"
                                })}
                            >
                                Book a free consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
