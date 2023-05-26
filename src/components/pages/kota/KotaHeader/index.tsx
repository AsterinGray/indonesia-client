import PageHeader from "@/components/common/PageHeader";
import { PageHeaderProps } from "@/types/page";

const KotaHeader: React.FC<PageHeaderProps> = ({ openModal }) => (
  <PageHeader openModal={openModal} text="Kota/Kabupaten" />
);

export default KotaHeader;
