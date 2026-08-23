import { useCallback, useEffect, useState } from "react";
import { copy, languages } from "../i18n/translations";

const STORAGE_KEY = "reviewcard:lang";
const DEFAULT_LANG = "ka";

/** Last explicit choice, else Georgian. */
function detectLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && languages.includes(stored)) return stored;
  } catch {
    // Private browsing or blocked storage — fall through to the default.
  }

  return DEFAULT_LANG;
}

/**
 * Owns the active language, keeps `<html lang>` and the document title in
 * sync with it, and remembers the choice across visits.
 */
export function useLanguage() {
  const [lang, setLangState] = useState(detectLanguage);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Not being able to persist the choice shouldn't break switching it.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = copy[lang].documentTitle;
  }, [lang]);

  return { lang, setLang, t: copy[lang] };
}
