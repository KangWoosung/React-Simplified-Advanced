/*  2024-02-09 04:17:06

dependency:
    -date-fns 

*/

import { format, getDate, getYear } from "date-fns";

export function dateFormatByNation(date: Date, nation: string) {
  const locale = localesByNation(nation);
  const currentMonth = format(date, "MMM");
  console.log(currentMonth);
  const currentYear = getYear(date);
  const currentDateNumber = getDate(date);
  if (locale === "Asia") {
    if (nation == "KO")
      return `${currentYear}년 ${format(date, "M")}월 ${currentDateNumber}일`;
    else if (nation == "CN" || nation == "TW" || nation == "JP")
      return `${currentYear}年 ${format(date, "M")}月 ${currentDateNumber}日`;
  } else if (locale === "Europe") {
    return `${currentDateNumber} ${currentMonth}, ${currentYear}`;
  } else if (locale === "America") {
    return `${currentMonth} ${currentDateNumber}, ${currentYear}`;
  }
}

export function localesByNation(nation: string) {
  const europe = [
    "GR",
    "FR",
    "IT",
    "ES",
    "PT",
    "NL",
    "BE",
    "LU",
    "IE",
    "DK",
    "FI",
    "AT",
    "SE",
    "EE",
    "LV",
    "LT",
    "PL",
    "CZ",
    "SK",
    "HU",
    "SI",
    "MT",
    "CY",
  ];
  const asia = [
    "KO",
    "CH",
    "JP",
    "TW",
    "HK",
    "MO",
    "MN",
    "KP",
    "LA",
    "KH",
    "VN",
    "TH",
    "SG",
    "MY",
    "ID",
    "PH",
    "MM",
    "BN",
    "TL",
    "NP",
    "BD",
    "LK",
    "MV",
    "BT",
    "IN",
    "PK",
    "AF",
    "IR",
    "IQ",
    "SY",
    "LB",
    "JO",
    "IL",
    "SA",
    "YE",
    "OM",
    "AE",
    "QA",
    "KW",
    "BH",
  ];
  const america = [
    "US",
    "CA",
    "MX",
    "CU",
    "DO",
    "HT",
    "JM",
    "TT",
    "BS",
    "BB",
    "GD",
    "AG",
    "LC",
    "VC",
    "KN",
    "DM",
    "TT",
    "JM",
    "BZ",
    "CR",
    "PA",
    "HN",
    "NI",
    "SV",
    "GT",
    "BZ",
    "CR",
    "PA",
    "HN",
    "NI",
    "SV",
    "GT",
  ];

  if (europe.includes(nation)) {
    return "Europe";
  } else if (asia.includes(nation)) {
    return "Asia";
  } else if (america.includes(nation)) {
    return "America";
  } else {
    return "Unknown";
  }
}
