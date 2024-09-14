import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export const Footer = () => (
    <footer className="w-full py-6 bg-[#f5f1eb] text-[#0a3a3a]">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4">
                <nav className="flex gap-4 sm:gap-6">
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        HIPAA
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        RIGHTS
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        TERMS
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        PRIVACY
                    </Link>
                </nav>
                <div className="text-center">
                    <p className="text-sm text-[#0a3a3a]/60">
                        info@therapistfelesia.com
                    </p>
                    <p className="text-sm">
                        © Therapist FelEsia. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
);
