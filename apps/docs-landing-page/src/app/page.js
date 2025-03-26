import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ErpOverview from "@/components/sections/ErpOverview";
import ApiInfrastructure from "@/components/sections/ApiInfrastructure";
import SecuritySection from "@/components/sections/SecuritySection";
import DeveloperResources from "@/components/sections/DeveloperResources";
import IntegrationBenefits from "@/components/sections/IntegrationBenefits";
import GettingStarted from "@/components/sections/GettingStarted";
import ClientSuccess from "@/components/sections/ClientSuccess";
import Footer from "@/components/layout/Footer";
import BackgroundAnimation from "@/components/animations/BackgroundAnimation";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <ErpOverview id="overview" />
      <ApiInfrastructure id="infrastructure" />
      <SecuritySection id="security" />
      <DeveloperResources id="resources" />
      <IntegrationBenefits id="integration" />
      <GettingStarted />
      <ClientSuccess />
      <Footer />
    </main>
  );
}