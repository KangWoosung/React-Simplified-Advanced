/*  2024-02-09 14:34:34


*/

import { Day, Locale } from "date-fns";

type WeekDays09_Locale = {
  loadedLocale: Locale;
};

const WeekDays09_Locale = ({ loadedLocale }: WeekDays09_Locale) => {
  const firstDayOfWeek = loadedLocale.options?.weekStartsOn || 0;
  // console.log(firstDayOfWeek);
  const weekdays = Array.from({ length: 7 }, (_, i) => {
    const dayIndex = (i + firstDayOfWeek) % 7;
    return loadedLocale.localize.day(dayIndex as Day, { width: "abbreviated" });
  });
  // console.log(weekdays);
  return (
    <>
      <div className="date-picker-grid-header date-picker-grid">
        {weekdays.map((day) => (
          <div key={crypto.randomUUID()} className="date-picker-grid-item">
            {day}
          </div>
        ))}
      </div>
    </>
  );
};

export default WeekDays09_Locale;
