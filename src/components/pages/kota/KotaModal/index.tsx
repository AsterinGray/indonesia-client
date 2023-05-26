import PageModal from "@/components/common/PageModal";
import KotaFormDelete from "../KotaForm/KotaFormDelete";
import KotaFormModify from "../KotaForm/KotaFormModify";
import { PageModalProps } from "@/types/page";

const KotaModal: React.FC<PageModalProps> = ({ closeModal, type, id }) => {
  return (
    <PageModal
      DeleteForm={KotaFormDelete}
      ModifyForm={KotaFormModify}
      closeModal={closeModal}
      type={type}
      id={id}
    />
  );
};

export default KotaModal;
