import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  BriefcaseBusiness,
  Building2,
  Sofa,
  CheckCircle,
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
} from "lucide-react";

export default function Activities() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const conseilCards = [
    [t("acts.c1t"), t("acts.c1d")],
    [t("acts.c2t"), t("acts.c2d")],
    [t("acts.c3t"), t("acts.c3d")],
    [t("acts.c4t"), t("acts.c4d")],
  ];

  const steps = [
    [t("acts.s1t"), t("acts.s1d")],
    [t("acts.s2t"), t("acts.s2d")],
    [t("acts.s3t"), t("acts.s3d")],
    [t("acts.s4t"), t("acts.s4d")],
    [t("acts.s5t"), t("acts.s5d")],
    [t("acts.s6t"), t("acts.s6d")],
    [t("acts.s7t"), t("acts.s7d")],
    [t("acts.s8t"), t("acts.s8d")],
    [t("acts.s9t"), t("acts.s9d")],
    [t("acts.s10t"), t("acts.s10d")],
    [t("acts.s11t"), t("acts.s11d")],
  ];

  const syndicPoints = [
    t("acts.sy1"), t("acts.sy2"), t("acts.sy3"),
    t("acts.sy4"), t("acts.sy5"), t("acts.sy6"),
  ];

  const sousPoints = [
    t("acts.so1"), t("acts.so2"), t("acts.so3"),
    t("acts.so4"), t("acts.so5"), t("acts.so6"),
  ];

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
          [dir="rtl"] .activities-page {
            font-family: Tahoma, Arial, sans-serif;
          }
            .brand {
            color: #c9a227;
            white-space: nowrap;
            font-size: 1.05em;
            letter-spacing: 1px;
          }
          [dir="rtl"] .brand {
            letter-spacing: 0;
          }
            [dir="rtl"] .back-link svg {
            transform: scaleX(-1);
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
          .lang-switch {
            display: flex;
            gap: 8px;
          }

          .lang-btn {
            background: transparent;
            border: 1px solid rgba(201,162,39,0.5);
            color: #d8dee9;
            padding: 6px 13px;
            border-radius: 6px;
            font-weight: 800;
            font-size: 13px;
            cursor: pointer;
          }

          .lang-btn.active {
            background: #c9a227;
            border-color: #c9a227;
            color: #071426;
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

          .activity-banner {
            position: relative;
            width: 100%;
            max-width: 1250px;
            margin: 0 auto 55px;
            border-radius: 20px;
            overflow: hidden;
            height: 350px;
          }

          .activity-banner-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to right, rgba(6,18,34,0.85) 0%, rgba(6,18,34,0.3) 100%);
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 50px;
            gap: 20px;
          }

          [dir="rtl"] .activity-banner-overlay {
            background: linear-gradient(to left, rgba(6,18,34,0.85) 0%, rgba(6,18,34,0.3) 100%);
          }

          .activity-banner-icon {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: #071426;
            border: 1px solid rgba(201,162,39,0.35);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .activity-banner-title {
            color: #c9a227;
            font-size: 42px;
            font-weight: 900;
            margin: 0;
            line-height: 1.2;
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
            .steps-title {
            color: #c9a227;
            font-size: 30px;
            font-weight: 900;
            margin: 60px 0 30px;
          }

          .steps-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .step-card {
            background: #0d213d;
            border: 1px solid rgba(201,162,39,0.28);
            border-radius: 18px;
            padding: 24px;
          }

          .step-number {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: #c9a227;
            color: #071426;
            font-weight: 900;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 14px;
          }

          .step-card h4 {
            color: white;
            font-size: 18px;
            margin: 0 0 8px;
            line-height: 1.35;
          }

          .step-card p {
            color: #d8dee9;
            font-size: 15px;
            line-height: 1.65;
            margin: 0;
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

          .cta-section {
            padding: 80px 60px;
            background: #f4f1eb;
            text-align: center;
          }

          .cta-section h2 {
            font-size: 42px;
            color: #071426;
          }

          .cta-section p {
            color: #283447;
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
            transition: transform 0.25s ease, box-shadow 0.25s ease;
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

          [dir="rtl"] #tidio-chat {
            display: none !important;
          }

          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.7s ease, transform 0.7s ease;
          }

          .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
          }

          .home-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(201,162,39,0.4);
          }

          @media (max-width: 1024px) {
            .activities-nav { padding: 0 32px; }
            .activities-hero { padding: 90px 40px; }
            .activity-section-dark, .activity-section-light { padding: 80px 40px; }
            .cards-grid, .points-grid { grid-template-columns: 1fr; }
            .steps-grid { grid-template-columns: repeat(2, 1fr); }
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
            .section-title { font-size: 30px; line-height: 1.2; }
            .text-dark-bg, .text-light-bg { font-size: 16px; }
            .detail-card { padding: 22px; }
            .light-point, .dark-point { font-size: 15px; }
            .cta-section { padding: 65px 22px; }
            
            .brand { font-size: 0.9em; letter-spacing: 0; }
            .cta-section p { font-size: 16px; }
            .footer { padding: 45px 22px; }
            .footer-grid { grid-template-columns: 1fr; }
            .activity-banner { height: auto; min-height: 130px; }
            .activity-banner img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }
            .activity-banner-overlay { position: relative; padding: 25px 20px; min-height: 130px; }
            .activity-banner-icon { width: 50px; height: 50px; }
            .activity-banner-title { font-size: 24px; }
            .steps-grid { grid-template-columns: 1fr; }
            .steps-title { font-size: 24px; }
          }
        `}
      </style>

      <div className="activities-page">
        <nav className="activities-nav">
          <img src="/logo.png" alt="AZ Business Center" className="nav-logo" />
          <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
            <Link to="/" className="back-link">
              <ArrowLeft size={18} />
              {t("acts.backHome")}
            </Link>
            <Link to="/tarifs" className="back-link">{t("acts.tarifs")}</Link>
            <div className="lang-switch">
              <button
                className={`lang-btn${i18n.language === "fr" ? " active" : ""}`}
                onClick={() => changeLang("fr")}
              >
                FR
              </button>
              <button
                className={`lang-btn${i18n.language === "ar" ? " active" : ""}`}
                onClick={() => changeLang("ar")}
              >
                ع
              </button>
            </div>
          </div>
        </nav>

        <section className="activities-hero fade-in">
          <img src="/logo.png" alt="AZ Business Center" className="hero-logo" />
          <h1 className="hero-title">{t("acts.heroTitle")}</h1>
          <p className="hero-text">
            <span className="brand">AZ BUSINESS CENTER</span> {t("acts.heroText")}
          </p>
        </section>

        {/* CONSEIL ET GESTION */}
        <section className="activity-section-dark fade-in">
          <div className="activity-banner">
            <img src="/conseil.webp" alt="Conseil et Gestion" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div className="activity-banner-overlay">
              <div className="activity-banner-icon">
                <BriefcaseBusiness size={36} color="#c9a227" />
              </div>
              <h2 className="activity-banner-title">{t("acts.conseilTitle")}</h2>
            </div>
          </div>

          <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
            <p className="text-dark-bg">
              {t("acts.conseilIntro")}
            </p>
            <div className="cards-grid">
              {conseilCards.map(([title, description]) => (
                <div className="detail-card" key={title}>
                  <h3>{title}</h3>
                  <p className="text-dark-bg">{description}</p>
                </div>
              ))}
            </div>

            <h3 className="steps-title">{t("acts.stepsTitle")}</h3>
            <div className="steps-grid">
              {steps.map(([title, text], index) => (
                <div className="step-card" key={title}>
                  <div className="step-number">{index + 1}</div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GESTION DU SYNDIC */}
        <section className="activity-section-light fade-in">
          <div className="activity-banner">
            <img src="/syndic.webp" alt="Gestion du Syndic" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div className="activity-banner-overlay">
              <div className="activity-banner-icon">
                <Building2 size={36} color="#c9a227" />
              </div>
              <h2 className="activity-banner-title">{t("acts.syndicTitle")}</h2>
            </div>
          </div>

          <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
            <p className="text-light-bg">
              <span className="brand">AZ BUSINESS CENTER</span> {t("acts.syndicIntro")}
            </p>
            <div className="points-grid">
              {syndicPoints.map((item) => (
                <div key={item} className="light-point">
                  <CheckCircle color="#c9a227" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOUS LOCATION */}
        <section className="activity-section-dark fade-in">
          <div className="activity-banner">
            <img src="/souslocation.webp" alt="Sous Location" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div className="activity-banner-overlay">
              <div className="activity-banner-icon">
                <Sofa size={36} color="#c9a227" />
              </div>
              <h2 className="activity-banner-title">{t("acts.sousTitle")}</h2>
            </div>
          </div>

          <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
            <p className="text-dark-bg">
              {t("acts.sousIntro")}
            </p>
            <div className="points-grid">
              {sousPoints.map((item) => (
                <div key={item} className="dark-point">
                  <CheckCircle color="#c9a227" size={22} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>



        <section className="cta-section fade-in">
          <h2>{t("acts.ctaTitle")}</h2>
          <p>{t("acts.ctaContact")} <span className="brand">AZ Business Center</span> {t("acts.ctaText")}</p>
          <Link to="/" className="home-button">{t("acts.backHome")}</Link>
        </section>

        <footer className="footer">
          <div className="footer-grid">
            <div>
              <img src="/logo.png" alt="AZ Business Center" style={{ width: "150px", height: "80px", objectFit: "contain" }} />
            </div>
            <div>
              <h4 style={{ color: "#c9a227" }}>{t("footer.contactTitle")}</h4>
              <p dir="ltr" style={{ textAlign: isAr ? "right" : "left" }}><Phone size={16} /> +212 778 692 099</p>
              <p dir="ltr" style={{ textAlign: isAr ? "right" : "left" }}><Phone size={16} /> +212 662 83 44 89</p>
              <p dir="ltr" style={{ textAlign: isAr ? "right" : "left" }}><PhoneCall size={16} /> +212 535 65 20 33</p>
              <p><Mail size={16} /> contact@az-businesscenter.ma</p>
              <p><MapPin size={16} /> N° 75 «Bureaux Al Atlas», Br N°24, 3ème étage, Av. El Hoceima, Atlas, Agdal-Fès</p>
            </div>
            <div>
              <h4 style={{ color: "#c9a227" }}>AZ BUSINESS CENTER</h4>
              <p style={{ color: "#d8dee9", lineHeight: "1.7" }}>{t("footer.aboutText")}</p>
            </div>
          </div>
          <p className="footer-bottom">© 2026 <span className="brand">AZ Business Center</span> — {t("footer.rights")}</p>
        </footer>
      </div>
    </>
  );
}
