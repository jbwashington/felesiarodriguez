import { BookingForm } from "./booking-form";

export const BookASession = () => {
    return (
        <div className="max-w-screen-lg mx-auto space-y-12 p-6">
            <h2 className="text-8xl font-bold tracking-tighter  max-w-screen-lg  mx-auto">
                Let&apos;s figure it out together.
            </h2>
            <p className="leading-relaxed text-xl text-muted-foreground max-w-screen-lg mx-auto">
                Schedule a <b>free 15 minute consultation</b> to discuss your
                needs and goals.
            </p>
            <BookingForm />
        </div>
    );
};