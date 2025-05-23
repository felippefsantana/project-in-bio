import { Header } from '@/components/landing-page/header'
import { Button } from '@/components/ui/button'

export default function UpgradePage() {
  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center">
      <Header />
      <h2 className="text-2xl font-bold">Escolha o plano</h2>
      <div className="flex gap-4">
        <Button size="lg">R$ 9,90 / mês</Button>
        <Button size="lg">R$ 99,90 Vitalício</Button>
      </div>
    </div>
  )
}
