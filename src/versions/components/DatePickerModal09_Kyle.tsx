/*  2024-02-09 15:37:09


*/
import {
  Locale,
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import React, { useState } from "react";
import WeekDays09_Locale from "./WeekDays09_Locale";
import MonthDays09_Locale from "./MonthDays09_Locale";

type DatePickerModalType = {
  value: Date;
  onChange: (arg: Date) => void;
  loadedLocale: Locale;
};

const DatePickerModal09_Kyle = ({
  value,
  onChange,
  loadedLocale,
}: DatePickerModalType) => {
  const [visibleMonth, setVisibleMonth] = useState<Date>(value || new Date());

  // 데이터 visibleMonth 는 Date 객체이다.
  // 핸들 대상 Date 객체의, 월 시작일 Date 객체--의 Week 시작일 Date 객체 를 확보한다.
  // locale 객체 옵션을 추가하였다.
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(visibleMonth), { locale: loadedLocale }),
    end: endOfWeek(endOfMonth(visibleMonth), { locale: loadedLocale }),
  });

  const showPreviousMonth = () => {
    setVisibleMonth((m) => addMonths(m, -1));
  };

  const showNextMonth = () => {
    setVisibleMonth((m) => addMonths(m, 1));
  };

  return (
    <>
      <h3>DatePickerModal</h3>
      <div className="date-picker">
        <div className="date-picker-header">
          <button
            className="prev-month-button month-button"
            onClick={showPreviousMonth}
          >
            &larr;
          </button>
          <div className="current-month">
            {format(visibleMonth, "MMMM yyyy", { locale: loadedLocale })}
          </div>
          <button
            className="next-month-button month-button"
            onClick={showNextMonth}
          >
            &rarr;
          </button>
        </div>
        <WeekDays09_Locale loadedLocale={loadedLocale} />
        <MonthDays09_Locale
          loadedLocale={loadedLocale}
          visibleDates={visibleDates}
          visibleMonth={visibleMonth}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default DatePickerModal09_Kyle;
