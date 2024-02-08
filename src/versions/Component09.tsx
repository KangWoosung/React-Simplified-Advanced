/*  2024-02-08 09:46:35

This project will not actually use Portals. You could create this Date Picker with Portals, but it requires a lot of custom JavaScript and algebra to figure out how to position the calendar correctly, instead we will be using CSS to position the calendar which is much easier (even if it isn't quite as flexible).

Speaking of CSS, all the HTML/CSS you need for the project is included. Make sure you pay attention to all the classNamees in the HTML to make sure you include them all in your final project.

The only other thing to note about this project is that it is built using date-fns. You can use any date library you want (even the built in JS Date API), but I will be using date-fns in my walkthrough video as I find it to be one of the best date libraries available.

1. Create a DatePicker component that renders a button to open/close a calendar.
This component should be a controlled component which means that it should accept an onChange and value prop (similar to an input element).
This component should default to the current date when the page loads.
When the calendar is opened it should open to the month of the selected date.

Get through Plan:
1. Make the Html work.
2. Find the date-fns official docs
3. Make date-fns custom functions if it needs to be
4. Add actions one by one



*/
import {
  format,
  lastDayOfMonth,
  subMonths,
  addMonths,
  getDate,
} from "date-fns";
import "../css/date_picker.css";
import DatePicker09 from "./components/DatePicker09";
import { useState } from "react";
import { dateFormatByNation } from "../functions/dateFormatByNation";

export const nationsCode = "US";

const Component09 = () => {
  const currentDate = new Date();
  const lastDateOfCurrentMonth = Number(
    format(lastDayOfMonth(currentDate), "dd")
  );
  // for key compare to check current date
  const currentDateString = dateFormatByNation(
    currentDate,
    nationsCode
  ) as string;
  console.log(currentDateString);

  // Picked date string state
  const [pickedDateString, setPickedDateString] = useState(currentDateString);

  // DatePicker Active/Deactive
  const [datePickerActive, setDatePickerActive] = useState(false);

  // Currently selected Date object
  const [currentDateState, setCurrentDateState] = useState(currentDate);

  // PrevMonth Days
  const [prevMonthDays, setPrevMonthDays] = useState(
    getPrevMonthDays(currentDateState)
  );

  // NextMonth Days
  const [nextMonthDays, setNextMonthDays] = useState(
    getNextMonthDays(currentDateState)
  );

  // Current Month Days
  const [currentMonthDays, setCurrentMonthDays] = useState(
    Array.from({ length: lastDateOfCurrentMonth }, (_, i) => i + 1)
  );

  // Selected Date State
  const [selectedDateState, setSelectedDateState] = useState("");

  // Move Month action
  const moveToPrevMonth = () => {
    const newDate = subMonths(currentDateState, 1);
    const lastWeekDaysData = getPrevMonthDays(newDate);
    const firstWeekDaysData = getNextMonthDays(newDate);
    setCurrentDateState(newDate);
    setPrevMonthDays(lastWeekDaysData);
    setNextMonthDays(firstWeekDaysData);
    setCurrentMonthDays(getCurrentMonthDays(newDate));
  };
  const moveToNextMonth = () => {
    const newDate = addMonths(currentDateState, 1);
    const lastWeekDaysData = getPrevMonthDays(newDate);
    const firstWeekDaysData = getNextMonthDays(newDate);
    setCurrentDateState(newDate);
    setPrevMonthDays(lastWeekDaysData);
    setNextMonthDays(firstWeekDaysData);
    setCurrentMonthDays(getCurrentMonthDays(newDate));
  };

  // Pick Date acttion
  const pickDate = (dateKeyStr: string) => {
    console.log("selectDate", dateKeyStr);
    setSelectedDateState(dateKeyStr);
    setPickedDateString(dateKeyStr);
  };

  // Toggle setDatePickerActive
  const toggleSetDatePickerActive = () => {
    setDatePickerActive(!datePickerActive);
  };

  return (
    <>
      <h1>DatePicker</h1>
      <div className="date-picker-container">
        <button
          className="date-picker-button"
          onClick={toggleSetDatePickerActive}
        >
          {pickedDateString}
        </button>

        {datePickerActive && (
          <div className="date-picker">
            <DatePicker09
              prevMonthDays={prevMonthDays}
              nextMonthDays={nextMonthDays}
              currentMonthDays={currentMonthDays}
              currentDateState={currentDateState}
              currentDateString={currentDateString}
              moveToPrevMonth={moveToPrevMonth}
              moveToNextMonth={moveToNextMonth}
              pickDate={pickDate}
              selectedDateState={selectedDateState}
            />
          </div>
        )}
      </div>
    </>
  );
};

function getPrevMonthDays(dateObj: Date) {
  // 이전 월의 마지막 날짜
  const lastDayOfPrevMonth = lastDayOfMonth(subMonths(dateObj, 1));
  //   console.log(lastDayOfPrevMonth);

  // 이전 월 마지막 날짜의 요일
  const lastMonthDayOfWeek = Number(format(lastDayOfPrevMonth, "i"));
  //   console.log(lastMonthDayOfWeek);

  const prevMonthLastWeekDays: number[] = [];

  if (lastMonthDayOfWeek === 6) {
    return prevMonthLastWeekDays;
  } else if (lastMonthDayOfWeek === 7) {
    prevMonthLastWeekDays.push(getDate(lastDayOfPrevMonth));
  } else {
    // 이전 월의 마지막 날짜부터 시작일까지 역순으로 배열에 추가
    for (let i = lastMonthDayOfWeek; i >= 0; i--) {
      const addDayNum = getDate(lastDayOfPrevMonth) - i;
      // console.log(addDayNum);
      prevMonthLastWeekDays.push(addDayNum);
    }
  }
  //   prevMonthLastWeekDays.reverse();
  return prevMonthLastWeekDays;
}
function getNextMonthDays(dateObj: Date): number[] {
  const lastDayOfCurrentMonth = lastDayOfMonth(dateObj);
  // 현재 월 마지막 날짜의 요일
  const lastMonthDayOfWeek = Number(format(lastDayOfCurrentMonth, "i"));

  const firstWeekDays = [];
  let j = 1;
  for (let i = lastMonthDayOfWeek; i < 6; i++) {
    firstWeekDays.push(j++);
  }
  if (lastMonthDayOfWeek === 7) {
    const len = 6;
    for (let i = 1; i <= len; i++) {
      firstWeekDays.push(i);
    }
  }
  return firstWeekDays;
}
function getCurrentMonthDays(dateObj: Date): number[] {
  const daysCnt = Number(format(lastDayOfMonth(dateObj), "dd"));
  return Array.from({ length: daysCnt }, (_, i) => i + 1);
}

export default Component09;
