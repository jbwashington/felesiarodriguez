import Image from "next/image";

export const About = () => {
    return (
        <section
            id="my-approach"
            className="max-w-screen-md mx-auto space-y-2 p-6"
        >
            <div className="flex flex-col justify-center space-y-4 max-w-screen-lg">
                <div className="grid gap-8">
                    <Image
                        src="/images/headshot.png"
                        alt="FelEsia Rodriguez"
                        width={1108}
                        height={1108}
                        className="rounded-full mx-auto w-72 h-fit"
                    />
                    <div className="leading-loose text-xl text-muted-foreground max-w-screen-lg font-serif space-y-4">
                        <p
                            className="first-line:uppercase first-line:tracking-widest
  first-letter:text-9xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left"
                        >
                            For the past decade, FelEsia Rodriguez has been a
                            community social worker and mental health
                            practitioner. During that time she has supported
                            young people in schools, adults in community mental
                            health clinics, and youth mandated to mental health
                            services in juvenile justice settings. In addition
                            to a fulfilling career in the field of forensic
                            social work, she is energized by building durable
                            relationships with individual therapy clients as a
                            private clinician.
                        </p>
                        <p className="indent-8">
                            FelEsia was introduced to social work before she
                            even knew what it was. While mentoring youth in
                            middle schools, she observed the ways that
                            meaningful, intentional relationships can be the
                            foundation for life-long change. She recognized in
                            these young people her own struggles to integrate
                            racial/ethnic identity and cultural expectations
                            into a unique identity, seeing them through the
                            challenges of adolescence. It was through these
                            meetings with 6th, 7th, and 8th graders with the
                            sole purpose of building relationships, that she
                            realized she had a knack for connecting with people.
                        </p>
                        <p className="indent-8">
                            She identifies as a neurodivergent parent, a Latina,
                            and a first-generation college student and she is
                            committed to naming all forms of structural bias as
                            it directly impacts the lived experience of herself
                            and her clients. She received a Master of Social
                            Work degree from New York University and a Bachelor
                            of Arts in Psychology from St. Edward&apos;s
                            University in Austin, TX.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
