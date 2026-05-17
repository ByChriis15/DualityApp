const APP_STORAGE_KEY = "duality.preferences.v1";

const THEME_CONFIG = {
  themeName: "CrimsonCouples_NeoNoir",
  version: "1.0.0",
  styles: {
    masculine: {
      dark: {
        id: "masc_dark",
        displayName: "Midnight Raven",
        colors: {
          background: "#0D0D0D",
          surface: "#1A1A1A",
          surfaceGlass: "rgba(26, 26, 26, 0.65)",
          borderGlass: "rgba(224, 32, 32, 0.25)",
          primaryAccent: "#E02020",
          secondaryAccent: "#990000",
          textPrimary: "#FFFFFF",
          textSecondary: "#8E8E93",
          glowEffect: "#FF3B30"
        },
        assets: {
          backgroundPattern: "horizontal_scanlines_dark",
          illustrationStyle: "celtic_mystic_silhouette"
        },
        typography: {
          headerMain: "Geometric_Sans_Bold",
          headerAccent: "Signature_Script",
          body: "Inter_Regular"
        }
      },
      light: {
        id: "masc_light",
        displayName: "Arctic Crimson",
        colors: {
          background: "#F4F4F6",
          surface: "#FFFFFF",
          surfaceGlass: "rgba(255, 255, 255, 0.70)",
          borderGlass: "rgba(224, 32, 32, 0.15)",
          primaryAccent: "#D31B1B",
          secondaryAccent: "#FF453A",
          textPrimary: "#1C1C1E",
          textSecondary: "#636366",
          glowEffect: "rgba(211, 27, 27, 0.15)"
        },
        assets: {
          backgroundPattern: "horizontal_scanlines_light",
          illustrationStyle: "celtic_mystic_minimal"
        },
        typography: {
          headerMain: "Geometric_Sans_Bold",
          headerAccent: "Signature_Script",
          body: "Inter_Regular"
        }
      }
    },
    feminine: {
      dark: {
        id: "fem_dark",
        displayName: "Eclipse Rose",
        colors: {
          background: "#0F0B11",
          surface: "#1D1622",
          surfaceGlass: "rgba(29, 22, 34, 0.65)",
          borderGlass: "rgba(255, 45, 85, 0.30)",
          primaryAccent: "#FF2D55",
          secondaryAccent: "#B5179E",
          textPrimary: "#FFFFFF",
          textSecondary: "#A29B9B",
          glowEffect: "#FF375F"
        },
        assets: {
          backgroundPattern: "subtle_grid_dark",
          illustrationStyle: "astral_floral_silhouette"
        },
        typography: {
          headerMain: "Display_Serif_Elegant",
          headerAccent: "Fine_Brush_Script",
          body: "Inter_Regular"
        }
      },
      light: {
        id: "fem_light",
        displayName: "Blush Quartz",
        colors: {
          background: "#FAF7F8",
          surface: "#FFFFFF",
          surfaceGlass: "rgba(255, 255, 255, 0.75)",
          borderGlass: "rgba(255, 45, 85, 0.15)",
          primaryAccent: "#FF2D55",
          secondaryAccent: "#FF6484",
          textPrimary: "#2C222E",
          textSecondary: "#7A6F7D",
          glowEffect: "rgba(255, 45, 85, 0.12)"
        },
        assets: {
          backgroundPattern: "subtle_grid_light",
          illustrationStyle: "astral_floral_minimal"
        },
        typography: {
          headerMain: "Display_Serif_Elegant",
          headerAccent: "Fine_Brush_Script",
          body: "Inter_Regular"
        }
      }
    }
  }
};

const FONT_MAP = {
  Geometric_Sans_Bold: '"Space Grotesk", sans-serif',
  Signature_Script: '"Allura", cursive',
  Display_Serif_Elegant: '"Cormorant Garamond", serif',
  Fine_Brush_Script: '"Allura", cursive',
  Inter_Regular: '"Manrope", sans-serif'
};

const ACCENT_VARIANTS = {
  masculine: {
    dark: [
      { id: "ember", label: "Ember", primary: "#E02020", secondary: "#990000" },
      { id: "cobalt", label: "Cobalt", primary: "#3A86FF", secondary: "#1D4ED8" },
      { id: "oxide", label: "Oxide", primary: "#EF4444", secondary: "#B91C1C" },
      { id: "neon", label: "Neon", primary: "#06B6D4", secondary: "#0E7490" }
    ],
    light: [
      { id: "crimson", label: "Crimson", primary: "#D31B1B", secondary: "#FF453A" },
      { id: "sky", label: "Sky", primary: "#2563EB", secondary: "#3B82F6" },
      { id: "tangerine", label: "Tangerine", primary: "#EA580C", secondary: "#FB923C" },
      { id: "forest", label: "Forest", primary: "#059669", secondary: "#10B981" }
    ]
  },
  feminine: {
    dark: [
      { id: "rose", label: "Rose", primary: "#FF2D55", secondary: "#B5179E" },
      { id: "aurora", label: "Aurora", primary: "#8B5CF6", secondary: "#EC4899" },
      { id: "luna", label: "Luna", primary: "#22D3EE", secondary: "#6366F1" },
      { id: "pearl", label: "Pearl", primary: "#F472B6", secondary: "#DB2777" }
    ],
    light: [
      { id: "blush", label: "Blush", primary: "#FF2D55", secondary: "#FF6484" },
      { id: "petal", label: "Petal", primary: "#EC4899", secondary: "#F472B6" },
      { id: "mint", label: "Mint", primary: "#14B8A6", secondary: "#2DD4BF" },
      { id: "sunset", label: "Sunset", primary: "#F97316", secondary: "#FB7185" }
    ]
  }
};

const TRANSLATIONS = {
  es: {
    onboardingKicker: "Bienvenidos",
    onboardingTitle: "Configura Duality para ustedes dos",
    onboardingSubtitle: "Elige nombre, estilo, modo e idioma antes de empezar.",
    yourNameLabel: "Tu nombre",
    yourNamePlaceholder: "Tu nombre",
    partnerNameLabel: "Nombre de tu pareja",
    partnerNamePlaceholder: "Nombre de tu pareja",
    languageLabel: "Idioma",
    styleLabel: "Estilo",
    styleMasculine: "Masculino",
    styleFeminine: "Femenino",
    modeLabel: "Modo",
    modeDark: "Oscuro",
    modeLight: "Claro",
    modeDarkShort: "Dark",
    modeLightShort: "Light",
    continueButton: "Continuar",
    headerKicker: "Duality App",
    heroKicker: "Espacio compartido",
    heroCopy: "Tu tablero emocional y practico, listo para crecer con modulos.",
    paletteTitle: "Paleta activa",
    paletteCopy: "Elige un matiz para personalizar el acento.",
    moduleMomentsTitle: "Momentos",
    moduleMomentsDesc: "Timeline privado para recuerdos compartidos.",
    moduleGoalsTitle: "Metas",
    moduleGoalsDesc: "Objetivos de pareja con seguimiento visual.",
    moduleCalendarTitle: "Calendario",
    moduleCalendarDesc: "Fechas importantes, citas y planes.",
    moduleNotesTitle: "Notas",
    moduleNotesDesc: "Espacio colaborativo para ideas y acuerdos.",
    pillSoon: "Proximamente",
    installButton: "Instalar app",
    footerNote: "Base inicial lista para modulos funcionales y despliegue.",
    customizeTitle: "Personalizacion",
    saveSettings: "Guardar cambios",
    toastWelcome: "Duality quedo lista para ustedes.",
    toastSaved: "Preferencias actualizadas.",
    toastMissingNames: "Completa ambos nombres para continuar.",
    toastInstallReady: "La app ya se puede instalar.",
    toastInstallDone: "Duality se instalo correctamente.",
    tuneShort: "Tune"
  },
  en: {
    onboardingKicker: "Welcome",
    onboardingTitle: "Set up Duality for both of you",
    onboardingSubtitle: "Pick names, style, mode, and language before starting.",
    yourNameLabel: "Your name",
    yourNamePlaceholder: "Your name",
    partnerNameLabel: "Partner name",
    partnerNamePlaceholder: "Partner name",
    languageLabel: "Language",
    styleLabel: "Style",
    styleMasculine: "Masculine",
    styleFeminine: "Feminine",
    modeLabel: "Mode",
    modeDark: "Dark",
    modeLight: "Light",
    modeDarkShort: "Dark",
    modeLightShort: "Light",
    continueButton: "Continue",
    headerKicker: "Duality App",
    heroKicker: "Shared space",
    heroCopy: "An emotional and practical dashboard, ready to grow with modules.",
    paletteTitle: "Active palette",
    paletteCopy: "Choose a shade to customize the accent.",
    moduleMomentsTitle: "Moments",
    moduleMomentsDesc: "Private timeline for shared memories.",
    moduleGoalsTitle: "Goals",
    moduleGoalsDesc: "Couple goals with visual tracking.",
    moduleCalendarTitle: "Calendar",
    moduleCalendarDesc: "Important dates, appointments, and plans.",
    moduleNotesTitle: "Notes",
    moduleNotesDesc: "Collaborative space for ideas and agreements.",
    pillSoon: "Coming soon",
    installButton: "Install app",
    footerNote: "Initial baseline ready for functional modules and deployment.",
    customizeTitle: "Customization",
    saveSettings: "Save changes",
    toastWelcome: "Duality is ready for both of you.",
    toastSaved: "Preferences updated.",
    toastMissingNames: "Please fill both names to continue.",
    toastInstallReady: "The app is ready to install.",
    toastInstallDone: "Duality was installed successfully.",
    tuneShort: "Tune"
  }
};

const DEFAULT_STATE = {
  onboarded: false,
  userName: "",
  partnerName: "",
  language: "es",
  style: "masculine",
  mode: "dark",
  accentId: ""
};

const state = loadState();
let deferredInstallPrompt = null;

const elements = {
  onboardingScreen: document.getElementById("onboarding-screen"),
  onboardingForm: document.getElementById("onboarding-form"),
  userName: document.getElementById("user-name"),
  partnerName: document.getElementById("partner-name"),
  languageSelect: document.getElementById("language-select"),
  appShell: document.getElementById("app-shell"),
  themeName: document.getElementById("theme-name"),
  swatches: document.getElementById("swatches"),
  nameA: document.getElementById("name-a"),
  nameB: document.getElementById("name-b"),
  heroScript: document.getElementById("hero-script"),
  languageToggle: document.getElementById("language-toggle"),
  themeToggle: document.getElementById("theme-toggle"),
  openCustomize: document.getElementById("open-customize"),
  customizeSheet: document.getElementById("customize-sheet"),
  closeCustomize: document.getElementById("close-customize"),
  editUserName: document.getElementById("edit-user-name"),
  editPartnerName: document.getElementById("edit-partner-name"),
  editLanguage: document.getElementById("edit-language"),
  saveCustomize: document.getElementById("save-customize"),
  installButton: document.getElementById("install-button"),
  toast: document.getElementById("toast"),
  themeMetaColor: document.getElementById("meta-theme-color")
};

init();

function init() {
  bindEvents();
  applyTheme();
  applyLanguage();
  renderNames();
  syncFormValues();
  refreshOnboardingVisibility();
  registerServiceWorker();
}

function bindEvents() {
  elements.onboardingForm.addEventListener("submit", onOnboardingSubmit);

  document.querySelectorAll("[data-style]").forEach((button) => {
    button.addEventListener("click", () => {
      state.style = button.dataset.style;
      ensureAccentId();
      applyTheme();
      saveState();
      syncFormValues();
    });
  });

  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      ensureAccentId();
      applyTheme();
      saveState();
      syncFormValues();
    });
  });

  document.querySelectorAll("[data-edit-style]").forEach((button) => {
    button.addEventListener("click", () => {
      state.style = button.dataset.editStyle;
      ensureAccentId();
      applyTheme();
      saveState();
      syncFormValues();
    });
  });

  document.querySelectorAll("[data-edit-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.editMode;
      ensureAccentId();
      applyTheme();
      saveState();
      syncFormValues();
    });
  });

  elements.languageSelect.addEventListener("change", () => {
    state.language = elements.languageSelect.value;
    applyLanguage();
    saveState();
    syncFormValues();
  });

  elements.editLanguage.addEventListener("change", () => {
    state.language = elements.editLanguage.value;
    applyLanguage();
    saveState();
    syncFormValues();
  });

  elements.languageToggle.addEventListener("click", () => {
    state.language = state.language === "es" ? "en" : "es";
    applyLanguage();
    saveState();
    syncFormValues();
  });

  elements.themeToggle.addEventListener("click", () => {
    state.mode = state.mode === "dark" ? "light" : "dark";
    ensureAccentId();
    applyTheme();
    saveState();
    syncFormValues();
  });

  elements.openCustomize.addEventListener("click", () => {
    openCustomizeSheet();
  });

  elements.closeCustomize.addEventListener("click", closeCustomizeSheet);

  elements.customizeSheet.addEventListener("click", (event) => {
    if (event.target === elements.customizeSheet) {
      closeCustomizeSheet();
    }
  });

  elements.saveCustomize.addEventListener("click", () => {
    state.userName = normalizeName(elements.editUserName.value, state.userName);
    state.partnerName = normalizeName(elements.editPartnerName.value, state.partnerName);
    state.language = elements.editLanguage.value;
    renderNames();
    applyLanguage();
    applyTheme();
    saveState();
    closeCustomizeSheet();
    showToast(t("toastSaved"));
  });

  elements.swatches.addEventListener("click", (event) => {
    const swatch = event.target.closest("button.swatch");
    if (!swatch) {
      return;
    }

    state.accentId = swatch.dataset.accentId;
    applyTheme();
    saveState();
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    elements.installButton.hidden = false;
    showToast(t("toastInstallReady"));
  });

  elements.installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      return;
    }

    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    elements.installButton.hidden = true;
  });

  window.addEventListener("appinstalled", () => {
    elements.installButton.hidden = true;
    showToast(t("toastInstallDone"));
  });
}

function onOnboardingSubmit(event) {
  event.preventDefault();

  const userName = normalizeName(elements.userName.value, "");
  const partnerName = normalizeName(elements.partnerName.value, "");

  if (!userName || !partnerName) {
    showToast(t("toastMissingNames"));
    return;
  }

  state.userName = userName;
  state.partnerName = partnerName;
  state.language = elements.languageSelect.value;
  state.onboarded = true;

  renderNames();
  applyLanguage();
  applyTheme();
  saveState();
  refreshOnboardingVisibility();
  showToast(t("toastWelcome"));
}

function openCustomizeSheet() {
  syncFormValues();
  elements.customizeSheet.classList.add("open");
  elements.customizeSheet.setAttribute("aria-hidden", "false");
}

function closeCustomizeSheet() {
  elements.customizeSheet.classList.remove("open");
  elements.customizeSheet.setAttribute("aria-hidden", "true");
}

function refreshOnboardingVisibility() {
  if (state.onboarded) {
    elements.onboardingScreen.classList.add("hidden");
    return;
  }

  elements.onboardingScreen.classList.remove("hidden");
}

function renderNames() {
  const fallbackA = state.language === "es" ? "Tu" : "You";
  const fallbackB = state.language === "es" ? "Pareja" : "Partner";

  elements.nameA.textContent = state.userName || fallbackA;
  elements.nameB.textContent = state.partnerName || fallbackB;
  elements.heroScript.textContent = `${elements.nameA.textContent} & ${elements.nameB.textContent}`;
}

function applyLanguage() {
  const dictionary = TRANSLATIONS[state.language] || TRANSLATIONS.es;
  document.documentElement.lang = state.language;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (!dictionary[key]) {
      return;
    }

    node.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (!dictionary[key]) {
      return;
    }

    node.setAttribute("placeholder", dictionary[key]);
  });

  elements.languageToggle.textContent = state.language.toUpperCase();
  elements.themeToggle.textContent = state.mode === "dark" ? dictionary.modeDarkShort : dictionary.modeLightShort;
  elements.openCustomize.textContent = dictionary.tuneShort;
  elements.closeCustomize.textContent = state.language === "es" ? "Cerrar" : "Close";

  renderNames();
}

function applyTheme() {
  const selectedTheme = THEME_CONFIG.styles[state.style][state.mode];
  const accents = getAccentVariants();

  if (!accents.some((item) => item.id === state.accentId)) {
    state.accentId = accents[0].id;
  }

  const accent = accents.find((item) => item.id === state.accentId) || accents[0];

  document.body.dataset.mode = state.mode;
  document.body.dataset.style = state.style;
  document.body.dataset.pattern = selectedTheme.assets.backgroundPattern;

  setCssVar("--bg-app", selectedTheme.colors.background);
  setCssVar("--surface", selectedTheme.colors.surface);
  setCssVar("--surface-glass", selectedTheme.colors.surfaceGlass);
  setCssVar("--border-glass", selectedTheme.colors.borderGlass);
  setCssVar("--text-primary", selectedTheme.colors.textPrimary);
  setCssVar("--text-secondary", selectedTheme.colors.textSecondary);
  setCssVar("--glow-effect", selectedTheme.colors.glowEffect);

  setCssVar("--primary-accent", accent.primary);
  setCssVar("--secondary-accent", accent.secondary);

  setCssVar("--font-header", FONT_MAP[selectedTheme.typography.headerMain] || FONT_MAP.Geometric_Sans_Bold);
  setCssVar("--font-accent", FONT_MAP[selectedTheme.typography.headerAccent] || FONT_MAP.Signature_Script);
  setCssVar("--font-body", FONT_MAP[selectedTheme.typography.body] || FONT_MAP.Inter_Regular);

  elements.themeName.textContent = `${selectedTheme.displayName} / ${accent.label}`;
  elements.themeMetaColor.setAttribute("content", accent.primary);
  renderSwatches(accents);
  syncSegmentedStates();
  saveState();
}

function renderSwatches(accents) {
  elements.swatches.innerHTML = "";

  accents.forEach((accent) => {
    const button = document.createElement("button");
    button.className = "swatch";
    if (accent.id === state.accentId) {
      button.classList.add("active");
    }

    button.type = "button";
    button.dataset.accentId = accent.id;
    button.style.background = `linear-gradient(130deg, ${accent.primary}, ${accent.secondary})`;
    button.setAttribute("aria-label", accent.label);
    elements.swatches.appendChild(button);
  });
}

function syncFormValues() {
  elements.userName.value = state.userName;
  elements.partnerName.value = state.partnerName;
  elements.languageSelect.value = state.language;
  elements.editUserName.value = state.userName;
  elements.editPartnerName.value = state.partnerName;
  elements.editLanguage.value = state.language;

  syncSegmentedStates();
}

function syncSegmentedStates() {
  document.querySelectorAll("[data-style]").forEach((button) => {
    button.classList.toggle("active", button.dataset.style === state.style);
  });

  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });

  document.querySelectorAll("[data-edit-style]").forEach((button) => {
    button.classList.toggle("active", button.dataset.editStyle === state.style);
  });

  document.querySelectorAll("[data-edit-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.editMode === state.mode);
  });
}

function getAccentVariants() {
  return ACCENT_VARIANTS[state.style][state.mode];
}

function ensureAccentId() {
  const accents = getAccentVariants();
  if (!accents.some((item) => item.id === state.accentId)) {
    state.accentId = accents[0].id;
  }
}

function normalizeName(value, fallback) {
  const normalized = String(value || "").trim();
  return normalized || fallback;
}

function showToast(message) {
  if (!message) {
    return;
  }

  elements.toast.textContent = message;
  elements.toast.classList.add("show");

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2200);
}

function setCssVar(name, value) {
  document.documentElement.style.setProperty(name, value);
}

function t(key) {
  const dictionary = TRANSLATIONS[state.language] || TRANSLATIONS.es;
  return dictionary[key] || TRANSLATIONS.es[key] || key;
}

function loadState() {
  try {
    const raw = localStorage.getItem(APP_STORAGE_KEY);
    if (!raw) {
      return { ...DEFAULT_STATE };
    }

    const parsed = JSON.parse(raw);
    const merged = {
      ...DEFAULT_STATE,
      ...parsed
    };

    if (!THEME_CONFIG.styles[merged.style]) {
      merged.style = DEFAULT_STATE.style;
    }

    if (!["dark", "light"].includes(merged.mode)) {
      merged.mode = DEFAULT_STATE.mode;
    }

    if (!["es", "en"].includes(merged.language)) {
      merged.language = DEFAULT_STATE.language;
    }

    return merged;
  } catch (error) {
    console.warn("Failed to load preferences", error);
    return { ...DEFAULT_STATE };
  }
}

function saveState() {
  localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(state));
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("Service worker registration failed", error);
    });
  });
}
