import PageModal from "@/components/common/PageModal";
import { PageModalProps } from "@/types/page";

import ProvinsiFormDelete from "../ProvinsiForm/ProvinsiFormDelete";
import ProvinsiFormModify from "../ProvinsiForm/ProvinsiFormModify";

const ProvinsiModal: React.FC<PageModalProps> = ({ closeModal, type, id }) => {
  return (
    <PageModal
      DeleteForm={ProvinsiFormDelete}
      ModifyForm={ProvinsiFormModify}
      closeModal={closeModal}
      type={type}
      id={id}
    />
  );
};

export default ProvinsiModal;
