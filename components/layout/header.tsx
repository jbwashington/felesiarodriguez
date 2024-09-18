import { MainNav } from "./main-nav";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { RelaxButton } from "./relax-button";
import { Separator } from "../ui/separator";

export default function Header() {
  return (
    <header className="container z-20 relative bg-background">
      <div className="flex h-20 items-center justify-between py-6 max-w-screen-lg mx-auto">
        <MainNav items={siteConfig.mainNav} />
        <nav className="space-y-2 inline-flex align-middle">
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "capitalize mr-2",
            })}
          >
            Book a session
          </Link>
        </nav>
      </div>
    </header>
  );
}