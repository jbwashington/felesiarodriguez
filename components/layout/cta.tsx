import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
export const CTA = () => {
    return (
        <section className="w-full h-screen">
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <video
                    src="/videos/beach.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={cn(
                        "absolute z-0 min-h-full min-w-full object-cover",
                        "backdrop-brightness-50"
                    )}
                ></video>
                <div className="container px-4 md:px-6 py-auto z-10 max-w-screen-md">
                    <div className="flex flex-col space-y-4">
                        <div className="space-y-2">
                            <p className="text-8xl font-bold tracking-tighter">
                                You deserve peace and healing.
                            </p>
                        </div>
                        <div className="space-x-4">
                            <Link
                                href="/booking"
                                className={buttonVariants({
                                    variant: "default",
                                    size: "lg",
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
