"use client";

import { HeroSection } from "@/components/hero-section";
import { ContactBar } from "@/components/contact-bar";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ContactBar />
      <HeroSection />
      <ServicesSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}