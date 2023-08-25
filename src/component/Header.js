import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="Header">
            <h1> 토익 영단어 (고급) </h1>
            <div className="menu">
                <a href="/" className="link">단어 추가</a>
                <a href="/" className="link">Day 추가</a>
            </div>
        </div>
    );
}