import PageHeader from "@/components/common/PageHeader";
import { ModalType } from "@/types/utils";

type Props = {
  openModal: (type: ModalType) => void;
};

const ProvinsiHeader: React.FC<Props> = ({ openModal }) => {
  return <PageHeader openModal={openModal} text="Provinsi" />;
};

export default ProvinsiHeader;
