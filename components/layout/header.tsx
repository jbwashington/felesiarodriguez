import { MainNav } from "./main-nav";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function Header() {
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
        <MainNav items={siteConfig.mainNav} />
        <nav>
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "px-4 rounded-3xl capitalize",
            })}
          >
            Book a session
          </Link>
        </nav>
      </div>
    </header>
  );
}