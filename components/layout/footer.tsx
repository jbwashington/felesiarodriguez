import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export const Footer = () => (
    <footer className="w-full py-6 bg-[#f5f1eb] text-[#0a3a3a]">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4">
                <div className="flex space-x-4">
                    <Link
                        href="#"
                        className="text-[#c9a55c] hover:text-[#b08d3f]"
                    >
                        <Instagram className="h-6 w-6" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                        href="#"
                        className="text-[#c9a55c] hover:text-[#b08d3f]"
                    >
                        <Facebook className="h-6 w-6" />
                        <span className="sr-only">Facebook</span>
                    </Link>
                </div>
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
                        info@wellnessfelesia.com
                    </p>
                    <p className="text-sm">
                        © FelEsia Rodriguez Therapy. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
);
