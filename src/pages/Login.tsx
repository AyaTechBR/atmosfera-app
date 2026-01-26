import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuroraBackground } from '../components/ui/aurora-background';
import logo from '../assets/logo.png';

const LoginPage = () => {
  const [role, setRole] = useState<'admin' | 'designer'>('designer');
  const navigate = useNavigate();

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        {/* Glass Citadel Card */}
        <div className="bg-surface/50 backdrop-blur-xl border border-white/10 p-12 rounded-2xl w-full max-w-lg relative overflow-hidden ring-1 ring-white/20 shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 blur-3xl rounded-full" />

          <div className="flex flex-col items-center mb-10 relative z-10">
            <img src={logo} alt="Whoopee" className="w-72 drop-shadow-[0_0_15px_rgba(255,85,0,0.5)]" />
          </div>

          <div className="space-y-6 relative z-10">
            <div className="grid grid-cols-2 gap-2 bg-black/20 p-1 rounded-lg">
              {['DESIGNER', 'ADMIN'].map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r.toLowerCase() as any)}
                  className={`py-3 text-xs font-black tracking-widest rounded-md transition-all ${role === r.toLowerCase()
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'text-neutral-500 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              <label className="text-[10px] text-neutral-500 font-bold tracking-widest">CHAVE_DE_ACESSO</label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full bg-black/30 border border-white/5 rounded-lg py-4 px-4 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-lg tracking-widest text-center"
              />
            </div>

            <button
              onClick={() => navigate(`/${role}`)}
              className="w-full py-4 bg-white text-black font-black tracking-widest rounded-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              INICIAR PROTOCOLO
            </button>
          </div>
        </div>

        <div className="text-center mt-8 opacity-40">
          <p className="text-[10px] font-mono">CONEXÃO CRIPTOGRAFADA // WHOOPEE SECURE</p>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default LoginPage;
