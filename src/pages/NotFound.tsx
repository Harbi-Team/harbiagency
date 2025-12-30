import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Scene } from "@/components/three/Scene";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative bg-background min-h-screen">
      <Scene />
      <Header />

      <main className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-display-hero text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Aradığınız sayfa bulunamadı.
          </p>
          <Link to="/" className="btn-harbi inline-block">
            ANA SAYFAYA DÖN
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
