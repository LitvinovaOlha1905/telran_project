import React from 'react'
import styles from './ModalNavMenu.module.css'
import { ReactComponent as CloseDay } from "../../images/Icons/closeDay.svg";

export default function ModalNavMenu() {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <CloseDay />
      </div>
    </div>
  );
}
