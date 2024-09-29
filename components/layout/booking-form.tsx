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
                        "cal-brand": "hsl(220 100% 56%)", // primary
                        "cal-text": "hsl(228 7.5% 0.56%)", // foreground
                        "cal-text-emphasis": "hsl(220 10% 97.8%;)", // accent-foreground
                        "cal-text-muted": "hsl(220 10% 55.6%)", // muted-foreground
                        "cal-bg": "hsl(228 98.75% 98.28%)", // background
                        "cal-bg-emphasis": "hsl(220 50% 16.8%)", // accent
                        "cal-bg-muted": "hsl(220 50% 16.8%)", // muted
                        scrollbar: "rounded",
                    },
                    dark: {
                        "cal-brand": "hsl(220 100% 56%)", // primary
                        "cal-text": "hsl(228 7.5% 0.56%)", // foreground
                        "cal-text-emphasis": "hsl(220 10% 97.8%;)", // accent-foreground
                        "cal-text-muted": "hsl(220 10% 55.6%)", // muted-foreground
                        "cal-bg": "hsl(228 98.75% 98.28%)", // background
                        "cal-bg-emphasis": "hsl(220 50% 16.8%)", // accent
                        "cal-bg-muted": "hsl(220 50% 16.8%)", // muted
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
