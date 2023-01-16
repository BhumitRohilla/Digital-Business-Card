import React from "react";
import styles from "./bodySection.module.css";
export default function CompleteBody() {
  return (
    <div style={{"width":"317px"}}>
        <div className={styles.imgDiv} >
      </div>
      <div className={styles.subBody}>
        <h2 style={{ fontSize: "24px" }}>Laura Smith</h2>
        <h3 style={{ fontSize: "12.8px" }}>Fronted Developer</h3>
        <h4 style={{ fontSize: "10.24px" }}>laurasmit.website</h4>

        <div id={styles.buttons}>
          <button id={styles.eButtons}>Email</button>
          <button id={styles.lButtons}>LinkedIn</button>
        </div>
        <div id={styles.disp}>
          <div>
            <h4 className={styles.dispHead}>About</h4>
            <p className={styles.dispCont}>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div>
            <h4 className={styles.dispHead}>Interests</h4>
            <p className={styles.dispCont}>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
