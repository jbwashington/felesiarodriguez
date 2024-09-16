import Image from "next/image";
import { Separator } from "../ui/separator";

export const About = () => {
    return (
        <section className="max-w-screen-lg p-6 mx-auto ">
                <div className="flex flex-col justify-center space-y-4 max-w-screen-xl">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl capitalize text-center py-4">
                        About FelEsia Rodriguez
                    </h2>
                    <div className="grid grid-cols-2 gap-8">
                        <Image
                            src="/images/headshot.png"
                            alt="FelEsia Rodriguez"
                            width={1108}
                            height={1108}
                            className="rounded-full mx-auto w-72 h-fit"
                        />
<div className="inline-flex">
    <Separator orientation="vertical" className="h-full mr-6" />
                        <p className="leading-loose text-xl text-muted-foreground">
                            FelEsia Rodriguez is a licensed therapist with over
                            10 years of experience. She specializes in helping
                            individuals and couples overcome challenges and
                            build stronger, healthier relationships. Her
                            compassionate approach and evidence-based techniques
                            have helped countless clients achieve personal
                            growth and emotional well-being.
                        </p>
</div>
                    </div>
                </div>
        </section>
    );
};
