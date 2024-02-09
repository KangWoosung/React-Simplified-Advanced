/*  2024-02-09 14:57:54


*/
import { Locale, isSameDay, isSameMonth, isToday } from "date-fns";

type MonthDays09_Locale = {
  loadedLocale?: Locale;
  visibleDates: Date[];
  visibleMonth: Date;
  value: Date;
  onChange: (arg: Date) => void;
};

const MonthDays09_Locale = ({
  visibleDates,
  visibleMonth,
  value,
  onChange,
}: MonthDays09_Locale) => {
  return (
    <>
      {/* <div>MonthDays09_Locale</div> */}
      <div className="date-picker-grid-dates date-picker-grid">
        {visibleDates.map((date: Date) => (
          <button
            onClick={() => onChange(date)}
            className={`date ${
              !isSameMonth(date, visibleMonth) && "date-picker-other-month-date"
            }
                ${isSameDay(date, value) && "selected"}
                ${isToday(date) && "today"}
            `}
            key={date.toDateString()}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </>
  );
};

export default MonthDays09_Locale;
