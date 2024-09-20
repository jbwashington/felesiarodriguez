import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Icons } from "../ui/icons";
import { cn } from "@/lib/utils";
export const CTA = () => {
    return (
        <section className="w-full">
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <div className="px-4 md:px-6 max-w-screen-sm">
                    <div className="flex flex-col space-y-6">
                        <p className="font-medium text-md font-mono uppercase text-muted-foreground">
                            Individuals and couples
                        </p>
                        <h2
                            className={cn(
                                "text-transparent bg-clip-text", 
                                "text-7xl md:text-8xl font-bold tracking-tighter",
                                " bg-gradient-to-tr from-primary via-orange-950 to-orange-200",
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
