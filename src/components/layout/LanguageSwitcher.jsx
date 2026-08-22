// import { useEffect, useRef, useState } from "react";
// import { FiGlobe, FiChevronDown, FiCheck } from "react-icons/fi";

// const languages = [
//   { code: "en", name: "English", flag: "🇬🇧" },
//   { code: "fr", name: "Français", flag: "🇫🇷" },
// ];

// const LanguageSwitcher = () => {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState(languages[0]);
//   const ref = useRef(null);

//   useEffect(() => {
//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           includedLanguages: "en,fr",
//           autoDisplay: false,
//         },
//         "google_translate_element"
//       );
//     };

//     if (!document.getElementById("google-translate-script")) {
//       const script = document.createElement("script");
//       script.id = "google-translate-script";
//       script.src =
//         "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       script.async = true;
//       document.body.appendChild(script);
//     }

//     const close = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("click", close);

//     return () => document.removeEventListener("click", close);
//   }, []);

//   const changeLanguage = (lang) => {
//     const select = document.querySelector(".goog-te-combo");

//     if (select) {
//       select.value = lang.code;
//       select.dispatchEvent(new Event("change"));
//     }

//     setSelected(lang);
//     setOpen(false);
//   };

//   return (
//     <>
//       {/* Hidden Google Translate */}
//       <div id="google_translate_element" className="hidden"></div>

//       {/* Custom UI */}
//       <div ref={ref} className="relative">
//         <button
//           onClick={() => setOpen(!open)}
//           className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111827] px-4 py-2 text-white hover:border-amber-400"
//         >
//           <FiGlobe className="text-amber-400" />
//           <span>{selected.flag}</span>
//           <span>{selected.name}</span>
//           <FiChevronDown
//             className={`transition ${open ? "rotate-180" : ""}`}
//           />
//         </button>

//         {open && (
//           <div className="absolute right-0 mt-3 w-60 rounded-2xl border border-white/10 bg-[#111827] p-2 shadow-2xl">
//             {languages.map((lang) => (
//               <button
//                 key={lang.code}
//                 onClick={() => changeLanguage(lang)}
//                 className={`flex w-full items-center justify-between rounded-xl px-3 py-3 transition ${
//                   selected.code === lang.code
//                     ? "bg-amber-400 text-black"
//                     : "text-white hover:bg-white/10"
//                 }`}
//               >
//                 <span className="flex items-center gap-3">
//                   <span className="text-xl">{lang.flag}</span>
//                   {lang.name}
//                 </span>

//                 {selected.code === lang.code && <FiCheck />}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default LanguageSwitcher;

import { useEffect, useRef, useState } from "react";
import { FiGlobe, FiChevronDown, FiCheck } from "react-icons/fi";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  const ref = useRef(null);

  useEffect(() => {
    // ==========================================
    // Hide Google Translate banner
    // ==========================================
    const hideGoogleBanner = () => {
      const elements = document.querySelectorAll(
        `
        .goog-te-banner-frame,
        .goog-te-balloon-frame,
        #goog-gt-tt,
        .goog-tooltip
        `
      );

      elements.forEach((el) => {
        el.style.display = "none";
        el.remove();
      });

      document.body.style.top = "0px";
      document.body.style.position = "static";
      document.documentElement.style.marginTop = "0px";
    };

    // ==========================================
    // Google Translate CSS
    // ==========================================
    const style = document.createElement("style");

    style.id = "google-translate-custom-style";

    style.innerHTML = `
      .goog-te-banner-frame,
      .goog-te-banner-frame.skiptranslate {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
      }

      .goog-te-balloon-frame,
      #goog-gt-tt,
      .goog-tooltip {
        display: none !important;
        visibility: hidden !important;
      }

      body {
        top: 0 !important;
      }

      html {
        margin-top: 0 !important;
      }

      #google_translate_element {
        display: none !important;
      }

      body > .skiptranslate {
        display: none !important;
      }
    `;

    document.head.appendChild(style);

    // ==========================================
    // Google Translate initialization
    // ==========================================
    window.googleTranslateElementInit = () => {
      if (
        window.google &&
        window.google.translate &&
        window.google.translate.TranslateElement
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr",
            autoDisplay: false,
          },
          "google_translate_element"
        );

        setTimeout(hideGoogleBanner, 100);
        setTimeout(hideGoogleBanner, 500);
        setTimeout(hideGoogleBanner, 1000);
      }
    };

    // ==========================================
    // Load Google Translate script
    // ==========================================
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");

      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;

      document.body.appendChild(script);
    }

    // ==========================================
    // Keep removing Google banner
    // ==========================================
    const observer = new MutationObserver(() => {
      hideGoogleBanner();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // ==========================================
    // Close dropdown outside
    // ==========================================
    const handleOutsideClick = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "click",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "click",
        handleOutsideClick
      );

      observer.disconnect();

      const existingStyle = document.getElementById(
        "google-translate-custom-style"
      );

      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  // ==========================================
  // Change Language
  // ==========================================
  const changeLanguage = (lang) => {
    const changeGoogleLanguage = () => {
      const select =
        document.querySelector(".goog-te-combo");

      if (!select) {
        return false;
      }

      // Important:
      // Google Translate expects exact language code
      select.value = lang.code;

      // Trigger native change event
      select.dispatchEvent(
        new Event("change", {
          bubbles: true,
        })
      );

      return true;
    };

    // Try immediately
    const changed = changeGoogleLanguage();

    // Google Translate can take time to create
    // .goog-te-combo, so retry if not ready
    if (!changed) {
      let attempts = 0;

      const interval = setInterval(() => {
        attempts++;

        const success = changeGoogleLanguage();

        if (success || attempts >= 20) {
          clearInterval(interval);
        }
      }, 250);
    }

    // Update our custom UI
    setSelected(lang);
    setOpen(false);

    // Hide Google banner after translation
    setTimeout(() => {
      const banner = document.querySelector(
        ".goog-te-banner-frame"
      );

      if (banner) {
        banner.remove();
      }

      document.body.style.top = "0px";
      document.body.style.position = "static";
      document.documentElement.style.marginTop = "0px";
    }, 100);

    setTimeout(() => {
      const banner = document.querySelector(
        ".goog-te-banner-frame"
      );

      if (banner) {
        banner.remove();
      }

      document.body.style.top = "0px";
    }, 500);
  };

  return (
    <>
      {/* ==========================================
          Hidden Google Translate
          ========================================== */}
      <div
        id="google_translate_element"
        style={{
          display: "none",
        }}
      />

      {/* ==========================================
          Custom Language Switcher
          ========================================== */}
      <div
        ref={ref}
        className="relative"
      >
        <button
          type="button"
          onClick={() =>
            setOpen((prev) => !prev)
          }
          className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111827] px-4 py-2 text-white transition hover:border-amber-400"
        >
          <FiGlobe className="text-amber-400" />

          <span>{selected.flag}</span>

          <span>{selected.name}</span>

          <FiChevronDown
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* ========================================
            Dropdown
            ======================================== */}
        {open && (
          <div className="absolute right-0 z-50 mt-3 w-60 rounded-2xl border border-white/10 bg-[#111827] p-2 shadow-2xl">
            {languages.map((lang) => (
              <button
                type="button"
                key={lang.code}
                onClick={() =>
                  changeLanguage(lang)
                }
                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 transition ${
                  selected.code === lang.code
                    ? "bg-amber-400 text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl">
                    {lang.flag}
                  </span>

                  <span>{lang.name}</span>
                </span>

                {selected.code === lang.code && (
                  <FiCheck />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageSwitcher;
