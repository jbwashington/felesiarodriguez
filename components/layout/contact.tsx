import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f1eb]"
        >
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#0a3a3a]">
                    Contact Us
                </h2>
                <div className="mx-auto max-w-[600px] bg-[#0a3a3a] p-8 rounded-lg">
                    <form className="space-y-4">
                        <Input
                            placeholder="First Name"
                            className="bg-white border-[#c9a55c] text-[#0a3a3a] placeholder-[#0a3a3a]/50 focus:border-[#c9a55c]"
                        />
                        <Input
                            placeholder="Last Name"
                            className="bg-white border-[#c9a55c] text-[#0a3a3a] placeholder-[#0a3a3a]/50 focus:border-[#c9a55c]"
                        />
                        <Input
                            type="email"
                            placeholder="Your Email Address"
                            className="bg-white border-[#c9a55c] text-[#0a3a3a] placeholder-[#0a3a3a]/50 focus:border-[#c9a55c]"
                        />
                        <Textarea
                            placeholder="Your Message"
                            className="bg-white border-[#c9a55c] text-[#0a3a3a] placeholder-[#0a3a3a]/50 focus:border-[#c9a55c]"
                        />
                        <Button
                            type="submit"
                            className="w-full bg-[#c9a55c] text-[#0a3a3a] hover:bg-[#b08d3f]"
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}