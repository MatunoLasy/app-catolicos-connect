'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Calendar, MapPin, Book, Cross } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface TimelineEvent {
  year: string
  title: string
  description: string
  location?: string
  icon: 'cross' | 'book' | 'calendar'
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '~30 d.C.',
    title: 'Crucificação e Ressurreição de Jesus Cristo',
    description: 'Jesus Cristo é crucificado em Jerusalém e ressuscita ao terceiro dia, fundando a Igreja através dos Apóstolos.',
    location: 'Jerusalém',
    icon: 'cross'
  },
  {
    year: '~33 d.C.',
    title: 'Pentecostes - Nascimento da Igreja',
    description: 'O Espírito Santo desce sobre os Apóstolos, marcando o início da missão evangelizadora da Igreja.',
    location: 'Jerusalém',
    icon: 'calendar'
  },
  {
    year: '~64 d.C.',
    title: 'Martírio de São Pedro',
    description: 'São Pedro, primeiro Papa da Igreja, é martirizado em Roma durante a perseguição de Nero.',
    location: 'Roma',
    icon: 'cross'
  },
  {
    year: '~67 d.C.',
    title: 'Martírio de São Paulo',
    description: 'São Paulo, o Apóstolo dos Gentios, é martirizado em Roma após suas viagens missionárias.',
    location: 'Roma',
    icon: 'cross'
  },
  {
    year: '313',
    title: 'Édito de Milão',
    description: 'Imperador Constantino concede liberdade religiosa aos cristãos, encerrando as perseguições no Império Romano.',
    location: 'Milão',
    icon: 'book'
  },
  {
    year: '325',
    title: 'Concílio de Niceia',
    description: 'Primeiro Concílio Ecumênico define o Credo Niceno e condena a heresia ariana.',
    location: 'Niceia',
    icon: 'book'
  },
  {
    year: '381',
    title: 'Concílio de Constantinopla',
    description: 'Segundo Concílio Ecumênico completa o Credo Niceno-Constantinopolitano.',
    location: 'Constantinopla',
    icon: 'book'
  },
  {
    year: '431',
    title: 'Concílio de Éfeso',
    description: 'Terceiro Concílio Ecumênico proclama Maria como Theotokos (Mãe de Deus).',
    location: 'Éfeso',
    icon: 'book'
  },
  {
    year: '451',
    title: 'Concílio de Calcedônia',
    description: 'Quarto Concílio Ecumênico define a natureza divina e humana de Cristo.',
    location: 'Calcedônia',
    icon: 'book'
  },
  {
    year: '529',
    title: 'Fundação de Monte Cassino',
    description: 'São Bento funda o Mosteiro de Monte Cassino, estabelecendo a Regra Beneditina.',
    location: 'Itália',
    icon: 'calendar'
  },
  {
    year: '800',
    title: 'Coroação de Carlos Magno',
    description: 'Papa Leão III coroa Carlos Magno como Imperador do Sacro Império Romano.',
    location: 'Roma',
    icon: 'calendar'
  },
  {
    year: '1054',
    title: 'Grande Cisma do Oriente',
    description: 'Separação entre a Igreja Católica Romana e a Igreja Ortodoxa Oriental.',
    location: 'Constantinopla',
    icon: 'cross'
  },
  {
    year: '1095',
    title: 'Primeira Cruzada',
    description: 'Papa Urbano II convoca a Primeira Cruzada para libertar a Terra Santa.',
    location: 'Clermont',
    icon: 'calendar'
  },
  {
    year: '1209',
    title: 'Fundação da Ordem Franciscana',
    description: 'São Francisco de Assis funda a Ordem dos Frades Menores.',
    location: 'Assis',
    icon: 'calendar'
  },
  {
    year: '1216',
    title: 'Fundação da Ordem Dominicana',
    description: 'São Domingos de Gusmão funda a Ordem dos Pregadores.',
    location: 'Toulouse',
    icon: 'calendar'
  },
  {
    year: '1517',
    title: 'Reforma Protestante',
    description: 'Martinho Lutero publica as 95 Teses, iniciando a Reforma Protestante.',
    location: 'Wittenberg',
    icon: 'book'
  },
  {
    year: '1545-1563',
    title: 'Concílio de Trento',
    description: 'Concílio Ecumênico responde à Reforma Protestante e inicia a Contrarreforma.',
    location: 'Trento',
    icon: 'book'
  },
  {
    year: '1534',
    title: 'Fundação da Companhia de Jesus',
    description: 'Santo Inácio de Loyola funda a Ordem dos Jesuítas.',
    location: 'Paris',
    icon: 'calendar'
  },
  {
    year: '1854',
    title: 'Dogma da Imaculada Conceição',
    description: 'Papa Pio IX proclama o dogma da Imaculada Conceição de Maria.',
    location: 'Vaticano',
    icon: 'book'
  },
  {
    year: '1870',
    title: 'Concílio Vaticano I',
    description: 'Define a infalibilidade papal e a primazia do Papa.',
    location: 'Vaticano',
    icon: 'book'
  },
  {
    year: '1917',
    title: 'Aparições de Fátima',
    description: 'Nossa Senhora aparece a três pastorinhos em Fátima, Portugal.',
    location: 'Fátima',
    icon: 'calendar'
  },
  {
    year: '1950',
    title: 'Dogma da Assunção de Maria',
    description: 'Papa Pio XII proclama o dogma da Assunção de Maria ao céu.',
    location: 'Vaticano',
    icon: 'book'
  },
  {
    year: '1962-1965',
    title: 'Concílio Vaticano II',
    description: 'Concílio Ecumênico promove renovação litúrgica e abertura ao mundo moderno.',
    location: 'Vaticano',
    icon: 'book'
  },
  {
    year: '1978',
    title: 'Eleição de João Paulo II',
    description: 'Karol Wojtyła se torna o primeiro Papa não-italiano em 455 anos.',
    location: 'Vaticano',
    icon: 'calendar'
  },
  {
    year: '2013',
    title: 'Eleição do Papa Francisco',
    description: 'Jorge Mario Bergoglio se torna o primeiro Papa jesuíta e latino-americano.',
    location: 'Vaticano',
    icon: 'calendar'
  }
]

export default function HistoriaPage() {
  const router = useRouter()
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'cross':
        return <Cross className="w-5 h-5" />
      case 'book':
        return <Book className="w-5 h-5" />
      case 'calendar':
        return <Calendar className="w-5 h-5" />
      default:
        return <Calendar className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="border-white/20 hover:border-[#00FF7F] hover:bg-[#00FF7F]/10 text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-xl font-inter font-semibold">História da Igreja</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-inter">
            Linha do Tempo da <span className="text-[#00FF7F]">Igreja Católica</span>
          </h2>
          <p className="text-white/60 text-lg font-inter max-w-2xl mx-auto">
            Desde o tempo de Jesus Cristo até os dias atuais - 2000 anos de história e fé
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00FF7F] via-[#00FF7F]/50 to-transparent"></div>

          {/* Timeline Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="relative pl-20 group cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-[#00FF7F] border-4 border-[#0D0D0D] group-hover:scale-125 transition-transform duration-300 z-10"></div>

                {/* Event Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#00FF7F]/50 transition-all duration-300 hover:scale-[1.02] group-hover:bg-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00FF7F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00FF7F]/20 transition-colors">
                      {getIcon(event.icon)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#00FF7F] font-bold text-lg font-inter">
                          {event.year}
                        </span>
                        {event.location && (
                          <div className="flex items-center gap-1 text-white/50 text-sm">
                            <MapPin className="w-3 h-3" />
                            <span className="font-inter">{event.location}</span>
                          </div>
                        )}
                      </div>
                      <h3 className="font-inter font-semibold text-xl mb-2 text-white">
                        {event.title}
                      </h3>
                      <p className="text-white/60 text-sm font-inter leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 font-inter">
              Uma História de Fé e Perseverança
            </h3>
            <p className="text-white/60 font-inter max-w-2xl mx-auto">
              A Igreja Católica atravessou 2000 anos de história, mantendo viva a mensagem de Cristo 
              através de gerações, culturas e desafios. Esta linha do tempo representa apenas alguns 
              dos momentos mais significativos dessa jornada extraordinária.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
