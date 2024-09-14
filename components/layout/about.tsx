import Image from "next/image";

export const About = () => {
    return (
        <section className="w-full py-12 mx-auto">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col justify-center space-y-4 max-w-screen-xl">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        About FelEsia Rodriguez
                    </h2>
                    <div className="grid grid-cols-2">
                        <Image
                            src="/images/headshot.png"
                            alt="FelEsia Rodriguez"
                            width={200}
                            height={200}
                            className="rounded-lg"
                        />
                        <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
