import { useEffect, useState } from "react";
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

  const durations = [
    {
      key: "3",
      label: t("tarifsDomiciliation.d1name"),
      price: t("tarifsDomiciliation.d1price"),
      unit: t("tarifsDomiciliation.d1unit"),
      gift: null,
      planValue: "Offre Basic - 3 mois",
    },
    {
      key: "6",
      label: t("tarifsDomiciliation.d2name"),
      price: t("tarifsDomiciliation.d2price"),
      unit: t("tarifsDomiciliation.d2unit"),
      gift: t("tarifsDomiciliation.d2gift"),
      planValue: "Offre Basic - 6 mois",
    },
    {
      key: "12",
      label: t("tarifsDomiciliation.d3name"),
      price: t("tarifsDomiciliation.d3price"),
      unit: t("tarifsDomiciliation.d3unit"),
      gift: t("tarifsDomiciliation.d3gift"),
      planValue: "Offre Basic - 12 mois",
    },
  ];

  const [durationKey, setDurationKey] = useState("3");
  const selected = durations.find((d) => d.key === durationKey);

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
            padding: 40px 32px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.08);
            display: flex;
            flex-direction: column;
            position: relative;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }

          .pack-card.special {
            background: #071426;
            color: white;
            box-shadow: 0 20px 50px rgba(7,20,38,0.35);
            padding-top: 48px;
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

          .pack-card.special .price-label {
            color: #aab4c4;
          }

          .pack-price {
            display: flex;
            align-items: baseline;
            gap: 8px;
            font-size: 40px;
            font-weight: 900;
            margin: 0;
            line-height: 1.15;
          }

          .price-num {
            font-size: inherit;
            font-weight: inherit;
            color: inherit;
            unicode-bidi: embed;
          }

          .price-unit {
            font-size: 15px;
            color: #c9a227;
            font-weight: 900;
          }

          .duration-toggle {
            display: flex;
            gap: 6px;
            background: rgba(7,20,38,0.06);
            border-radius: 14px;
            padding: 6px;
            margin: 0 0 24px;
          }

          .toggle-btn {
            flex: 1;
            background: transparent;
            border: none;
            padding: 11px 10px;
            border-radius: 10px;
            font-weight: 900;
            font-size: 14px;
            color: #5c6676;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: inherit;
            transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
          }

          .toggle-btn.active {
            background: #071426;
            color: #c9a227;
            box-shadow: 0 6px 16px rgba(7,20,38,0.25);
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
            font-size: 13px;
            line-height: 1.4;
            padding: 8px 12px;
            border-radius: 10px;
            margin: 16px 0 0;
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

          .pack-card.special .pack-divider {
            border-top-color: rgba(255,255,255,0.15);
          }

          .pack-services {
            margin-bottom: 4px;
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

          .pack-card.special .pack-service {
            color: #d8dee9;
          }

          .pack-button {
            margin-top: auto;
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

          .pack-card.special .pack-button {
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

          .pack-card.special:hover {
            transform: translateY(-6px);
            box-shadow: 0 26px 60px rgba(7,20,38,0.45);
          }

          .pack-button:hover {
            transform: translateY(-2px);
            background: #c9a227;
            box-shadow: 0 6px 20px rgba(201,162,39,0.35);
          }

          .pack-card.special .pack-button:hover {
            box-shadow: 0 6px 20px rgba(201,162,39,0.45);
          }

          @media (max-width: 1024px) {
            .tarifs-nav { padding: 0 32px; }
            .tarifs-hero { padding: 70px 40px 30px; }
            .packs-section { padding: 50px 40px 80px; }
            .packs-grid { max-width: 640px; }
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
            .packs-grid { grid-template-columns: 1fr; max-width: 420px; }
            .pack-card { padding: 34px 24px; }
            .pack-card.special { padding-top: 40px; }
            .pack-price { font-size: 34px; }
            .toggle-btn { font-size: 12px; padding: 9px 6px; }
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
            <div className="pack-card">
              <h3 className="pack-name">{t("tarifsDomiciliation.basicTag")}</h3>
              <p className="pack-tagline">{t("tarifsDomiciliation.basicSubtitle")}</p>

              <div className="duration-toggle">
                {durations.map((d) => (
                  <button
                    key={d.key}
                    type="button"
                    className={`toggle-btn${durationKey === d.key ? " active" : ""}`}
                    onClick={() => setDurationKey(d.key)}
                  >
                    {d.label}
                  </button>
                ))}
              </div>

              <p className="pack-price">
                <span className="price-num" dir="ltr">{selected.price}</span>
                <span className="price-unit">{selected.unit}</span>
              </p>
              {selected.gift && <div className="gift-badge">{selected.gift}</div>}

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
                to={"/?activite=" + encodeURIComponent("Domiciliation") + "&plan=" + encodeURIComponent(selected.planValue)}
                className="pack-button"
              >
                {t("tarifsSyndic.chooseBtn")} <ArrowRight size={17} />
              </Link>
            </div>

            <div className="pack-card special">
              <div className="pack-badge">
                <Star size={14} /> {t("tarifsDomiciliation.specialBadge")}
              </div>

              <h3 className="pack-name">{t("tarifsDomiciliation.p2name")}</h3>
              <p className="pack-tagline">{t("tarifsDomiciliation.p2tag")}</p>

              <p className="price-label">{t("tarifsDomiciliation.durationLabel")}</p>
              <p className="pack-price">
                <span className="price-num" dir="ltr">{t("tarifsDomiciliation.p2price")}</span>
                <span className="price-unit">{t("tarifsDomiciliation.p2unit")}</span>
              </p>

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
                to={"/?activite=" + encodeURIComponent("Domiciliation") + "&plan=" + encodeURIComponent("Offre spéciale professionnels - 12 mois")}
                className="pack-button"
              >
                {t("tarifsSyndic.chooseBtn")} <ArrowRight size={17} />
              </Link>
            </div>
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
