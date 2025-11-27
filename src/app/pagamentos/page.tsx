'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { User } from '@supabase/supabase-js'
import { 
  ArrowLeft,
  CreditCard,
  CheckCircle,
  XCircle,
  Clock,
  DollarSign
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Payment {
  id: string
  user_id: string
  amount: number
  description: string
  status: 'pending' | 'completed' | 'failed' | 'cancelled'
  payment_method: string | null
  created_at: string
  updated_at: string
}

export default function PagamentosPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [payments, setPayments] = useState<Payment[]>([])
  const [loadingPayments, setLoadingPayments] = useState(true)

  useEffect(() => {
    // Verificar sessão atual
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        router.push('/auth')
      } else {
        setUser(session.user)
        loadPayments(session.user.id)
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
        loadPayments(session.user.id)
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  const loadPayments = async (userId: string) => {
    try {
      setLoadingPayments(true)
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Erro ao carregar pagamentos:', error)
      } else {
        setPayments(data || [])
      }
    } catch (error) {
      console.error('Erro ao carregar pagamentos:', error)
    } finally {
      setLoadingPayments(false)
    }
  }

  const getStatusIcon = (status: Payment['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-[#00FF7F]" />
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-500" />
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusText = (status: Payment['status']) => {
    switch (status) {
      case 'completed':
        return 'Concluído'
      case 'failed':
        return 'Falhou'
      case 'pending':
        return 'Pendente'
      case 'cancelled':
        return 'Cancelado'
    }
  }

  const getStatusColor = (status: Payment['status']) => {
    switch (status) {
      case 'completed':
        return 'text-[#00FF7F]'
      case 'failed':
        return 'text-red-500'
      case 'pending':
        return 'text-yellow-500'
      case 'cancelled':
        return 'text-gray-500'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amount)
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
          <div className="flex items-center gap-4">
            <Button
              onClick={() => router.push('/dashboard')}
              variant="ghost"
              size="icon"
              className="hover:bg-white/10"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold font-inter">Meus Pagamentos</h1>
              <p className="text-xs text-white/50 font-inter">Histórico de transações</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#00FF7F]" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-[#00FF7F]" />
              <p className="text-white/60 text-sm font-inter">Total Gasto</p>
            </div>
            <p className="text-2xl font-bold font-inter">
              {formatAmount(
                payments
                  .filter(p => p.status === 'completed')
                  .reduce((sum, p) => sum + Number(p.amount), 0)
              )}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-[#00FF7F]" />
              <p className="text-white/60 text-sm font-inter">Pagamentos Concluídos</p>
            </div>
            <p className="text-2xl font-bold font-inter">
              {payments.filter(p => p.status === 'completed').length}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-yellow-500" />
              <p className="text-white/60 text-sm font-inter">Pagamentos Pendentes</p>
            </div>
            <p className="text-2xl font-bold font-inter">
              {payments.filter(p => p.status === 'pending').length}
            </p>
          </div>
        </div>

        {/* Payments List */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-bold font-inter">Histórico de Transações</h2>
          </div>

          {loadingPayments ? (
            <div className="p-12 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#00FF7F]"></div>
            </div>
          ) : payments.length === 0 ? (
            <div className="p-12 text-center">
              <CreditCard className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <p className="text-white/60 font-inter">Nenhum pagamento encontrado</p>
              <p className="text-white/40 text-sm font-inter mt-2">
                Suas transações aparecerão aqui
              </p>
            </div>
          ) : (
            <div className="divide-y divide-white/10">
              {payments.map((payment) => (
                <div
                  key={payment.id}
                  className="p-6 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                        {getStatusIcon(payment.status)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold font-inter">
                            {formatAmount(Number(payment.amount))}
                          </p>
                          <span className={`text-xs font-inter ${getStatusColor(payment.status)}`}>
                            {getStatusText(payment.status)}
                          </span>
                        </div>
                        <p className="text-sm text-white/60 font-inter mb-1">
                          {payment.description}
                        </p>
                        <p className="text-xs text-white/40 font-inter">
                          {formatDate(payment.created_at)}
                        </p>
                        {payment.payment_method && (
                          <p className="text-xs text-white/40 font-inter mt-1">
                            Método: {payment.payment_method}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
