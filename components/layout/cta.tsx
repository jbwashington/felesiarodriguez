import Link from "next/link"
import { buttonVariants } from "../ui/button"


export const CTA = () => {
    return (
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter">
                                FelEsia Rodriguez, LCSW
                                </h1>
                                <p className="mx-auto text-muted-foreground">
                                    Empowering you to overcome challenges and
                                    live your best life through compassionate
                                    therapy.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Link
                                    href="#contact"
                                    className={buttonVariants({
                                        variant: "default",
                                        className:
                                            "bg-[#c9a55c] text-[#0a3a3a] hover:bg-[#b08d3f]",
                                    })}
                                >
                                    Book a Session
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
    );
};