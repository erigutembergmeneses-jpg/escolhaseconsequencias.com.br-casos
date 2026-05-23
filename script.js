// script.js
// Case database - All 22 complementary cases
const casesData = [
    // Capítulo 1 - Movidos
    {
        id: 1,
        title: "Lojas Arapuã e o paradoxo do crédito no Plano Real",
        chapter: 1,
        chapterTitle: "Arquitetura da Escolha",
        type: "publico",
        region: "nacional",
        preview: "A maior rede de eletrodomésticos do Brasil na década de 1990 faliu ao manter seu modelo de crédito próprio após a estabilização do Plano Real. O viés de status quo prevaleceu sobre a adaptação necessária.",
        lesson: "Viés de status quo: o cérebro trata o conhecido como seguro e o novo como ameaça, mesmo quando o ambiente já mudou.",
        fullContent: {
            context: "Em 1995, as Lojas Arapuã consolidavam-se como a maior rede de varejo de eletrodomésticos do Brasil, famosa pelo modelo de concessão de crédito facilitado através de carnês próprios. Com a estabilização econômica trazida pelo Plano Real, milhões de novos consumidores entraram no mercado de consumo.",
            neuralBlock: "A liderança da Arapuã optou por acelerar agressivamente a abertura de lojas e a concessão de crédito sem modernizar seus sistemas de análise de risco. O cérebro coletivo da empresa acreditava que o comportamento de inadimplência pós-Real seria idêntico ao do período inflacionário.",
            consequence: "Quando os juros básicos subiram drasticamente e a inadimplência explodiu entre 1997 e 1998, o modelo de financiamento próprio colapsou. Em junho de 1998, as Lojas Arapuã pediram concordata preventiva, culminando no fechamento de centenas de lojas.",
            neuralLesson: "O viés de status quo não é apenas medo irracional. É a tendência do cérebro de tratar o conhecido como seguro e o novo como ameaça. A Arapuã errou ao calcular o custo da mudança com base em um mundo macroeconômico que já não existia mais.",
            whatBrainDid: "A amígdala (medo) assumiu o comando. O viés de status quo ('o que já funciona é seguro') venceu. A escolha de não escolher foi registrada pelo cérebro como segurança — era armadilha."
        }
    },
    {
        id: 2,
        title: "O síndico de Florianópolis e a paralisia por abundância",
        chapter: 1,
        chapterTitle: "Arquitetura da Escolha",
        type: "pedagogico",
        region: "sul",
        preview: "Um síndico profissional recebeu oito orçamentos para uma reforma de fachada. Três semanas depois, ainda não havia decidido. A obra atrasou, os custos aumentaram e ele foi destituído.",
        lesson: "O ACC (córtex cingulado anterior) superaquece quando forçado a comparar muitas opções. A Regra dos 3 evita a paralisia.",
        fullContent: {
            context: "Síndico profissional em condomínio de alto padrão em Florianópolis precisava contratar empresa para reformar a fachada. Pediu orçamentos e recebeu oito propostas com prazos e métodos diferentes.",
            neuralBlock: "O ACC do síndico superaqueceu. Em vez de filtrar antes de comparar, ele tentou processar todas as oito opções simultaneamente, entrando em paralisia decisória.",
            consequence: "A obra atrasou três meses, o custo aumentou 40% pela inflação dos materiais, e o síndico foi destituído em assembleia, respondendo por danos materiais na justiça.",
            neuralLesson: "O cérebro lida bem com três opções. Com oito, trava. A solução é filtrar antes de comparar: três critérios não negociáveis, três opções viáveis, um teto de tempo.",
            whatBrainDid: "O ACC entrou em alerta constante, comparando, duvidando, recalculando. O resultado foi paralisia, não uma decisão melhor."
        }
    },

    // Capítulo 2 - Movidos
    {
        id: 3,
        title: "O experimento de Libet e o debate do livre-arbítrio",
        chapter: 2,
        chapterTitle: "Livre-Arbítrio e Janela de Agência",
        type: "internacional",
        region: "internacional",
        preview: "O famoso experimento de 1983 que mostrou que o cérebro começa a agir antes de você decidir — e o que isso significa para a responsabilidade penal.",
        lesson: "O livre-arbítrio não é onipotência, mas a capacidade de intervir no processo decisório antes que ele se cristalize em ação (janela de veto).",
        fullContent: {
            context: "Em 1983, o neurocientista Benjamin Libet demonstrou que um sinal neural (readiness potential) começava a se acumular 635 milissegundos antes do movimento voluntário, enquanto a intenção consciente surgia apenas 200 ms antes.",
            neuralBlock: "O dado questiona a ideia de que a consciência comanda a ação. No entanto, Libet mesmo argumentou que existe uma janela de veto onde a consciência pode interromper o impulso.",
            consequence: "O experimento influenciou debates sobre dolo, culpa e responsabilidade penal em tribunais do mundo todo, levando a uma visão mais matizada do livre-arbítrio.",
            neuralLesson: "A liberdade não vive no controle absoluto, mas na capacidade de interceptar um impulso automático antes que ele se cristalize em ação. Essa janela de agência é treinável.",
            whatBrainDid: "O cérebro prepara a ação no escuro. A consciência não inicia, mas pode vetar. A diferença entre reagir e responder está nessa fração de segundo."
        }
    },

    // Capítulo 3 - Movido
    {
        id: 4,
        title: "O advogado tributário e a higiene atencional",
        chapter: 3,
        chapterTitle: "Paralisia da Abundância",
        type: "pedagogico",
        region: "sudeste",
        preview: "Um advogado em São Paulo vivia exausto por atender mensagens de clientes no WhatsApp até meia-noite. Desligar as notificações mudou sua vida profissional.",
        lesson: "Cada notificação é uma microdecisão que gasta glicose mental. O offloading cognitivo (desligar notificações) reduz a fadiga decisória.",
        fullContent: {
            context: "Advogado especializado em direito tributário atendia mensagens de clientes no WhatsApp às 22h, 23h, meia-noite. Cada mensagem era uma microdecisão: 'respondo agora ou depois?'",
            neuralBlock: "O dlPFC, sobrecarregado por microdecisões constantes, perdia capacidade de deliberação para casos complexos. O cortisol elevado impedia o descanso adequado.",
            consequence: "Ao desligar notificações não essenciais e instituir blocos de atenção ininterruptos, seu estresse caiu pela metade, seu sono melhorou e seu faturamento aumentou.",
            neuralLesson: "A ativação repetida do dlPFC e do ACC para alternar tarefas consome glicose e reduz a capacidade de deliberação. Bloquear notificações é neuroproteção.",
            whatBrainDid: "Cada notificação ativava o circuito de switching cost. Ao eliminar o ruído, o cérebro do advogado foi liberado para o que realmente importa."
        }
    },

    // Capítulo 4 - Movidos (continuation)
    {
        id: 5,
        title: "O herdeiro que não viu a herança chegar (Caso Zago/Decarli) - Introdução",
        chapter: 4,
        chapterTitle: "Vieses como Economia Neural",
        type: "publico",
        region: "sul",
        preview: "A história do médico que não assumiu a paternidade em 1942 e gerou R$ 100 milhões em litígio que atravessa três gerações no Rio Grande do Sul.",
        lesson: "O custo irrecuperável não é apenas financeiro. O silêncio de 1942 não poupou energia — apenas postergou o colapso para a 3ª Onda.",
        fullContent: {
            context: "Em 1942, em Carazinho (RS), o médico Décio Henrique Zago mantém relação com a doméstica Elvira dos Santos. Ela engravida. Ele não assume o filho, José Decarli dos Santos, que cresce sem saber quem é o pai.",
            neuralBlock: "Zago operou no curto prazo. O silêncio evitou o escândalo, preservou o casamento, manteve a reputação. O ACC, que deveria sinalizar o custo da omissão, foi silenciado pela conveniência social.",
            consequence: "R$ 100 milhões paralisados, três gerações em litígio, netos e bisnetos divididos por uma pergunta que nenhum juiz pode responder com certidão de nascimento.",
            neuralLesson: "O cérebro não foi programado para calcular juros intergeracionais. O silêncio de 1942 não poupou energia — apenas postergou o colapso para a 3ª Onda.",
            whatBrainDid: "A 1ª Onda foi alívio imediato. A 2ª Onda trouxe um filho marcado pela ausência. A 3ª Onda, a que destrói, é sistêmica: três gerações em litígio."
        }
    },
    {
        id: 6,
        title: "O inventário do Comendador Correia: 107 anos de processo",
        chapter: 4,
        chapterTitle: "Vieses como Economia Neural",
        type: "publico",
        region: "sul",
        preview: "Um testamento que gerou 6.336 habilitações, centenas de petições e um processo que a Justiça do RS arquivou em 1984 sem julgamento de mérito.",
        lesson: "A ambiguidade deliberada escala para o colapso institucional quando o cérebro coletivo normaliza a inércia como prudência.",
        fullContent: {
            context: "O Comendador Domingos Faustino Correia (1873–1984) condicionou sua fortuna a 'quatro gerações' dos irmãos, criando um testamento ambíguo que gerou um labirinto processual de 107 anos.",
            neuralBlock: "O cérebro coletivo do Judiciário, sobrecarregado pela complexidade e pela falácia do custo irrecuperável ('já tramitou décadas, não podemos parar'), ativou o atalho da omissão como caminho de menor resistência.",
            consequence: "6.336 habilitações, centenas de petições, arquivamento sem mérito. O silêncio não ficou na sala de visitas — virou jurisprudência de inércia.",
            neuralLesson: "Ambiguidade e silêncio são economias de energia que cobram juros compostos. A clareza não é burocracia — é prótese cognitiva contra a cegueira à 3ª Onda.",
            whatBrainDid: "O mesmo atalho neural de Zago: a omissão como caminho de menor resistência. A diferença é que aqui o silêncio virou jurisprudência."
        }
    },
    {
        id: 7,
        title: "Licitação do litoral paulista: ancoragem e escassez artificial",
        chapter: 4,
        chapterTitle: "Vieses como Economia Neural",
        type: "publico",
        region: "sudeste",
        preview: "Uma prefeitura lançou uma licitação com laudo desatualizado em seis anos. O vencedor pagou 300% acima do valor de mercado e faliu em dois anos.",
        lesson: "A primeira oferta válida vira âncora pública. Combinada com escassez artificial de concorrentes, a pressão dispara impulsos competitivos irracionais.",
        fullContent: {
            context: "Uma prefeitura do litoral paulista lançou licitação com laudo desatualizado em seis anos. A primeira oferta válida virou âncora pública.",
            neuralBlock: "O córtex orbitofrontal congelou a valoração no primeiro número apresentado. O viés de escassez amplificou a aversão à perda relativa.",
            consequence: "O vencedor arrematou o bem por 300% acima do valor de mercado e faliu em dois anos. O Tribunal de Contas abriu inquérito por lesão ao erário.",
            neuralLesson: "O cérebro trata escassez como urgência, mesmo quando artificial. Sem fricção deliberada, a primeira âncora assume o volante.",
            whatBrainDid: "Sob pressão do prazo editalício, o dlPFC foi temporariamente desligado, transformando a competição em corrida de ego."
        }
    },
    {
        id: 8,
        title: "O herdeiro de Porto Alegre: custo irrecuperável em inventário",
        chapter: 4,
        chapterTitle: "Vieses como Economia Neural",
        type: "pedagogico",
        region: "sul",
        preview: "Um herdeiro gastou R$ 400 mil em honorários advocatícios para não perder um imóvel de R$ 800 mil. Ganhou a briga, mas perdeu o patrimônio.",
        lesson: "Tratar custo já gasto como parte do prêmio a ser recuperado é a falácia do custo irrecuperável em ação.",
        fullContent: {
            context: "Inventário em Porto Alegre: um herdeiro gastou R$ 400 mil em honorários para contestar a divisão de um imóvel avaliado em R$ 800 mil.",
            neuralBlock: "O córtex orbitofrontal ancorou a valoração no passado, tratando os R$ 400 mil não como custo afundado, mas como parte do prêmio a ser recuperado.",
            consequence: "O imóvel foi leiloado por R$ 800 mil. Após quitar credores, cada herdeiro recebeu apenas R$ 80 mil. O vínculo fraternal se rompeu definitivamente.",
            neuralLesson: "O cérebro superestima o que já foi investido e subestima o que ainda será gasto. A única saída é descolar a decisão da referência antiga.",
            whatBrainDid: "A amígdala ativou o medo de admitir a perda imediata. O cérebro ignorou os próximos R$ 300 mil de custo futuro."
        }
    },

    // Capítulo 5 - Movidos
    {
        id: 9,
        title: "O médico intensivista que interceptou uma dose triplicada",
        chapter: 5,
        chapterTitle: "Emoção, Estresse e o Sequestro da Amígdala",
        type: "pedagogico",
        region: "sul",
        preview: "No terceiro plantão consecutivo de 36h, um médico quase prescreveu dose triplicada de insulina. A pausa fisiológica salvou um paciente e evitou um processo.",
        lesson: "A pausa fisiológica (suspiro duplo) restaura a conectividade entre córtex pré-frontal e amígdala em segundos.",
        fullContent: {
            context: "Médico intensivista no Paraná, terceiro plantão consecutivo de 36h. Na troca de turno, quase assinou prescrição de insulina com dose triplicada.",
            neuralBlock: "A fadiga extrema elevou cortisol e noradrenalina a ponto de desconectar o dlPFC da amígdala. O freio executivo escapou.",
            consequence: "Ele percebeu o sinal somático (mão tremendo), aplicou o suspiro duplo, fez checagem cruzada com o enfermeiro-chefe e interceptou o erro.",
            neuralLesson: "O tremor nas mãos não era fraqueza — era o último aviso do ACC antes do colapso. A pausa fisiológica não é fraqueza, é neuroproteção.",
            whatBrainDid: "O suspiro duplo ativou o nervo vago, restaurou parcialmente a conectividade córtex-límbico e devolveu o freio executivo ao comando."
        }
    },
    {
        id: 10,
        title: "O caso Odebrecht: fading ético e groupthink institucional",
        chapter: 5,
        chapterTitle: "Emoção, Estresse e o Sequestro da Amígdala",
        type: "publico",
        region: "nacional",
        preview: "Como um departamento de propina foi normalizado como 'custo de negócio' em uma das maiores empreiteiras do Brasil — e o cérebro coletivo silenciou o alarme.",
        lesson: "O fading ético acontece quando o ACC coletivo é silenciado pela repetição de justificativas. O que era chocante no mês 1 vira 'normal' no mês 6.",
        fullContent: {
            context: "Durante anos, a Odebrecht operou com um departamento dedicado a pagamentos ilícitos, com planilhas, códigos internos e fluxos de aprovação formalizados.",
            neuralBlock: "O desvio não começou com má-fé explícita. Começou com a ilusão de atalho. Circuitos de recompensa social passaram a valorizar a harmonia do grupo acima do escrutínio ético.",
            consequence: "Operação Lava Jato (2016). Milhares de demissões, multas bilionárias no Brasil, EUA e Suíça, reestruturação forçada do conglomerado.",
            neuralLesson: "O groupthink não é fraqueza moral individual — é fenômeno neural coletivo. Sem fricção deliberada, o cérebro coletivo normaliza o desvio até que ele vire colapso.",
            whatBrainDid: "O ACC foi progressivamente silenciado pela unanimidade. O cérebro parou de enxergar o desvio como infração e passou a processá-lo como rotina operacional."
        }
    },

    // Capítulo 6 - Movido
    {
        id: 11,
        title: "O diretor da rede hoteleira e o viés de harmonia",
        chapter: 6,
        chapterTitle: "A Câmara de Eco Neural",
        type: "pedagogico",
        region: "sul",
        preview: "Em Curitiba, um diretor evitou confrontar irregularidades para 'manter o clima'. A harmonia artificial gerou incidente operacional com impacto regulatório.",
        lesson: "Harmonia artificial não é saúde organizacional — é colapso adiado. O atrito bem gerido não quebra times; os recalibra.",
        fullContent: {
            context: "Unidade corporativa em Curitiba/PR. Diretor optou por não escalar irregularidades em protocolos de segurança e conformidade trabalhista para 'manter o clima'.",
            neuralBlock: "Circuitos de recompensa relacional (vmPFC e amígdala) interpretaram o confronto como ameaça à pertença e ao status no grupo.",
            consequence: "Incidente operacional com impacto patrimonial e regulatório. Paralisia parcial da operação, custos corretivos elevados, questionamento de órgãos de fiscalização.",
            neuralLesson: "Quando uma cultura premia a concordância e penaliza o questionamento, o cérebro coletivo desliga seus circuitos de detecção de risco.",
            whatBrainDid: "Trocou o escrutínio pelo conforto da concordância, silenciou o alerta interno para preservar relações hierárquicas e automatizou a tolerância ao erro."
        }
    },

    // Capítulo 7 - Movido
    {
        id: 12,
        title: "O juiz do JEC de Itapema e o erro de rito",
        chapter: 7,
        chapterTitle: "O Custo da Omissão",
        type: "publico",
        region: "sul",
        preview: "Um comprador ingressou com ação complexa no Juizado Especial para 'ganhar tempo'. O juiz extinguiu a maior parte dos pedidos por incompetência do rito.",
        lesson: "Flexibilidade cognitiva é saber quando abandonar uma rota errada, absorver a perda e reconstruir a tese na arena correta.",
        fullContent: {
            context: "Adquirente de imóvel em Itapema (SC) entrou com ação no Juizado Especial (Lei 9.099/95) para resolver conflito com construtora, buscando rapidez e gratuidade.",
            neuralBlock: "O cérebro do autor operou sob o viés da eficiência imediata: o Juizado pareceu o atalho perfeito, ignorando a barreira da incompetência do rito.",
            consequence: "O juiz extinguiu a discussão sobre áreas comuns por falta de complexidade técnica, julgou os pedidos restantes improcedentes.",
            neuralLesson: "Diante do erro, o líder costuma dobrar a aposta para não admitir o equívoco. A flexibilidade cognitiva permite dizer: 'vou recuar e reconstruir'.",
            whatBrainDid: "A amígdala (frustração) tentou assumir, sugerindo recorrer. Mas o dlPFC foi ativado a tempo: abandonar a ação inadequada foi a escolha certa."
        }
    },

    // Capítulo 8 - Movidos
    {
        id: 13,
        title: "Enchentes de Blumenau 2008: desconto temporal institucional",
        chapter: 8,
        chapterTitle: "Efeito Dominó e Ondas Invisíveis",
        type: "publico",
        region: "sul",
        preview: "As enchentes que devastaram Blumenau em 2008 foram precedidas por décadas de omissão em políticas de prevenção. A 3ª Onda veio com a água.",
        lesson: "O desconto temporal hiperbólico institucional trata risco futuro como abstrato — até que ele se materializa em tragédia.",
        fullContent: {
            context: "As enchentes de 2008 em Blumenau (SC) causaram 135 mortes e mais de 80 mil desabrigados. Décadas de alertas de engenheiros foram ignoradas.",
            neuralBlock: "O cérebro coletivo da gestão pública priorizou obras visíveis de curto prazo em detrimento de prevenção estrutural de longo prazo.",
            consequence: "Tragédia anunciada. Mais de R$ 1 bilhão em prejuízos. Perdas de vidas e um trauma coletivo que dura gerações.",
            neuralLesson: "O futuro não chega com aviso prévio. Ele chega como consequência acumulada do que você escolheu ignorar hoje.",
            whatBrainDid: "O desconto temporal hiperbólico tratou a enchente como 'risco abstrato' até que a água subiu. A 1ª Onda das obras visíveis venceu a 3ª Onda da prevenção."
        }
    },

    // Capítulo 9 - Movidos
    {
        id: 14,
        title: "O empresário que culpou o mercado (negação como defesa)",
        chapter: 9,
        chapterTitle: "Erro, Culpa e Resiliência",
        type: "pedagogico",
        region: "sudeste",
        preview: "Um empresário de tecnologia perdeu R$ 2 milhões em uma expansão mal planejada. Em vez de aprender, culpou o mercado e repetiu o erro no ano seguinte.",
        lesson: "Negação ativa a amígdala e impede o prediction error. O erro cresce nas sombras. Quando explode, a consequência é devastadora.",
        fullContent: {
            context: "Empresário de tecnologia em São Paulo expandiu para três novos estados sem validação de mercado. Perdeu R$ 2 milhões. Culpou a concorrência.",
            neuralBlock: "A ativação da amígdala (ameaça à reputação) impediu o processamento do prediction error. O aprendizado foi bloqueado.",
            consequence: "No ano seguinte, repetiu a estratégia em outros dois estados. Perdeu mais R$ 1,5 milhão. A empresa quase faliu.",
            neuralLesson: "A negação não protege — adia a consequência e a amplifica. O erro não processado é erro repetido.",
            whatBrainDid: "O circuito de defesa (amígdala + evitação) foi ativado em vez do circuito de reavaliação (vmPFC + dlPFC)."
        }
    },
    {
        id: 15,
        title: "Caso Theranos: excesso de confiança como culpa tóxica",
        chapter: 9,
        chapterTitle: "Erro, Culpa e Resiliência",
        type: "internacional",
        region: "internacional",
        preview: "Elizabeth Holmes levantou US$ 900 milhões com uma tecnologia que não funcionava. O excesso de confiança cegou investidores, conselheiros e a própria fundadora.",
        lesson: "Excesso de confiança não é otimismo — é recusa ativa em processar prediction errors. O resultado é fraude ou colapso.",
        fullContent: {
            context: "Theranos prometeu revolucionar exames de sangue com uma gota. A tecnologia nunca funcionou, mas Holmes levantou US$ 900 milhões.",
            neuralBlock: "O viés de confirmação coletivo (investidores, conselho, imprensa) silenciou os alertas técnicos. O ACC de todos foi desligado pela narrativa sedutora.",
            consequence: "Falência. Holmes condenada a 11 anos de prisão. US$ 900 milhões evaporados. Lição global sobre excesso de confiança.",
            neuralLesson: "Quando o carisma sobrepõe a evidência, o cérebro coletivo prefere a narrativa confortável à verdade desconfortável.",
            whatBrainDid: "O estriado ventral (recompensa por fazer parte da 'próxima grande coisa') venceu o ACC (detector de inconsistências técnicas)."
        }
    },

    // Capítulo 10 - Movidos
    {
        id: 16,
        title: "Schrader Representações: 166 anos de governança familiar",
        chapter: 10,
        chapterTitle: "Frameworks e Andaimes",
        type: "publico",
        region: "sul",
        preview: "A empresa mais antiga do Vale do Itajaí (SC) completou 166 anos nas mãos da mesma família. O segredo? Sucessão planejada, valores claros e visão de longo prazo.",
        lesson: "Empresas longevas não são aquelas que nunca erram. São aquelas que institucionalizaram o Ciclo Virtuoso de Decisão Intencional.",
        fullContent: {
            context: "Fundada em 1859 em Blumenau, a Schrader Representações é a empresa mais antiga do Vale do Itajaí ainda em atividade, completando 166 anos em 2025.",
            neuralBlock: "A família institucionalizou a sucessão planejada, a separação entre propriedade e gestão, e a pergunta: 'Isso é bom para os próximos 50 anos?'",
            consequence: "Sobreviveu a crises, guerras, inflações, planos econômicos e mudanças de mercado. Enquanto 70% das empresas familiares não passam da 2ª geração, a Schrader está na 5ª.",
            neuralLesson: "O desconto temporal hiperbólico foi neutralizado por um framework de simulação geracional. O propósito como filtro decisório reduziu a fricção interna.",
            whatBrainDid: "vmPFC consolidado (valores familiares claros), hipocampo ativo (memória institucional preservada), dlPFC calibrado (deliberação sobre sucessão)."
        }
    },
    {
        id: 17,
        title: "Checklist da OMS: como 19 itens salvaram milhões de vidas",
        chapter: 10,
        chapterTitle: "Frameworks e Andaimes",
        type: "internacional",
        region: "internacional",
        preview: "O checklist cirúrgico da Organização Mundial da Saúde reduziu complicações pós-operatórias em 47% em hospitais ao redor do mundo.",
        lesson: "O checklist transfere a carga da memória de trabalho (limitada a 4±1 itens) para o ambiente. É offloading cognitivo em sua forma mais pura.",
        fullContent: {
            context: "Em 2008, a OMS lançou um checklist cirúrgico de 19 itens divididos em três momentos: antes da anestesia, antes da incisão, antes do paciente sair da sala.",
            neuralBlock: "O dlPFC (memória de trabalho) não precisa mais lembrar os 19 itens. O checklist externaliza a carga. O cérebro fica livre para monitorar anomalias.",
            consequence: "Estudo com 8.000 pacientes mostrou redução de 47% nas complicações pós-operatórias e de 36% na mortalidade. Adotado em hospitais do mundo todo.",
            neuralLesson: "Se não está escrito, não foi verificado. Se não foi verificado, não é seguro. O checklist não é para quem não sabe — é para quem sabe, mas é humano.",
            whatBrainDid: "O offloading cognitivo liberou o dlPFC da tarefa de memorizar e o redirecionou para a tarefa de monitorar."
        }
    },

    // Capítulo 11 - Movidos
    {
        id: 18,
        title: "Vital Brazil e o Instituto Butantan: propósito como legado",
        chapter: 11,
        chapterTitle: "Alinhamento com Valores e Propósito",
        type: "publico",
        region: "sudeste",
        preview: "O médico que desenvolveu o soro antiofídico no Brasil tinha uma escolha: patentear e ficar rico, ou liberar a produção para salvar vidas. Escolheu o legado.",
        lesson: "Propósito é recompensa intrínseca — dopamina + serotonina + opioides endógenos trabalhando juntos. O bem coletivo pode ser mais potente que o ganho pessoal.",
        fullContent: {
            context: "Em 1901, o médico Vital Brazil desenvolveu os primeiros soros antiofídicos eficazes do país no Instituto Butantan (SP). A descoberta tinha potencial comercial extraordinário.",
            neuralBlock: "O vmPFC de Vital Brazil priorizou o impacto social sobre o ganho pessoal. O ACC não detectou conflito — não havia dissonância entre sua identidade e sua escolha.",
            consequence: "A decisão de não patentear permitiu a replicação rápida da produção em todo o território nacional, reduzindo drasticamente a mortalidade por acidentes ofídicos.",
            neuralLesson: "Propósito não é retórica motivacional — é arquitetura de recompensa intrínseca. A dopamina de ver uma vida salva pode ser mais potente que a de um depósito bancário.",
            whatBrainDid: "Substituiu a valoração de ganho financeiro pela valoração de impacto social. O cérebro não escolheu o sacrifício; escolheu a economia cognitiva da coerência."
        }
    },
    {
        id: 19,
        title: "Cosan e Vale (2022): excesso de confiança em fusões",
        chapter: 11,
        chapterTitle: "Alinhamento com Valores e Propósito",
        type: "publico",
        region: "nacional",
        preview: "A tentativa de fusão entre Cosan e Vale em 2022 fracassou por excesso de confiança de ambos os lados. O valor de mercado combinado caiu bilhões.",
        lesson: "Excesso de confiança não é estratégia — é viés. O cérebro coletivo superestima sinergias e subestima atritos em negociações de alto risco.",
        fullContent: {
            context: "Em 2022, Cosan e Vale negociaram uma fusão que criaria uma das maiores empresas do Brasil. As negociações foram conduzidas com alto sigilo e pouca due diligence cruzada.",
            neuralBlock: "Ambos os lados operaram sob viés de excesso de confiança. O ACC de cada equipe foi desligado pela pressão por resultado e pelo medo de 'perder a oportunidade'.",
            consequence: "A fusão fracassou após vazamentos e desconfiança mútua. O valor de mercado combinado caiu bilhões. Executivos de ambos os lados foram demitidos.",
            neuralLesson: "O viés de excesso de confiança é amplificado em negociações de alto risco. O antídoto é a due diligence cruzada e o pré-mortem obrigatório.",
            whatBrainDid: "A amígdala (medo de perder a oportunidade) assumiu o comando. O dlPFC (análise racional de sinergias) foi desligado."
        }
    },
    {
        id: 20,
        title: "Nova Zelândia: políticas ambientais e a 3ª Onda",
        chapter: 11,
        chapterTitle: "Alinhamento com Valores e Propósito",
        type: "internacional",
        region: "internacional",
        preview: "A Nova Zelândia transformou 'ser verde' de slogan em política de estado. O resultado? Marca país valorizada, turismo aquecido, talento global atraído.",
        lesson: "Propósito não é custo — é investimento com ROI de longo prazo. A 3ª Onda do alinhamento de valores é confiança, reputação e resiliência.",
        fullContent: {
            context: "A Nova Zelândia adotou políticas ambientais agressivas: meta de carbono zero até 2050, rios com personalidade jurídica, proibição de plásticos descartáveis.",
            neuralBlock: "O país substituiu o desconto temporal hiperbólico (custo imediato das políticas) por simulação de 3ª Onda (reputação global, turismo, atração de talento).",
            consequence: "Marca país valorizada. Turismo aquecido. Atração de talento global. Empresas querem se associar à 'marca NZ'. ROI positivo em menos de uma década.",
            neuralLesson: "Quando propósito é institucionalizado como filtro decisório, o curto prazo deixa de roubar o futuro. A 3ª Onda vence o desconto hiperbólico.",
            whatBrainDid: "O hipocampo (simulação de cenários futuros) foi ativado consistentemente. O desconto temporal hiperbólico foi neutralizado por projeção de longo prazo."
        }
    },

    // Capítulo 12 - Movido
    {
        id: 21,
        title: "Magazine Luiza e a pausa estratégica de Luiza Trajano",
        chapter: 12,
        chapterTitle: "Viver com Intencionalidade",
        type: "publico",
        region: "sudeste",
        preview: "Enquanto concorrentes apagavam incêndios, Luiza Trajano institucionalizou blocos semanais de pausa estratégica. O resultado: transformação digital de sucesso.",
        lesson: "A pausa não atrasa a decisão — ela a torna biologicamente sustentável. O cérebro não aprende nem decide bem na correria; aprende na consolidação.",
        fullContent: {
            context: "No Magazine Luiza, a liderança institucionalizou blocos semanais de pausa estratégica. Nesses momentos, a diretoria desligava o modo operacional e apenas pensava.",
            neuralBlock: "A pausa forçou o desligamento do modo reativo (amígdala + eixo HPA) e ativou o modo de consolidação (hipocampo + dmPFC para simulação estratégica).",
            consequence: "Dessas pausas saíram investimentos críticos: consolidação da plataforma tech, expansão da logística própria, transformação digital bem-sucedida.",
            neuralLesson: "A intencionalidade exige pausa. O cérebro transfere memórias operacionais para memória de longo prazo durante o repouso ativo.",
            whatBrainDid: "Substituiu a reatividade crônica pela regulação intencional, desativou o circuito de urgência artificial e liberou o dlPFC da sobrecarga de microdecisões."
        }
    },
    {
        id: 22,
        title: "Ben & Jerry's, Uber e Patagonia: dissonância de valores",
        chapter: 12,
        chapterTitle: "Viver com Intencionalidade",
        type: "internacional",
        region: "internacional",
        preview: "Três empresas, três dissonâncias: o ativismo que virou marketing (Ben & Jerry's), a inovação que atropelou leis (Uber) e o propósito que virou vantagem competitiva (Patagonia).",
        lesson: "A distância entre valores declarados e praticados é a zona de fricção neural onde nascem o estresse crônico e o colapso reputacional.",
        fullContent: {
            context: "Ben & Jerry's (ativismo vs. venda para Unilever), Uber (disrupção vs. atropelo de leis trabalhistas), Patagonia (propósito ambiental consistente).",
            neuralBlock: "Ben & Jerry's: ACC ativado por dissonância entre ativismo declarado e estrutura corporativa real. Uber: ACC silenciado pela narrativa de 'inovação a qualquer custo'. Patagonia: vmPFC consolidado, decisões fluidas.",
            consequence: "Ben & Jerry's: acusações de greenwashing. Uber: processos trabalhistas globais, imagem manchada. Patagonia: crescimento sustentável, marca mais valiosa do setor.",
            neuralLesson: "A 3ª Onda do alinhamento (ou desalinhamento) de valores é a mais cara de todas: confiança, reputação, capacidade de atrair talento e capital.",
            whatBrainDid: "Patagonia: propósito consolidado no vmPFC coletivo → decisões fluidas. Uber: amígdala (medo de perder vantagem) sobrepôs o ACC. Ben & Jerry's: dissonância crônica."
        }
    }
];

// Global variables
let currentFilter = "all";
let currentSearch = "";

// DOM elements
const casesGrid = document.getElementById("casesGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("caseModal");
const modalBody = document.getElementById("modalBody");
const metodologiaModal = document.getElementById("metodologiaModal");
const glossarioModal = document.getElementById("glossarioModal");

// Helper: Get badge HTML based on case type
function getBadgeHTML(type) {
    if (type === "publico") {
        return '<span class="case-badge badge-public">📋 Caso Público</span>';
    } else if (type === "pedagogico") {
        return '<span class="case-badge badge-pedagogic">✍️ Composição Pedagógica</span>';
    } else if (type === "internacional") {
        return '<span class="case-badge badge-international">🌍 Internacional</span>';
    }
    return "";
}

// Helper: Get region icon
function getRegionIcon(region) {
    const icons = {
        "nacional": "🇧🇷",
        "sudeste": "📍 SP/RJ/MG/ES",
        "sul": "📍 PR/SC/RS",
        "nordeste": "📍 NE",
        "centro-oeste": "📍 CO",
        "internacional": "🌍"
    };
    return icons[region] || "📍";
}

// Render cases based on filter and search
function renderCases() {
    const filteredCases = casesData.filter(caseItem => {
        // Filter by type
        if (currentFilter !== "all" && caseItem.type !== currentFilter) {
            return false;
        }
        
        // Filter by search
        if (currentSearch) {
            const searchLower = currentSearch.toLowerCase();
            return caseItem.title.toLowerCase().includes(searchLower) ||
                   caseItem.lesson.toLowerCase().includes(searchLower) ||
                   caseItem.preview.toLowerCase().includes(searchLower);
        }
        
        return true;
    });

    if (filteredCases.length === 0) {
        casesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Nenhum caso encontrado com os filtros atuais.</p>
                <small>Tente outros termos ou limpe a busca.</small>
            </div>
        `;
        return;
    }

    casesGrid.innerHTML = filteredCases.map(caseItem => `
        <div class="case-card" data-id="${caseItem.id}">
            <div class="case-header">
                ${getBadgeHTML(caseItem.type)}
                <span class="case-chapter">Cap. ${caseItem.chapter}</span>
            </div>
            <div class="case-preview">
                <h3 class="case-title">${caseItem.title}</h3>
                <div class="case-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${getRegionIcon(caseItem.region)}</span>
                </div>
                <p>${caseItem.preview}</p>
                <div class="case-lesson">
                    <i class="fas fa-graduation-cap"></i> ${caseItem.lesson}
                </div>
            </div>
        </div>
    `).join("");

    // Add event listeners to cards
    document.querySelectorAll(".case-card").forEach(card => {
        card.addEventListener("click", () => {
            const id = parseInt(card.dataset.id);
            const caseItem = casesData.find(c => c.id === id);
            if (caseItem) {
                openCaseModal(caseItem);
            }
        });
    });
}

// Open modal with case details
function openCaseModal(caseItem) {
    const fc = caseItem.fullContent;
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${caseItem.title}</h2>
            <h3>Capítulo ${caseItem.chapter} — ${caseItem.chapterTitle}</h3>
            ${getBadgeHTML(caseItem.type)}
        </div>
        <div class="modal-body">
            <h4>📌 Contexto</h4>
            <p>${fc.context}</p>
            
            <h4>🧠 O bloqueio neural</h4>
            <p>${fc.neuralBlock}</p>
            
            <h4>⚡ Consequência</h4>
            <p>${fc.consequence}</p>
            
            <h4>🎓 Lição neural</h4>
            <p>${fc.neuralLesson}</p>
            
            <h4>🔬 O que o cérebro fez</h4>
            <p>${fc.whatBrainDid}</p>
            
            <hr>
            <p><small><i class="fas ${caseItem.type === 'publico' ? 'fa-gavel' : (caseItem.type === 'pedagogico' ? 'fa-pen-fancy' : 'fa-globe')}"></i> 
            ${caseItem.type === 'publico' ? 'Caso documentado em fontes públicas' : (caseItem.type === 'pedagogico' ? 'Composição pedagógica baseada em eventos reais' : 'Caso de referência internacional')}</small></p>
        </div>
    `;
    modal.style.display = "block";
}

// Search functionality
searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderCases();
});

// Filter functionality
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderCases();
    });
});

// Modal close functionality
document.querySelector(".modal-close")?.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
    if (e.target === metodologiaModal) {
        metodologiaModal.style.display = "none";
    }
    if (e.target === glossarioModal) {
        glossarioModal.style.display = "none";
    }
});

// Methodology and Glossary modals
document.getElementById("btn-metodologia")?.addEventListener("click", (e) => {
    e.preventDefault();
    metodologiaModal.style.display = "block";
});

document.getElementById("btn-glossario")?.addEventListener("click", (e) => {
    e.preventDefault();
    glossarioModal.style.display = "block";
});

document.querySelector(".modal-close-metodologia")?.addEventListener("click", () => {
    metodologiaModal.style.display = "none";
});

document.querySelector(".modal-close-glossario")?.addEventListener("click", () => {
    glossarioModal.style.display = "none";
});

// Initial render
renderCases();
