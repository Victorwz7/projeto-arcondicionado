import { PhoneCall, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 md:py-16">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">DS-Arcondicionado</h3>
            <p className="text-sm md:text-base text-blue-200 mb-6">
              Especialistas em soluções de climatização, oferecendo serviços de qualidade há mais de 10 anos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Serviços</h3>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-blue-200">
              <li>Instalação</li>
              <li>Manutenção Preventiva</li>
              <li>Manutenção Corretiva</li>
              <li>Higienização</li>
              <li>Projetos</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Contato</h3>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-blue-200">
              <p className="flex items-center gap-3">
                <PhoneCall className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                (11) 99999-9999
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                contato@dsarcondicionado.com.br
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                São Paulo, SP
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Horário</h3>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-blue-200">
              <p>Segunda a Sexta</p>
              <p className="font-semibold text-white">08:00 - 18:00</p>
              <p>Sábado</p>
              <p className="font-semibold text-white">08:00 - 12:00</p>
              <p className="text-blue-400">Plantão 24h para emergências</p>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-900 py-6 md:py-8 text-center text-sm md:text-base">
          <p className="text-blue-200">
            © 2024 DS-Arcondicionado. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}