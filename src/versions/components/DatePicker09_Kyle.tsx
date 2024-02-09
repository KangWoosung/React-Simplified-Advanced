/*  2024-02-09 11:42:54

    const availableLocales = Object.keys(locales).map((localeCode) => ({
      code: localeCode,
      name: locales[localeCode].options?.locale || localeCode,
    }));
    console.log(availableLocales);

*/
import { useState } from "react";
import { format } from "date-fns";
import { Locale } from "date-fns/locale";
import DatePickerModal09_Kyle from "./DatePickerModal09_Kyle";

export const nationsCode = "US";

type DatePicker09_Kyle_Type = {
  value: Date;
  onChange: (arg: Date) => void;
  loadedLocale: Locale;
};
const DatePicker09_Kyle = ({
  value,
  onChange,
  loadedLocale,
}: DatePicker09_Kyle_Type) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h3>DatePicker09_Kyle</h3>
      <div className="date-picker-container">
        <button
          className="date-picker-button"
          onClick={() => setIsOpen((o) => !o)}
        >
          {value == null
            ? "Select Date"
            : format(value, "MMM do, yyyy", { locale: loadedLocale })}
        </button>
        {isOpen && (
          <DatePickerModal09_Kyle
            value={value}
            onChange={onChange}
            loadedLocale={loadedLocale}
          />
        )}
      </div>
    </>
  );
};
export default DatePicker09_Kyle;
