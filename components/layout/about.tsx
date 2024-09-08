export const About = () => {
    return (
        <section
            id="about"
            className="w-full py-12 md:py-24 lg:py-32 bg-[#0a3a3a] text-white"
        >
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#c9a55c]">
                            About FelEsia Rodriguez
                        </h2>
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
