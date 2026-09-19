/* =========================================================
   ZUNQ COMPANY — script.js
========================================================= */

// ---------- CONFIGURAÇÃO ----------
// Cole aqui a URL do seu Web App do Google Apps Script (Implantar > Nova implantação > App da Web)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzWGOePbsQcIPqKChQVUrMaeVg6Bfi5lmEz9HLqUzIsabxckSQqQckpT_eRaJIhr0-aMA/exec";

// Insira aqui o número de WhatsApp da ZUNQ, no formato internacional, apenas números (ex: 5566999999999)
const WHATSAPP_NUMBER = "INSIRA_AQUI_O_NUMERO";

const WHATSAPP_MESSAGE = "Olá, ZUNQ! Tenho interesse em criar um projeto digital para minha empresa e gostaria de conversar.";

document.addEventListener("DOMContentLoaded", () => {
  setupWhatsappLinks();
  setupNavbarScroll();
  setupMobileMenu();
  setupScrollReveal();
  setupScrollProgress();
  setupButtonGlow();
  setupCardTilt();
  setupContactForm();
  setupScrollSpy();
});

// ---------- WHATSAPP ----------
function setupWhatsappLinks() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  document
    .querySelectorAll("#whatsBtnHero, #whatsBtnCta, #whatsBtnContato")
    .forEach((el) => {
      if (el) el.setAttribute("href", url);
    });
}

// ---------- NAVBAR NO SCROLL ----------
function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 12) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// ---------- MENU MOBILE ----------
function setupMobileMenu() {
  const btn = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;

  const closeMenu = () => {
    btn.classList.remove("is-open");
    menu.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  };

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    btn.classList.toggle("is-open", isOpen);
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

// ---------- REVEAL AO SCROLL ----------
function setupScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  // Escalona a entrada de elementos que compartilham o mesmo grupo/container
  const groups = new Map();
  items.forEach((el) => {
    const parent = el.parentElement;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  });
  groups.forEach((siblings) => {
    siblings.forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${Math.min(i * 90, 360)}ms`);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

// ---------- BARRA DE PROGRESSO DE SCROLL ----------
function setupScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (scrollTop / max) * 100 : 0;
    bar.style.width = `${pct}%`;
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

// ---------- BRILHO SEGUINDO O CURSOR NOS BOTÕES ----------
function setupButtonGlow() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) return;

  document.querySelectorAll(".btn--ghost").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      btn.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });
}

// ---------- INCLINAÇÃO 3D SUAVE NOS CARDS ----------
function setupCardTilt() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) return;

  const cards = document.querySelectorAll(".project-card, .about__media");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -6;
      const rotateY = ((x / rect.width) - 0.5) * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// ---------- LINK ATIVO NA NAVBAR (scrollspy) ----------
function setupScrollSpy() {
  const links = document.querySelectorAll('.navbar__links a[href^="#"]');
  if (!links.length || !("IntersectionObserver" in window)) return;

  const sections = [];
  links.forEach((link) => {
    const id = link.getAttribute("href").slice(1);
    const section = document.getElementById(id);
    if (section) sections.push({ id, link, section });
  });
  if (!sections.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const match = sections.find((s) => s.section === entry.target);
          if (match) setActive(match.id);
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach(({ section }) => observer.observe(section));
}

// ---------- FORMULÁRIO DE CONTATO ----------
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const submitBtn = document.getElementById("submitBtn");
  const feedback = document.getElementById("formFeedback");

  const fields = {
    nome: form.querySelector("#nome"),
    email: form.querySelector("#email"),
    telefone: form.querySelector("#telefone"),
    data: form.querySelector("#data"),
    consentimento: form.querySelector("#consentimento"),
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearFeedback();

    const valid = validateForm(fields);
    if (!valid) return;

    setLoading(true);

    const formData = new URLSearchParams();
    formData.append("nome", fields.nome.value.trim());
    formData.append("email", fields.email.value.trim());
    formData.append("telefone", fields.telefone.value.trim());
    formData.append("data", fields.data.value);
    formData.append(
      "consentimento",
      fields.consentimento.checked ? "sim" : "não"
    );

    try {
      if (
        !GOOGLE_SCRIPT_URL ||
        GOOGLE_SCRIPT_URL.includes("COLE_AQUI")
      ) {
        throw new Error("URL do Google Apps Script não configurada.");
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || (result && result.sucesso === false)) {
        throw new Error("Falha no envio.");
      }

      showSuccess();
      form.reset();
    } catch (err) {
      showError();
    } finally {
      setLoading(false);
    }
  });

  function setLoading(isLoading) {
    submitBtn.classList.toggle("is-loading", isLoading);
    submitBtn.disabled = isLoading;
  }

  function clearFeedback() {
    feedback.className = "form-feedback";
    feedback.textContent = "";
    Object.keys(fields).forEach((key) => {
      const errorEl = form.querySelector(`[data-error-for="${key}"]`);
      if (errorEl) errorEl.textContent = "";
      fields[key].classList.remove("has-error");
    });
  }

  function showSuccess() {
    feedback.className = "form-feedback is-success";
    feedback.textContent =
      "Solicitação enviada com sucesso. Recebemos seus dados e entraremos em contato para confirmar a reunião.";
  }

  function showError() {
    feedback.className = "form-feedback is-error";
    feedback.textContent =
      "Não foi possível enviar sua solicitação. Tente novamente ou fale diretamente conosco pelo WhatsApp.";
  }
}

function validateForm(fields) {
  let isValid = true;

  const setError = (field, message) => {
    isValid = false;
    field.classList.add("has-error");
    const errorEl = field
      .closest(".field")
      .querySelector(".field__error");
    if (errorEl) errorEl.textContent = message;
  };

  if (!fields.nome.value.trim()) {
    setError(fields.nome, "Informe seu nome.");
  }

  const emailValue = fields.email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValue) {
    setError(fields.email, "Informe seu e-mail.");
  } else if (!emailRegex.test(emailValue)) {
    setError(fields.email, "Informe um e-mail válido.");
  }

  const telefoneValue = fields.telefone.value.trim();
  if (!telefoneValue) {
    setError(fields.telefone, "Informe seu telefone ou WhatsApp.");
  } else if (telefoneValue.replace(/\D/g, "").length < 10) {
    setError(fields.telefone, "Informe um telefone válido.");
  }

  if (!fields.data.value) {
    setError(fields.data, "Selecione uma data.");
  }

  if (!fields.consentimento.checked) {
    setError(fields.consentimento, "É necessário aceitar para continuar.");
  }

  return isValid;
}
