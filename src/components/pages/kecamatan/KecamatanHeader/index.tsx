import PageHeader from "@/components/common/PageHeader";
import { PageHeaderProps } from "@/types/page";

const KecamatanHeader: React.FC<PageHeaderProps> = ({ openModal }) => {
  return <PageHeader openModal={openModal} text="Kecamatan" />;
};

export default KecamatanHeader;
