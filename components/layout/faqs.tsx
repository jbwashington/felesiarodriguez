import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export const FAQs = () => {
    return (
        <div className="max-w-screen-md mx-auto space-y-2 p-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl capitalize text-center py-6">
                Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is therapy?</AccordionTrigger>
                    <AccordionContent>
                        Therapy is a consistent and reliable time that is set
                        aside to talk about issues that are important to you
                        while having a specially trained person listen and
                        reflect. Your therapist will highlight thought patterns
                        and underlying beliefs that might be keeping you from
                        achieving your desired goals. Therapy is a collaborative
                        event and it requires an active role from both the
                        client and the therapist. Together, you and your
                        therapist together co-create a therapeutic space for you
                        to express your thoughts and feelings, creating a
                        launch-pad for self understanding. It is not uncommon
                        for clients to look for answers or advice from their
                        therapist, but they will eventually learn that they have
                        the answers already themselves. It is your
                        therapist&apos;s job to help you uncover them and find
                        lasting change.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        Is online therapy right for me?
                    </AccordionTrigger>
                    <AccordionContent>
                        Meeting with your therapist online can be a convenient
                        option if you have a quiet, private place to speak
                        freely with your therapist and you are comfortable using
                        technology. I currently work with individual adults aged
                        18+ As stated in my practice policies,{" "}
                        <b>
                            child custody or visitation recommendations,
                            assessments of children for alleged abuse, and/or
                            parenting assessments are not within the scope of my
                            practice
                        </b>
                        . I am also not able to provide letters for Emotional
                        Support Animals at this time. If you are living with
                        complex and urgent mental health issues (such as eating
                        disorders, psychotic disorders, or personality
                        disorders) a therapist who has proper training and can
                        offer in person sessions may be a better fit. If you
                        need a referral, I&apos;d be happy to provide a list of
                        recommended providers. Please note that to comply with
                        state licensure regulations, you must be in the state of
                        New York at the time of your sessions.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        What areas do you serve?
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="my-4">
                            I offer virtual therapy sessions to anyone in New
                            York State, including:
                        </p>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Capital/Saratoga
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Albany
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Eastern Adirondacks
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Plattsburgh
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Western Adirondacks
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Watertown
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Central New York
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Syracuse
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Finger Lakes
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Rochester
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Western New York
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Buffalo
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Hudson Valley
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Kingston
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Westchester/Rockland
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        White Plains
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Long Island
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Hauppauge
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        New York City
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Brooklyn, Manhattan, Bronx, Queens, and
                                        Staten Island
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        What is the time commitment?
                    </AccordionTrigger>
                    <AccordionContent>
                        Therapy sessions are typically 45-50 minutes. It is
                        recommended that we meet weekly for at least 8-12 weeks,
                        and then we can have a conversation to assess if that
                        schedule is meeting your needs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>
                        What is your cancellation policy?
                    </AccordionTrigger>
                    <AccordionContent>
                        I make all efforts to accommodate requests to reschedule
                        a session with 24 hours advance notice. <b>A late
                        cancellation fee of $150 will be charged if appointments
                        are canceled with less than 24 hours notice, or if you
                        are more than 10 minutes late to your session without
                        notifying your therapist.</b> I understand that emergencies
                        come up in life and I offer two fee waivers per year for
                        your convenience.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>
                        Do you accept insurance?
                    </AccordionTrigger>
                    <AccordionContent className="space-y-2">
<p>
                        No, I do not accept insurance. Payments must be received
                        at least four hours prior to our session. If you wish to
                        submit a claim for out-of-network reimbursement, I can
                        give you a receipt or superbill to help facilitate any
                        reimbursement you may be entitled to. Please note that
                        submitting an insurance claim means I will need to give
                        you a mental health diagnosis and that confidential
                        records could potentially be submitted to insurance.
</p>
<p>
                        As a therapist, I&apos;m opposed to common industry
                        practices such as recording a diagnosis after the first
                        session on a person&apos;s official medical record after
                        only having a substantive 30 minute conversation with
                        them. I prioritize co-creating treatment plans with my
                        clients, and deciding if they prefer longer or shorter
                        sessions, or even the frequency of their sessions, which
                        I cannot do under the scrutiny of insurance companies.
                        Additionally, it is difficult to maintain full
                        confidentiality when insurance reserves the right to
                        review client records at any time. They may also decide
                        to stop paying, or seek recoupments, or
                        &quot;clawbacks&quot; after services have been rendered,
                        which then disrupts the therapeutic nature of
                        client/therapist relationship and the consistency of
                        sessions.
</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>
                        How can I pay for services?
                    </AccordionTrigger>
                    <AccordionContent>
                        I accept Zelle or credit card (including HSA/FSA)
                        payment for services. Regardless of payment method,
                        clients must have a valid card on file.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};
