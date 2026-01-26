import { useState } from 'react';
import {
    BarChart3,
    TrendingUp,
    Users,
    Target,
    Key,
    Trash2,
    Copy
} from 'lucide-react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    Tooltip,
} from 'recharts';
import { MagicCard } from '../components/ui/magic-card';
import { Tabs } from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { AppHeader } from '../components/ui/app-header';

const AdminDashboard = () => {
    const [timeframe, setTimeframe] = useState('Mensal');
    const [selectedDesigner, setSelectedDesigner] = useState('Global');

    // Mock Data
    const evolutionData = [
        { name: 'Jan', val: 45 },
        { name: 'Fev', val: 52 },
        { name: 'Mar', val: 48 },
        { name: 'Abr', val: 61 },
        { name: 'Mai', val: 55 },
        { name: 'Jun', val: 70 },
    ];

    const designerStats: Record<string, any> = {
        "Global": { prod: "248", quality: "94.2", nodes: "12", growth: "+14%" },
        "Alice S.": { prod: "85", quality: "98.5", nodes: "1", growth: "+18%" },
        "Bruno C.": { prod: "72", quality: "92.1", nodes: "1", growth: "+12%" },
    };

    const currentStats = designerStats[selectedDesigner] || designerStats["Global"];

    // --- TAB: VISAO GERAL ---
    const OverviewTab = () => (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Filter & Selection */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface/50 p-4 rounded-xl border border-white/5">
                <div>
                    <Label className="mb-1">FILTRAR POR DESIGNER</Label>
                    <div className="flex gap-2">
                        {["Global", "Alice S.", "Bruno C."].map(d => (
                            <button
                                key={d}
                                onClick={() => setSelectedDesigner(d)}
                                className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${selectedDesigner === d ? 'bg-primary text-white shadow-[0_0_15px_rgba(255,85,0,0.4)]' : 'bg-black/20 text-neutral-500 hover:text-white'}`}
                            >
                                {d.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-[10px] text-neutral-500 font-bold tracking-widest">STATUS DO FILTRO</p>
                    <p className="text-sm font-black text-white">{selectedDesigner === 'Global' ? 'EXIBIÇÃO TOTAL' : `PERFIL: ${selectedDesigner.toUpperCase()}`}</p>
                </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: "PRODUÇÃO", val: currentStats.prod, icon: BarChart3, color: "#ff5500" },
                    { label: "QUALIDADE", val: currentStats.quality, icon: Target, color: "#550099" },
                    { label: "NODOS", val: currentStats.nodes, icon: Users, color: "#ffffff" },
                    { label: "CRESCIMENTO", val: currentStats.growth, icon: TrendingUp, color: "#00ff88" },
                ].map((k, i) => (
                    <MagicCard key={i} className="flex flex-col justify-between h-32" gradientColor={k.color}>
                        <div className="flex justify-between items-start">
                            <span className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase">{k.label}</span>
                            <k.icon size={16} className="text-neutral-600" />
                        </div>
                        <p className="text-4xl font-black text-white">{k.val}</p>
                    </MagicCard>
                ))}
            </div>

            {/* Chart */}
            <div className="bg-surface border border-white/5 rounded-2xl p-8 relative overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-lg font-bold text-white">TRAJETÓRIA DE PERFORMANCE</h3>
                    <div className="hidden md:flex gap-2">
                        {['SEM', 'MÊS', 'TRI', 'ANO'].map(t => (
                            <button key={t} onClick={() => setTimeframe(t)} className={`px-4 py-2 text-xs font-bold rounded ${timeframe === t ? 'bg-primary text-white' : 'bg-surface text-neutral-500'}`}>
                                {t}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="h-[300px] w-full relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={evolutionData}>
                            <XAxis dataKey="name" stroke="#333" />
                            <Tooltip
                                contentStyle={{ background: '#050505', border: '1px solid #333' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="val"
                                stroke="#ff5500"
                                strokeWidth={4}
                                dot={{ r: 4, fill: '#050505', stroke: '#ff5500', strokeWidth: 2 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            </div>
        </div>
    );

    // --- TAB: ESQUADRAO (Tokens) ---
    const SquadTab = () => {
        const [designers, setDesigners] = useState([
            { id: 1, name: "Alice S.", token: "REBEL-9X2", lastActive: "2 min atrás", xp: "14.200" },
            { id: 2, name: "Bruno C.", token: "ALPHA-77", lastActive: "1 h atrás", xp: "12.850" },
        ]);
        const [newName, setNewName] = useState("");

        const generateToken = () => {
            if (!newName) return;
            const seed = Math.random().toString(36).substring(7).toUpperCase();
            setDesigners([...designers, {
                id: Date.now(),
                name: newName,
                token: `REBEL-${seed}`,
                lastActive: "Criado agora",
                xp: "0"
            }]);
            setNewName("");
        };

        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Generator */}
                <div className="md:col-span-1 bg-surface border border-white/5 rounded-2xl p-6 h-fit">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Key size={18} className="text-primary" /> GERAR ACESSO
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <Label>Nome do Designer</Label>
                            <Input
                                placeholder="Ex: Carol D."
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={generateToken}
                            className="w-full py-3 bg-white text-black font-black tracking-widest rounded hover:bg-neutral-200 transition-colors"
                        >
                            CRIAR TOKEN
                        </button>
                    </div>
                </div>

                {/* List */}
                <div className="md:col-span-2 space-y-4">
                    {designers.map(d => (
                        <div key={d.id} className="bg-surface border border-white/5 p-6 rounded-xl flex items-center justify-between group hover:border-white/20 transition-all">
                            <div>
                                <h4 className="font-bold text-lg text-white">{d.name}</h4>
                                <div className="flex items-center gap-4 mt-1">
                                    <span className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded">XP: {d.xp}</span>
                                    <span className="text-xs text-neutral-600 font-mono flex items-center gap-1">
                                        {d.token} <Copy size={10} className="cursor-pointer hover:text-white" />
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-bold text-green-500 mb-2">● {d.lastActive}</p>
                                <button className="text-neutral-600 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    // --- TAB: FEED ---
    const FeedTab = () => (
        <div className="bg-surface border border-white/5 rounded-2xl p-0 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-6 border-b border-white/5 bg-neutral-900/50">
                <h3 className="text-sm font-bold text-neutral-400">LOG DE ATIVIDADES</h3>
            </div>
            <div className="divide-y divide-white/5">
                {[
                    { u: "Alice S.", a: "Entregou Video Reel", t: "2m atrás", notes: "Ajuste na cor final." },
                    { u: "Bruno C.", a: "Completou Branding", t: "14m atrás", notes: "Cliente aprovou V2." },
                    { u: "Carla D.", a: "Logou Poster", t: "1h atrás", notes: "" },
                    { u: "Sistema", a: "Fim do Ciclo #92", t: "4h atrás", notes: "Reset global." },
                ].map((item, i) => (
                    <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-default">
                        <div>
                            <p className="text-sm font-bold text-white">{item.u} <span className="text-neutral-500 font-normal">via {item.a}</span></p>
                            {item.notes && <p className="text-xs text-neutral-600 italic mt-1">"{item.notes}"</p>}
                        </div>
                        <span className="text-[10px] font-mono text-neutral-600">{item.t}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    const tabs = [
        { title: "VISÃO GERAL", value: "overview", content: <OverviewTab /> },
        { title: "ESQUADRÃO", value: "squad", content: <SquadTab /> },
        { title: "FEED AO VIVO", value: "feed", content: <FeedTab /> },
    ];

    return (
        <div className="min-h-screen bg-background p-6 md:p-12">
            <AppHeader
                title={<span>CENTRO DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pr-6 inline-block">COMANDO</span></span>}
            />

            <div className="max-w-7xl mx-auto">
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
};

export default AdminDashboard;
