import { About } from "@/components/layout/about";
import { CTA } from "@/components/layout/cta";
import { Services } from "@/components/layout/services";

export default function Home() {
    return (
        <>
            <CTA />
            <Services />
            <About />
        </>
    );
}
