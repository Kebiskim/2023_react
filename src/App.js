import styles from './App.css';
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// 1. App를 BrowserRouter로 감싼다.
function App() {
  // 배열
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routers>
        {/* "/"는 첫 페이지를 의미한다. */}
        <Route path="/">
          <DayList />
        </Route>

        <Route path="/day">
          <Day />
        </Route>
        </Routers>
    </div>
    </BrowserRouter>
  );
}
export default App;
