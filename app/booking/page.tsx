import Link from "next/link";

export default function BookingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f5f1eb]">
            Send me an email at{" "}
            <Link href="mailto:info@therapistfelesia.com">
                info@therapistfelesia.com
            </Link>{" "}
            to book a session.
        </div>
    );
}
