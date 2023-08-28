import styles from './Main04.module.css'
import { useState } from "react";
// import { createStore } from "redux";
// 첫글자가 대문자 => Provider는 컴포넌트!!
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

// 1. toolkit 설치 : npm install @reduxjs/toolkit
//    오류발생시 : ** npm install react-router-dom --save
//                   npm install redux react-redux

const plusSlice = createSlice({
    // 이름 = 보통 변수와 같은 이름
    name: 'plusSlice',
    // 초기값
    initialState: {value:100},
    // function reducer를 대신해 주는 부분!
    reducers: {
        // Main05에서의 if문 (action.type)이랑 비슷함!
        add: (state, action)=>{
            // state.value = state.value + action.step;
            state.value = state.value + action.payload;
        },
        sub: (state, action)=>{
            // state.value = state.value - action.step;
            state.value = state.value - action.payload;
        }
    }
});

// function reducer(currentState, action) {
//     // 2. slice를 만들자(slice란, 하나의 store 가 아니라 기능 단위의 작은 store를 뜻함)
//     // 나중에 작은 store(slice)를 합쳐서 Redux가 요구하는 큰 store로 Toolki이 알아서 만들어 준다.
//     // imort 해보자!
//     if(currentState === undefined) {
//         return {number : 5};
//     }
//     // 현재 상태 복사 => newState
//     const newState = {...currentState}
//     // action으로 인해서 정보가 변경된다.
//     if ((action.type === "PLUS")) {
//         newState.number++;
//     }else if((action.type === "MINUS")) {
//         newState.number--;
//     }
//     return newState;
// }

// createStore => 반드시 reducer를 인자로 넣어야 한다. (deprecated 되었으므로 다른 방법 시도)



// 3. store 만들기 : 필수적으로 reducer가 들어가야 한다.
const store = configureStore({
    reducer:{
        add: plusSlice.reducer
    }
});


export default function Main06() {
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

// 4. useSelector
function Left3(props) {
    const cnt = useSelector(state => state.add.value);
    return(
        <div>
            <h1>Left3</h1>
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

// 5. 이벤트 (버튼 클릭시) : const dispatch = useDispatch();
//                          dispatch(Slice이름.actions.add(2));
function Right3(props) {
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Right3</h2>
            <input type="button" value="+" onClick={()=>{
                // plusSlice에서 확인 가능
                // dispatch({type:'plusSlice', step:2});
                // dispatch({type:'plusSlice/add', step:2});
                // 인자 2는 plusSlice에서는 무조건 action.payload라고 지정된다. (step이란 말 안씀)
                dispatch(plusSlice.actions.add(2));
            }} />
            <input type="button" value="-" onClick={()=>{
                // dispatch({type:'plusSlice/sub', step:5});
                dispatch(plusSlice.actions.add(5));
            }} />
        </div>
    );
}