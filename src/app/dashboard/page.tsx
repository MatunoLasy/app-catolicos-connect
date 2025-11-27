'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { User } from '@supabase/supabase-js'
import { 
  LogOut, 
  User as UserIcon, 
  BookOpen, 
  Heart, 
  MessageCircle, 
  Calendar,
  Crown,
  Sparkles,
  CreditCard
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar sessão atual
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        router.push('/auth')
      } else {
        setUser(session.user)
      }
      setLoading(false)
    })

    // Escutar mudanças de autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        router.push('/auth')
      } else {
        setUser(session.user)
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00FF7F]"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00FF7F] to-[#00CC66] flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-[#0D0D0D]" />
            </div>
            <div>
              <h2 className="font-inter font-semibold text-white">
                {user.email?.split('@')[0]}
              </h2>
              <p className="text-xs text-white/50 font-inter">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => router.push('/pagamentos')}
              variant="outline"
              className="border-white/20 hover:border-[#00FF7F] hover:bg-[#00FF7F]/10 text-white"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Pagamentos
            </Button>
            <Button
              onClick={handleSignOut}
              variant="outline"
              className="border-white/20 hover:border-[#00FF7F] hover:bg-[#00FF7F]/10 text-white"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-inter">
            Bem-vindo ao <span className="text-[#00FF7F]">Católicos Connect</span>
          </h1>
          <p className="text-white/60 text-lg font-inter max-w-2xl mx-auto">
            Explore conteúdos exclusivos, aprofunde sua fé e conecte-se com a comunidade
          </p>
        </div>

        {/* Premium Badge */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00FF7F]/20 to-[#00CC66]/20 border border-[#00FF7F]/30 rounded-2xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#00FF7F]/20 flex items-center justify-center">
                <Crown className="w-6 h-6 text-[#00FF7F]" />
              </div>
              <div>
                <h3 className="font-inter font-semibold text-lg">Plano Premium Ativo</h3>
                <p className="text-white/60 text-sm font-inter">Acesso total a todos os recursos</p>
              </div>
            </div>
            <Sparkles className="w-8 h-8 text-[#00FF7F]" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* História da Igreja */}
          <Link href="/historia">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#00FF7F]/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-[#00FF7F]/10 flex items-center justify-center mb-4 group-hover:bg-[#00FF7F]/20 transition-colors">
                <BookOpen className="w-6 h-6 text-[#00FF7F]" />
              </div>
              <h3 className="font-inter font-semibold text-xl mb-2">História da Igreja</h3>
              <p className="text-white/60 text-sm font-inter">
                Explore a rica história da Igreja Católica através de uma linha do tempo interativa
              </p>
            </div>
          </Link>

          {/* Ritos da Missa */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#00FF7F]/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
            <div className="w-12 h-12 rounded-xl bg-[#00FF7F]/10 flex items-center justify-center mb-4 group-hover:bg-[#00FF7F]/20 transition-colors">
              <Heart className="w-6 h-6 text-[#00FF7F]" />
            </div>
            <h3 className="font-inter font-semibold text-xl mb-2">Ritos da Missa</h3>
            <p className="text-white/60 text-sm font-inter">
              Entenda cada parte da celebração eucarística com explicações detalhadas
            </p>
          </div>

          {/* Versículos Diários */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#00FF7F]/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
            <div className="w-12 h-12 rounded-xl bg-[#00FF7F]/10 flex items-center justify-center mb-4 group-hover:bg-[#00FF7F]/20 transition-colors">
              <Calendar className="w-6 h-6 text-[#00FF7F]" />
            </div>
            <h3 className="font-inter font-semibold text-xl mb-2">Versículos Diários</h3>
            <p className="text-white/60 text-sm font-inter">
              Receba inspiração diária com versículos selecionados e reflexões
            </p>
          </div>

          {/* Comunidade */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#00FF7F]/50 transition-all duration-300 hover:scale-105 cursor-pointer group md:col-span-2 lg:col-span-3">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00FF7F]/10 flex items-center justify-center group-hover:bg-[#00FF7F]/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-[#00FF7F]" />
              </div>
              <div className="flex-1">
                <h3 className="font-inter font-semibold text-xl mb-2">Comunidade</h3>
                <p className="text-white/60 text-sm font-inter mb-4">
                  Conecte-se com outros católicos, compartilhe experiências e participe de discussões sobre a fé
                </p>
                <div className="flex gap-4">
                  <div className="bg-white/5 rounded-lg px-4 py-2">
                    <p className="text-2xl font-bold text-[#00FF7F]">1.2k+</p>
                    <p className="text-xs text-white/50 font-inter">Membros ativos</p>
                  </div>
                  <div className="bg-white/5 rounded-lg px-4 py-2">
                    <p className="text-2xl font-bold text-[#00FF7F]">350+</p>
                    <p className="text-xs text-white/50 font-inter">Discussões</p>
                  </div>
                  <div className="bg-white/5 rounded-lg px-4 py-2">
                    <p className="text-2xl font-bold text-[#00FF7F]">5k+</p>
                    <p className="text-xs text-white/50 font-inter">Mensagens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 font-inter">
              Pronto para começar sua jornada?
            </h2>
            <p className="text-white/60 mb-6 font-inter">
              Explore todos os recursos disponíveis e aprofunde sua fé
            </p>
            <Button className="bg-[#00FF7F] hover:bg-[#00CC66] text-[#0D0D0D] font-semibold px-8 py-6 text-lg">
              Explorar Conteúdos
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
