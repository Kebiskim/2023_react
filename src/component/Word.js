import { useState } from "react";

// 객체이기 때문에 props의 사용되는 이름 그대로 사용
export default function Word({word}) {
    // 보였다가 안보였다가 하기 위해서 
    // useState 사용
    // isShow 상태값을 만들어주고, props로 word를 받아와
    // isShow가 true일때만 보이게 하자.

    // setter 이름 정확하게 써줘야 한다!!
    const [isShow, setIsShow] = useState(false);
    function toggleShow() {
        setIsShow(! isShow);
    }
    return(
        <tr>
            <td><input type="checkbox" /></td>
            <td>{word.eng}</td>
            {/* JS에서는 숫자가 0이면 false, 1 이상이면 다 true!! */}
            {/* 둘다 true일때만 보인다. */}
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow} style={{marginLEft: "20px"}}>뜻 {isShow ? '숨기기' : '보기'}</button>
                <button style={{color: "red"}}> 삭제 </button>
            </td>
        </tr>
    );
}