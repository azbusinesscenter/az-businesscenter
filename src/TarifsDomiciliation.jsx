import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  ArrowRight,
  Building,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  Star,
  Tag,
} from "lucide-react";

export default function TarifsDomiciliation() {
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

  const features = [t("acts.dom1"), t("acts.dom2"), t("acts.dom3")];

  const packs = [
    {
      name: "basic",
      planValue: "Offre Basic - 3 mois",
      displayName: t("tarifsDomiciliation.p1name"),
      tagline: t("tarifsDomiciliation.p1tag"),
      priceLabel: t("tarifsSyndic.startingFrom"),
      price: t("tarifsDomiciliation.p1price"),
      unit: t("tarifsDomiciliation.p1unit"),
      altLines: [t("tarifsDomiciliation.p1alt1"), t("tarifsDomiciliation.p1alt2")],
      badge: null,
    },
    {
      name: "pro",
      planValue: "Offre spéciale professionnels - 12 mois",
      displayName: t("tarifsDomiciliation.p2name"),
      tagline: t("tarifsDomiciliation.p2tag"),
      priceLabel: t("tarifsDomiciliation.durationLabel"),
      price: t("tarifsDomiciliation.p2price"),
      unit: t("tarifsDomiciliation.p2unit"),
      altLines: [],
      badge: t("tarifsDomiciliation.specialBadge"),
    },
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

          .hero-icon {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: #071426;
            border: 1px solid rgba(201,162,39,0.35);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 26px;
          }

          .tarifs-hero h1 {
            font-size: 46px;
            font-weight: 900;
            margin: 0 0 20px;
            color: #071426;
          }

          .tarifs-hero p {
            max-width: 720px;
            margin: 0 auto;
            color: #5c6676;
            font-size: 18px;
            line-height: 1.8;
          }

          .packs-section {
            padding: 60px 60px 100px;
          }

          .packs-grid {
            max-width: 820px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
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

          .price-label {
            color: #8a93a3;
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0 0 6px;
          }

          [dir="rtl"] .price-label {
            letter-spacing: 0;
          }

          .pack-card.recommended .price-label {
            color: #aab4c4;
          }

          .pack-price {
            font-size: 42px;
            font-weight: 900;
            margin: 0;
            line-height: 1.15;
          }

          .pack-price span {
            font-size: 16px;
            color: #c9a227;
            font-weight: 900;
          }

          .pack-deposit {
            color: #8a93a3;
            font-size: 14px;
            margin: 12px 0 0;
          }

          .pack-deposit:last-of-type {
            margin-bottom: 26px;
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

          @media (max-width: 1024px) {
            .tarifs-nav { padding: 0 32px; }
            .tarifs-hero { padding: 70px 40px 30px; }
            .packs-section { padding: 50px 40px 80px; }
            .packs-grid { grid-template-columns: 1fr; max-width: 480px; gap: 40px; }
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
            .tarifs-hero h1 { font-size: 30px; line-height: 1.2; }
            .tarifs-hero p { font-size: 16px; }
            .packs-section { padding: 45px 22px 65px; }
            .pack-card { padding: 38px 24px; }
            .pack-card.recommended { padding-top: 48px; }
            .pack-price { font-size: 34px; }
            .brand { font-size: 0.9em; letter-spacing: 0; }
            .footer { padding: 45px 22px; }
            .footer-grid { grid-template-columns: 1fr; }
          }
        `}
      </style>

      <div className="tarifs-page">
        <nav className="tarifs-nav">
          <Link to="/">
            <img src="/logo.png" alt="AZ Business Center" className="nav-logo" />
          </Link>
          <div className="nav-right">
            <Link to="/tarifs" className="back-link">
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

        <section className="tarifs-hero fade-in">
          <div className="hero-pill">
            <Tag size={15} /> {t("tarifs.pill")}
          </div>
          <div className="hero-icon">
            <Building size={32} color="#c9a227" />
          </div>
          <h1>{t("act.a4t")}</h1>
          <p>{t("tarifsDomiciliation.subtitle")}</p>
        </section>

        <section className="packs-section fade-in">
          <div className="packs-grid">
            {packs.map((pack) => (
              <div
                key={pack.name}
                className={`pack-card${pack.badge ? " recommended" : ""}`}
              >
                {pack.badge && (
                  <div className="pack-badge">
                    <Star size={14} /> {pack.badge}
                  </div>
                )}

                <h3 className="pack-name">{pack.displayName}</h3>
                <p className="pack-tagline">{pack.tagline}</p>

                <p className="price-label">{pack.priceLabel}</p>
                <p className="pack-price" dir="ltr" style={{ textAlign: isAr ? "right" : "left" }}>
                  {pack.price} <span>{pack.unit}</span>
                </p>
                {pack.altLines.map((line) => (
                  <p key={line} className="pack-deposit">{line}</p>
                ))}

                <hr className="pack-divider" />

                <div className="pack-services">
                  {features.map((feature) => (
                    <div key={feature} className="pack-service">
                      <CheckCircle color="#c9a227" size={17} />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  to={"/?activite=" + encodeURIComponent("Domiciliation") + "&plan=" + encodeURIComponent(pack.planValue)}
                  className="pack-button"
                >
                  {t("tarifsSyndic.chooseBtn")} <ArrowRight size={17} />
                </Link>
              </div>
            ))}
          </div>
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
