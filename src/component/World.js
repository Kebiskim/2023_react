// 각 컴포넌트가 사용할 css를 만들어라
import styles from "./World.module.css"
export default function World() {
    return (
        <div>
            <h2 className={styles.fg}>World</h2>
            <div className={styles.box}>박스!</div>
        </div>

        // <>
        //     <h2>World</h2>
        // </>
        // 컴포넌트는 태그가 하나만 가능 => 두개 있으면 오류 발생!
        // div 혹은 빈태그로 감싸줘야 한다!
        // <div className=""></div>

    );
}