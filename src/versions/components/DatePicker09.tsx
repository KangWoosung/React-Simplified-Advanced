/*  2024-02-08 11:05:39



*/

import { getMonth, getYear } from "date-fns";
import WeekDays09 from "./WeekDays09";

type DatePickerParams = {
  prevMonthDays: number[];
  nextMonthDays: number[];
  currentMonthDays: number[];
  currentDateString: string;
  currentDateState: Date;
  moveToPrevMonth: () => void;
  moveToNextMonth: () => void;
};

const DatePicker09 = ({
  prevMonthDays,
  nextMonthDays,
  currentMonthDays,
  currentDateString,
  currentDateState,
  moveToPrevMonth,
  moveToNextMonth,
}: DatePickerParams) => {
  const currentMonth = getMonth(currentDateState) + 1;
  const currentYear = getYear(currentDateState);

  return (
    <>
      <h3>DatePicker09</h3>

      <div className="date-picker">
        <div className="date-picker-header">
          <button
            className="prev-month-button month-button"
            onClick={moveToPrevMonth}
          >
            &larr;
          </button>
          <div className="current-month">
            {currentYear}-{currentMonth}
          </div>
          <button
            className="next-month-button month-button"
            onClick={moveToNextMonth}
          >
            &rarr;
          </button>
        </div>
        <WeekDays09 />
        <div className="date-picker-grid-dates date-picker-grid">
          {prevMonthDays.map((date) => {
            const key = date.toString() + "prev";
            return (
              <button className="date date-picker-other-month-date" key={key}>
                {date}
              </button>
            );
          })}
          {currentMonthDays.map((date) => {
            const key =
              currentYear + "-" + currentMonth + "-" + date + "current";
            return (
              <button
                className={`date ${key == currentDateString ? `today` : ``}`}
                key={key}
              >
                {date}
              </button>
            );
          })}
          {nextMonthDays.map((date) => {
            const key = date.toString() + "next";
            return (
              <button className="date date-picker-other-month-date" key={key}>
                {date}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DatePicker09;
