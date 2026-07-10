import { useEffect, useState } from "react";
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
  Tag,
} from "lucide-react";

const JULY_PROMO_ACTIVE = true;
const JULY_PROMO_AMOUNT = 500;
const BASE_PRICE_12 = 4000;
const BASE_PRICE_24 = 5000;

const formatPrice = (n) => {
  const s = String(n);
  return s.length > 3 ? s.slice(0, s.length - 3) + " " + s.slice(-3) : s;
};

const NUM_TOKEN = /(\d+(?: \d+)*%?)/g;

function wrapPriceNumbers(str) {
  if (!str) return str;
  return str.split(NUM_TOKEN).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} dir="ltr" style={{ unicodeBidi: "embed" }}>{part}</span>
    ) : (
      part
    )
  );
}

export default function TarifsCreationEntreprise() {
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

  const [duration, setDuration] = useState("12");

  const basePrice = duration === "12" ? BASE_PRICE_12 : BASE_PRICE_24;
  const finalPrice = JULY_PROMO_ACTIVE ? basePrice - JULY_PROMO_AMOUNT : basePrice;
  const planName = duration === "12" ? "Pack Essentiel" : "Pack Pro";

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

          .pricing-section {
            padding: 60px 60px 90px;
          }

          .pricing-wrap {
            max-width: 520px;
            margin: 0 auto;
          }

          .promo-banner {
            background: #c0392b;
            color: white;
            text-align: center;
            font-weight: 800;
            font-size: 14px;
            line-height: 1.5;
            padding: 13px 22px;
            border-radius: 12px;
            margin: 0 0 18px;
          }

          .pack-card {
            background: white;
            color: #071426;
            border-radius: 26px;
            padding: 42px 36px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.08);
            display: flex;
            flex-direction: column;
            position: relative;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
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

          .duration-toggle {
            display: flex;
            gap: 6px;
            background: rgba(7,20,38,0.06);
            border-radius: 14px;
            padding: 6px;
            margin: 0 0 28px;
          }

          .toggle-btn {
            flex: 1;
            background: transparent;
            border: none;
            padding: 12px 14px;
            border-radius: 10px;
            font-weight: 900;
            font-size: 15px;
            color: #5c6676;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-family: inherit;
            transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
          }

          .toggle-btn.active {
            background: #071426;
            color: #c9a227;
            box-shadow: 0 6px 16px rgba(7,20,38,0.25);
          }

          .toggle-discount {
            display: inline-block;
            background: rgba(201,162,39,0.18);
            color: #c9a227;
            font-size: 11px;
            font-weight: 900;
            padding: 2px 7px;
            border-radius: 6px;
            transition: background 0.25s ease;
          }

          .toggle-btn.active .toggle-discount {
            background: rgba(201,162,39,0.3);
          }

          .pack-price {
            display: flex;
            align-items: baseline;
            gap: 8px;
            font-size: 52px;
            font-weight: 900;
            margin: 0;
            line-height: 1;
          }

          .price-num {
            font-size: inherit;
            font-weight: inherit;
            color: inherit;
            unicode-bidi: embed;
          }

          .price-unit {
            font-size: 17px;
            color: #c9a227;
            font-weight: 900;
          }

          .promo-note {
            color: #c0392b;
            font-size: 13px;
            font-weight: 700;
            margin: 10px 0 0;
          }

          @keyframes giftPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.55; }
          }

          .gift-badge {
            display: flex;
            align-items: center;
            gap: 8px;
            background: rgba(201,162,39,0.12);
            border: 1px solid rgba(201,162,39,0.45);
            color: #c9a227;
            font-weight: 800;
            font-size: 14px;
            line-height: 1.4;
            padding: 10px 14px;
            border-radius: 10px;
            margin: 22px 0 0;
            animation: giftPulse 1.1s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .gift-badge {
              animation: none;
            }
          }

          .pack-divider {
            border: none;
            border-top: 1px solid rgba(0,0,0,0.08);
            margin: 24px 0 24px;
          }

          .pack-services {
            margin-top: 4px;
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

          .pack-button {
            margin-top: 28px;
            border: 1.5px solid #c9a227;
            background: #c9a227;
            color: #071426;
            text-align: center;
            padding: 16px 20px;
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

          .pack-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(201,162,39,0.4);
          }

          .home-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(201,162,39,0.4);
          }

          @media (max-width: 1024px) {
            .tarifs-nav { padding: 0 32px; }
            .tarifs-hero { padding: 70px 40px 30px; }
            .pricing-section { padding: 50px 40px 80px; }
            .pricing-wrap { max-width: 460px; }
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
            .pricing-section { padding: 45px 22px 65px; }
            .pricing-wrap { max-width: 420px; }
            .pack-card { padding: 34px 24px; }
            .pack-price { font-size: 42px; }
            .toggle-btn { font-size: 13px; padding: 10px 8px; gap: 6px; }
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
          <Link to="/">
            <img src="/logo.png" alt="AZ Business Center" className="nav-logo" />
          </Link>
          <div className="nav-right">
            <Link to="/tarifs" className="back-link">
              <ArrowLeft size={18} />
              {t("acts.backHome")}
            </Link>
            <Link to="/" className="back-link">{t("nav.home")}</Link>
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

        <section className="pricing-section fade-in">
          <div className="pricing-wrap">
            {JULY_PROMO_ACTIVE && (
              <div className="promo-banner">{t("tarifs.promoBanner")}</div>
            )}

            <div className="pack-card">
              <h3 className="pack-name">{t("tarifs.cardName")}</h3>
              <p className="pack-tagline">{t("tarifs.cardTagline")}</p>

              <div className="duration-toggle">
                <button
                  type="button"
                  className={`toggle-btn${duration === "12" ? " active" : ""}`}
                  onClick={() => setDuration("12")}
                >
                  {t("tarifs.duration12")}
                </button>
                <button
                  type="button"
                  className={`toggle-btn${duration === "24" ? " active" : ""}`}
                  onClick={() => setDuration("24")}
                >
                  {t("tarifs.duration24")}
                  <span className="toggle-discount">{t("tarifs.discountBadge")}</span>
                </button>
              </div>

              <p className="pack-price">
                <span className="price-num" dir="ltr">{formatPrice(finalPrice)}</span>
                <span className="price-unit">{t("tarifs.priceUnit")}</span>
              </p>
              {JULY_PROMO_ACTIVE && (
                <p className="promo-note">
                  {wrapPriceNumbers(t("tarifs.promoNote", { price: formatPrice(basePrice) }))}
                </p>
              )}

              <div className="gift-badge">{t("tarifs.giftMeeting")}</div>

              <hr className="pack-divider" />

              <div className="pack-services">
                {commonServices.map((service) => (
                  <div key={service} className="pack-service">
                    <CheckCircle color="#c9a227" size={17} />
                    {service}
                  </div>
                ))}
              </div>

              <Link
                to={"/?activite=" + encodeURIComponent("Création d'entreprise") + "&plan=" + encodeURIComponent(planName)}
                className="pack-button"
              >
                {t("tarifs.chooseBtn")} <ArrowRight size={17} />
              </Link>
            </div>
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
