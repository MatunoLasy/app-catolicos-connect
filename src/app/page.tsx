"use client";

import { useState } from "react";
import { 
  Sparkles, 
  BookOpen, 
  Church, 
  Heart, 
  MessageCircle, 
  Calendar,
  ChevronRight,
  Menu,
  X,
  Clock,
  Users,
  CheckCircle2,
  Star,
  Quote,
  Send,
  ThumbsUp,
  Reply,
  ChevronDown,
  AlertCircle,
  Info
} from "lucide-react";

export default function CatolicosConnect() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [expandedRitual, setExpandedRitual] = useState<number | null>(null);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Maria Silva",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      time: "2 horas atrás",
      text: "Que bênção encontrar esta comunidade! Estou aprendendo muito sobre nossa fé católica. Que Deus abençoe a todos! 🙏",
      likes: 12,
      replies: 3
    },
    {
      id: 2,
      author: "João Santos",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      time: "5 horas atrás",
      text: "Alguém pode me recomendar uma boa leitura sobre a história dos santos? Estou querendo aprofundar meus conhecimentos.",
      likes: 8,
      replies: 5
    },
    {
      id: 3,
      author: "Ana Costa",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      time: "1 dia atrás",
      text: "Participei da missa hoje e consegui acompanhar todos os ritos graças ao guia daqui. Muito obrigada por esse recurso maravilhoso! ✨",
      likes: 24,
      replies: 7
    },
    {
      id: 4,
      author: "Pedro Oliveira",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      time: "1 dia atrás",
      text: "Gostaria de compartilhar um versículo que me tocou hoje: 'Tudo posso naquele que me fortalece' (Filipenses 4:13). Que possamos sempre confiar em Deus! 💪",
      likes: 18,
      replies: 4
    },
    {
      id: 5,
      author: "Carla Mendes",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      time: "2 dias atrás",
      text: "Estou organizando um grupo de oração online toda terça às 20h. Quem tiver interesse, me avise nos comentários! 🕊️",
      likes: 31,
      replies: 12
    }
  ]);

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "História da Igreja",
      description: "Linha do tempo interativa de 2000 anos de fé",
    },
    {
      icon: <Church className="w-6 h-6" />,
      title: "Ritos da Missa",
      description: "Guia visual completo dos rituais sagrados",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Versículos Diários",
      description: "Inspiração renovada todos os dias",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Comunidade Ativa",
      description: "Conecte-se com católicos do mundo todo",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      text: "O Católicos Connect transformou minha vida espiritual! A linha do tempo histórica me ajudou a entender melhor nossa fé.",
      plan: "Usuária Gratuita"
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro, RJ",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      text: "Incrível! Os versículos diários me inspiram todas as manhãs. A comunidade é acolhedora e edificante.",
      plan: "Usuário Gratuito"
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte, MG",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      text: "Melhor plataforma que encontrei! O guia de ritos me ajudou a participar da missa com mais consciência e devoção.",
      plan: "Usuária Gratuita"
    },
    {
      name: "Pedro Oliveira",
      location: "Brasília, DF",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
      text: "Plataforma excepcional! Recomendo para todos que querem aprofundar sua fé católica de forma moderna.",
      plan: "Usuário Gratuito"
    },
    {
      name: "Carla Mendes",
      location: "Porto Alegre, RS",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      rating: 5,
      text: "A comunidade online é maravilhosa! Encontrei pessoas que compartilham os mesmos valores e crescemos juntos na fé.",
      plan: "Usuária Gratuita"
    },
    {
      name: "Lucas Ferreira",
      location: "Curitiba, PR",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      rating: 5,
      text: "Design impecável e conteúdo de qualidade. Totalmente gratuito! Minha família toda usa agora.",
      plan: "Usuário Gratuito"
    }
  ];

  const timeline = [
    { 
      year: "33 d.C.", 
      event: "Pentecostes - Nascimento da Igreja", 
      description: "Descida do Espírito Santo sobre os Apóstolos reunidos com Maria no Cenáculo. Início da pregação apostólica e conversão de milhares." 
    },
    { 
      year: "64-67 d.C.", 
      event: "Martírio de São Pedro e São Paulo", 
      description: "Perseguição de Nero em Roma. Pedro crucificado de cabeça para baixo e Paulo decapitado. Fundação da sucessão apostólica." 
    },
    { 
      year: "313 d.C.", 
      event: "Édito de Milão", 
      description: "Imperador Constantino concede liberdade religiosa aos cristãos, encerrando três séculos de perseguições no Império Romano." 
    },
    { 
      year: "325 d.C.", 
      event: "Concílio de Niceia", 
      description: "Primeiro concílio ecumênico da Igreja. Definição da divindade de Cristo e formulação do Credo Niceno contra o arianismo." 
    },
    { 
      year: "380 d.C.", 
      event: "Cristianismo como Religião Oficial", 
      description: "Édito de Tessalônica: Imperador Teodósio I declara o cristianismo como religião oficial do Império Romano." 
    },
    { 
      year: "431 d.C.", 
      event: "Concílio de Éfeso", 
      description: "Definição de Maria como Theotokos (Mãe de Deus). Condenação do nestorianismo e afirmação da união hipostática de Cristo." 
    },
    { 
      year: "476 d.C.", 
      event: "Queda do Império Romano do Ocidente", 
      description: "A Igreja assume papel central na preservação da cultura e civilização ocidental durante a Idade Média." 
    },
    { 
      year: "529 d.C.", 
      event: "Fundação de Monte Cassino", 
      description: "São Bento funda o mosteiro e estabelece a Regra Beneditina, base do monasticismo ocidental e preservação do conhecimento." 
    },
    { 
      year: "800 d.C.", 
      event: "Coroação de Carlos Magno", 
      description: "Papa Leão III coroa Carlos Magno como Imperador, estabelecendo o Sacro Império Romano e a aliança entre Igreja e Estado." 
    },
    { 
      year: "1054", 
      event: "Grande Cisma do Oriente", 
      description: "Separação definitiva entre Igreja Católica Romana e Igreja Ortodoxa Oriental devido a divergências teológicas e políticas." 
    },
    { 
      year: "1095", 
      event: "Primeira Cruzada", 
      description: "Papa Urbano II convoca a Primeira Cruzada para libertar a Terra Santa. Início de dois séculos de expedições militares." 
    },
    { 
      year: "1209", 
      event: "Fundação da Ordem Franciscana", 
      description: "São Francisco de Assis funda a Ordem dos Frades Menores, renovando a vida religiosa com ênfase na pobreza evangélica." 
    },
    { 
      year: "1215", 
      event: "IV Concílio de Latrão", 
      description: "Definição da transubstanciação eucarística e estabelecimento da confissão anual obrigatória. Maior concílio medieval." 
    },
    { 
      year: "1232", 
      event: "Estabelecimento da Inquisição", 
      description: "Papa Gregório IX institui a Inquisição Papal para combater heresias, especialmente o catarismo no sul da França." 
    },
    { 
      year: "1378-1417", 
      event: "Grande Cisma do Ocidente", 
      description: "Período com dois ou três papas simultâneos (Roma, Avignon). Resolvido pelo Concílio de Constança com eleição de Martinho V." 
    },
    { 
      year: "1492", 
      event: "Descobrimento da América", 
      description: "Início da evangelização do Novo Mundo. Expansão missionária católica nas Américas, África e Ásia." 
    },
    { 
      year: "1517", 
      event: "Reforma Protestante", 
      description: "Martinho Lutero publica as 95 Teses em Wittenberg, iniciando a Reforma Protestante e divisão do cristianismo ocidental." 
    },
    { 
      year: "1534", 
      event: "Fundação da Companhia de Jesus", 
      description: "Santo Inácio de Loyola funda os Jesuítas, ordem fundamental na Contrarreforma e nas missões globais." 
    },
    { 
      year: "1545-1563", 
      event: "Concílio de Trento", 
      description: "Resposta católica à Reforma Protestante. Reafirmação doutrinal, reforma disciplinar e renovação da vida eclesial." 
    },
    { 
      year: "1582", 
      event: "Reforma do Calendário Gregoriano", 
      description: "Papa Gregório XIII promulga o calendário gregoriano, corrigindo o calendário juliano e estabelecendo o sistema atual." 
    },
    { 
      year: "1789", 
      event: "Revolução Francesa", 
      description: "Início de perseguições à Igreja na França. Secularização de bens eclesiásticos e tentativa de criar Igreja Nacional." 
    },
    { 
      year: "1854", 
      event: "Dogma da Imaculada Conceição", 
      description: "Papa Pio IX define como dogma que Maria foi concebida sem pecado original, preparando-a para ser Mãe de Deus." 
    },
    { 
      year: "1869-1870", 
      event: "Concílio Vaticano I", 
      description: "Definição da infalibilidade papal e primado do Papa. Interrompido pela unificação italiana e tomada de Roma." 
    },
    { 
      year: "1917", 
      event: "Aparições de Fátima", 
      description: "Nossa Senhora aparece a três pastorinhos em Portugal, com mensagens de oração, penitência e consagração ao Imaculado Coração." 
    },
    { 
      year: "1929", 
      event: "Tratado de Latrão", 
      description: "Criação do Estado da Cidade do Vaticano. Acordo entre Santa Sé e Itália, garantindo independência territorial ao Papa." 
    },
    { 
      year: "1950", 
      event: "Dogma da Assunção de Maria", 
      description: "Papa Pio XII define como dogma que Maria foi elevada ao céu em corpo e alma ao fim de sua vida terrena." 
    },
    { 
      year: "1962-1965", 
      event: "Concílio Vaticano II", 
      description: "Maior concílio da história. Renovação litúrgica, abertura ao mundo moderno, ecumenismo e valorização dos leigos." 
    },
    { 
      year: "1978", 
      event: "Eleição de João Paulo II", 
      description: "Primeiro papa não-italiano em 455 anos. Pontificado de 27 anos marcado por viagens, juventude e queda do comunismo." 
    },
    { 
      year: "1992", 
      event: "Catecismo da Igreja Católica", 
      description: "Publicação do novo Catecismo universal, síntese completa da doutrina católica para o mundo contemporâneo." 
    },
    { 
      year: "2000", 
      event: "Grande Jubileu", 
      description: "Ano Santo celebrando 2000 anos do nascimento de Cristo. João Paulo II pede perdão por pecados históricos da Igreja." 
    },
    { 
      year: "2013", 
      event: "Papa Francisco", 
      description: "Jorge Mario Bergoglio eleito primeiro papa jesuíta, latino-americano e com nome Francisco. Ênfase nos pobres e misericórdia." 
    },
    { 
      year: "2015", 
      event: "Encíclica Laudato Si'", 
      description: "Papa Francisco publica encíclica sobre ecologia integral, cuidado da criação e responsabilidade ambiental." 
    },
    { 
      year: "2023", 
      event: "Sínodo sobre Sinodalidade", 
      description: "Processo sinodal global sobre comunhão, participação e missão. Reflexão sobre o futuro da Igreja no século XXI." 
    }
  ];

  const rituals = [
    {
      title: "Ritos Iniciais",
      subtitle: "Preparação e Acolhida da Assembleia",
      description: "Os Ritos Iniciais preparam a assembleia para ouvir a Palavra de Deus e celebrar dignamente a Eucaristia. É o momento de nos unirmos como comunidade e nos dispormos ao encontro com o Senhor.",
      icon: <Church className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      steps: [
        {
          name: "Entrada do Padre e dos Ministros",
          explanation: "É quando o padre e os ajudantes entram na igreja, geralmente cantando. Todo mundo fica de pé pra receber eles. É tipo dar as boas-vindas e começar a celebração juntos.",
          significance: "Mostra que estamos todos juntos caminhando em direção a Deus"
        },
        {
          name: "Saudação Inicial",
          explanation: "O padre dá um 'oi' especial pra gente, dizendo 'O Senhor esteja convosco'. A gente responde 'Ele está no meio de nós'. É tipo confirmar que Jesus tá ali com a gente mesmo.",
          significance: "Reconhece que Jesus está presente quando nos reunimos"
        },
        {
          name: "Reconhecer Nossos Erros",
          explanation: "Momento de lembrar que a gente erra e pedir perdão a Deus. Pode ser aquela oração 'Confesso a Deus' ou outra parecida. É tipo limpar o coração antes de continuar.",
          significance: "Prepara nosso coração pra encontrar com Deus de verdade"
        },
        {
          name: "Glória",
          explanation: "Um hino bem antigo de louvor a Deus Pai, Filho e Espírito Santo. A gente canta ou reza aos domingos (menos no Advento e Quaresma) e em festas especiais. É tipo um 'parabéns' pra Deus!",
          significance: "Expressa nossa alegria e gratidão a Deus"
        },
        {
          name: "Oração do Dia",
          explanation: "O padre faz uma oração juntando as intenções de todo mundo ali presente. Varia conforme o dia ou a festa que tá sendo celebrada. Depois todo mundo responde 'Amém' e senta pra ouvir a Palavra.",
          significance: "Une todos nós numa só oração a Deus"
        }
      ]
    },
    {
      title: "Liturgia da Palavra",
      subtitle: "Deus Fala ao Seu Povo",
      description: "Na Liturgia da Palavra, Deus fala ao seu povo e Cristo anuncia o Evangelho. A assembleia escuta com fé e responde com cânticos, profissão de fé e oração universal. É a mesa da Palavra que alimenta nossa fé.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      steps: [
        {
          name: "Primeira Leitura",
          explanation: "Normalmente é uma história do Antigo Testamento (ou dos Atos dos Apóstolos na Páscoa). Alguém lê do ambão mostrando como Deus agiu na história. É Deus falando com a gente através dessas histórias antigas.",
          significance: "Mostra como Deus sempre cuidou do seu povo ao longo da história"
        },
        {
          name: "Salmo",
          explanation: "É tipo uma resposta cantada à leitura que acabamos de ouvir. Geralmente é tirado do livro dos Salmos da Bíblia. O salmista canta os versículos e a gente responde com um refrão. É nossa forma de rezar cantando.",
          significance: "Nossa resposta de oração ao que Deus acabou de nos falar"
        },
        {
          name: "Segunda Leitura",
          explanation: "Aos domingos e festas, tem essa segunda leitura das cartas dos apóstolos ou do Apocalipse. Traz ensinamentos práticos pra nossa vida cristã. Mostra como os primeiros cristãos viviam o Evangelho no dia a dia.",
          significance: "Ensina como viver o Evangelho na prática"
        },
        {
          name: "Evangelho",
          explanation: "É o momento mais importante! Só o padre ou diácono pode ler. Todo mundo fica de pé em respeito. Antes tem o Aleluia (menos na Quaresma). É Jesus mesmo falando com a gente. Muita gente faz o sinal da cruz na testa, boca e peito.",
          significance: "Cristo fala diretamente com a gente através de suas palavras"
        },
        {
          name: "Homilia (Explicação)",
          explanation: "O padre explica as leituras de um jeito que faça sentido pra nossa vida hoje. Não é uma aula chata, é pra tocar nosso coração e nos fazer pensar em como viver melhor como cristãos.",
          significance: "Ajuda a entender como aplicar a Palavra de Deus no nosso dia a dia"
        },
        {
          name: "Creio (Profissão de Fé)",
          explanation: "Aos domingos e festas, a gente reza o Creio juntos. É tipo dizer 'eu acredito nisso tudo' depois de ouvir a Palavra. Todo mundo fica de pé e proclama junto as verdades da nossa fé.",
          significance: "Afirmamos publicamente nossa fé no que acabamos de ouvir"
        },
        {
          name: "Oração dos Fiéis",
          explanation: "A gente reza pela Igreja, pelos governantes, pelos necessitados e pela nossa comunidade. O padre introduz, alguém lê as intenções e todo mundo responde junto. É tipo interceder pelos outros.",
          significance: "Exercemos nosso papel de rezar pelo mundo inteiro"
        }
      ]
    },
    {
      title: "Liturgia Eucarística",
      subtitle: "Memorial do Sacrifício de Cristo",
      description: "A Liturgia Eucarística é o coração e ápice da celebração. Nela, o sacrifício de Cristo na cruz se torna presente de modo sacramental. O pão e o vinho se tornam verdadeiramente o Corpo e Sangue de Cristo, e somos convidados ao banquete celestial.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      steps: [
        {
          name: "Apresentação das Oferendas",
          explanation: "O povo traz o pão e o vinho que vão ser consagrados, junto com ofertas pra Igreja e pros pobres. É tipo oferecer nossa vida a Deus. O padre prepara o altar e apresenta as oferendas com orações de bênção.",
          significance: "Oferecemos nossa vida junto com o pão e vinho"
        },
        {
          name: "Oração sobre as Oferendas",
          explanation: "Uma oração curtinha que fecha a preparação das oferendas. O padre pede que Deus aceite os dons apresentados e os transforme. Todo mundo responde 'Amém'.",
          significance: "Pedimos que Deus aceite e transforme nossas ofertas"
        },
        {
          name: "Prefácio e Santo",
          explanation: "O padre dialoga com a gente ('Corações ao alto... Demos graças ao Senhor') e proclama as maravilhas de Deus. Termina com todo mundo cantando 'Santo, Santo, Santo', se unindo ao louvor dos anjos no céu.",
          significance: "Elevamos nossos corações em gratidão e nos unimos ao louvor celestial"
        },
        {
          name: "Oração Eucarística",
          explanation: "É a grande oração de ação de graças. Inclui invocar o Espírito Santo, as palavras da consagração, lembrar a Páscoa de Cristo e intercessões. Neste momento, pelo poder do Espírito Santo, o pão e o vinho se tornam o Corpo e Sangue de Jesus.",
          significance: "O pão e o vinho se tornam verdadeiramente Jesus"
        },
        {
          name: "Consagração",
          explanation: "O momento mais sagrado! O padre, agindo como Cristo, pronuncia as palavras: 'Isto é o meu Corpo... Este é o cálice do meu Sangue'. O pão e o vinho se transformam realmente em Jesus, mas continuam parecendo pão e vinho.",
          significance: "Jesus se torna real e presente no pão e no vinho"
        },
        {
          name: "Aclamação Memorial",
          explanation: "Depois da consagração, o padre diz 'Eis o mistério da fé!' e a gente aclama proclamando a morte, ressurreição e volta de Cristo. É nossa profissão de fé no mistério que acabamos de presenciar.",
          significance: "Proclamamos nossa fé no mistério que acabou de acontecer"
        },
        {
          name: "Doxologia Final e Amém",
          explanation: "O padre conclui a Oração Eucarística elevando o pão e o cálice e proclamando: 'Por Cristo, com Cristo, em Cristo... toda a honra e toda a glória'. A gente responde com o 'Grande Amém', concordando com tudo.",
          significance: "Confirmamos com nosso Amém toda a grande oração"
        },
        {
          name: "Pai Nosso",
          explanation: "A oração que Jesus nos ensinou. É preparação pra comunhão, pedindo o pão de cada dia (também o Pão Eucarístico) e perdão. O padre introduz e todos rezam juntos.",
          significance: "Rezamos como Jesus nos ensinou, nos preparando pra recebê-Lo"
        },
        {
          name: "Abraço da Paz",
          explanation: "O padre deseja a paz de Cristo e convida a gente a trocar um gesto de paz com quem tá perto. Pode ser um aperto de mão, abraço ou aceno. Mostra que devemos estar em paz antes de comungar.",
          significance: "Expressamos a união fraterna antes de comungar do mesmo Pão"
        },
        {
          name: "Partir o Pão",
          explanation: "O padre parte a hóstia consagrada. Esse gesto deu nome à Eucaristia nos primeiros tempos ('partir o pão'). Mostra que, mesmo sendo muitos, formamos um só corpo ao comungar do mesmo Pão. Nesse momento canta-se o 'Cordeiro de Deus'.",
          significance: "Simboliza a unidade: um só Pão, um só Corpo"
        },
        {
          name: "Comunhão",
          explanation: "Momento de união íntima com Jesus. O padre apresenta o Corpo de Cristo e todos respondem reconhecendo que não são dignos. A gente se aproxima em fila, recebe Jesus (na boca ou na mão) e responde 'Amém'. É encontro pessoal com o Senhor.",
          significance: "União íntima e pessoal com Jesus, alimento pra vida eterna"
        },
        {
          name: "Oração após a Comunhão",
          explanation: "Depois de um tempo de silêncio pra agradecer, o padre faz uma oração pedindo que os frutos da Eucaristia se manifestem em nossa vida. É pedir que o sacramento recebido produza frutos de santidade.",
          significance: "Pedimos que a Eucaristia transforme nossa vida e produza frutos"
        }
      ]
    },
    {
      title: "Ritos Finais",
      subtitle: "Envio em Missão",
      description: "Os Ritos Finais são breves mas significativos. Recebemos a bênção de Deus e somos enviados para viver e anunciar o Evangelho no mundo. A Missa não termina na igreja, mas continua em nossa vida diária.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      steps: [
        {
          name: "Avisos (se necessário)",
          explanation: "Momento pra comunicar coisas importantes sobre a vida da comunidade. Devem ser breves e relacionados à vida da Igreja. Não é hora pra assuntos que não têm a ver com a celebração.",
          significance: "Mantém a comunidade informada sobre a vida da paróquia"
        },
        {
          name: "Bênção Final",
          explanation: "O padre abençoa todo mundo em nome da Santíssima Trindade. Pode ser a bênção simples ou solene (em dias especiais). Ao fazer o sinal da cruz, recebemos a força de Deus pra viver como cristãos no mundo.",
          significance: "Recebemos a força e proteção de Deus pra nossa missão no mundo"
        },
        {
          name: "Despedida e Envio",
          explanation: "O diácono ou padre despede a gente com frases como 'Ide em paz' ou 'Glorificai o Senhor com vossa vida. Ide em paz'. A gente responde 'Graças a Deus'. Não é só tchau, é envio missionário: somos enviados pra levar Cristo ao mundo.",
          significance: "Somos enviados pra viver e anunciar o Evangelho no nosso dia a dia"
        },
        {
          name: "Beijo do Altar e Saída",
          explanation: "O padre beija o altar (que representa Cristo) e, junto com os ministros, sai em procissão ao som do canto final. Esse canto expressa a alegria de ter celebrado e fortalece nossa disposição missionária.",
          significance: "Saímos fortalecidos e alegres pra sermos testemunhas de Cristo"
        }
      ]
    }
  ];

  const guidelines = {
    preparacao: [
      {
        title: "Chegar com antecedência",
        description: "Chegue pelo menos 10-15 minutos antes para se preparar espiritualmente, fazer silêncio interior e dispor o coração para o encontro com Deus.",
        importance: "Permite transição do mundo exterior para o sagrado"
      },
      {
        title: "Vestir-se adequadamente",
        description: "Use roupas modestas e respeitosas que demonstrem reverência ao lugar sagrado. Evite decotes profundos, shorts muito curtos, roupas transparentes ou provocativas.",
        importance: "Expressa respeito pela casa de Deus e pela comunidade"
      },
      {
        title: "Fazer genuflexão",
        description: "Ao entrar e sair do banco, faça genuflexão (dobrar o joelho direito até o chão) em direção ao sacrário, reconhecendo a presença real de Cristo na Eucaristia.",
        importance: "Gesto de adoração e reconhecimento da presença de Cristo"
      },
      {
        title: "Silenciar dispositivos",
        description: "Desligue completamente ou coloque no modo silencioso celulares, smartwatches e outros dispositivos eletrônicos antes de entrar na igreja.",
        importance: "Evita distrações e mantém o ambiente de oração"
      }
    ],
    participacao: [
      {
        title: "Participar ativamente",
        description: "Cante os hinos, responda às orações, acompanhe as leituras e participe de todos os momentos litúrgicos com atenção e devoção.",
        importance: "A missa é celebração comunitária, não assistência passiva"
      },
      {
        title: "Manter postura corporal adequada",
        description: "Fique de pé nos momentos indicados (Evangelho, Oração Eucarística), sentado para as leituras e homilia, e ajoelhado na consagração.",
        importance: "O corpo também reza e expressa nossa atitude interior"
      },
      {
        title: "Comungar em estado de graça",
        description: "Receba a comunhão apenas se estiver em estado de graça (sem pecado mortal). Se necessário, confesse-se antes. Mantenha jejum eucarístico de 1 hora.",
        importance: "Respeito ao Sacramento e à própria alma"
      },
      {
        title: "Fazer ação de graças",
        description: "Após comungar, permaneça em oração silenciosa agradecendo a Jesus presente em você. Este é momento precioso de intimidade com o Senhor.",
        importance: "Aproveita o momento único da presença de Cristo em nós"
      }
    ],
    evitar: [
      {
        title: "Conversas durante a celebração",
        description: "Não converse durante a missa, exceto para responder às orações litúrgicas. Mantenha silêncio respeitoso antes, durante e após a celebração.",
        reason: "Distrai você, os outros e desrespeita o momento sagrado"
      },
      {
        title: "Sair antes do término",
        description: "Não saia da missa antes da bênção final e do canto de saída, exceto em caso de real necessidade (emergência, mal-estar).",
        reason: "A missa é um todo indivisível; sair antes é falta de respeito"
      },
      {
        title: "Comer ou mascar chiclete",
        description: "Não coma, beba (exceto água para necessidade) ou masque chiclete dentro da igreja, especialmente durante a celebração.",
        reason: "Quebra o jejum eucarístico e demonstra falta de reverência"
      },
      {
        title: "Usar celular",
        description: "Não use o celular para mensagens, redes sociais ou fotos durante a missa. Se precisar anotar algo, use papel e caneta.",
        reason: "Tira sua atenção do essencial e distrai os outros"
      },
      {
        title: "Tirar fotos em momentos sagrados",
        description: "Evite fotografar durante a consagração, comunhão e outros momentos de profunda oração. Se permitido, fotografe apenas antes ou depois da missa.",
        reason: "Momentos sagrados exigem presença plena, não registro"
      },
      {
        title: "Cruzar as pernas de forma desrespeitosa",
        description: "Evite posturas corporais desleixadas ou desrespeitosas, especialmente durante a consagração e momentos mais solenes.",
        reason: "O corpo deve expressar reverência e atenção"
      }
    ],
    criancas: [
      {
        title: "Preparar as crianças",
        description: "Explique às crianças antes da missa o que vão vivenciar, a importância do silêncio e do respeito. Traga livros religiosos apropriados para crianças pequenas.",
        importance: "Educação litúrgica desde cedo forma católicos conscientes"
      },
      {
        title: "Sentar estrategicamente",
        description: "Com crianças pequenas, sente-se próximo à saída para poder sair rapidamente se necessário, sem perturbar os outros.",
        importance: "Facilita gestão de situações inesperadas"
      },
      {
        title: "Sair se necessário",
        description: "Se a criança chorar muito ou ficar muito agitada, saia temporariamente para acalmá-la e retorne quando possível.",
        importance: "Respeito aos outros fiéis e à celebração"
      }
    ],
    comunhao: [
      {
        title: "Fila organizada",
        description: "Aguarde sua vez na fila da comunhão com postura reverente, mãos postas ou em oração. Mantenha distância respeitosa da pessoa à frente.",
        importance: "Ordem e reverência no momento mais sagrado"
      },
      {
        title: "Forma de receber",
        description: "Pode receber na boca (língua estendida) ou na mão (mão esquerda sobre a direita, formando 'trono'). Se na mão, consuma imediatamente na frente do ministro.",
        importance: "Respeito ao Sacramento e às normas litúrgicas"
      },
      {
        title: "Responder 'Amém'",
        description: "Quando o ministro disser 'O Corpo de Cristo', responda claramente 'Amém' - sua profissão de fé na presença real de Jesus.",
        importance: "Afirmação consciente de fé no mistério eucarístico"
      },
      {
        title: "Não comungar se impedido",
        description: "Se não está em estado de graça, não é católico, ou não fez primeira comunhão, permaneça no banco em oração ou vá à frente para receber bênção (braços cruzados no peito).",
        importance: "Honestidade e respeito ao Sacramento"
      }
    ]
  };

  const biblicalVerses = [
    {
      text: "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim.",
      reference: "João 14:6",
      theme: "Fé",
      context: "Jesus revela sua identidade divina e o caminho único para Deus"
    },
    {
      text: "Tudo posso naquele que me fortalece.",
      reference: "Filipenses 4:13",
      theme: "Força",
      context: "Paulo testemunha sobre a força que vem de Cristo em todas as circunstâncias"
    },
    {
      text: "Amarás o Senhor teu Deus de todo o teu coração, de toda a tua alma e de todo o teu entendimento.",
      reference: "Mateus 22:37",
      theme: "Amor",
      context: "Jesus ensina o maior mandamento da Lei"
    },
    {
      text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
      reference: "João 3:16",
      theme: "Salvação",
      context: "O versículo mais conhecido da Bíblia sobre o amor redentor de Deus"
    },
    {
      text: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.",
      reference: "Isaías 41:10",
      theme: "Confiança",
      context: "Deus promete sua presença constante e proteção ao seu povo"
    },
    {
      text: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
      reference: "Mateus 11:28",
      theme: "Descanso",
      context: "Jesus convida os sobrecarregados a encontrar alívio nele"
    },
    {
      text: "O Senhor é o meu pastor; nada me faltará.",
      reference: "Salmo 23:1",
      theme: "Providência",
      context: "Davi expressa confiança total no cuidado de Deus"
    },
    {
      text: "Alegrai-vos sempre no Senhor; outra vez digo, alegrai-vos.",
      reference: "Filipenses 4:4",
      theme: "Alegria",
      context: "Paulo exorta à alegria constante fundamentada em Cristo"
    },
    {
      text: "Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles.",
      reference: "Mateus 18:20",
      theme: "Comunhão",
      context: "Jesus promete sua presença na comunidade reunida"
    },
    {
      text: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.",
      reference: "1 Pedro 5:7",
      theme: "Paz",
      context: "Pedro ensina sobre confiar nossas preocupações a Deus"
    },
    {
      text: "Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá.",
      reference: "João 11:25",
      theme: "Esperança",
      context: "Jesus revela seu poder sobre a morte antes de ressuscitar Lázaro"
    },
    {
      text: "Bem-aventurados os puros de coração, porque eles verão a Deus.",
      reference: "Mateus 5:8",
      theme: "Pureza",
      context: "Uma das bem-aventuranças do Sermão da Montanha"
    }
  ];

  // Função para redirecionar para autenticação
  const goToAuth = () => {
    window.location.href = '/auth';
  };

  // Função para adicionar comentário
  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "Você",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        time: "Agora",
        text: newComment,
        likes: 0,
        replies: 0
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  const renderHome = () => (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00FF7F]/5 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00FF7F]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00FF7F]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FF7F]/10 border border-[#00FF7F]/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#00FF7F]" />
            <span className="text-sm text-[#00FF7F] font-medium">Plataforma 100% Gratuita para Católicos</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Católicos
            <span className="block bg-gradient-to-r from-[#00FF7F] to-[#00FF7F]/60 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Sua jornada de fé em uma plataforma moderna. História, ritos, versículos e uma comunidade vibrante. Totalmente gratuito!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              onClick={() => setShowTestimonials(true)}
              className="px-8 py-4 bg-white/5 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#00FF7F]/30"
            >
              Saiba Mais
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { value: "2000+", label: "Anos de História" },
              { value: "50K+", label: "Usuários Ativos" },
              { value: "365", label: "Versículos/Ano" },
              { value: "100%", label: "Gratuito" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-[#00FF7F]">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (aparece quando clicar em "Saiba Mais") */}
      {showTestimonials && (
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-transparent via-[#00FF7F]/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                O Que Nossos <span className="text-[#00FF7F]\">Usuários Dizem</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Milhares de católicos já transformaram sua jornada de fé com o Católicos Connect
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#00FF7F]/30 transition-all duration-300 hover:scale-105 space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#00FF7F]/30"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#00FF7F] text-[#00FF7F]" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#00FF7F]/20" />
                    <p className="text-gray-300 italic pl-6">"{testimonial.text}"</p>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <span className="text-sm text-[#00FF7F] font-medium">{testimonial.plan}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Recursos <span className="text-[#00FF7F]\">Gratuitos</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tudo que você precisa para aprofundar sua fé e se conectar com a comunidade católica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#00FF7F]/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00FF7F]/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF7F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative space-y-4">
                  <div className="w-12 h-12 bg-[#00FF7F]/10 rounded-xl flex items-center justify-center text-[#00FF7F] group-hover:bg-[#00FF7F]/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#00FF7F]/10 to-transparent border border-[#00FF7F]/20 rounded-3xl p-12 sm:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF7F]/10 rounded-full blur-3xl" />
            <div className="relative space-y-8 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Pronto para começar sua jornada?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Junte-se a milhares de católicos que já transformaram sua experiência de fé. 100% gratuito, para sempre!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="px-8 py-4 bg-white/5 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                  Ver Demonstração
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderHistory = () => (
    <div className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            História da <span className="text-[#00FF7F]\">Igreja</span>
          </h2>
          <p className="text-xl text-gray-400">
            Uma jornada de 2000 anos de fé, tradição e transformação
          </p>
        </div>

        <div className="relative space-y-4">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00FF7F] via-[#00FF7F]/50 to-transparent" />
          
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-20">
                <div className="absolute left-0 w-16 h-16 bg-[#00FF7F]/10 border-2 border-[#00FF7F] rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#00FF7F]" />
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#00FF7F]/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#00FF7F]/10 text-[#00FF7F] rounded-full text-sm font-semibold">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.event}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderRituals = () => (
    <div className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Ritos da <span className="text-[#00FF7F]\">Missa</span>
          </h2>
          <p className="text-xl text-gray-400">
            Compreenda profundamente cada momento da celebração eucarística
          </p>
        </div>

        <div className="space-y-6">
          {rituals.map((ritual, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#00FF7F]/30 transition-all duration-300"
            >
              {/* Header do Card */}
              <button
                onClick={() => setExpandedRitual(expandedRitual === idx ? null : idx)}
                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${ritual.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {ritual.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white mb-1">{ritual.title}</h3>
                    <p className="text-[#00FF7F] font-medium">{ritual.subtitle}</p>
                  </div>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-[#00FF7F] transition-transform duration-300 ${
                    expandedRitual === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Conteúdo Expandido */}
              {expandedRitual === idx && (
                <div className="px-8 pb-8 space-y-6 border-t border-white/10">
                  <p className="text-gray-300 leading-relaxed pt-6 italic">
                    {ritual.description}
                  </p>

                  <div className="space-y-4">
                    {ritual.steps.map((step, stepIdx) => (
                      <div 
                        key={stepIdx}
                        className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#00FF7F]/20 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#00FF7F]/10 rounded-lg flex items-center justify-center">
                            <span className="text-[#00FF7F] font-bold">{stepIdx + 1}</span>
                          </div>
                          <div className="flex-1 space-y-3">
                            <h4 className="text-xl font-bold text-white">{step.name}</h4>
                            <p className="text-gray-300 leading-relaxed">{step.explanation}</p>
                            <div className="flex items-start gap-2 pt-2">
                              <Sparkles className="w-5 h-5 text-[#00FF7F] flex-shrink-0 mt-0.5" />
                              <p className="text-[#00FF7F] text-sm font-medium italic">
                                {step.significance}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Informação adicional */}
        <div className="bg-gradient-to-br from-[#00FF7F]/10 to-transparent border border-[#00FF7F]/20 rounded-2xl p-8 text-center space-y-4">
          <BookOpen className="w-12 h-12 text-[#00FF7F] mx-auto" />
          <h3 className="text-2xl font-bold text-white">Aprofunde seu Conhecimento</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Clique em cada seção acima para expandir e descobrir o significado profundo de cada momento da Santa Missa. Compreenda como cada rito nos aproxima de Deus e fortalece nossa fé.
          </p>
        </div>
      </div>
    </div>
  );

  const renderGuidelines = () => (
    <div className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Guia de <span className="text-[#00FF7F]\">Conduta</span>
          </h2>
          <p className="text-xl text-gray-400">
            Orientações completas para uma participação respeitosa, consciente e significativa na Santa Missa
          </p>
        </div>

        {/* Preparação */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">Preparação para a Missa</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {guidelines.preparacao.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-400/30 transition-all space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    <div className="flex items-start gap-2 pt-1">
                      <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-blue-400 text-xs italic">{item.importance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Participação */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#00FF7F]/10 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-[#00FF7F]" />
            </div>
            <h3 className="text-3xl font-bold text-white">Durante a Celebração</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {guidelines.participacao.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#00FF7F]/30 transition-all space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00FF7F] flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    <div className="flex items-start gap-2 pt-1">
                      <Info className="w-4 h-4 text-[#00FF7F] flex-shrink-0 mt-0.5" />
                      <p className="text-[#00FF7F] text-xs italic">{item.importance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* O que evitar */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">O que Evitar</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guidelines.evitar.map((item, idx) => (
              <div key={idx} className="bg-red-500/5 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:bg-red-500/10 hover:border-red-400/30 transition-all space-y-3">
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    <div className="flex items-start gap-2 pt-1">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-red-400 text-xs italic">{item.reason}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crianças */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">Com Crianças</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {guidelines.criancas.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-400/30 transition-all space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    <div className="flex items-start gap-2 pt-1">
                      <Info className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className="text-purple-400 text-xs italic">{item.importance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comunhão */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">Momento da Comunhão</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {guidelines.comunhao.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-amber-400/30 transition-all space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    <div className="flex items-start gap-2 pt-1">
                      <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <p className="text-amber-400 text-xs italic">{item.importance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[#00FF7F]/10 to-transparent border border-[#00FF7F]/20 rounded-2xl p-8 text-center space-y-4">
          <Church className="w-12 h-12 text-[#00FF7F] mx-auto" />
          <h3 className="text-2xl font-bold text-white">Participe com Reverência e Amor</h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Seguir estas orientações não é apenas questão de etiqueta, mas expressão de amor e respeito a Deus, à comunidade e ao mistério sagrado que celebramos. Cada gesto, cada postura, cada momento de silêncio nos aproxima mais do Senhor.
          </p>
        </div>
      </div>
    </div>
  );

  const renderVerses = () => (
    <div className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Versículos <span className="text-[#00FF7F]\">da Bíblia</span>
          </h2>
          <p className="text-xl text-gray-400">
            Palavras de sabedoria, conforto e inspiração das Sagradas Escrituras
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {biblicalVerses.map((verse, idx) => (
            <div
              key={idx}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#00FF7F]/30 transition-all duration-300 hover:scale-105 space-y-6"
            >
              <div className="absolute top-6 right-6">
                <Star className="w-6 h-6 text-[#00FF7F]/30" />
              </div>
              
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-[#00FF7F]/10 text-[#00FF7F] rounded-full text-sm font-semibold">
                  {verse.theme}
                </span>
                
                <p className="text-lg text-white leading-relaxed italic">
                  "{verse.text}"
                </p>
                
                <p className="text-[#00FF7F] font-semibold">
                  — {verse.reference}
                </p>

                <p className="text-sm text-gray-400 leading-relaxed pt-2 border-t border-white/10">
                  {verse.context}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#00FF7F]/10 to-transparent border border-[#00FF7F]/20 rounded-2xl p-8 text-center space-y-4">
          <BookOpen className="w-12 h-12 text-[#00FF7F] mx-auto" />
          <h3 className="text-2xl font-bold text-white">Explore as Sagradas Escrituras</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estes versículos são apenas uma pequena amostra da riqueza da Palavra de Deus. Mergulhe nas Escrituras e descubra a mensagem de amor, esperança e salvação que Deus tem para você.
          </p>
        </div>
      </div>
    </div>
  );

  const renderCommunity = () => (
    <div className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Nossa <span className="text-[#00FF7F]\">Comunidade</span>
          </h2>
          <p className="text-xl text-gray-400">
            Conecte-se, compartilhe e cresça na fé junto com outros católicos
          </p>
        </div>

        {/* Campo para adicionar comentário */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-[#00FF7F]" />
            <h3 className="text-xl font-bold text-white">Compartilhe sua reflexão</h3>
          </div>
          
          <div className="flex gap-3">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
              alt="Você"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#00FF7F]/30 flex-shrink-0"
            />
            <div className="flex-1 space-y-3">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Compartilhe suas reflexões, dúvidas ou testemunhos com a comunidade..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF7F]/30 transition-colors resize-none min-h-[100px]"
              />
              <div className="flex justify-end">
                <button
                  onClick={handleAddComment}
                  disabled={!newComment.trim()}
                  className="flex items-center gap-2 px-6 py-2.5 bg-[#00FF7F] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00FF7F]/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="w-4 h-4" />
                  Publicar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de comentários */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Users className="w-6 h-6 text-[#00FF7F]" />
              Conversas da Comunidade
            </h3>
            <span className="text-sm text-gray-400">{comments.length} comentários</span>
          </div>

          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#00FF7F]/30 transition-all duration-300 space-y-4"
              >
                <div className="flex items-start gap-4">
                  <img 
                    src={comment.avatar}
                    alt={comment.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#00FF7F]/30 flex-shrink-0"
                  />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-white">{comment.author}</h4>
                        <p className="text-sm text-gray-400">{comment.time}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{comment.text}</p>
                    
                    <div className="flex items-center gap-6 pt-2">
                      <button className="flex items-center gap-2 text-gray-400 hover:text-[#00FF7F] transition-colors group">
                        <ThumbsUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">{comment.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-[#00FF7F] transition-colors group">
                        <Reply className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">{comment.replies} respostas</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA para engajamento */}
        <div className="bg-gradient-to-br from-[#00FF7F]/10 to-transparent border border-[#00FF7F]/20 rounded-2xl p-8 text-center space-y-4">
          <Heart className="w-12 h-12 text-[#00FF7F] mx-auto" />
          <h3 className="text-2xl font-bold text-white">Faça Parte da Nossa Comunidade</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compartilhe testemunhos, tire dúvidas, participe de discussões e fortaleça sua fé junto com milhares de católicos.
          </p>
          <button 
            onClick={goToAuth}
            className="px-8 py-3 bg-[#00FF7F] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00FF7F]/90 transition-all duration-300 hover:scale-105"
          >
            Criar Conta Gratuita
          </button>
        </div>
      </div>
    </div>
  );

  const navItems = [
    { id: "home", label: "Início", icon: <Sparkles className="w-5 h-5" /> },
    { id: "history", label: "História", icon: <BookOpen className="w-5 h-5" /> },
    { id: "rituals", label: "Ritos", icon: <Church className="w-5 h-5" /> },
    { id: "guidelines", label: "Conduta", icon: <CheckCircle2 className="w-5 h-5" /> },
    { id: "verses", label: "Versículos", icon: <Heart className="w-5 h-5" /> },
    { id: "community", label: "Comunidade", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00FF7F] to-[#00FF7F]/60 rounded-xl flex items-center justify-center">
                <Church className="w-6 h-6 text-[#0D0D0D]" />
              </div>
              <span className="text-xl font-bold">Católicos Connect</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-[#00FF7F]/10 text-[#00FF7F]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop CTA */}
            <button 
              onClick={goToAuth}
              className="hidden lg:block px-6 py-2 bg-[#00FF7F] text-[#0D0D0D] rounded-lg font-semibold hover:bg-[#00FF7F]/90 transition-all duration-300 hover:scale-105"
            >
              Entrar
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0D0D0D]/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-[#00FF7F]/10 text-[#00FF7F]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}

            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {activeSection === "home" && renderHome()}
        {activeSection === "history" && renderHistory()}
        {activeSection === "rituals" && renderRituals()}
        {activeSection === "guidelines" && renderGuidelines()}
        {activeSection === "verses" && renderVerses()}
        {activeSection === "community" && renderCommunity()}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0D0D0D]/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00FF7F] to-[#00FF7F]/60 rounded-xl flex items-center justify-center">
                  <Church className="w-6 h-6 text-[#0D0D0D]" />
                </div>
                <span className="text-xl font-bold">Católicos Connect</span>
              </div>
              <p className="text-gray-400 text-sm">
                Sua plataforma 100% gratuita para aprofundar a fé católica
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Recursos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-[#00FF7F] cursor-pointer transition-colors">História da Igreja</li>
                <li className="hover:text-[#00FF7F] cursor-pointer transition-colors">Ritos da Missa</li>
                <li className="hover:text-[#00FF7F] cursor-pointer transition-colors">Versículos Diários</li>
                <li className="hover:text-[#00FF7F] cursor-pointer transition-colors">Comunidade</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-[#00FF7F] cursor-pointer transition-colors">Central de Ajuda</li>
                <li className="hover:text-[#00FF7F] cursor-pointer transition-colors">Contato</li>
                <li className="hover:text-[#00FF7F] cursor-pointer transition-colors">FAQ</li>
                <li className="hover:text-[#00FF7F] cursor-pointer transition-colors">Termos de Uso</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Newsletter</h4>
              <p className="text-sm text-gray-400">
                Receba versículos e conteúdos exclusivos
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-[#00FF7F]/30 transition-colors"
                />
                <button className="px-4 py-2 bg-[#00FF7F] text-[#0D0D0D] rounded-lg font-semibold hover:bg-[#00FF7F]/90 transition-all duration-300">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            <p>© 2024 Católicos Connect. Todos os direitos reservados. 100% Gratuito.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}