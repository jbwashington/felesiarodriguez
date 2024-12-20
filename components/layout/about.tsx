import Image from "next/image";
import { H2, P } from "../typography/headings";
interface AboutItem {
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    sections: {
        id: string;
        title?: string;
        text: string | string[];
        className?: string;
    }[];
}

const aboutItems: AboutItem[] = [
    {
        image: {
            src: "/images/headshot.png",
            alt: "FelEsia Rodriguez",
            width: 1108,
            height: 1108,
        },
        sections: [
            {
                id: "my-approach",
                title: "My Approach",
                text: "For the past decade, FelEsia Rodriguez has been a community social worker and mental health practitioner. During that time she has supported young people in schools, adults in community mental health clinics, and youth mandated to mental health services in juvenile justice settings. In addition to a fulfilling career in the field of forensic social work, she is energized by building durable relationships with individual therapy clients as a private clinician.",
                className:
                    "first-line:uppercase first-line:tracking-widest first-letter:text-9xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left font-serif",
            },
            {
                id: "about-me",
                title: "About FelEsia",
                text: "She identifies as a neurodivergent parent, a Latina, and a first-generation college student and she is committed to naming all forms of structural bias as it directly impacts the lived experience of herself and her clients. She received a Master of Social Work degree from New York University and a Bachelor of Arts in Psychology from St. Edward's University in Austin, TX.",
                className: "font-serif",
            },
        ],
    },
];

export const About = () => {
    return (
        <section className="max-w-screen-md mx-auto space-y-2 p-6">
            {aboutItems.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col justify-center space-y-4 max-w-screen-lg"
                >
                    <div className="grid gap-8">
                        <Image
                            src={item.image.src}
                            alt={item.image.alt}
                            width={item.image.width}
                            height={item.image.height}
                            className="rounded-full mx-auto w-72 h-fit"
                        />
                        <div className="leading-loose text-xl max-w-screen-lg space-y-4">
                            {item.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex} id={section.id}>
                                    <H2>
                                        {section.title}
                                    </H2>
                                    <P className={section.className}>
                                        {typeof section.text === "string"
                                            ? section.text
                                            : section.text.join(" ")}
                                    </P>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
