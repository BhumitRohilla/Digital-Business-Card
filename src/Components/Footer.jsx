import React from 'react';
import styles from './footerstyle.module.css'
export default function Footer(){
    return(
        <div className={styles.mainBody}>
            <div className={styles.subBody}>
                <img src='Twitter Icon.png' alt='Twitter'/>
                <img src='Facebook Icon.png' alt='Facbook'/>
                <img src='Instagram Icon.png' alt='Insta'/>
                <img src="GitHub Icon.png" alt='GitHub'/>
            </div>
        </div>
    )
}