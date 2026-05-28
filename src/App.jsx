import React from "react";
import { Link } from "react-router-dom";

import {
  Building2,
  BriefcaseBusiness,
  Handshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sofa,
  Target,
} from "lucide-react";

const activities = [
  {
    icon: BriefcaseBusiness,
    title: "CONSEIL ET GESTION",
    items: [
      "Domiciliation commerciale",
      "Création d’entreprises",
      "Contentieux administratif",
      "Assistance en matière de marchés publics",
    ],
  },
  {
    icon: Building2,
    title: "GESTION DU SYNDIC D’IMMEUBLES",
    items: [
      "Une gestion rigoureuse",
      "transparente et professionnelle",
      "de votre copropriété.",
    ],
  },
  {
    icon: Sofa,
    title: "SOUS LOCATION D’IMMEUBLES MEUBLÉES",
    items: [
      "Des espaces meublés",
      "confortables et prêts à l’emploi",
      "pour courts ou longs séjours.",
    ],
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "EXPERTISE & EXPÉRIENCE",
    text: "Une équipe qualifiée à votre service.",
  },
  {
    icon: Handshake,
    title: "ACCOMPAGNEMENT PERSONNALISÉ",
    text: "Des solutions adaptées à vos besoins.",
  },
  {
    icon: Target,
    title: "EFFICACITÉ & RIGUEUR",
    text: "Des résultats concrets, dans les délais.",
  },
  {
    icon: MapPin,
    title: "PROXIMITÉ & DISPONIBILITÉ",
    text: "À vos côtés, au quotidien.",
  },
];

export default function App() {
  const [status, setStatus] = React.useState("idle");

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyBpy8fAoBfLpurO8ssVFwneveMaQxqjUnXAng7Vrc_RFPgz_aq6REicE-R75uJCF-M/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });
      setStatus("sent");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  };
  const inputStyle = {
    width: "100%",
    padding: "17px 18px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.14)",
    background: "#071426",
    color: "white",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <>
      <style>
        {`
          .page {
            background: #071426;
            color: white;
            min-height: 100vh;
            font-family: Arial, sans-serif;
          }

          .navbar {
            height: 76px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0 60px;
            background: #061222;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .nav-links {
            display: flex;
            gap: 38px;
            align-items: center;
          }

          .nav-link {
            color: #d8dee9;
            text-decoration: none;
            font-size: 14px;
            font-weight: 800;
            letter-spacing: 0.5px;
            white-space: nowrap;
          }

          .hero {
            min-height: 720px;
            position: relative;
            background-image: url('/office.jpg');
            background-size: cover;
            background-position: center;
            overflow: hidden;
          }

          .hero-gradient {
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, rgba(6,18,34,0.98) 0%, rgba(6,18,34,0.95) 38%, rgba(6,18,34,0.55) 58%, rgba(6,18,34,0.05) 100%);
          }

          .hero-shape {
            position: absolute;
            left: 0;
            top: 0;
            width: 58%;
            height: 100%;
            background: #061222;
            clip-path: polygon(0 0, 78% 0, 100% 100%, 0% 100%);
            opacity: 0.96;
          }

          .hero-content {
            position: relative;
            z-index: 2;
            min-height: 720px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 55px 70px;
            max-width: 780px;
          }

          .hero-logo {
            width: 210px;
            object-fit: contain;
            margin-bottom: 35px;
          }

          .hero-title {
            font-size: 58px;
            line-height: 1.18;
            margin: 0;
            font-weight: 900;
            letter-spacing: 0.5px;
          }

          .hero-subtitle {
            margin-top: 35px;
            color: white;
            font-size: 20px;
            font-weight: 800;
            letter-spacing: 1px;
          }

          .section-light {
            background: #f4f1eb;
            color: #071426;
            padding: 90px 60px;
          }

          .section-dark {
            background: #071426;
            color: white;
            padding: 90px 60px;
          }

          .section-label-wrap {
            text-align: center;
            margin-bottom: 50px;
          }

          .section-label {
            display: inline-block;
            background: #c9a227;
            color: #071426;
            padding: 12px 42px;
            border-radius: 8px;
            font-weight: 900;
            font-size: 22px;
          }

          .activities-grid {
            max-width: 1250px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            background: white;
            border-radius: 28px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.12);
          }

          .activity-card {
            padding: 48px 38px;
            text-align: center;
            border-right: 1px solid rgba(201,162,39,0.35);
          }

          .activity-card:last-child {
            border-right: none;
          }

          .icon-circle {
            width: 86px;
            height: 86px;
            border-radius: 50%;
            background: #071426;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 28px;
          }

          .activity-title {
            font-size: 24px;
            line-height: 1.25;
            margin-bottom: 22px;
          }

          .activity-text {
            color: #1c2635;
            font-size: 17px;
            line-height: 1.9;
            margin-top: 15px;
          }

          .activity-item {
            margin-bottom: 10px;
          }

          .button-dark {
            display: inline-block;
            margin-top: 25px;
            background: #071426;
            color: #c9a227;
            padding: 14px 28px;
            border-radius: 8px;
            font-weight: 800;
            font-size: 15px;
            text-decoration: none;
          }

          .why-title {
            color: #c9a227;
            font-size: 36px;
            margin-bottom: 60px;
            text-align: center;
          }

          .why-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
          }

          .why-card {
            padding: 25px 24px;
            border-right: 1px solid rgba(201,162,39,0.35);
            text-align: center;
          }

          .why-card:last-child {
            border-right: none;
          }

          .why-card h3 {
            font-size: 21px;
            line-height: 1.3;
            margin: 24px 0 14px;
          }

          .why-card p {
            color: #d8dee9;
            font-size: 17px;
            line-height: 1.7;
            margin: 0;
          }

          .contact-card {
            max-width: 1150px;
            margin: 0 auto;
            background: #0d213d;
            border-radius: 30px;
            padding: 55px;
            border: 1px solid rgba(201,162,39,0.3);
          }

          .contact-card h2 {
            font-size: 46px;
            margin-top: 0;
          }

          .contact-card p {
            color: #d8dee9;
            font-size: 18px;
            line-height: 1.8;
            max-width: 750px;
            margin-bottom: 40px;
          }

          .contact-form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 22px;
          }

          .textarea-full,
          .submit-full {
            grid-column: 1 / -1;
          }

          .submit-button {
            background: #c9a227;
            color: #071426;
            border: none;
            padding: 18px 32px;
            border-radius: 6px;
            font-weight: 900;
            font-size: 16px;
            cursor: pointer;
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

          .footer-link {
            color: #d8dee9;
            text-decoration: none;
          }

          .footer-bottom {
            text-align: center;
            color: #94a3b8;
            margin-top: 35px;
            font-size: 14px;
          }

          .whatsapp-button {
            position: fixed;
            right: 28px;
            bottom: 28px;
            width: 68px;
            height: 68px;
            border-radius: 50%;
            background: #25D366;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 12px 35px rgba(0,0,0,0.35);
            z-index: 2000;
            text-decoration: none;
          }

          .whatsapp-button img {
            width: 38px;
            height: 38px;
          }

          @media (max-width: 1024px) {
            .navbar {
              padding: 0 28px;
              justify-content: center;
            }

            .nav-links {
              gap: 22px;
              flex-wrap: wrap;
              justify-content: center;
            }

            .hero {
              min-height: 650px;
            }

            .hero-shape {
              width: 75%;
            }

            .hero-content {
              min-height: 650px;
              padding: 45px 42px;
              max-width: 700px;
            }

            .hero-title {
              font-size: 48px;
            }

            .activities-grid {
              grid-template-columns: 1fr;
              max-width: 720px;
            }

            .activity-card {
              border-right: none;
              border-bottom: 1px solid rgba(201,162,39,0.35);
            }

            .activity-card:last-child {
              border-bottom: none;
            }

            .why-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .why-card {
              border-right: none;
            }

            .footer-grid {
              grid-template-columns: 1fr 1fr;
            }
          }

          @media (max-width: 640px) {
            .navbar {
              height: auto;
              min-height: 92px;
              padding: 14px 18px;
            }

            .nav-links {
              gap: 14px 18px;
            }

            .nav-link {
              font-size: 12px;
            }

            .hero {
              min-height: auto;
              background-position: center;
            }

            .hero-gradient {
              background: rgba(6,18,34,0.84);
            }

            .hero-shape {
              display: none;
            }

            .hero-content {
              min-height: auto;
              padding: 70px 24px;
              max-width: 100%;
            }

            .hero-logo {
              width: 150px;
              margin-bottom: 28px;
            }

            .hero-title {
              font-size: 38px;
              line-height: 1.15;
            }

            .hero-subtitle {
              font-size: 15px;
              line-height: 1.8;
            }

            .section-light,
            .section-dark {
              padding: 70px 22px;
            }

            .section-label {
              font-size: 18px;
              padding: 11px 28px;
            }

            .activities-grid {
              border-radius: 20px;
            }

            .activity-card {
              padding: 38px 24px;
            }

            .activity-title {
              font-size: 21px;
            }

            .why-title {
              font-size: 28px;
              line-height: 1.25;
            }

            .why-grid {
              grid-template-columns: 1fr;
            }

            .contact-card {
              padding: 35px 22px;
              border-radius: 22px;
            }

            .contact-card h2 {
              font-size: 32px;
              line-height: 1.2;
            }

            .contact-form {
              grid-template-columns: 1fr;
            }

            .footer {
              padding: 45px 22px;
            }

            .footer-grid {
              grid-template-columns: 1fr;
            }

            .whatsapp-button {
              width: 58px;
              height: 58px;
              right: 18px;
              bottom: 18px;
            }

            .whatsapp-button img {
              width: 32px;
              height: 32px;
            }
          }
        `}
      </style>

      <div className="page">
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/" className="nav-link">
              ACCUEIL
            </Link>

            <Link to="/activites" target="_blank" className="nav-link">
              NOS ACTIVITÉS
            </Link>

            <a href="#pourquoi" className="nav-link">
              POURQUOI NOUS
            </a>

            <a href="#contact" className="nav-link">
              CONTACT
            </a>
          </div>
        </nav>

        <section id="accueil" className="hero">
          <div className="hero-gradient" />
          <div className="hero-shape" />

          <div className="hero-content">
            <img
              src="/logo.png"
              alt="AZ Business Center"
              className="hero-logo"
            />

            <h1 className="hero-title">
              VOTRE PARTENAIRE
              <br />
              <span style={{ color: "#c9a227" }}>DE CONFIANCE,</span>
              <br />
              À CHAQUE ÉTAPE
              <br />
              DE VOTRE RÉUSSITE
            </h1>

            <div className="hero-subtitle">
              EXPERTISE <span style={{ color: "#c9a227" }}>•</span> PROXIMITÉ{" "}
              <span style={{ color: "#c9a227" }}>•</span> PERFORMANCE
            </div>
          </div>
        </section>

        <section id="activites" className="section-light">
          <div className="section-label-wrap">
            <span className="section-label">NOS ACTIVITÉS</span>
          </div>

          <div className="activities-grid">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div key={activity.title} className="activity-card">
                  <div className="icon-circle">
                    <Icon color="#c9a227" size={42} />
                  </div>

                  <h3 className="activity-title">{activity.title}</h3>

                  <div className="activity-text">
                    {activity.items.map((item) => (
                      <div key={item} className="activity-item">
                        {item}
                      </div>
                    ))}

                    <Link
                      to="/activites"

                      className="button-dark"
                    >
                      Voir plus
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="pourquoi" className="section-dark">
          <h2 className="why-title">
            POURQUOI CHOISIR AZ BUSINESS CENTER ?
          </h2>

          <div className="why-grid">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div key={reason.title} className="why-card">
                  <Icon color="#c9a227" size={62} />

                  <h3>{reason.title}</h3>

                  <p>{reason.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="contact" className="section-dark">
          <div className="contact-card">
            <h2>Contactez AZ Business Center</h2>

            <p>
              Laissez vos informations et notre équipe vous contactera prochainement.
            </p>

            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <input
                name="name"
                placeholder="Nom complet"
                required
                style={inputStyle}
              />
              <input
                name="phone"
                placeholder="Téléphone"
                required
                style={inputStyle}
              />
              <input
                name="email"
                type="email"
                placeholder="Adresse e-mail"
                required
                style={inputStyle}
              />
              <input
                name="company"
                placeholder="Entreprise"
                style={inputStyle}
              />

              <textarea
                name="message"
                placeholder="Votre message"
                rows="6"
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
                className="textarea-full"
              />

              <button type="submit" className="submit-button submit-full" disabled={status === "sending"}>
                {status === "sending" ? "ENVOI EN COURS..." : "ENVOYER"}
              </button>

              {status === "sent" && (
                <p style={{ color: "#c9a227", gridColumn: "1/-1" }}>
                  ✅ Message envoyé avec succès !
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "#f87171", gridColumn: "1/-1" }}>
                  ❌ Une erreur est survenue. Veuillez réessayer.
                </p>
              )}
            </form>
          </div>
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
              <h4 style={{ color: "#c9a227" }}>LIENS RAPIDES</h4>

              <p>
                <Link to="/" className="footer-link">
                  Accueil
                </Link>
              </p>

              <p>
                <Link to="/activites" target="_blank" className="footer-link">
                  Nos activités
                </Link>
              </p>

              <p>
                <a href="#pourquoi" className="footer-link">
                  Pourquoi nous choisir
                </a>
              </p>

              <p>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </p>
            </div>
          </div>

          <p className="footer-bottom">
            © 2026 AZ Business Center — Tous droits réservés.
          </p>
        </footer>

        <a
          href="https://wa.me/212600000000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact WhatsApp"
          className="whatsapp-button"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
        </a>
      </div>
    </>
  );
}