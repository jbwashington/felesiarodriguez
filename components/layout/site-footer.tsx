import * as React from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "../ui/icons";
import { FooterNavItem } from "@/types";
import { Separator } from "@radix-ui/react-dropdown-menu";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <>
            <footer className={cn("max-w-screen-md mx-auto", className)}>
                <div className="container flex flex-col p-10 md:h-24 space-y-4">
                    <div className="grid grid-cols-2">
                        <Icons.therapistFelesiaLogo className=" w-fit mr-auto p-2" />
                        <div className="flex flex-col items-end">
                            <div className="flex flex-col items-end">
                                <h3 className="text-lg font-bold uppercase">
                                    Quick Links
                                </h3>
                                {siteConfig.footerNav?.map(
                                    (item: FooterNavItem, index) => (
                                        <Link
                                            key={index}
                                            href={item.href as string}
                                            className={cn(
                                                "flex items-center text-sm hover:text-foreground/80 sm:text-sm capitalize text-muted-foreground",
                                                item.disabled &&
                                                    "cursor-not-allowed opacity-80"
                                            )}
                                        >
                                            {item.title}
                                        </Link>
                                    )
                                )}
                            </div>
                            <div className="flex flex-col items-end mt-auto">
                                <h3 className="text-lg font-bold uppercase pt-4">
                                    Contact
                                </h3>
                                <Link
                                    href={`tel:${siteConfig.phone}`}
                                    className="flex items-center text-sm transition-colors hover:text-foreground/80 sm:text-sm text-muted-foreground"
                                >
                                    {siteConfig.phone}
                                </Link>
                                <Link
                                    href={`mailto:${siteConfig.email}`}
                                    className="flex items-center text-sm transition-colors hover:text-foreground/80 sm:text-sm text-muted-foreground"
                                >
                                    {siteConfig.email}
                                </Link>
                                <p className="flex items-center text-sm transition-colors hover:text-foreground/80 sm:text-sm text-muted-foreground">
                                    NPI#: <span>{siteConfig.NPI}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <Link
                            className="text-sm text-muted-foreground leading-loose mx-auto text-center"
                            href="/"
                        >
                            Copyright {siteConfig.name} 2024-2025.
                        </Link>
                    </div>
                    <div className="mx-auto text-center uppercase italic text-sm">
                        <Link href="https://fullstacktechnyc.com">
                            Powered by Full Stack Tech NYC
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
