import { Card } from "@/components/Card";
import { CardItem } from "@/components/CardItem";

export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row w-full py-20 min-h-screen items-center justify-center gap-8 bg-zinc-100">
      <Card cardTitle="Essentials" btnTilte="Começar">
        <CardItem iconInfo cardItemTitle="Até 3 usuários" />
        <CardItem iconInfo cardItemTitle="Autoatendimento" />
      </Card>
      <Card
        cardTitle="Ultimate"
        btnColor="bg-purple-600 border-none text-white"
        isBadge
        dark
        btnTilte="Assinar agora"
      >
        <CardItem iconInfo dark cardItemTitle="Usuários ilimitados" />
        <CardItem iconInfo dark cardItemTitle="Suporte 24/7" />
        <CardItem iconInfo dark cardItemTitle="CSM Dedicado" />
        <CardItem iconInfo dark cardItemTitle="Treinamentos" />
      </Card>
      <Card cardTitle="Enterprise" btnTilte="Fale com a gente">
        <CardItem cardItemTitle="Plano customizado especialmente para a necessidade de seu negocio" />
      </Card>
    </main>
  );
}
