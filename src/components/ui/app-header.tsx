import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import logo from "../../assets/logo.png";
import { cn } from "../../lib/utils";

interface AppHeaderProps {
    title: React.ReactNode;
    rightContent?: React.ReactNode;
    className?: string;
}

export const AppHeader = ({ title, rightContent, className }: AppHeaderProps) => {
    const navigate = useNavigate();

    return (
        <div className={cn("max-w-7xl mx-auto mb-12 relative flex flex-col items-center justify-center min-h-[160px]", className)}>
            {/* Logout - Always Top Left */}
            <button
                onClick={() => navigate("/")}
                className="absolute top-0 left-0 flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-white transition-colors z-20"
            >
                <LogOut size={16} /> SAIR
            </button>

            {/* Central Identity */}
            <div className="text-center z-10 mt-8 md:mt-0 flex flex-col items-center w-full px-4 overflow-visible">
                <img src={logo} alt="Whoopee" className="w-40 mb-4 drop-shadow-[0_0_15px_rgba(255,85,0,0.3)]" />
                <h1 className="text-3xl md:text-5xl font-black text-white italic tracking-wide uppercase leading-normal drop-shadow-lg py-4">
                    {title}
                </h1>
            </div>

            {/* Right Content (e.g. XP Widget) */}
            {rightContent && (
                <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 mt-6 md:mt-0 z-20">
                    {rightContent}
                </div>
            )}
        </div>
    );
};
