/*  2024-02-09 12:46:19


*/
import {
  availableLocales,
  returnLocaleObject,
} from "../../functions/localeFunction";
import { Locale } from "date-fns/locale";

type LocalesSelectorType = {
  loadedLocaleCode: string;
  setLoadedLocaleCode: (arg: string) => void;
  setLoadedLocale: (arg: Locale) => void;
};

type LocalesType = {
  code: string;
  name: string;
};
const LocalesSelector09 = ({
  loadedLocaleCode,
  setLoadedLocaleCode,
  setLoadedLocale,
}: LocalesSelectorType) => {
  const changeLocaleAction = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const data = event.target.value;
    const localeSelected = returnLocaleObject(data);
    setLoadedLocaleCode(data);
    setLoadedLocale(localeSelected);
  };

  return (
    <>
      <h3>LocalesSelector09</h3>
      <select onChange={changeLocaleAction}>
        {availableLocales.map((locale: LocalesType) => (
          <option
            key={locale.code}
            value={locale.code}
            selected={locale.code === loadedLocaleCode}
          >
            {locale.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default LocalesSelector09;
