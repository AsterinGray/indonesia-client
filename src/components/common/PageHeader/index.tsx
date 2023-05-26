import { ModalType } from "@/types/utils";

import styles from "./styles.module.scss";

import Button from "../Button";

type Props = {
  openModal: (type: ModalType) => void;
  text: string;
};

const PageHeader: React.FC<Props> = ({ openModal, text }) => {
  const addButtonClick = () => {
    openModal("Add");
  };

  return (
    <div className={styles.header}>
      <h1>Manage {text}</h1>
      <Button text="Add" onClick={addButtonClick} />
    </div>
  );
};

export default PageHeader;
