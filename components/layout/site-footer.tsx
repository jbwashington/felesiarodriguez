import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "../ui/icons";
import { FooterNavItem } from "@/types";

import { buttonVariants } from "../ui/button";
import { H3, P } from "../typography/headings";
export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <footer className={cn("max-w-screen-lg mx-auto", className)}>
            <div className="container flex flex-col md:h-24 space-y-4 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Icons.therapistFelesiaLogoMin className="w-1/3 md:w-1/2 h-fit mx-auto md:mr-auto" />
                    <div className="flex flex-col items-center md:items-end">
                        <div className="flex flex-col items-center md:items-end py-8">
                            <H3>Quick Links</H3>
                            {siteConfig.footerNav?.map(
                                (item: FooterNavItem, index) => (
                                    <Link
                                        key={index}
                                        href={item.href as string}
                                        className={buttonVariants({
                                            variant: "link",
                                            size: "sm",
                                            className: cn(
                                                "flex items-center text-sm hover:text-foreground/80 capitalize text-muted-foreground font-serif",
                                                item.disabled &&
                                                    "cursor-not-allowed opacity-80"
                                            ),
                                        })}
                                    >
                                        {item.title}
                                    </Link>
                                )
                            )}
                        </div>
                        <div className="flex flex-col items-center md:items-end md:mt-auto">
                            <H3>Contact</H3>
                            <Link
                                href={`tel:${siteConfig.phone}`}
                                className={buttonVariants({
                                    variant: "link",
                                    size: "sm",
                                    className: cn(
                                        "flex items-center text-sm hover:text-foreground/80 capitalize text-muted-foreground font-serif"
                                    ),
                                })}
                            >
                                {siteConfig.phone}
                            </Link>
                            <Link
                                href={`mailto:${siteConfig.email}`}
                                className={buttonVariants({
                                    variant: "link",
                                    size: "sm",
                                    className: cn(
                                        "flex items-center text-sm hover:text-foreground/80 text-muted-foreground font-serif"
                                    ),
                                })}
                            >
                                {siteConfig.email}
                            </Link>
                            <P
                                className={buttonVariants({
                                    variant: "link",
                                    size: "sm",
                                    className:
                                        "text-xs text-center md:ml-auto text-muted-foreground",
                                })}
                            >
                                NPI #{siteConfig.NPI}
                            </P>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:justify-between gap-4">
                    <Link
                        className="text-xs text-center text-muted-foreground font-serif"
                        href="/"
                    >
                        Copyright {siteConfig.name} 2024-2025.
                    </Link>
                </div>
                <div className="mx-auto "></div>
                <Link
                    className={buttonVariants({
                        variant: "link",
                        size: "sm",
                        className:
                            "uppercase italic text-sm font-light py-2 text-black",
                    })}
                    href="https://fullstacktechnyc.com"
                >
                    Powered by Full Stack Tech NYC
                </Link>
            </div>
        </footer>
    );
}
