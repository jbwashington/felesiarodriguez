import { MainNav } from "./main-nav";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { RelaxButton } from "./relax-button";

export default function Header() {
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
        <MainNav items={siteConfig.mainNav} />
        <nav className="space-y-2">
        <RelaxButton />
          <Link
            href="/booking"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "capitalize",
            })}
          >
            Book a session
          </Link>
        </nav>
      </div>
    </header>
  );
}