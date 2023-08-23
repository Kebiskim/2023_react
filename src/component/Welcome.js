// 람다식 이용해 보자!
// () 앞에 function 빼버리면 됨!!
import styles from "./World.module.css"

const Welcome = () => {
    return(
        <>
        <h2 className={styles.fg}>Welcome</h2>
        <div className={styles.box}></div>
        </>
    );
}

export default Welcome;