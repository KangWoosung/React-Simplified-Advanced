/*  2024-02-09 12:03:45


*/

import { Day, Locale } from "date-fns";
import {
  enUS,
  de,
  fr,
  es,
  pt,
  ru,
  ar,
  ko,
  ja,
  zhCN,
  zhTW,
  vi,
  th,
  ms,
  id,
} from "date-fns/locale";

export const availableLocales = [
  { code: "enUS", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "pt", name: "Português" },
  { code: "ru", name: "Russian" },
  { code: "ar", name: "العربية" },
  { code: "ko", name: "한국어" },
  { code: "ja", name: "日本語" },
  { code: "zhCN", name: "简体中文" },
  { code: "zhTW", name: "繁體中文" },
  { code: "vi", name: "Tiếng Việt" },
  { code: "th", name: "ไทย" },
  { code: "ms", name: "Bahasa Malaysia" },
  { code: "id", name: "Bahasa Indonesia" },
];

export function returnLocaleObject(localeName: string) {
  switch (localeName) {
    case "enUS":
      return enUS;
    case "de":
      return de;
    case "fr":
      return fr;
    case "es":
      return es;
    case "pt":
      return pt;
    case "ru":
      return ru;
    case "ar":
      return ar;
    case "ko":
      return ko;
    case "ja":
      return ja;
    case "zhCN":
      return zhCN;
    case "zhTW":
      return zhTW;
    case "vi":
      return vi;
    case "th":
      return th;
    case "ms":
      return ms;
    case "id":
      return id;
    default:
      return enUS;
  }
}

// returns locale's weekdays array : ["Monday", "Tuesday"...]
export function returnLocaleWeekDays(LOC: Locale): string[] {
  const weekdays = Array.from({ length: 7 }, (_, i) =>
    LOC.localize.day((i + 1) as Day, { width: "wide" })
  );

  return weekdays;
}

export function returnlocaleDateFormat(locale: string): string {
  if (locale === "America") return "MMM do, yyyy";
  else if (locale === "Asia") return "yyyy년 M월 d일";
  else if (locale === "Europe") return "d MMM, yyyy";
  else return "MMM do, yyyy";
}
