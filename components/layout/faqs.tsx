import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const FAQs = () => {
    return (
        <div className="max-w-screen-md mx-auto space-y-2 p-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl capitalize text-center py-6">
                Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        How long does therapy last?
                    </AccordionTrigger>
                    <AccordionContent>
                        We ask that clients plan to attend for at least 6-8
                        weeks, attending weekly. After this point, we&apos;ll
                        reassess your needs and goals to determine if additional
                        sessions are necessary.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        How do i book a consultation?
                    </AccordionTrigger>
                    <AccordionContent>
                        You can contact us by phone or email to schedule a
                        consultation, or directly through the{" "}
                        <Link href="/contact">contact</Link> page.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        What types of therapy do you offer?
                    </AccordionTrigger>
                    <AccordionContent>
                        Our main focus is treating families and couples. We also
                        offer individual therapy for adults and adolescents.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        Can you see people who don&apos;t live in NYC?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, only if they reside in New York State. We offer
                        online therapy sessions for clients who live outside of
                        the NYC area.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>
                        Do you offer in person therapy?
                    </AccordionTrigger>
                    <AccordionContent>
                        No, we only offer online therapy sessions at this time.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>
                        How long is a typical therapy session?
                    </AccordionTrigger>
                    <AccordionContent>
                        A typical session is 45 minutes.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>
                        Can you write a prescription?
                    </AccordionTrigger>
                    <AccordionContent>
                        No. You would need to see a licensed psychiatrist in
                        order to get a prescription for psychotropic medication.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};
