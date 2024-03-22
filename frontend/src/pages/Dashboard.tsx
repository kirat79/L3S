// src/pages/LandingPage.tsx
import CardWithForm from "@/components/custom/CustomCard";
import Header from "@/components/custom/Header";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[url('./assets/images/background_img.png')] bg-cover bg-center bg-[rgba(0,0,0,0.8)]">
      <Header />
      <CardWithForm />
    </div>
  );
};

export default Dashboard;
