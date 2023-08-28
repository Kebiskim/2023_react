import styles from './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Main01 from './component/Main01';
import Main02 from './component/Main02';
import Main03 from './component/Main03';
import Main04 from './component/Main04';
import Main05 from './component/Main05';
import EmptyPage from './component/EmptyPage';

// 1. App를 BrowserRouter로 감싼다.
function App() {
  // 배열
  return (
    <BrowserRouter>
    <div className="App">
      <h1> REACT 연습하기 </h1>
      <hr />
      {/* a link는 해당 페이지 내에서 이동 */}
      {/* 페이지 전체는 Link to를 사용 => Router와 연관! */}
      <button style={{marginLeft: "20px"}}><Link to="/main01"> Main01 </Link></button>
      <button style={{marginLeft: "20px"}}><Link to="/main02"> Main02 </Link></button>
      <button style={{marginLeft: "20px"}}><Link to="/main03"> main03 </Link></button>
      <button style={{marginLeft: "20px"}}><Link to="/main04"> main04 </Link></button>
      <button style={{marginLeft: "20px"}}><Link to="/main05"> Redux </Link></button>
    </div>
      <Routes>
        <Route path="/" />
        <Route path="/main01" element={<Main01 />} />
        <Route path="/main02" element={<Main02 />} />
        <Route path="/main03" element={<Main03 />} />
        <Route path="/main04" element={<Main04 />} />
        <Route path="/main05" element={<Main05 />} />
        <Route path="/day/:day" element={<Day />} />
        <Route path="/daylist" element={<DayList />} />
        {/* 이외의 URL이 들어오면 받아들이는 페이지 */}
        <Route path="/*" element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
