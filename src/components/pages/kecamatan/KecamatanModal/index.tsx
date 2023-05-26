import PageModal from "@/components/common/PageModal";
import { PageModalProps } from "@/types/page";
import KecamatanFormDelete from "../KecamatanForm/KecamatanFormDelete";
import KecamatanFormModify from "../KecamatanForm/KecamatanFormModify";

const KecamatanModal: React.FC<PageModalProps> = ({ closeModal, type, id }) => {
  return (
    <PageModal
      DeleteForm={KecamatanFormDelete}
      ModifyForm={KecamatanFormModify}
      closeModal={closeModal}
      type={type}
      id={id}
    />
  );
};

export default KecamatanModal;
