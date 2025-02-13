import { Card } from "@/components/ui/card";
import { Fan, Wrench, Thermometer, Wind, Shield, Clock } from "lucide-react";

const services = [
  {
    icon: <Fan className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />,
    title: "Instalação Profissional",
    description: "Instalação precisa e eficiente com garantia estendida"
  },
  {
    icon: <Wrench className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />,
    title: "Manutenção Preventiva",
    description: "Cuidados periódicos para maior durabilidade do seu equipamento"
  },
  {
    icon: <Wind className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />,
    title: "Higienização Completa",
    description: "Limpeza profunda para um ar mais puro e saudável"
  },
  {
    icon: <Thermometer className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />,
    title: "Diagnóstico Técnico",
    description: "Análise detalhada e soluções precisas para seu ar-condicionado"
  },
  {
    icon: <Shield className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />,
    title: "Garantia de Serviço",
    description: "Todos os serviços com garantia e suporte técnico"
  },
  {
    icon: <Clock className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />,
    title: "Atendimento 24h",
    description: "Suporte emergencial disponível todos os dias"
  }
];

export function ServicesSection() {
  return (
    <section className="py-12 md:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Nossos Serviços</h2>
          <p className="text-base md:text-lg text-gray-600">
            Oferecemos soluções completas em climatização, com profissionais altamente qualificados
            e comprometidos com a excelência.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="gradient-border service-card">
              <div className="p-6 md:p-8">
                <div className="mb-4 md:mb-6">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}