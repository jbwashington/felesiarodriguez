import { About } from "@/components/layout/about";
import { CTA } from "@/components/layout/cta";
import { FAQs } from "@/components/layout/faqs";
import { Services } from "@/components/layout/services";
// TODO: fill this in
// I’m honored to accompany you on your journey 
// Let's figure it out together
// Learn more
// My approach
// I believe that the therapeutic relationship is a microcosm that provides information about ways of being and patterns of interaction that are ripe for exploration. My job as your therapist is to help clear the haze of uncertainty and work with you to develop a clearer map of your life.
// I come to you with over a decade of professional experience in mental health and community social work, and my work as a therapist is also colored by my lived experience and my own intersecting identities. I am not a blank slate. 
// My approach is informal and relational. You can expect a warm and authentic therapeutic experience, which may include loving confrontation through asking tough questions with a touch of humor as well. To encourage clients to share in a genuine, human way, I bring these qualities to session as a therapist. In our first conversations, we will discuss your motivation for choosing therapy at this time in your life and decide on some goals to work on together.
// If you think this may be a good fit and are interested in hearing more, please feel free to schedule a free 15 minute phone consultation through my calendar. Thank you for making time to share a deeply intimate, human experience with me and taking the first step in taking care of you.
// About FelEsia
// FelEsia was introduced to social work before she even knew what it was. While mentoring youth in middle schools, she observed the ways that meaningful, intentional relationships can be the foundation for change. She recognized in these young people her own struggles to integrate racial/ethnic identity, language, economic resources, and cultural expectations into a unique 

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
