import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  Star,
  Tag,
} from "lucide-react";

export default function Tarifs() {
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

  const packs = [
    {
      name: "Pack Essentiel",
      displayName: t("tarifs.p1name"),
      tagline: t("tarifs.p1tag"),
      price: "3 500",
      deposit: t("tarifs.p1deposit"),
      highlights: [t("tarifs.p1h1")],
      button: t("tarifs.p1btn"),
      recommended: false,
    },
    {
      name: "Pack Pro",
      displayName: t("tarifs.p2name"),
      tagline: t("tarifs.p2tag"),
      price: "5 000",
      deposit: t("tarifs.p2deposit"),
      highlights: [t("tarifs.p2h1"), t("tarifs.p2h2")],
      button: t("tarifs.p2btn"),
      recommended: true,
    },
    {
      name: "Pack Premium",
      displayName: t("tarifs.p3name"),
      tagline: t("tarifs.p3tag"),
      price: "9 980",
      deposit: t("tarifs.p3deposit"),
      highlights: [t("tarifs.p3h1"), t("tarifs.p3h2"), t("tarifs.p3h3")],
      button: t("tarifs.p3btn"),
      recommended: false,
    },
  ];

  const commonServices = [
    t("tarifs.sv1"), t("tarifs.sv2"), t("tarifs.sv3"), t("tarifs.sv4"), t("tarifs.sv5"),
    t("tarifs.sv6"), t("tarifs.sv7"), t("tarifs.sv8"), t("tarifs.sv9"), t("tarifs.sv10"),
  ];

  return (
    <>
      <style>
        {`
          .tarifs-page {
            background: #f4f1eb;
            color: #071426;
            min-height: 100vh;
            font-family: 'Inter', Arial, sans-serif;
          }
          [dir="rtl"] .tarifs-page {
            font-family: 'Cairo', Tahoma, sans-serif;
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

          [dir="rtl"] .pack-button svg {
            transform: scaleX(-1);
          }
          [dir="rtl"] .back-link svg {
            transform: scaleX(-1);
          }

          .tarifs-nav {
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

          .nav-right {
            display: flex;
            gap: 24px;
            align-items: center;
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

          .tarifs-hero {
            padding: 80px 60px 40px;
            text-align: center;
          }

          .hero-pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid rgba(201,162,39,0.5);
            color: #c9a227;
            background: rgba(201,162,39,0.08);
            font-weight: 800;
            font-size: 13px;
            letter-spacing: 2px;
            padding: 9px 20px;
            border-radius: 30px;
            margin-bottom: 26px;
          }

          [dir="rtl"] .hero-pill {
            letter-spacing: 0;
          }

          .tarifs-hero h1 {
            font-size: 52px;
            font-weight: 900;
            margin: 0 0 20px;
            color: #071426;
          }

          .tarifs-hero h1 span {
            color: #c9a227;
          }

          .tarifs-hero p {
            max-width: 720px;
            margin: 0 auto;
            color: #5c6676;
            font-size: 18px;
            line-height: 1.8;
          }

          .packs-section {
            padding: 60px 60px 90px;
          }

          .packs-grid {
            max-width: 1250px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            align-items: stretch;
          }

          .pack-card {
            background: white;
            color: #071426;
            border-radius: 26px;
            padding: 42px 32px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.08);
            display: flex;
            flex-direction: column;
            position: relative;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }

          .pack-card.recommended {
            background: #071426;
            color: white;
            box-shadow: 0 25px 60px rgba(7,20,38,0.35);
            transform: translateY(-18px);
            padding-top: 50px;
          }

          .pack-badge {
            position: absolute;
            top: -16px;
            left: 50%;
            transform: translateX(-50%);
            background: #c9a227;
            color: #071426;
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 1px;
            padding: 9px 24px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 6px;
            white-space: nowrap;
          }

          [dir="rtl"] .pack-badge {
            letter-spacing: 0;
          }

          .pack-name {
            font-size: 27px;
            font-weight: 900;
            margin: 0 0 6px;
          }

          .pack-tagline {
            color: #c9a227;
            font-size: 15px;
            font-weight: 700;
            margin: 0 0 26px;
          }

          .pack-price {
            font-size: 52px;
            font-weight: 900;
            margin: 0;
            line-height: 1;
          }

          .pack-price span {
            font-size: 17px;
            color: #c9a227;
            font-weight: 900;
          }

          .pack-deposit {
            color: #8a93a3;
            font-size: 14px;
            margin: 12px 0 26px;
          }

          .pack-card.recommended .pack-deposit {
            color: #aab4c4;
          }

          .pack-divider {
            border: none;
            border-top: 1px solid rgba(0,0,0,0.08);
            margin: 0 0 24px;
          }

          .pack-card.recommended .pack-divider {
            border-top-color: rgba(255,255,255,0.12);
          }

          .pack-highlight {
            display: flex;
            gap: 12px;
            align-items: flex-start;
            font-weight: 800;
            font-size: 15px;
            line-height: 1.5;
            margin-bottom: 14px;
            flex-wrap: wrap;
          }

          .highlight-icon {
            flex-shrink: 0;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background: #c9a227;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .inclus-badge {
            display: inline-block;
            background: rgba(201,162,39,0.15);
            color: #c9a227;
            border: 1px solid rgba(201,162,39,0.4);
            font-size: 11px;
            font-weight: 900;
            letter-spacing: 1px;
            padding: 3px 10px;
            border-radius: 6px;
          }

          [dir="rtl"] .inclus-badge {
            letter-spacing: 0;
          }

          .pack-services {
            flex-grow: 1;
            margin-top: 12px;
          }

          .pack-service {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 11px;
            color: #283447;
          }

          .pack-card.recommended .pack-service {
            color: #d8dee9;
          }

          .pack-button {
            margin-top: 28px;
            border: 1.5px solid #c9a227;
            background: transparent;
            color: #071426;
            text-align: center;
            padding: 15px 20px;
            border-radius: 12px;
            font-weight: 900;
            font-size: 15px;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          }

          .pack-card.recommended .pack-button {
            background: #c9a227;
            color: #071426;
            border-color: #c9a227;
          }

          .tarifs-cta {
            padding: 80px 60px;
            background: #071426;
            text-align: center;
          }

          .tarifs-cta h2 {
            font-size: 38px;
            color: white;
            margin: 0 0 18px;
          }

          .tarifs-cta h2 span {
            color: #c9a227;
          }

          .tarifs-cta p {
            color: #d8dee9;
            font-size: 18px;
            line-height: 1.8;
            max-width: 750px;
            margin: 0 auto 32px;
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
            color: white;
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

          .pack-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.13), 0 0 0 1px rgba(201,162,39,0.2);
          }

          .pack-card.recommended:hover {
            transform: translateY(-22px);
            box-shadow: 0 32px 70px rgba(7,20,38,0.5), 0 0 24px rgba(201,162,39,0.18);
          }

          .pack-button:hover {
            transform: translateY(-2px);
            background: #c9a227;
            box-shadow: 0 6px 20px rgba(201,162,39,0.35);
          }

          .pack-card.recommended .pack-button:hover {
            box-shadow: 0 6px 20px rgba(201,162,39,0.45);
          }

          .home-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(201,162,39,0.4);
          }

          @media (max-width: 1024px) {
            .tarifs-nav { padding: 0 32px; }
            .tarifs-hero { padding: 70px 40px 30px; }
            .packs-section { padding: 50px 40px 80px; }
            .packs-grid { grid-template-columns: 1fr; max-width: 560px; gap: 40px; }
            .pack-card.recommended { transform: none; padding-top: 50px; }
            .pack-card.recommended:hover { transform: translateY(-4px); }
            .footer-grid { grid-template-columns: 1fr 1fr; }
          }

          @media (max-width: 640px) {
            .tarifs-nav { height: auto; min-height: 90px; padding: 12px 20px; gap: 18px; }
            .nav-logo { width: 115px; height: 58px; }
            .back-link { font-size: 12px; }
            .nav-right { gap: 14px; }
            .lang-btn { padding: 5px 11px; font-size: 12px; }
            .tarifs-hero { padding: 60px 22px 25px; }
            .tarifs-hero h1 { font-size: 33px; line-height: 1.15; }
            .tarifs-hero p { font-size: 16px; }
            .packs-section { padding: 45px 22px 65px; }
            .pack-card { padding: 38px 24px; }
            .pack-card.recommended { padding-top: 48px; }
            .pack-price { font-size: 42px; }
            .brand { font-size: 0.9em; letter-spacing: 0; }
            .tarifs-cta { padding: 65px 22px; }
            .tarifs-cta h2 { font-size: 28px; }
            .tarifs-cta p { font-size: 16px; }
            .footer { padding: 45px 22px; }
            .footer-grid { grid-template-columns: 1fr; }
          }
        `}
      </style>

      <div className="tarifs-page">
        <nav className="tarifs-nav">
          <img src="/logo.png" alt="AZ Business Center" className="nav-logo" />
          <div className="nav-right">
            <Link to="/" className="back-link">
              <ArrowLeft size={18} />
              {t("tarifs.backHome")}
            </Link>
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

        <section className="tarifs-hero fade-in">
          <div className="hero-pill">
            <Tag size={15} /> {t("tarifs.pill")}
          </div>
          <h1>
            {t("tarifs.title1")}<span>{t("tarifs.title2")}</span>
          </h1>
          <p>
            {t("tarifs.subtitle")}
          </p>
        </section>

        <section className="packs-section fade-in">
          <div className="packs-grid">
            {packs.map((pack) => (
              <div
                key={pack.name}
                className={`pack-card${pack.recommended ? " recommended" : ""}`}
              >
                {pack.recommended && (
                  <div className="pack-badge">
                    <Star size={14} /> {t("tarifs.recommended")}
                  </div>
                )}

                <h3 className="pack-name">{pack.displayName}</h3>
                <p className="pack-tagline">{pack.tagline}</p>

                <p className="pack-price" dir="ltr" style={{ textAlign: isAr ? "right" : "left" }}>
                  {pack.price} <span>{t("tarifs.priceUnit")}</span>
                </p>
                <p className="pack-deposit">{pack.deposit}</p>

                <hr className="pack-divider" />

                {pack.highlights.map((h) => (
                  <div key={h} className="pack-highlight">
                    <span className="highlight-icon">
                      <Star size={14} color="#071426" />
                    </span>
                    <span style={{ flex: 1 }}>
                      {h} <span className="inclus-badge">{t("tarifs.inclus")}</span>
                    </span>
                  </div>
                ))}

                <hr className="pack-divider" style={{ marginTop: "14px" }} />

                <div className="pack-services">
                  {commonServices.map((service) => (
                    <div key={service} className="pack-service">
                      <CheckCircle color="#c9a227" size={17} />
                      {service}
                    </div>
                  ))}
                </div>

                <Link to={"/?plan=" + encodeURIComponent(pack.name)} className="pack-button">
                  {pack.button} <ArrowRight size={17} />
                </Link>
              </div>
            ))}
          </div>

          
        </section>

        <section className="tarifs-cta fade-in">
          <h2>
            {t("tarifs.ctaTitle1")}<span>{t("tarifs.ctaTitle2")}</span>
          </h2>
          <p>
            {t("tarifs.ctaText1")}{" "}
            <span className="brand">AZ Business Center</span> {t("tarifs.ctaText2")}
          </p>
          <Link to="/" className="home-button">{t("tarifs.backHome")}</Link>
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
