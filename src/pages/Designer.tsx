import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Image as ImageIcon, Video, Palette, Trophy, Clock, BarChart, Send } from 'lucide-react';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { MagicCard } from '../components/ui/magic-card';
import { Dialog } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { AppHeader } from '../components/ui/app-header';
import { useNavigate } from 'react-router-dom';

const MissionVisual = ({ type }: { type: string }) => {
    switch (type) {
        case "CARROSSEL":
            return (
                <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute w-24 h-32 bg-white/5 border border-white/10 rounded-lg -rotate-12 translate-x-[-20%] group-hover:-rotate-6 transition-all" />
                    <div className="absolute w-24 h-32 bg-white/10 border border-white/20 rounded-lg -rotate-6 transition-all" />
                    <div className="absolute w-24 h-32 bg-gradient-to-br from-primary/40 to-secondary/40 border border-white/30 rounded-lg flex items-end p-2 rotate-2 group-hover:rotate-0 transition-all">
                        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} className="h-full bg-white" />
                        </div>
                    </div>
                </div>
            );
        case "POSTER":
            return (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-28 h-40 bg-white/5 border border-white/10 rounded overflow-hidden relative group-hover:border-primary/50 transition-colors">
                        <div className="absolute top-4 left-4 right-4 h-16 bg-white/10 rounded-sm overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                        </div>
                        <div className="absolute bottom-4 left-4 w-12 h-2 bg-white/20 rounded" />
                        <div className="absolute bottom-8 left-4 w-20 h-3 bg-white/10 rounded" />
                    </div>
                </div>
            );
        case "REELS / VIDEO":
            return (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-20 h-40 bg-zinc-900 border-2 border-white/20 rounded-[2rem] p-1.5 relative shadow-2xl">
                        <div className="w-full h-full bg-gradient-to-b from-primary/20 to-secondary/20 rounded-[1.8rem] flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center blur-none">
                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent ml-1" />
                            </div>
                        </div>
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-black rounded-full" />
                    </div>
                </div>
            );
        case "BRANDING":
            return (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-2 w-32">
                        <div className="aspect-square bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/20">A</div>
                        <div className="aspect-square bg-primary/20 border border-primary/40 rounded-full" />
                        <div className="aspect-square bg-secondary/20 border border-secondary/40 rounded-lg rotate-45" />
                        <div className="aspect-square bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-white/20" />
                        </div>
                    </div>
                </div>
            );
        default: return null;
    }
};

const DesignerView = () => {
    const [xp, setXp] = useState(1250);
    const [showSuccess, setShowSuccess] = useState(false);
    const [selectedMission, setSelectedMission] = useState<any>(null);
    const [notes, setNotes] = useState("");
    const navigate = useNavigate();

    const openMission = (mission: any) => {
        setSelectedMission(mission);
        setNotes("");
    };

    const confirmDelivery = () => {
        if (!selectedMission) return;

        setXp(prev => prev + selectedMission.xp);
        setSelectedMission(null);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    const missions = [
        { title: "CARROSSEL", desc: "Narrativa multi-slide", xp: 50, color: "from-blue-500/10 to-purple-500/10" },
        { title: "POSTER", desc: "Visual de alto impacto", xp: 30, color: "from-orange-500/10 to-red-500/10" },
        { title: "REELS / VIDEO", desc: "Conteúdo em movimento", xp: 80, color: "from-green-500/10 to-emerald-500/10" },
        { title: "BRANDING", desc: "Kit de identidade completo", xp: 150, color: "from-pink-500/10 to-rose-500/10" },
    ];

    return (
        <div className="min-h-screen bg-background p-4 md:p-8">
            <AppHeader
                title={<span>MISSÕES <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pr-6 inline-block">DIÁRIAS</span></span>}
                rightContent={
                    <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="bg-surface border border-white/10 px-8 py-4 rounded-full flex items-center gap-6 relative z-10">
                            <div className="text-right">
                                <p className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase">NÍVEL 12</p>
                                <p className="text-2xl font-black text-white tabular-nums">{xp.toLocaleString()} <span className="text-primary text-sm">XP</span></p>
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center shadow-[0_0_15px_var(--primary)]">
                                <Trophy size={18} className="text-white" />
                            </div>
                        </div>
                    </div>
                }
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Content: Missions */}
                <div className="lg:col-span-3 space-y-8">
                    <BentoGrid>
                        {missions.map((item, i) => (
                            <div key={i} onClick={() => openMission(item)} className="cursor-pointer group">
                                <BentoGridItem
                                    title={item.title}
                                    description={
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-neutral-400 font-bold text-xs">{item.desc}</span>
                                            <span className="bg-white/10 px-2 py-1 rounded text-[10px] text-white font-black tracking-widest tabular-nums group-hover:bg-primary/20 transition-colors">+{item.xp} XP</span>
                                        </div>
                                    }
                                    header={
                                        <div className={`flex flex-1 w-full h-[12rem] rounded-xl bg-gradient-to-br ${item.color} border border-white/5 group-hover:border-primary/50 transition-all overflow-hidden relative`}>
                                            <MissionVisual type={item.title} />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                        </div>
                                    }
                                    className={i === 0 || i === 3 ? "md:col-span-2" : ""}
                                />
                            </div>
                        ))}
                    </BentoGrid>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <MagicCard className="p-0" gradientColor="#550099">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-full"><Clock size={20} className="text-purple-400" /></div>
                                <div>
                                    <p className="text-[10px] text-neutral-500 font-bold tracking-[0.2em]">PRÓXIMO RESET</p>
                                    <p className="text-2xl font-black text-white italic tabular-nums">04:22:10</p>
                                </div>
                            </div>
                        </MagicCard>
                        <MagicCard className="p-0" gradientColor="#ff5500">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-full"><BarChart size={20} className="text-primary" /></div>
                                <div>
                                    <p className="text-[10px] text-neutral-500 font-bold tracking-[0.2em]">OFENSIVA SEMANAL</p>
                                    <p className="text-2xl font-black text-white italic tabular-nums">5 DIAS 🔥</p>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </div>

                {/* Right Content: Sidebar Leaderboard */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 rounded-3xl p-6">
                        <h4 className="text-[10px] font-black tracking-widest text-neutral-400 mb-2 uppercase">Meta Diária</h4>
                        <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden mb-2 border border-white/5">
                            <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} className="h-full bg-gradient-to-r from-primary to-secondary" />
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-bold text-neutral-500">
                            <span>70% COMPLETO</span>
                            <span className="text-white">7/10</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delivery Ritual Modal */}
            <Dialog
                isOpen={!!selectedMission}
                onClose={() => setSelectedMission(null)}
                title={selectedMission?.title || "CONFIRMAR ENTREGA"}
            >
                <div className="space-y-6">
                    <div className="flex justify-between items-center text-[10px] font-black tracking-widest text-neutral-500 border-b border-white/5 pb-4 uppercase">
                        <span>DATA: {new Date().toLocaleDateString('pt-BR')}</span>
                        <span>HORA: {new Date().toLocaleTimeString('pt-BR')}</span>
                    </div>

                    <div>
                        <Label>OBSERVAÇÕES (OPCIONAL)</Label>
                        <Input
                            placeholder="Ex: Link do drive..."
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="bg-black/50"
                        />
                    </div>

                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <p className="text-[10px] text-neutral-500 font-black tracking-widest mb-1 uppercase">Recompensa</p>
                        <p className="text-3xl font-black text-primary">+{selectedMission?.xp} XP</p>
                    </div>

                    <button
                        onClick={confirmDelivery}
                        className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-black tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(255,85,0,0.4)] transition-all flex items-center justify-center gap-2 uppercase"
                    >
                        <Send size={16} /> CONFIRMAR ENVIO
                    </button>
                </div>
            </Dialog>

            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.2, opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
                    >
                        <div className="bg-white text-black px-12 py-8 rounded-2xl shadow-2xl skew-x-[-8deg] border-r-8 border-primary">
                            <h2 className="text-5xl font-black italic tracking-tighter">MISSÃO CUMPRIDA</h2>
                            <p className="text-center font-black text-primary tracking-[0.3em] mt-2 text-sm">RECOMPENSA COMPUTADA</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DesignerView;
