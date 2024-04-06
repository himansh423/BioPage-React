import styles from "./ProfilePhoto.module.css";
import img from "../images/DP.jpg";
function ProfilePhoto() {
  return (
    <>
    <div className={styles.container}>
    <img src={img} className={styles.img} alt="hvuc" />
    </div>
    </>
  )
}

export default ProfilePhoto;