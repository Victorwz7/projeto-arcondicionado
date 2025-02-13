"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1527689638836-411945a2b57c?auto=format&fit=crop&q=80"
          alt="Ar-condicionado Moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-blue-950/80" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 min-h-screen pt-20 flex items-center">
        <div className="w-full max-w-3xl">
          <div className="inline-block mb-4 md:mb-6">
            <div className="glass-card px-3 py-1.5 md:px-4 md:py-2 rounded-full text-blue-100 text-xs md:text-sm flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Atendimento 24 horas
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-8 leading-tight">
            Conforto e <br />
            <span className="text-blue-400">Qualidade</span> para <br />
            seu ambiente
          </h1>
          <p className="text-base md:text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl">
            Especialistas em soluções de climatização para residências e empresas. 
            Instalação, manutenção e assistência técnica com excelência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <a href="#contato" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-base md:text-lg h-12 md:h-14 px-6 md:px-8 w-full"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}