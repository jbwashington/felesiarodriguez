import * as React from "react";
import Link from "next/link";

import { MainNavItem } from "@/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "../ui/icons";
import { buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";

interface MobileNavProps {
    items: MainNavItem[];
    children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
    return (
        <div
            className={cn(
                "fixed inset-0 top-16 z-50 grid h-[100vh] grid-flow-row auto-rows-max overflow-auto p-0 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
            )}
        >
            <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md items-center justify-center">
                <Link href="/" className="flex flex-col items-center">
                    <Icons.therapistFelesiaLogoMin className="h-fit w-1/2 py-8" />
                    <h1 className="font-bold text-2xl font-serif">
                        {siteConfig.name}
                    </h1>
                </Link>
                <Separator />
                <nav className="grid gap-2 w-full">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={cn(
                                "w-full rounded-md p-2 text-sm font-medium text-center hover:underline capitalize",
                                item.disabled &&
                                    "cursor-not-allowed opacity-60",
                                "font-serif uppercase"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
                <div className="w-full">
                    <Link
                        className={buttonVariants({
                            variant: "default",
                            size: "lg",
                            className: "w-full capitalize",
                        })}
                        href="#contact"
                    >
                        Book a consultation
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
