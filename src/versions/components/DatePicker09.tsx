/*  2024-02-08 11:05:39



*/

import { format, getYear } from "date-fns";
import WeekDays09 from "./WeekDays09";
import { dateFormatByNation } from "../../functions/dateFormatByNation";
import { nationsCode } from "../Component09";

type DatePickerParams = {
  prevMonthDays: number[];
  nextMonthDays: number[];
  currentMonthDays: number[];
  currentDateState: Date;
  currentDateString: string;
  moveToPrevMonth: () => void;
  moveToNextMonth: () => void;
  pickDate: (arg: string) => void;
  selectedDateState: string;
};

const DatePicker09 = ({
  prevMonthDays,
  nextMonthDays,
  currentMonthDays,
  currentDateState,
  currentDateString,
  moveToPrevMonth,
  moveToNextMonth,
  pickDate,
  selectedDateState,
}: DatePickerParams) => {
  const currentMonth = Number(format(currentDateState, "M"));
  const currentYear = getYear(currentDateState);
  console.log(currentMonth);
  console.log(currentDateState);
  let current_month = dateFormatByNation(
    currentDateState,
    nationsCode
  ) as string;
  current_month = current_month
    .replace(/(\w{3}) \d{1,2}, (\d{4})/, "$1 $2")
    .replace(/\d{1,2}(일|日)/, "")
    .replace(/^\d{1,2} /, "");
  current_month;

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
          <div className="current-month">{current_month}</div>
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
            const key = dateFormatByNation(
              new Date(currentYear, currentMonth - 1, date),
              nationsCode
            ) as string;
            console.log(currentYear, currentMonth, date);
            return (
              <button
                className={`date 
                    ${key == currentDateString ? ` today ` : ``}
                    ${key == selectedDateState ? ` selected` : ``}
                `}
                key={key}
                onClick={() => pickDate(key)}
              >
                {date}
                {/* {date} {key} {currentDateString} */}
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
