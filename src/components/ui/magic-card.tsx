import React from "react";
import { cn } from "../../lib/utils";

export const MagicCard = ({
    children,
    className,
    gradientColor = "#ff5500",
}: {
    children: React.ReactNode;
    className?: string;
    gradientColor?: string;
}) => {
    return (
        <div
            className={cn(
                "group relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-surface border border-white/5",
                className
            )}
        >
            <div className="relative z-10 p-6 h-full">{children}</div>
            <div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at 50% 50%, ${gradientColor}, transparent 40%)`,
                }}
            />
        </div>
    );
};
