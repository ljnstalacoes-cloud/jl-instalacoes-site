import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Zap, Wrench, Home, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function JLInstalacoesSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href="https://wa.me/5511952020940"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl z-50"
      >
        <MessageCircle size={28} />
      </a>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          J&L Instalações
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Automação • Elétrica • Instalação • Manutenção
        </p>
        <p className="text-gray-300 mb-8">Atendemos São Paulo e Região</p>
        <a href="#orcamento">
          <Button className="text-lg px-8 py-6 rounded-2xl">
            Solicitar Orçamento
          </Button>
        </a>
      </section>

      {/* Serviços */}
      <section className="py-16 px-6 bg-slate-900/60">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Automação Residencial",
              icon: <Home className="mx-auto mb-4" size={40} />,
              img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800",
              desc: "Controle iluminação, portões, câmeras e dispositivos inteligentes pelo celular."
            },
            {
              title: "Elétrica",
              icon: <Zap className="mx-auto mb-4" size={40} />,
              img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800",
              desc: "Instalações elétricas residenciais com segurança e qualidade profissional."
            },
            {
              title: "Instalação",
              icon: <Wrench className="mx-auto mb-4" size={40} />,
              img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800",
              desc: "Instalação de câmeras, fechaduras digitais e sistemas inteligentes."
            },
            {
              title: "Manutenção",
              icon: <Wrench className="mx-auto mb-4" size={40} />,
              img: "https://images.unsplash.com/photo-1581091012184-5c0f0b0b5b1b?q=80&w=800",
              desc: "Manutenção preventiva e corretiva especializada."
            }
          ].map((service, index) => (
            <Card key={index} className="rounded-2xl shadow-xl bg-slate-800 border-none overflow-hidden hover:scale-105 transition-transform">
              <img src={service.img} alt={service.title} className="w-full h-40 object-cover" />
              <CardContent className="p-6 text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      

      {/* FORMULÁRIO DE ORÇAMENTO */}
      <section id="orcamento" className="py-16 px-6 bg-slate-900/60">
        <h2 className="text-3xl font-bold text-center mb-12">Solicite um Orçamento</h2>
        <form className="max-w-3xl mx-auto grid gap-6">
          <input type="text" placeholder="Nome" className="p-4 rounded-xl text-black" required />
          <input type="tel" placeholder="Telefone" className="p-4 rounded-xl text-black" required />
          <input type="email" placeholder="Email" className="p-4 rounded-xl text-black" required />
          <textarea placeholder="Descreva o serviço desejado" className="p-4 rounded-xl text-black" rows="4" required></textarea>
          <Button className="text-lg py-6 rounded-2xl">Enviar Solicitação</Button>
        </form>
      </section>

      {/* Contato */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Contato</h2>
        <div className="space-y-4 text-lg">
          <p className="flex items-center justify-center gap-3">
            <Phone size={20} /> (11) 9 5202-0940
          </p>
          <p className="flex items-center justify-center gap-3">
            <Phone size={20} /> (11) 9 7376-3563
          </p>
          <p className="flex items-center justify-center gap-3">
            <Mail size={20} /> jlinstalacoes@gmail.com
          </p>
        </div>
      </section>

      <footer className="text-center py-6 bg-slate-950 text-gray-400">
        © {new Date().getFullYear()} J&L Instalações - Todos os direitos reservados
      </footer>
    </div>
  );
}
