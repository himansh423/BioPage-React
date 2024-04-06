import { useContext } from "react";
import {ContextAPI} from "../store/ContextAPI";
import styles from "./Buttons.module.css";
function Buttons() {

  const {ButtonItem}=useContext(ContextAPI);
  return (
    <main className={styles.container}>
      {ButtonItem.map((item) =>  <a className={` ${item.className} ${styles.button}`} href={item.buttonLink} key={item.buttonName}>{item.buttonIcon}{item. buttonName}</a>)}
    </main>
  )
}

export default Buttons;