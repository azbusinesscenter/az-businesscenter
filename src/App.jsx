import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Building2,
  BriefcaseBusiness,
  Handshake,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  ShieldCheck,
  Sofa,
  Target,
} from "lucide-react";

export default function App() {
  const { t, i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  React.useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [status, setStatus] = React.useState("idle");
  const selectedPlan = new URLSearchParams(window.location.search).get("plan") || "";

  React.useEffect(() => {
    if (selectedPlan) {
      document.getElementById("contact")?.scrollIntoView();
    }
  }, [selectedPlan]);
  const activitiesRef = React.useRef(null);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  const activities = [
    {
      icon: BriefcaseBusiness,
      title: t("act.a1t"),
      items: [t("act.a1d")],
    },
    {
      icon: Building2,
      title: t("act.a2t"),
      items: [t("act.a2d")],
    },
    {
      icon: Sofa,
      title: t("act.a3t"),
      items: [t("act.a3d")],
    },
  ];

  const reasons = [
    {
      icon: ShieldCheck,
      title: t("why.r1t"),
      text: t("why.r1d"),
    },
    {
      icon: Handshake,
      title: t("why.r2t"),
      text: t("why.r2d"),
    },
    {
      icon: Target,
      title: t("why.r3t"),
      text: t("why.r3d"),
    },
    {
      icon: MapPin,
      title: t("why.r4t"),
      text: t("why.r4d"),
    },
  ];

  const handleActivitiesScroll = () => {
    const el = activitiesRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const sl = el.scrollLeft;
    const rtl = i18n.language === "ar";
    setAtStart(rtl ? sl <= -maxScroll + 5 : sl <= 5);
    setAtEnd(rtl ? sl >= -5 : sl >= maxScroll - 5);
  };

  const scrollActivities = (direction) => {
    const el = activitiesRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  };
  React.useEffect(() => {
    handleActivitiesScroll();
  }, [i18n.language]);

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyBpy8fAoBfLpurO8ssVFwneveMaQxqjUnXAng7Vrc_RFPgz_aq6REicE-R75uJCF-M/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Validate form fields
    const name = e.target.elements.name.value.trim();
    const phone = e.target.elements.phone.value.trim();
    const email = e.target.elements.email.value.trim();
    const company = e.target.elements.company.value.trim();
    const message = e.target.elements.message.value.trim();

    if (!name || !phone || !email || !message) {
      setStatus("error");
      alert(t("contact.alert"));
      return;
    }

    const payload = {
      name,
      phone,
      email,
      company,
      message,
      plan: e.target.elements.plan.value,
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });
      setStatus("sent");
      e.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
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

          [dir="rtl"] .hero-cta {
            direction: rtl;
          }
            .brand {
            color: #c9a227;
            white-space: nowrap;
            font-size: 1.05em;
            letter-spacing: 1px;
          }

          [dir="rtl"] .page {
            font-family: Tahoma, Arial, sans-serif;
          }

          [dir="rtl"] .brand,
          [dir="rtl"] .nav-link,
          [dir="rtl"] .hero-title,
          [dir="rtl"] .hero-subtitle,
          [dir="rtl"] .hero-cta,
          [dir="rtl"] .section-label {
            letter-spacing: 0;
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

          .lang-switch {
            display: flex;
            gap: 8px;
            margin-inline-start: 32px;
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

          .burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 5px;
}

.burger span {
  display: block;
  width: 25px;
  height: 3px;
  background: #c9a227;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 0;
  background: #061222;
  padding: 88px 20px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.mobile-menu .nav-link {
  padding: 14px 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  font-size: 14px;
}

@media (max-width: 640px) {
  .burger {
    display: flex;
  }
  .nav-links {
    display: none;
  }
  .mobile-menu {
    display: flex;
  }
}

          .hero {
            min-height: calc(100vh - 76px);
            position: relative;
            background-image: url('/office.webp');
            background-size: cover;
            background-position: center;
            overflow: hidden;
          }
          [dir="rtl"] .hero {
            background-image: url('/office-ar.webp');
          }


          .hero-gradient {
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, rgba(6,18,34,0.98) 0%, rgba(6,18,34,0.95) 38%, rgba(6,18,34,0.55) 58%, rgba(6,18,34,0.05) 100%);
          }

          [dir="rtl"] .hero-gradient {
            background: linear-gradient(270deg, rgba(6,18,34,0.98) 0%, rgba(6,18,34,0.95) 38%, rgba(6,18,34,0.55) 58%, rgba(6,18,34,0.05) 100%);
          }
          [dir="rtl"] .hero {
            background-position: left center;
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

          [dir="rtl"] .hero-shape {
            left: auto;
            right: 0;
            clip-path: polygon(22% 0, 100% 0, 100% 100%, 0% 100%);
          }

          .hero-content {
            position: relative;
            z-index: 2;
            min-height: calc(100vh - 76px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 55px 70px;
            max-width: 780px;
            transform: translateY(-30px);
          }

          .hero-logo {
            width: 210px;
            object-fit: contain;
            margin-bottom: 35px;
            align-self: flex-start;
            animation: heroFadeUp 0.7s ease both;
          }

          .hero-title {
            font-size: 58px;
            line-height: 1.18;
            margin: 0;
            font-weight: 900;
            letter-spacing: 0.5px;
            animation: heroFadeUp 0.7s ease 0.15s both;
          }

          .hero-subtitle {
            margin-top: 50px;
            color: white;
            font-size: 23px;
            font-weight: 800;
            letter-spacing: 2px;
            animation: heroFadeUp 0.7s ease 0.35s both;
          }

          .hero-cta {
            display: inline-block;
            margin-top: 38px;
            background: #c9a227;
            color: #071426;
            padding: 17px 36px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 900;
            font-size: 16px;
            letter-spacing: 0.5px;
            animation: heroFadeUp 0.7s ease 0.55s both;
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

          .activities-carousel {
            position: relative;
          }

          .carousel-arrow {
            display: none;
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

          [dir="rtl"] .activity-card {
            border-right: none;
            border-left: 1px solid rgba(201,162,39,0.35);
          }

          [dir="rtl"] .activity-card:last-child {
            border-left: none;
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
            color: white;
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

          [dir="rtl"] .why-card {
            border-right: none;
            border-left: 1px solid rgba(201,162,39,0.35);
          }

          [dir="rtl"] .why-card:last-child {
            border-left: none;
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
            right: 15px;
            bottom: 150px;
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
          [dir="rtl"] #tidio-chat {
            display: none !important;
          }
            [dir="rtl"] .whatsapp-button {
            right: auto;
            left: 15px;
          }
            [dir="rtl"] #tidio-chat-iframe {
            right: auto !important;
            left: 0 !important;
          }

          .whatsapp-button img {
            width: 38px;
            height: 38px;
          }
          .fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0);    }
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

            .lang-switch {
              margin-inline-start: 18px;
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

            [dir="rtl"] .activity-card {
              border-left: none;
              border-bottom: 1px solid rgba(201,162,39,0.35);
            }

            [dir="rtl"] .activity-card:last-child {
              border-bottom: none;
            }

            .why-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .why-card {
              border-right: none;
            }

            [dir="rtl"] .why-card {
              border-left: none;
            }

            .footer-grid {
              grid-template-columns: 1fr 1fr;
            }
          }

          @media (max-width: 640px) {
            .navbar {
  position: absolute;
  background: transparent;
  border-bottom: none;
  padding: 18px 22px;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
}

            .nav-links {
              gap: 14px 18px;
            }

            .nav-link {
              font-size: 12px;
            }

            .lang-switch {
              margin-inline-start: 0;
            }

            .lang-btn {
              padding: 5px 11px;
              font-size: 12px;
            }

            .hero {
              min-height: auto;
              background-position: center;
            }

            .hero-gradient {
              background: rgba(6,18,34,0.84);
            }

            [dir="rtl"] .hero-gradient {
              background: rgba(6,18,34,0.84);
            }

            .hero-shape {
              display: none;
            }

            .hero-content {
              min-height: auto;
              padding: 70px 24px;
              max-width: 100%;
              transform: none;
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
            .hero-cta {
              margin-top: 30px;
              padding: 15px 28px;
              font-size: 14px;
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
              display: flex;
              flex-direction: row;
              overflow-x: auto;
              overflow-y: hidden;
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
              border-radius: 20px;
            }

            .activities-grid::-webkit-scrollbar {
              display: none;
            }

            .activity-card {
              flex: 0 0 100%;
              scroll-snap-align: center;
              padding: 38px 24px;
              border-right: 1px solid rgba(201,162,39,0.35);
              border-bottom: none;
            }

            .activity-card:last-child {
              border-right: none;
            }

            [dir="rtl"] .activity-card {
              border-left: 1px solid rgba(201,162,39,0.35);
              border-bottom: none;
            }

            [dir="rtl"] .activity-card:last-child {
              border-left: none;
            }
              .activities-carousel {
              padding-bottom: 75px;
            }

            .carousel-arrow {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              bottom: 12px;
              top: auto;
              transform: none;
              width: 48px;
              height: 48px;
              border-radius: 50%;
              border: none;
              background: #c9a227;
              color: #071426;
              font-size: 30px;
              line-height: 1;
              padding-bottom: 4px;
              cursor: pointer;
              z-index: 10;
              box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            }

            .carousel-arrow-left {
              right: calc(50% + 10px);
              left: auto;
            }
            [dir="rtl"] .carousel-arrow-left {
              left: calc(50% + 10px);
              right: auto;
            }

            [dir="rtl"] .carousel-arrow-right {
              right: calc(50% + 10px);
              left: auto;
            }

            .carousel-arrow-right {
              left: calc(50% + 10px);
              right: auto;
            }

            .carousel-arrow:disabled {
              opacity: 0.35;
              cursor: default;
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
            .brand {
              font-size: 0.83em;
              letter-spacing: 0;
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
              bottom: 90px;
            }
              [dir="rtl"] .whatsapp-button {
              right: auto;
              left: 18px;
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
            <Link to="/" className="nav-link">{t("nav.home")}</Link>
            <Link to="/activities" target="_blank" className="nav-link">{t("nav.activities")}</Link>
            <Link to="/tarifs" target="_blank" className="nav-link">{t("nav.tarifs")}</Link>
            <a href="#pourquoi" className="nav-link">{t("nav.why")}</a>
            <a href="#contact" className="nav-link">{t("nav.contact")}</a>
          </div>
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
          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <span />
            <span />
            <span />
          </button>
        </nav>

        {menuOpen && (
          <div className="mobile-menu">
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>{t("nav.home")}</Link>
            <Link to="/activities" target="_blank" className="nav-link" onClick={() => setMenuOpen(false)}>{t("nav.activities")}</Link>
            <Link to="/tarifs" target="_blank" className="nav-link" onClick={() => setMenuOpen(false)}>{t("nav.tarifs")}</Link>
            <a href="#pourquoi" className="nav-link" onClick={() => setMenuOpen(false)}>{t("nav.why")}</a>
            <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>{t("nav.contact")}</a>
          </div>
        )}

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
              {t("hero.l1")}
              <br />
              <span style={{ color: "#c9a227" }}>{t("hero.l2")}</span>
              <br />
              {t("hero.l3")}
              <br />
              {t("hero.l4")}
            </h1>

            <div className="hero-subtitle">
              {t("hero.expertise")} <span style={{ color: "#c9a227" }}>•</span> {t("hero.proximite")}{" "}
              <span style={{ color: "#c9a227" }}>•</span> {t("hero.performance")}
            </div>
            <div>
              <Link to="/tarifs" target="_blank" className="hero-cta">
                {t("hero.cta")}
              </Link>
            </div>
          </div>
        </section>

        <section id="activities" className="section-light fade-in">
          <div className="section-label-wrap">
            <span className="section-label">{t("act.label")}</span>
          </div>

          <div className="activities-carousel">
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={() => scrollActivities(-1)}
              disabled={atStart}
              aria-label="Précédent"
            >
              ‹
            </button>

            <div
              className="activities-grid"
              ref={activitiesRef}
              onScroll={handleActivitiesScroll}
            >
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
                        to="/activities"
                        target="_blank"

                        className="button-dark"
                      >
                        {t("act.more")}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={() => scrollActivities(1)}
              disabled={atEnd}
              aria-label="Suivant"
            >
              ›
            </button>
          </div>
        </section>

        <section id="pourquoi" className="section-dark fade-in">
          <h2 className="why-title">
            {t("why.title")} <span className="brand">AZ BUSINESS CENTER</span> {t("why.q")}
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


        <section className="section-dark" style={{ paddingBottom: 0 }}>
          <div style={{ maxWidth: "1150px", margin: "0 auto", borderRadius: "20px", overflow: "hidden", height: "400px" }}>
            <iframe
              title="AZ Business Center"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.473900800043!2d-4.996386651807956!3d34.03171285713694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b0076bcc081%3A0xdebf79d2246b01f5!2sAZ%20Business%20Center!5e0!3m2!1sen!2ses!4v1781287173716!5m2!1sen!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </section>
        <section id="contact" className="section-dark fade-in">
          <div className="contact-card">
            <h2>{t("contact.title")} <span className="brand">AZ BUSINESS CENTER</span></h2>

            <p>
              {t("contact.intro")}
            </p>

            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <input
                name="name"
                placeholder={t("contact.name")}
                required
                style={inputStyle}
              />
              <input
                name="phone"
                placeholder={t("contact.phone")}
                required
                style={inputStyle}
              />
              <input
                name="email"
                type="email"
                placeholder={t("contact.email")}
                required
                style={inputStyle}
              />
              <input
                name="company"
                placeholder={t("contact.company")}
                style={inputStyle}
              />

              <select
                name="plan"
                defaultValue={selectedPlan}
                style={inputStyle}
                className="textarea-full"
              >
                <option value="">{t("contact.planDefault")}</option>
                <option value="Pack Essentiel">{t("contact.plan1")}</option>
                <option value="Pack Pro">{t("contact.plan2")}</option>
                <option value="Pack Premium">{t("contact.plan3")}</option>
              </select>

              <textarea
                name="message"
                placeholder={t("contact.message")}
                rows="6"
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
                className="textarea-full"
              />

              <button type="submit" className="submit-button submit-full" disabled={status === "sending"}>
                {status === "sending" ? t("contact.sending") : t("contact.send")}
              </button>

              {status === "sent" && (
                <p style={{ color: "#c9a227", gridColumn: "1/-1" }}>
                  {t("contact.sent")}
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "#f87171", gridColumn: "1/-1" }}>
                  {t("contact.error")}
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
              <h4 style={{ color: "#c9a227" }}>{t("footer.contactTitle")}</h4>
              <p dir="ltr" style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}>
                <Phone size={16} /> +212 778 692 099
              </p>
              <p dir="ltr" style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}>
                <Phone size={16} /> +212 662 83 44 89
              </p>
              <p dir="ltr" style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}>
                <PhoneCall size={16} /> +212 535 65 20 33
              </p>
              <p>
                <Mail size={16} /> contact@az-businesscenter.ma
              </p>
              <p>
                <MapPin size={16} /> N° 75 «Bureaux Al Atlas», Br N°24, 3ème étage, Av. El Hoceima, Atlas, Agdal-Fès
              </p>
            </div>

            <div>
              <h4 style={{ color: "#c9a227" }}>{t("footer.quickTitle")}</h4>

              <p>
                <Link to="/" className="footer-link">
                  {t("footer.qHome")}
                </Link>
              </p>
              <p>
                <Link to="/activities" target="_blank" className="footer-link">
                  {t("footer.qActivities")}
                </Link>
              </p>


              <p>
                <Link to="/tarifs" target="_blank" className="footer-link">
                  {t("footer.qTarifs")}
                </Link>
              </p>

              <p>
                <a href="#pourquoi" className="footer-link">
                  {t("footer.qWhy")}
                </a>
              </p>

              <p>
                <a href="#contact" className="footer-link">
                  {t("footer.qContact")}
                </a>
              </p>
            </div>
          </div>

          <p className="footer-bottom">
            © 2026 <span className="brand">AZ Business Center</span> — {t("footer.rights")}
          </p>
        </footer>

        <a
          href="https://wa.me/212778692099?text=Bonjour%2C%20je%20vous%20contacte%20depuis%20votre%20site%20web%20AZ%20Business%20Center."
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
