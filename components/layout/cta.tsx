import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Icons } from "../ui/icons";
export const CTA = () => {
    return (
        <section className="w-full h-screen">
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <div className="container px-4 md:px-6 py-auto z-10 max-w-screen-sm">
                    <div className="flex flex-col space-y-6">
                        <p className="font-mono uppercase text-muted-foreground">Individuals and couples</p>
                        <h2 className="text-6xl font-bold tracking-tighter">
                        Let me help you create the life you deserve.
                        </h2>
                        <p className="leading-relaxed text-xl text-muted-foreground">
                        Online therapy services for the NYC area and all over New York State.
                        </p>
                        <Link
                            href="/booking"
                            className={buttonVariants({
                                variant: "default",
                                size: "lg",
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
