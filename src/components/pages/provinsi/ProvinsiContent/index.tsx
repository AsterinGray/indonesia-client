"use client";

import PageContent from "@/components/common/PageContent";
import ProvinsiHeader from "../ProvinsiHeader";
import ProvinsiTable from "../ProvinsiTable";
import ProvinsiModal from "../ProvinsiModal";

const ProvinsiContent = () => {
  return (
    <PageContent
      Header={ProvinsiHeader}
      Table={ProvinsiTable}
      Modal={ProvinsiModal}
    />
  );
};

export default ProvinsiContent;
