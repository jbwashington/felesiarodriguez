"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const BookingForm = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "15min" });
            cal("ui", {
                layout: "month_view",
                hideEventTypeDetails: true,
                // More CSS variables are defined here
                // https://github.com/calcom/cal.com/blob/b0ca7dae1a17f897e34b83c990f30ab65f615ee0/packages/config/tailwind-preset.js#L69
                cssVarsPerTheme: {
                    light: {
                        "cal-brand": "hsl(31 67% 23%)", // primary
                        "cal-text": "hsl(31 6.7% 0.92%)", // foreground
                        "cal-text-emphasis":
                            "hsl(31 5.0200000000000005% 12.3%)", // accent-foreground
                        "cal-text-muted": "hsl(31 3.35% 42.3%)", // muted-foreground
                        "cal-bg": "hsl(31 98.35% 98.46%)", // background
                        "cal-bg-emphasis": "hsl(31 3.35% 96.15%)", // accent
                        "cal-bg-muted": "hsl(31 6.7% 92.3%)", // muted
                        scrollbar: "rounded",
                    },
                    dark: {
                        "cal-brand": "hsl(31 67% 23%)", // primary
                        "cal-text": "hsl(31 6.7% 0.92%)", // foreground
                        "cal-text-emphasis":
                            "hsl(31 5.0200000000000005% 12.3%)", // accent-foreground
                        "cal-text-muted": "hsl(31 3.35% 42.3%)", // muted-foreground
                        "cal-bg": "hsl(31 98.35% 98.46%)", // background
                        "cal-bg-emphasis": "hsl(31 3.35% 96.15%)", // accent
                        "cal-bg-muted": "hsl(31 6.7% 92.3%)", // muted
                        scrollbar: "rounded",
                    },
                },
            });
        })();
    }, []);

    return (
        <>
            <Cal
                namespace="15min"
                config={{ layout: "month_view" }}
                calLink="therapistfelesia/15min"
            />
        </>
    );
};
