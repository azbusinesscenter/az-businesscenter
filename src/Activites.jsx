import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import React from "react";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  Building2,
  Sofa,
  CheckCircle,
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Activites() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <style>
        {`
          .activities-page {
            background: #071426;
            color: white;
            min-height: 100vh;
            font-family: Arial, sans-serif;
          }

          .activities-nav {
            height: 76px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 60px;
            background: #061222;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .nav-logo {
            width: 150px;
            height: 70px;
            object-fit: contain;
          }

          .back-link {
            color: #c9a227;
            text-decoration: none;
            font-weight: 900;
            display: flex;
            align-items: center;
            gap: 8px;
            white-space: nowrap;
          }

          .activities-hero {
            padding: 110px 60px;
            text-align: center;
            background: linear-gradient(135deg, #061222 0%, #071426 60%, #0d213d 100%);
          }

          .hero-logo {
            width: 230px;
            object-fit: contain;
            margin-bottom: 30px;
          }

          .hero-title {
            font-size: 58px;
            color: #c9a227;
            margin: 0 0 25px;
            font-weight: 900;
          }

          .hero-text {
            max-width: 950px;
            margin: 0 auto;
            color: #d8dee9;
            font-size: 20px;
            line-height: 1.9;
          }

          .activity-section-dark {
            padding: 90px 60px;
            background: #071426;
          }

          .activity-section-light {
            padding: 90px 60px;
            background: #f4f1eb;
            color: #071426;
          }

          .activity-layout-left {
            max-width: 1250px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 0.28fr 1fr;
            gap: 55px;
            align-items: start;
          }

          .activity-layout-right {
            max-width: 1250px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 0.28fr;
            gap: 55px;
            align-items: start;
          }

          .activity-icon-dark {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: #0d213d;
            border: 1px solid rgba(201,162,39,0.35);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .activity-icon-light {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: #071426;
            display: flex;
            align-items: center;
            justify-content: center;
            justify-self: center;
          }

          .section-title {
            font-size: 42px;
            color: #c9a227;
            margin-bottom: 25px;
            font-weight: 900;
          }

          .section-title-dark {
            color: #071426;
          }

          .text-dark-bg {
            font-size: 18px;
            line-height: 1.9;
            color: #d8dee9;
          }

          .text-light-bg {
            font-size: 18px;
            line-height: 1.9;
            color: #283447;
          }

          .cards-grid {
            margin-top: 35px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 22px;
          }

          .detail-card {
            background: #0d213d;
            border: 1px solid rgba(201,162,39,0.28);
            border-radius: 22px;
            padding: 26px;
          }

          .detail-card h3 {
            color: #c9a227;
            margin-top: 0;
          }

          .points-grid {
            margin-top: 35px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }

          .light-point {
            background: white;
            color: #071426;
            padding: 18px 20px;
            border-radius: 14px;
            font-weight: 700;
            box-shadow: 0 8px 24px rgba(0,0,0,0.08);
            display: flex;
            gap: 10px;
            align-items: flex-start;
          }

          .dark-point {
            display: flex;
            gap: 12px;
            align-items: flex-start;
            color: #f4f1eb;
            font-size: 17px;
            line-height: 1.7;
          }

          .legal-section {
            background: #f4f1eb;
            color: #071426;
            padding: 70px 60px;
          }

          .legal-card {
            max-width: 1100px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            padding: 40px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          }

          .legal-card h2 {
            color: #c9a227;
            margin-top: 0;
          }

          .legal-card p {
            font-size: 18px;
            line-height: 1.8;
            color: #283447;
          }

          .cta-section {
            padding: 80px 60px;
            background: #071426;
            text-align: center;
          }

          .cta-section h2 {
            font-size: 42px;
            color: #c9a227;
          }

          .cta-section p {
            color: #d8dee9;
            font-size: 19px;
            line-height: 1.8;
            max-width: 780px;
            margin: 0 auto 35px;
          }

          .home-button {
            background: #c9a227;
            color: #071426;
            padding: 16px 34px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 900;
            display: inline-block;
          }

          .footer {
            background: #061222;
            padding: 45px 60px;
            border-top: 1px solid rgba(255,255,255,0.08);
          }

          .footer-grid {
            max-width: 1250px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 40px;
          }

          .footer-bottom {
            text-align: center;
            color: #94a3b8;
            margin-top: 35px;
            font-size: 14px;
          }

          @media (max-width: 1024px) {
            .activities-nav { padding: 0 32px; }
            .activities-hero { padding: 90px 40px; }
            .activity-section-dark, .activity-section-light { padding: 80px 40px; }
            .activity-layout-left, .activity-layout-right { grid-template-columns: 1fr; gap: 30px; }
            .activity-icon-dark, .activity-icon-light { justify-self: start; }
            .cards-grid, .points-grid { grid-template-columns: 1fr; }
            .footer-grid { grid-template-columns: 1fr 1fr; }
          }

          @media (max-width: 640px) {
            .activities-nav { height: auto; min-height: 90px; padding: 12px 20px; gap: 18px; }
            .nav-logo { width: 115px; height: 58px; }
            .back-link { font-size: 12px; }
            .activities-hero { padding: 70px 22px; }
            .hero-logo { width: 160px; }
            .hero-title { font-size: 38px; line-height: 1.15; }
            .hero-text { font-size: 17px; line-height: 1.75; }
            .activity-section-dark, .activity-section-light { padding: 65px 22px; }
            .activity-icon-dark, .activity-icon-light { width: 88px; height: 88px; }
            .section-title { font-size: 30px; line-height: 1.2; }
            .text-dark-bg, .text-light-bg { font-size: 16px; }
            .detail-card { padding: 22px; }
            .light-point, .dark-point { font-size: 15px; }
            .legal-section { padding: 60px 22px; }
            .legal-card { padding: 28px 22px; }
            .legal-card p { font-size: 16px; }
            .cta-section { padding: 65px 22px; }
            .cta-section h2 { font-size: 32px; }
            .cta-section p { font-size: 16px; }
            .footer { padding: 45px 22px; }
            .footer-grid { grid-template-columns: 1fr; }
          }
        `}
      </style>

      <div className="activities-page">
        <nav className="activities-nav">
          <img src="/logo.png" alt="AZ Business Center" className="nav-logo" />
          <Link to="/" className="back-link">
            <ArrowLeft size={18} />
            RETOUR À L'ACCUEIL
          </Link>
        </nav>

        <section className="activities-hero">
          <img src="/logo.png" alt="AZ Business Center" className="hero-logo" />
          <h1 className="hero-title">NOS ACTIVITÉS</h1>
          <p className="hero-text">
            AZ Business Center accompagne les entreprises, copropriétés,
            investisseurs et professionnels au Maroc avec des solutions
            administratives, commerciales et organisationnelles structurées,
            conformément à la réglementation marocaine applicable.
          </p>
        </section>

        {/* CONSEIL ET GESTION */}
        <section className="activity-section-dark">
          <div style={{ position: "relative", width: "100%", maxWidth: "1250px", margin: "0 auto 55px", borderRadius: "20px", overflow: "hidden", height: "350px" }}>
            <img src="/conseil.png" alt="Conseil et Gestion" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,18,34,0.85) 0%, rgba(6,18,34,0.3) 100%)", display: "flex", flexDirection: "row", alignItems: "center", padding: "0 50px", gap: "20px" }}>
              <div style={{ width: "70px", height: "70px", borderRadius: "50%", background: "#071426", border: "1px solid rgba(201,162,39,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <BriefcaseBusiness size={36} color="#c9a227" />
              </div>
              <h2 style={{ color: "#c9a227", fontSize: "42px", fontWeight: 900, margin: 0 }}>CONSEIL ET GESTION</h2>
            </div>
          </div>

          <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
            <p className="text-dark-bg">
              Nous accompagnons les porteurs de projets, entrepreneurs et sociétés
              dans leurs démarches de structuration, de gestion et de développement,
              conformément à la réglementation marocaine en vigueur. Notre rôle est
              d'apporter un support clair, organisé et adapté aux exigences
              administratives et commerciales au Maroc.
            </p>
            <div className="cards-grid">
              {[
                ["Domiciliation commerciale", "Mise à disposition d'une adresse professionnelle conforme à la loi n°89-17. Obligations légales respectées : immatriculation au registre de commerce, mise à jour auprès de la DGI et de la CNSS."],
                ["Création d'entreprises", "Accompagnement complet en 10 étapes : choix du statut juridique (SARL), certificat négatif, établissement des statuts, immatriculation au Registre de Commerce et affiliation à la CNSS."],
                ["Contentieux administratif", "Assistance dans le suivi des dossiers administratifs conformément à la loi n°41-90. Orientation vers les recours en annulation pour excès de pouvoir, dans un délai légal de 60 jours."],
                ["Marchés publics", "Assistance dans la préparation et le suivi des dossiers de marchés publics, conformément au décret n°2-12-349. Un domaine stratégique représentant 15 à 17% du PIB marocain."],
              ].map(([title, description]) => (
                <div className="detail-card" key={title}>
                  <h3>{title}</h3>
                  <p className="text-dark-bg">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GESTION DU SYNDIC */}
        <section className="activity-section-light">
          <div style={{ position: "relative", width: "100%", maxWidth: "1250px", margin: "0 auto 55px", borderRadius: "20px", overflow: "hidden", height: "350px" }}>
            <img src="/syndic.png" alt="Gestion du Syndic" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,18,34,0.85) 0%, rgba(6,18,34,0.3) 100%)", display: "flex", flexDirection: "row", alignItems: "center", padding: "0 50px", gap: "20px" }}>
              <div style={{ width: "70px", height: "70px", borderRadius: "50%", background: "#071426", border: "1px solid rgba(201,162,39,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Building2 size={36} color="#c9a227" />
              </div>
              <h2 style={{ color: "#c9a227", fontSize: "42px", fontWeight: 900, margin: 0 }}>GESTION DU SYNDIC D'IMMEUBLES</h2>
            </div>
          </div>

          <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
            <p className="text-light-bg">
              AZ Business Center assure une gestion organisée, transparente et
              professionnelle de votre copropriété, en conformité avec la loi n°18-00
              révisée par le Parlement marocain le 9 juillet 2024. Cette nouvelle
              législation renforce la transparence, la communication et la résolution
              des conflits au sein des copropriétés.
            </p>
            <div className="points-grid">
              {[
                "Convocation et organisation des assemblées générales avec 15 jours de préavis",
                "Notification des décisions aux copropriétaires dans un délai de 8 jours",
                "Conciliation et médiation avant tout recours juridique",
                "Suivi administratif et gestion des charges de copropriété",
                "Communication transparente avec les copropriétaires",
                "Suivi de l'entretien général de l'immeuble",
              ].map((item) => (
                <div key={item} className="light-point">
                  <CheckCircle color="#c9a227" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOUS LOCATION */}
        <section className="activity-section-dark">
          <div style={{ position: "relative", width: "100%", maxWidth: "1250px", margin: "0 auto 55px", borderRadius: "20px", overflow: "hidden", height: "350px" }}>
            <img src="/souslocation.png" alt="Sous Location" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,18,34,0.85) 0%, rgba(6,18,34,0.3) 100%)", display: "flex", flexDirection: "row", alignItems: "center", padding: "0 50px", gap: "20px" }}>
              <div style={{ width: "70px", height: "70px", borderRadius: "50%", background: "#071426", border: "1px solid rgba(201,162,39,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Sofa size={36} color="#c9a227" />
              </div>
              <h2 style={{ color: "#c9a227", fontSize: "42px", fontWeight: 900, margin: 0 }}>SOUS LOCATION D'IMMEUBLES MEUBLÉES</h2>
            </div>
          </div>

          <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
            <p className="text-dark-bg">
              Nous proposons des solutions de sous-location d'immeubles meublés,
              adaptées aux besoins des professionnels, entreprises et visiteurs.
              Cette activité s'inscrit dans un cadre contractuel clair, conforme
              à l'article 668 du Code des Obligations et des Contrats marocain,
              avec une autorisation écrite du propriétaire et des conditions
              clairement définies.
            </p>
            <div className="points-grid">
              {[
                "Espaces meublés modernes, confortables et prêts à l'emploi",
                "Solutions adaptées aux courts ou longs séjours",
                "Contrats conformes à l'article 668 du Code des Obligations et des Contrats",
                "Autorisation écrite du propriétaire garantie",
                "Accompagnement dans la mise à disposition des espaces",
                "Suivi de l'état, de l'usage et de l'organisation des lieux",
              ].map((item) => (
                <div key={item} className="dark-point">
                  <CheckCircle color="#c9a227" size={22} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="legal-section">
          <div className="legal-card">
            <h2>Cadre professionnel</h2>
            <p>
              Les services proposés par AZ Business Center sont présentés dans
              un cadre d'accompagnement professionnel. Selon la nature du
              dossier, le client peut être orienté vers les administrations,
              professionnels ou conseils compétents afin de respecter les
              procédures et obligations prévues par le droit marocain.
            </p>
          </div>
        </section>

        <section className="cta-section">
          <h2>Besoin d'un accompagnement ?</h2>
          <p>Contactez AZ Business Center pour obtenir plus d'informations sur nos activités et nos solutions professionnelles.</p>
          <Link to="/" className="home-button">RETOUR À L'ACCUEIL</Link>
        </section>

        <footer className="footer">
          <div className="footer-grid">
            <div>
              <img src="/logo.png" alt="AZ Business Center" style={{ width: "150px", height: "80px", objectFit: "contain" }} />
            </div>
            <div>
              <h4 style={{ color: "#c9a227" }}>CONTACT</h4>
              <p><Phone size={16} /> +212 6 00 00 00 00</p>
              <p><Mail size={16} /> contact@az-businesscenter.ma</p>
              <p><MapPin size={16} /> Fès, Maroc</p>
            </div>
            <div>
              <h4 style={{ color: "#c9a227" }}>AZ BUSINESS CENTER</h4>
              <p style={{ color: "#d8dee9", lineHeight: "1.7" }}>Conseil, gestion, accompagnement administratif et solutions professionnelles au Maroc.</p>
            </div>
          </div>
          <p className="footer-bottom">© 2026 AZ Business Center — Tous droits réservés.</p>
        </footer>
      </div>
    </>
  );
}