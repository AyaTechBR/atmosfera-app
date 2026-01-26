import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export const Dialog = ({ isOpen, onClose, title, children, className }: DialogProps) => {
    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 flex items-center justify-center pointer-events-none z-50 p-4"
                    >
                        <div
                            className={cn(
                                "bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl w-full max-w-md pointer-events-auto overflow-hidden relative ring-1 ring-white/20",
                                className
                            )}
                        >
                            {/* Decorative Gradient Blob */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-3xl rounded-full pointer-events-none" />

                            {/* Header */}
                            <div className="flex justify-between items-center p-6 border-b border-white/5 bg-white/[0.02]">
                                <h3 className="text-xl font-black italic tracking-widest text-white">{title}</h3>
                                <button onClick={onClose} className="text-neutral-500 hover:text-white transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
