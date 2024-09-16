import * as React from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { siteConfig } from "@/config/site";
import { Icons } from "../ui/icons";
import { Separator } from "../ui/separator";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
<>
<Separator className="max-w-screen-xl mx-auto my-4" />
        <footer className={cn("max-w-screen-xl mx-auto", className)}>
            <div className="container flex flex-col py-10 md:h-24">
                <div>
                    <Icons.therapistFelesiaLogo className="h-20 w-fit mx-auto" />
                </div>
                <div className="inline-flex">
                    <Link
                        className={buttonVariants({
                            variant: "link",
                            className:
                                "text-xs text-muted-foreground leading-loose mx-auto",
                        })}
                        href="/"
                    >
                        Copyright {siteConfig.name} 2024-2025.
                    </Link>
                </div>
                <div className="mx-auto">
                    <ModeToggle />
                </div>
            </div>
        </footer>
</>
    );
}
