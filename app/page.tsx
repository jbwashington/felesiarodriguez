import { About } from "@/components/layout/about";
import { CTA } from "@/components/layout/cta";
import { FAQs } from "@/components/layout/faqs";
import { Services } from "@/components/layout/services";

export default function HomePage() {
    return (
        <div className="space-y-4">
            <CTA />
            <Services />
            <About />
            <FAQs />
        </div>
    );
}
