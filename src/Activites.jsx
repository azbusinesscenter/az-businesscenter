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
            .activities-nav {
              padding: 0 32px;
            }

            .activities-hero {
              padding: 90px 40px;
            }

            .activity-section-dark,
            .activity-section-light {
              padding: 80px 40px;
            }

            .activity-layout-left,
            .activity-layout-right {
              grid-template-columns: 1fr;
              gap: 30px;
            }

            .activity-icon-dark,
            .activity-icon-light {
              justify-self: start;
            }

            .cards-grid,
            .points-grid {
              grid-template-columns: 1fr;
            }

            .footer-grid {
              grid-template-columns: 1fr 1fr;
            }
          }

          @media (max-width: 640px) {
            .activities-nav {
              height: auto;
              min-height: 90px;
              padding: 12px 20px;
              gap: 18px;
            }

            .nav-logo {
              width: 115px;
              height: 58px;
            }

            .back-link {
              font-size: 12px;
            }

            .activities-hero {
              padding: 70px 22px;
            }

            .hero-logo {
              width: 160px;
            }

            .hero-title {
              font-size: 38px;
              line-height: 1.15;
            }

            .hero-text {
              font-size: 17px;
              line-height: 1.75;
            }

            .activity-section-dark,
            .activity-section-light {
              padding: 65px 22px;
            }

            .activity-icon-dark,
            .activity-icon-light {
              width: 88px;
              height: 88px;
            }

            .section-title {
              font-size: 30px;
              line-height: 1.2;
            }

            .text-dark-bg,
            .text-light-bg {
              font-size: 16px;
            }

            .detail-card {
              padding: 22px;
            }

            .light-point,
            .dark-point {
              font-size: 15px;
            }

            .legal-section {
              padding: 60px 22px;
            }

            .legal-card {
              padding: 28px 22px;
            }

            .legal-card p {
              font-size: 16px;
            }

            .cta-section {
              padding: 65px 22px;
            }

            .cta-section h2 {
              font-size: 32px;
            }

            .cta-section p {
              font-size: 16px;
            }

            .footer {
              padding: 45px 22px;
            }

            .footer-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="activities-page">
        <nav className="activities-nav">
          <img src="/logo.png" alt="AZ Business Center" className="nav-logo" />

          <Link to="/" className="back-link">
            <ArrowLeft size={18} />
            RETOUR À L’ACCUEIL
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

        <section className="activity-section-dark">
          <div className="activity-layout-left">
            <div className="activity-icon-dark">
              <BriefcaseBusiness size={58} color="#c9a227" />
            </div>

            <div>
              <h2 className="section-title">CONSEIL ET GESTION</h2>

              <p className="text-dark-bg">
                Nous accompagnons les porteurs de projets, entrepreneurs et
                sociétés dans leurs démarches de structuration, de gestion et de
                développement. Notre rôle est d’apporter un support clair,
                organisé et adapté aux exigences administratives et commerciales
                au Maroc.
              </p>

              <div className="cards-grid">
                {[
                  [
                    "Domiciliation commerciale",
                    "Mise à disposition d’une adresse professionnelle pour les entreprises, dans le respect des obligations prévues par la réglementation marocaine.",
                  ],
                  [
                    "Création d’entreprises",
                    "Accompagnement dans les démarches de constitution, préparation des documents, orientation administrative et suivi du dossier.",
                  ],
                  [
                    "Contentieux administratif",
                    "Assistance dans l’organisation et le suivi des dossiers administratifs, avec orientation vers les procédures adaptées selon la situation.",
                  ],
                  [
                    "Marchés publics",
                    "Assistance en matière de préparation, classement et suivi des dossiers liés aux marchés publics, conformément aux exigences applicables au Maroc.",
                  ],
                ].map(([title, description]) => (
                  <div className="detail-card" key={title}>
                    <h3>{title}</h3>
                    <p className="text-dark-bg">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="activity-section-light">
          <div className="activity-layout-right">
            <div>
              <h2 className="section-title section-title-dark">
                GESTION DU SYNDIC D’IMMEUBLES
              </h2>

              <p className="text-light-bg">
                AZ Business Center propose une gestion organisée, transparente
                et professionnelle des copropriétés. Notre objectif est
                d’assurer le bon fonctionnement de l’immeuble, le suivi
                administratif, la communication avec les copropriétaires et la
                gestion courante, dans le cadre de la législation marocaine
                relative à la copropriété.
              </p>

              <div className="points-grid">
                {[
                  "Suivi administratif des dossiers de copropriété",
                  "Gestion des charges et organisation des documents",
                  "Communication avec les copropriétaires",
                  "Coordination avec les prestataires",
                  "Organisation des assemblées et comptes rendus",
                  "Suivi de l’entretien général de l’immeuble",
                ].map((item) => (
                  <div key={item} className="light-point">
                    <CheckCircle color="#c9a227" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="activity-icon-light">
              <Building2 size={58} color="#c9a227" />
            </div>
          </div>
        </section>

        <section className="activity-section-dark">
          <div className="activity-layout-left">
            <div className="activity-icon-dark">
              <Sofa size={58} color="#c9a227" />
            </div>

            <div>
              <h2 className="section-title">
                SOUS LOCATION D’IMMEUBLES MEUBLÉES
              </h2>

              <p className="text-dark-bg">
                Nous proposons des solutions de sous-location d’immeubles
                meublés, adaptées aux besoins des professionnels, entreprises,
                visiteurs et clients recherchant des espaces prêts à l’emploi.
                Cette activité s’inscrit dans un cadre contractuel clair,
                conforme aux règles applicables au Maroc.
              </p>

              <div className="points-grid">
                {[
                  "Espaces meublés modernes et fonctionnels",
                  "Solutions adaptées aux courts ou longs séjours",
                  "Cadre professionnel, confortable et organisé",
                  "Contrats et conditions clairement définis",
                  "Accompagnement dans la mise à disposition des espaces",
                  "Suivi de l’état, de l’usage et de l’organisation des lieux",
                ].map((item) => (
                  <div key={item} className="dark-point">
                    <CheckCircle color="#c9a227" size={22} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <div className="legal-card">
            <h2>Cadre professionnel</h2>
            <p>
              Les services proposés par AZ Business Center sont présentés dans
              un cadre d’accompagnement professionnel. Selon la nature du
              dossier, le client peut être orienté vers les administrations,
              professionnels ou conseils compétents afin de respecter les
              procédures et obligations prévues par le droit marocain.
            </p>
          </div>
        </section>

        <section className="cta-section">
          <h2>Besoin d’un accompagnement ?</h2>

          <p>
            Contactez AZ Business Center pour obtenir plus d’informations sur
            nos activités et nos solutions professionnelles.
          </p>

          <Link to="/" className="home-button">
            RETOUR À L’ACCUEIL
          </Link>
        </section>

        <footer className="footer">
          <div className="footer-grid">
            <div>
              <img
                src="/logo.png"
                alt="AZ Business Center"
                style={{
                  width: "150px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
            </div>

            <div>
              <h4 style={{ color: "#c9a227" }}>CONTACT</h4>
              <p>
                <Phone size={16} /> +212 6 00 00 00 00
              </p>
              <p>
                <Mail size={16} /> contact@az-businesscenter.com
              </p>
              <p>
                <MapPin size={16} /> Fès, Maroc
              </p>
            </div>

            <div>
              <h4 style={{ color: "#c9a227" }}>AZ BUSINESS CENTER</h4>
              <p style={{ color: "#d8dee9", lineHeight: "1.7" }}>
                Conseil, gestion, accompagnement administratif et solutions
                professionnelles au Maroc.
              </p>
            </div>
          </div>

          <p className="footer-bottom">
            © 2026 AZ Business Center — Tous droits réservés.
          </p>
        </footer>
      </div>
    </>
  );
}