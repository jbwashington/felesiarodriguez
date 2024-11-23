import Image from "next/image";

interface MyApproachItem {
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    paragraphs: {
        title?: string;
        text: string | string[];
        className?: string;
    }[];
}

const myApproachItems: MyApproachItem[] = [
    {
        image: {
            src: "/images/headshot.png",
            alt: "FelEsia Rodriguez",
            width: 1108,
            height: 1108,
        },
        paragraphs: [
            {
                title: "My Approach",
                text: "For the past decade, FelEsia Rodriguez has been a community social worker and mental health practitioner. During that time she has supported young people in schools, adults in community mental health clinics, and youth mandated to mental health services in juvenile justice settings. In addition to a fulfilling career in the field of forensic social work, she is energized by building durable relationships with individual therapy clients as a private clinician.",
                className:
                    "first-line:uppercase first-line:tracking-widest first-letter:text-9xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left",
            },
            {
                title: "About FelEsia",
                text: "She identifies as a neurodivergent parent, a Latina, and a first-generation college student and she is committed to naming all forms of structural bias as it directly impacts the lived experience of herself and her clients. She received a Master of Social Work degree from New York University and a Bachelor of Arts in Psychology from St. Edward's University in Austin, TX.",
                className: "indent-8",
            },
        ],
    },
];

export const MyApproach = () => {
    return (
        <section
            id="my-approach"
            className="max-w-screen-md mx-auto space-y-2 p-6"
        >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl capitalize text-center py-6">
                My Approach
            </h2>
            <div className="flex flex-col justify-center space-y-4 max-w-screen-lg">
                {myApproachItems.map((item, index) => (
                    <div key={index} className="grid gap-8">
                        <Image
                            src={item.image.src}
                            alt={item.image.alt}
                            width={item.image.width}
                            height={item.image.height}
                            className="rounded-full mx-auto w-72 h-fit"
                        />
                        <div className="leading-loose text-xl text-muted-foreground max-w-screen-lg font-serif space-y-4">
                            {item.paragraphs.map((paragraph, index) => (
                                <p key={index} className={paragraph.className}>
                                    {paragraph.text}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
