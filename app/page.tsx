"use client";

import { useEffect } from "react";
import { About } from "@/components/layout/about";
import { CTA } from "@/components/layout/cta";
import { FAQs } from "@/components/layout/faqs";
import { BookASession } from "@/components/layout/book-a-session";
import { gradient } from "@/components/layout/Gradient";
export default function HomePage() {
    useEffect(() => {
        gradient.initGradient("#gradient-canvas");
    }, []);

    return (
        <div className="space-y-8">
            <CTA />
            <About />
            <FAQs />
            <BookASession />
        </div>
    );
}
