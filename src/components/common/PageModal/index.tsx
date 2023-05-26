import { ModalType } from "@/types/utils";
import Modal from "../Modal";

type Props = {
  closeModal: () => void;
  type: ModalType;
  id?: number | string;
  ModifyForm: React.FC<any>;
  DeleteForm: React.FC<any>;
};

const PageModal: React.FC<Props> = ({
  closeModal,
  type,
  id,
  ModifyForm,
  DeleteForm,
}) => {
  const renderProvinsiModal = () =>
    type === "Delete" ? (
      <DeleteForm id={id} closeModal={closeModal} />
    ) : (
      <ModifyForm id={id} type={type} closeModal={closeModal} />
    );

  return <Modal closeModal={closeModal}>{type && renderProvinsiModal()}</Modal>;
};

export default PageModal;
