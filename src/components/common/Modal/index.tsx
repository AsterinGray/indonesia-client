"use client";

import { ReactNode } from "react";

import styles from "./styles.module.scss";
import Image from "next/image";

type Props = {
  children: ReactNode;
  closeModal: () => void;
};

const Modal: React.FC<Props> = ({ children, closeModal }) => {
  return (
    <>
      <div onClick={closeModal} className={styles.overlay}>
        <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
          <div className={styles.button}>
            <Image
              onClick={closeModal}
              src={"/close.svg"}
              width={20}
              height={20}
              alt="close icon"
            />
          </div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Modal;
