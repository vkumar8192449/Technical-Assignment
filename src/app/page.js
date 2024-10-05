import { NavbarMinimal } from "../components/NavbarMinimal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles["main-box"]}>
        <NavbarMinimal />
        <div>RIGHT</div>
      </div>
    </>
  );
}
