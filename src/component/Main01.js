import DayList from "./DayList";
import Header from "./Header";
import Day from "./Day";

// function 이름은 파일명이랑 같아야 함.
export default function Main01() {
    return(
        <div>
            <header />
            <DayList />
            <Day />
        </div>
    );
}