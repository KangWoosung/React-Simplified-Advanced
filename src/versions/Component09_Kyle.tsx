/*  2024-02-09 05:57:14

Add Locales....

*/

import { useState } from "react";
import { enUS } from "date-fns/locale";
import "../css/date_picker.css";
import DatePicker09_Kyle from "./components/DatePicker09_Kyle";
import LocalesSelector09 from "./components/LocalesSelector09";

const Component09_Kyle = () => {
  const initDate = new Date();
  const [value, setValue] = useState<Date>(initDate);
  const [loadedLocaleCode, setLoadedLocaleCode] = useState("en-US");
  const [loadedLocale, setLoadedLocale] = useState(enUS);

  return (
    <>
      <h1>Component09_Kyle</h1>
      <LocalesSelector09
        loadedLocaleCode={loadedLocaleCode}
        setLoadedLocaleCode={setLoadedLocaleCode}
        setLoadedLocale={setLoadedLocale}
      />
      <DatePicker09_Kyle
        value={value}
        onChange={setValue}
        loadedLocale={loadedLocale}
      />
    </>
  );
};

export default Component09_Kyle;
