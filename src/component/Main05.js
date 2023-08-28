import styles from './Main04.module.css'
import { useState } from "react";
import { createStore } from "redux";
// 첫글자가 대문자 => Provider는 컴포넌트!!
import { Provider, useSelector, useDispatch } from 'react-redux';

// 1. props에 대한 정보를 모두 삭제하자.a
// 2. redux를 설치하자
// ** npm install react-redux

// redux => https://react-redux.js.org/introduction/getting-started
// redux toolkit => https://react-  redux.js.org/tutorials/quick-start

// ** npm install react-router-dom --save
// ** npm install redux react-redux
// 3. 임포트하기 import { createStore } from "react-redux";
// 4. store 생성
// 5. store에 들어갈 reducer 함수 만들기 (현재 state 상태와 action을 인자로 받는다.) 만들기
// 6. react-redux를 사용하기 위해서 3가지를 import 해야 함
//    import { Provider, useSelector, useDispatch } from 'react-redux';
//    Provider => 사용할 범위 지정
//    useSelector => 어떤 state 값을 사용할지를 선택
//    useDispatch => state 값 변경

function reducer(currentState, action) {
    // const[number, setNumber] = useState(1) 과 같은 의미
    if(currentState === undefined) {
        return {number : 5};
    }
    // 현재 상태 복사 => newState
    const newState = {...currentState}
    // action으로 인해서 정보가 변경된다.
    if ((action.type === "PLUS")) {
        newState.number++;
    }else if((action.type === "MINUS")) {
        newState.number--;
    }
    return newState;
}

// createStore => 반드시 reducer를 인자로 넣어야 한다.
const store = createStore(reducer);

export default function Main05() {
    const[number, setNumber] = useState(1);
    return(
        <div id={styles.container}>
            <h1>Root : {number}</h1>
            <div id={styles.grid}>
                {/* Provider => 사용할 범위에 지정해준다. */}
                
                <Provider store={store}>
                    <Left1 />
                    <Right1 />
                </Provider>
            </div>
        </div>
    );
}

function Left1(props) {
    return(
        <div>
            <h1>Left1</h1>
            <Left2 />
        </div>
    );
}

function Left2(props) {
    return(
        <div>
            <h1>Left2</h1>
            <Left3 />
        </div>
    );
}

function Left3(props) {
    // function f(state) {
    //     return state.number;
    // }
    // 어떤 state 값을 사용할지를 선택, 함수를 인자로 받는다.
    // const number = useSelector(f);

    const number = useSelector((state)=>state.number);
    return(
        <div>
            <h1>Left3 : {number}</h1>
        </div>
    );
}
// 10개를 하려면 이런 식으로 계층 관계를 10층으로 만들어야 함 => 그래서 redux가 나옴

function Right1(props) {
    return(
        <div>
            <h1>Right1</h1>
            <Right2 />
        </div>
    );
}

function Right2(props) {
    return(
        <div>
            <h2>Right2</h2>
            <Right3 />
        </div>
    );
}

function Right3(props) {
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Right3</h2>
            {/* 버튼을 눌렀을때 reducer의 state 값이 변경된다. => useDispatch() */}
            <input type="button" value="+" onClick={()=>{
                // 실행할 때의 약속어를 넣어준다.
                // type이 PLUS이면 클릭된 (선택된 것이다) 라는 뜻.
                // 약속어 확인은 reducer if((action.type === 'PLUS')){
                dispatch({type:'PLUS'});
            }} />
            <input type="button" value="-" onClick={()=>{
                // 실행할 때의 약속어를 넣어준다.
                // 약속어 확인은 reducer if((action.type === 'MINUS')){
                dispatch({type:'MINUS'});
            }} />
        </div>
    );
}