import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
export const CTA = () => {
    return (
        <section className="w-full h-screen">
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <div className="container px-4 md:px-6 py-auto z-10 max-w-screen-sm">
                    <div className="flex flex-col space-y-6">
                        <p className="text-2xl text-muted-foreground capitalize">
                        Individual and couples
                        </p>
                        <h2 className="text-8xl font-bold tracking-tighter">
                            You deserve peace and healing
                        </h2>
                        <p className="leading-relaxed text-xl text-muted-foreground">
                            Online therapy services for the NYC area and all
                            over New York.
                        </p>
                        <Link
                            href="/booking"
                            className={buttonVariants({
                                variant: "default",
                                size: "lg",
                                className: "capitalize w-fit",
                            })}
                        >
                            Book a free consultation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
