
export default function Services() {
    return (
        <section
            id="services"
            className="w-full py-12 md:py-24 lg:py-32"
        >
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#0a3a3a]">
                    Our Services
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        "Individual Therapy",
                        "Couples Counseling",
                        "Anxiety Management",
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#f5f1eb] p-6 rounded-lg border border-[#c9a55c]"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-[#0a3a3a]">
                                {service}
                            </h3>
                            <p className="text-[#0a3a3a]/80">
                                Tailored sessions to help you achieve personal
                                growth and well-being.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}