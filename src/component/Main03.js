import { useState, useReducer } from "react";

export default function Main03() {
    const [count, setCount] = useState(0);
    function down() {
        setCount(count-1);
    }
    function reset() {
        setCount(0);
    }
    function up() {
        setCount(count+1);
    }
    // useState
    // const [cnt, setCnt] = useState(0);
    
    // useReducer
    // 일처리하는 함수
    function cntReducer(oldCnt, action) {
        if(action === 'DOWN'){
            return oldCnt - 1;
        }else if(action === 'RESET'){
            return 0;
        }else if(action === "UP"){
            return oldCnt + 1;
        }else if(action.type === "DOWN3"){
            return oldCnt - action.number;
        }else if(action.type === "RESET3"){
            return 0;
        }else if(action.type === "UP3"){
            return oldCnt + action.number;
        }
    }

    const [cnt, cntDispatch] = useReducer(cntReducer, 0);

    function down2() {
        cntDispatch("DOWN");
    }
    function reset2() {
        cntDispatch("RESET");
    }
    function up2() {
        cntDispatch("UP");
    }

    // Reducer는 두개 안 만들고, 한개 만들어서 다 쓰는게 보통!!
    // function numReducer(oldNum, action) {
    //     if(action.type === 'DOWN'){
    //         return oldNum - action.number;
    //     }else if(action.type === 'RESET'){
    //         return 0;
    //     }else if(action.type === "UP"){
    //         return oldNum + action.number;
    //     }
    // }

    // 하나씩 할때는 useState가 편함, 변수 여러개 쓸때는 일일이 쓰면 헷갈리니까 Reducer 쓰자!
    const[number, setNumber] = useState(1);
    // const [num, numDispatch] = useReducer(numReducer, 0);

    // 아래처럼 변경해 보자.
    const [num, numDispatch] = useReducer(cntReducer, 0);
    

    function down3() {
        // 여러 정보를 보내기 위해서 객체로 만들자.
        numDispatch({type:"DOWN3", number:number});
    }
    function reset3() {
        numDispatch({type:"RESET3", number:number});
    }
    function up3() {
        numDispatch({type:"UP3", number:number});
    }
    function ChangeNumber(e) {
        setNumber(Number(e.target.value));
    }

    return(
        <div>
            <div>
                <h2>useState</h2>
                <input type="button" value="-" onClick={down} />
                <input type="button" value="초기화" onClick={reset} />
                <input type="button" value="+" onClick={up} />
            </div>
            {/* 해당 count는 버튼을 눌렀을 때 변경돼야 하므로 useState 사용 */}
            <div><h2 style={{margin:"20px"}}>{count}</h2></div>
            {/* 디브 무한증식 디브디브 */}
            <div>
                <h2>useReducer</h2>
                <input type="button" value="-" onClick={down2} />
                <input type="button" value="초기화" onClick={reset2} />
                <input type="button" value="+" onClick={up2} />
            </div>
            <div><h2 style={{margin:"20px"}}>{cnt}</h2></div>
            <div>
                <h2>useReducer2</h2>
                <input type="button" value="-" onClick={down3} />
                <input type="button" value="초기화" onClick={reset3} />
                <input type="button" value="+" onClick={up3} />
                <input type="button" value="number" onClick={ChangeNumber} />
            </div>
            <div><h2 style={{margin:"20px"}}>{num}</h2></div>
        </div>
    );
}