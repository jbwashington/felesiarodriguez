import { cn } from "@/lib/utils";

export const H2 = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h2
            className={cn(
                "text-6xl font-bold tracking-tighter max-w-screen-lg mx-auto font-serif py-4",
                className
            )}
        >
            {children}
        </h2>
    );
};

export const H3 = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h3 className={cn("text-xl font-semibold py-4 font-serif", className)}>
            {children}
        </h3>
    );
};

export const P = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <p
            className={cn(
                "leading-relaxed text-xl font-serif max-w-screen-lg mx-auto p-4",
                className
            )}
        >
            {children}
        </p>
    );
};
