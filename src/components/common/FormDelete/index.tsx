import { DeleteFormProps } from "@/types/page";

import styles from "./styles.module.scss";
import Button from "../Button";

type Props = {
  submitForm: () => void;
  text: string;
};

const FormDelete: React.FC<DeleteFormProps & Props> = ({
  text,
  closeModal,
  submitForm,
}) => {
  return (
    <>
      <h1>Delete {text}</h1>
      <p>Apakah Anda ingin menghapus {text} ini?</p>
      <div className={styles.action}>
        <Button text="No" altBg={true} onClick={closeModal} />
        <Button text="Yes" onClick={submitForm} />
      </div>
    </>
  );
};

export default FormDelete;
