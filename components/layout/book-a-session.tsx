import { H2 } from "../typography/headings";
import { BookingForm } from "./booking-form";

export const BookASession = () => {
    return (
        <div className="max-w-screen-lg mx-auto space-y-12 p-6">
            <H2>
                Let&apos;s figure it out together.
            </H2>
            <p className="leading-relaxed text-xl font-serif max-w-screen-lg mx-auto">
                Schedule a <b>free 15 minute consultation</b> to discuss your
                needs and goals.
            </p>
            <BookingForm />
        </div>
    );
};