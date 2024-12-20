
export const CTASVGBackground = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="min-w-full min-h-full">
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern
                        id="a"
                        width="70"
                        height="8"
                        patternTransform="rotate(160)"
                        patternUnits="userSpaceOnUse"
                    >
                        <rect width="100%" height="100%" fill="#beeaee" />
                        <path
                            fill="none"
                            stroke="#75b3bd"
                            stroke-opacity=".24"
                            stroke-width="2"
                            d="M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2s14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6S49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14S20.785-8.742 16.3-3.661C11.918 1.306 8.353 6-.02 6.002"
                        />
                    </pattern>
                </defs>
                <rect
                    width="800%"
                    height="800%"
                    fill="url(#a)"
                    transform="translate(-65 -2)"
                />
            </svg>
            {children}
        </div>
    );
};