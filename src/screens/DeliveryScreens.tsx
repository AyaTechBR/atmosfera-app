import DeliveryScreen from '../components/DeliveryScreen';

interface ScreenProps {
  isActive: boolean;
}

export function Screen08IP({ isActive }: ScreenProps) {
  return (
    <DeliveryScreen
      isActive={isActive}
      tagNumber="01"
      tagLabel="PROPRIEDADE INTELECTUAL"
      title="Transferência de Propriedade Intelectual"
      body="Mais de 20 anos de expertise condensados em conhecimento aplicável. Transferimos o DNA estratégico, criativo e operacional para dentro da sua empresa. Não é teoria — é inteligência testada em centenas de projetos reais, aplicada diretamente na sua operação. Sua empresa passa a ter uma base de conhecimento própria que sobrevive a qualquer troca de profissional."
      imagePlaceholder="Transferência de conhecimento"
    />
  );
}

export function Screen09Team({ isActive }: ScreenProps) {
  return (
    <DeliveryScreen
      isActive={isActive}
      tagNumber="02"
      tagLabel="EQUIPE CERTA"
      title="Recrutamento e Estruturação do Time"
      body="Tudo começa pelas pessoas. Ajudamos a empresa a definir e montar a estrutura ideal — alinhando cargos, funções e centro de custos ao objetivo comercial da marca. Fazemos hunting, curadoria, validação e reestruturação quando necessário. Passamos por múltiplas camadas de avaliação técnica, cultural e humana para encontrar exatamente quem a empresa precisa."
      imagePlaceholder="Recrutamento e time"
    />
  );
}

export function Screen10Development({ isActive }: ScreenProps) {
  return (
    <DeliveryScreen
      isActive={isActive}
      tagNumber="03"
      tagLabel="DESENVOLVIMENTO"
      title="Desenvolvimento Contínuo do Time"
      body="Transformamos profissionais em versões extraordinárias de si mesmos. Através de mentoria técnica, direcionamento estratégico e exposição ao ecossistema de inteligência do Hub, cada profissional evolui continuamente — com metas claras, métricas tangíveis e feedback contínuo."
      highlight="A curva é progressiva: mês 6 incomparavelmente melhor que mês 1. Mês 12 melhor que mês 6."
      imagePlaceholder="Desenvolvimento de equipe"
    />
  );
}

export function Screen11Frameworks({ isActive }: ScreenProps) {
  return (
    <DeliveryScreen
      isActive={isActive}
      tagNumber="04"
      tagLabel="MÉTODO"
      title="Frameworks e Métodos"
      body="Criamos frameworks próprios — estruturas práticas e testadas de execução — que cobrem todas as áreas: branding, redes sociais, growth, tráfego pago, performance, IA, propaganda, estratégia, conteúdo, copy e design. São mais de 20 anos condensados em modelos de execução que evoluem continuamente com base nas experiências reais do ecossistema. O que funciona é documentado, aprimorado e reaplicado. O que não funciona é descartado."
      imagePlaceholder="Frameworks e metodologia"
    />
  );
}

export function Screen12Technology({ isActive }: ScreenProps) {
  return (
    <DeliveryScreen
      isActive={isActive}
      tagNumber="05"
      tagLabel="TECNOLOGIA"
      title="Consciência e Compartilhamento de Tecnologia"
      body="A tecnologia é o eixo que conecta tudo. Investimos continuamente em ferramentas e assinaturas de alto nível — desde IA generativa de texto, imagem, vídeo e áudio até plataformas de automação, analytics e gestão. Toda a stack tecnológica do ecossistema é compartilhada com os clientes do Atmosfera, eliminando o custo individual de cada empresa e garantindo acesso às melhores ferramentas do mercado."
      imagePlaceholder="Stack tecnológica"
    />
  );
}

export function Screen13Oracle({ isActive }: ScreenProps) {
  return (
    <DeliveryScreen
      isActive={isActive}
      tagNumber="06"
      tagLabel="ORÁCULO"
      title="O Oráculo — A IA da Sua Empresa"
      body="Uma IA criada sob medida para cada empresa. Desenvolvemos um banco de dados de consciência organizacional — reunindo todo o conhecimento, processos, produtos, linguagem e posicionamento da marca em uma única IA multimodal generativa. Um SaaS proprietário do Atmosfera."
      highlight="Com o Oráculo, a empresa passa a ter uma inteligência viva e transferível, acessível para toda a equipe. O conhecimento acumulado da empresa se transforma em vantagem competitiva permanente."
      imagePlaceholder="Interface do Oráculo"
    />
  );
}

export function Screen14Agent({ isActive }: ScreenProps) {
  return (
    <DeliveryScreen
      isActive={isActive}
      tagNumber="07"
      tagLabel="AGENTE AUTÔNOMO"
      title="Agente Autônomo — IA que Executa"
      body="A próxima fronteira da operação de marketing. Agentes de IA que trabalham autonomamente — produzindo, otimizando e apoiando decisões com a inteligência do Oráculo como base. A visão do Atmosfera é clara: dependência cada vez menor do profissional individual e autonomia crescente de inteligência artificial dentro da operação."
      highlight="Não substitui o humano — amplifica exponencialmente a capacidade da equipe."
      imagePlaceholder="Agente autônomo em ação"
    />
  );
}

export function Screen15Manager({ isActive }: ScreenProps) {
  return (
    <DeliveryScreen
      isActive={isActive}
      tagNumber="08"
      tagLabel="GESTÃO"
      title="Gerente de Projetos Dedicada"
      body="Não basta planejar — é preciso executar com consistência. Cada cliente conta com uma gerente de projeto dedicada, acompanhando de perto o desempenho técnico e comportamental do time. A execução é feita de forma viva, com feedbacks, ajustes, mentoria e suporte contínuo."
      highlight="Seu ponto de contato diário. Organiza demandas, acompanha entregas, gerencia prazos, faz ponte com cliente."
      imagePlaceholder="Gerente de projetos"
    />
  );
}
