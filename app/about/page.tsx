import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="py-12 px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl capitalize text-center py-4">
                About FelEsia Rodriguez
            </h2>
            <div className="space-y-6 max-w-screen-lg mx-auto p-4">
                <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                    <Image
                        src="/images/headshot-alt.png"
                        alt={siteConfig.name}
                        width={283}
                        height={283}
                        className="rounded-3xl mx-auto w-full h-fit"
                    />
                    <p className=" md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        FelEsia was introduced to social work before she even
                        knew what it was. While mentoring youth in middle
                        schools, she observed the ways that meaningful,
                        intentional relationships can be the foundation for
                        life-long change. She recognized in these young people
                        her own struggles to integrate racial/ethnic identity
                        and cultural expectations into a unique identity, seeing
                        them through the challenges of adolescence. It was
                        through these meetings with 6th, 7th, and 8th graders
                        with the sole purpose of building relationships, that
                        she realized she had a knack for connecting with people.
                    </p>
                </div>
                <p className=" md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    After graduating with a Master Degree in Social Work,
                    FelEsia has continued to work with folks at various ages and
                    stages of life. In addition to a fulfilling career in the
                    field of forensic social work, she is energized by building
                    durable relationships with individual therapy clients as a
                    private clinician. <br />
                </p>
                <p className=" md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    She identifies as a neurodivergent parent, a Latina, and a
                    first-generation college graduate. She holds a Master of
                    Social Work degree from New York University and a Bachelor
                    of Arts in Psychology from St. Edward&apos;s University in
                    Austin, TX.
                </p>
            </div>
        </div>
    );
}
