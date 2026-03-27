import { motion } from 'framer-motion';
import DeliveryScreen from '../components/DeliveryScreen';
import ImagePlaceholder from '../components/ImagePlaceholder';

const BASE = '/atmosfera-app/images';

interface ScreenProps {
  isActive: boolean;
}

export function Screen16Marketplace({ isActive }: ScreenProps) {
  return (
    <DeliveryScreen
      isActive={isActive}
      tagNumber="09"
      tagLabel="ECOSSISTEMA"
      title="Marketplace de Parceiros e Fornecedores"
      body="Acesso a uma rede curada e qualificada de parceiros homologados: fotografia, podcast, vídeo, IA, 3D, growth, e-commerce, audiovisual, performance e mais. Fornecedores validados, com preço de parceria e qualidade garantida. Suporte contínuo para qualquer demanda complementar que a operação de marketing precisar."
      imagePlaceholder="Rede de parceiros"
      imageSrc={`${BASE}/img-breno-reuniao.webp`}
      imagePosition="center center"
    />
  );
}

export function Screen17BLVR({ isActive }: ScreenProps) {
  const companies = [
    { name: 'Whoopee', desc: 'Marketing, branding e design com +20 anos de expertise' },
    { name: 'AYA', desc: 'Inteligência artificial, automação e tecnologia' },
    { name: 'MATCH', desc: 'Recrutamento especializado em talentos de marketing e tech' },
    { name: 'BLVR', desc: 'Negócios em inovação' },
  ];

  return (
    <div
      className="slide-section flex flex-col justify-center px-10 md:px-16 lg:px-20 relative"
      style={{ background: '#0A0A0A' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-10"
      >
        <span className="gold-tag">10 · CONEXÃO</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-white font-light mb-4"
        style={{
          fontFamily: 'Sora, sans-serif',
          fontSize: 'clamp(1.5rem, 3vw, 2.8rem)',
        }}
      >
        Conexão com o Ecossistema BLVR
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-10 h-px bg-gold mb-8"
        style={{ transformOrigin: 'left' }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-gray-secondary mb-10"
        style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', lineHeight: '1.7' }}
      >
        O Atmosfera se conecta diretamente ao Hub WeBelieve, integrando empresas especializadas
        que fortalecem o ecossistema:
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {companies.map((co, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.7 + i * 0.1, duration: 0.7 }}
            className="flex flex-col"
            style={{ borderTop: '1px solid #F5A623', paddingTop: '1rem' }}
          >
            <span
              className="text-gold font-semibold mb-2"
              style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.1rem', letterSpacing: '0.05em' }}
            >
              {co.name}
            </span>
            <span
              className="text-gray-text"
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', lineHeight: '1.6' }}
            >
              {co.desc}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Screen18Mentors({ isActive }: ScreenProps) {
  const areas = ['Performance e Growth', 'Design e Branding', 'Conteúdo e Redação', 'IA e Automação', 'Audiovisual'];

  return (
    <div
      className="slide-section flex items-stretch"
      style={{ background: '#0A0A0A' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="flex flex-col justify-center px-10 md:px-14 lg:px-20 py-16"
        style={{ flex: '0 0 55%' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <span className="gold-tag">11 · INTELIGÊNCIA</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white font-light mb-4"
          style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.8rem)' }}
        >
          Mentores Seniores por Área
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-10 h-px bg-gold mb-6"
          style={{ transformOrigin: 'left' }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-secondary mb-8"
          style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', lineHeight: '1.8' }}
        >
          Squads de especialistas de alto nível dedicados ao direcionamento técnico da equipe.
          Cada mentor é um faixa preta na sua categoria. A certeza de que a execução será feita
          dentro dos critérios qualitativos que o mercado exige.
        </motion.p>

        <div className="flex flex-wrap gap-2 mb-8">
          {areas.map((area, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
              className="text-xs px-3 py-1.5"
              style={{
                border: '1px solid rgba(245,166,35,0.3)',
                color: '#F5A623',
                fontFamily: 'Sora, sans-serif',
                letterSpacing: '0.08em',
                fontSize: '0.65rem',
              }}
            >
              {area}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="border-l-2 border-gold pl-5 py-1"
        >
          <p
            className="text-gold"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', lineHeight: '1.7', fontStyle: 'italic' }}
          >
            "Para se tornar um faixa preta, você tem que treinar com faixas pretas.
            O Atmosfera é isso — um tatame de criatividade, inovação e excelência."
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="hidden md:flex flex-1 items-center justify-center p-10"
        style={{ background: '#0D0D0D', borderLeft: '1px solid #1A1A1A' }}
      >
        <div className="w-full">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }}
              className="flex items-center gap-4 py-4"
              style={{ borderBottom: '1px solid #1A1A1A' }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              <span
                className="text-gray-secondary"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem' }}
              >
                {area}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function Screen19Events({ isActive }: ScreenProps) {
  return (
    <DeliveryScreen
      isActive={isActive}
      tagNumber="12"
      tagLabel="EXPERIÊNCIA"
      title="Eventos, Workshops e Laboratório Vivo"
      body="O Atmosfera é um laboratório coletivo de práticas reais. Mais de 25 empresas fazem parte desse ecossistema — incluindo algumas das maiores marcas do Espírito Santo. São centenas de projetos acontecendo simultaneamente, criando um banco de dados vivo do que funciona e do que não funciona."
      highlight="Workshops temáticos, eventos de networking e capacitação contínua fazem parte do calendário fixo do programa."
      imagePlaceholder="Eventos e workshops"
      imageSrc={`${BASE}/img-piscina-notebook.webp`}
      imagePosition="center center"
    />
  );
}

export function Screen20Infrastructure({ isActive }: ScreenProps) {
  const items = [
    'Estúdios equipados com câmeras 4K, iluminação profissional e microfones',
    'Bancos de imagens, vídeos e trilhas (Shutterstock, Artgrid, Artlist, Envato)',
    'Internet de alta velocidade, estações premium, salas de reunião e áreas criativas',
    'Espaço físico de mais de 500m², na Praia da Costa, ativo 24h',
  ];

  return (
    <div
      className="slide-section flex items-stretch"
      style={{ background: '#0A0A0A' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col justify-center px-10 md:px-14 lg:px-20 py-16"
        style={{ flex: '0 0 55%' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <span className="gold-tag">13 · INFRAESTRUTURA</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white font-light mb-4"
          style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.8rem)' }}
        >
          Compartilhamento de Estrutura
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-10 h-px bg-gold mb-6"
          style={{ transformOrigin: 'left' }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-secondary mb-6"
          style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', lineHeight: '1.8' }}
        >
          O Atmosfera não é apenas um método — é uma casa viva. Estrutura completa e física
          com tudo que uma operação de marketing precisa:
        </motion.p>

        <div className="space-y-3 mb-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
              className="flex items-start gap-3"
            >
              <div className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
              <span
                className="text-gray-secondary"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', lineHeight: '1.6' }}
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="border-l-2 border-gold pl-5 py-1"
        >
          <p
            className="text-gold"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontStyle: 'italic' }}
          >
            O que está disponível para um, impulsiona todos.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="hidden md:flex flex-1 items-stretch overflow-hidden"
        style={{ background: '#0D0D0D', borderLeft: '1px solid #1A1A1A' }}
      >
        <ImagePlaceholder
          aspectRatio="full"
          label="Espaço Físico · Hub WeBelieve"
          src={`${BASE}/img-escritorio-fone.jpg`}
          objectPosition="center center"
          className="w-full"
        />
      </motion.div>
    </div>
  );
}

export function Screen21AtmoSaaS({ isActive }: ScreenProps) {
  const kpis = ['Branding', 'Design', 'Conteúdo', 'Redes Sociais', 'Performance', 'Audiovisual', 'Website', 'SEO', 'IA'];

  return (
    <div
      className="slide-section flex items-stretch"
      style={{ background: '#0A0A0A' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col justify-center px-10 md:px-14 lg:px-20 py-16"
        style={{ flex: '0 0 55%' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <span className="gold-tag">14 · TECNOLOGIA DE SUPORTE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white font-light mb-4"
          style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.8rem)' }}
        >
          AtmoSaaS — Inteligência Mensurável
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-10 h-px bg-gold mb-6"
          style={{ transformOrigin: 'left' }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-secondary mb-6"
          style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', lineHeight: '1.8' }}
        >
          Software proprietário de mensuração e evolução. Análise metrificável do desempenho
          do marketing e do profissional. Diagnósticos com exportação visual. KPIs tangíveis
          por categoria — prova real de evolução, mês a mês, trimestre a trimestre.
        </motion.p>

        <div className="flex flex-wrap gap-2 mb-8">
          {kpis.map((kpi, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
              className="text-xs px-3 py-1"
              style={{
                background: 'rgba(245,166,35,0.08)',
                border: '1px solid rgba(245,166,35,0.2)',
                color: '#F5A623',
                fontFamily: 'Sora, sans-serif',
                letterSpacing: '0.08em',
                fontSize: '0.62rem',
              }}
            >
              {kpi}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="border-l-2 border-gold pl-5 py-1"
        >
          <p
            className="text-gold"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontStyle: 'italic' }}
          >
            O que não se mede, não se melhora.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="hidden md:flex flex-1 items-center justify-center p-10"
        style={{ background: '#0D0D0D', borderLeft: '1px solid #1A1A1A' }}
      >
        {/* Simulated dashboard */}
        <div className="w-full space-y-3">
          {kpis.slice(0, 5).map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span
                className="text-gray-text w-24 text-right"
                style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.65rem', letterSpacing: '0.08em' }}
              >
                {kpi}
              </span>
              <div className="flex-1 h-1 bg-gray-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isActive ? { width: `${60 + i * 7}%` } : { width: 0 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-gold rounded-full"
                />
              </div>
              <span
                className="text-gold w-8"
                style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.65rem' }}
              >
                {60 + i * 7}%
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
