import { H2, H3, P } from "../typography/headings";

export const Services = () => {
    return (
        <section className="max-w-screen-lg mx-auto space-y-2 py-4">
            <div className="container px-4 md:px-6 items-center justify-center">
                <H2>What we offer</H2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        "Individual Therapy",
                        "Couples Counseling",
                        "Anxiety Management",
                    ].map((service, index) => (
                        <div key={index} className="p-6 rounded-lg">
                            <H3>{service}</H3>
                            <P>
                                Tailored sessions to help you achieve personal
                                growth and well-being.
                            </P>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
