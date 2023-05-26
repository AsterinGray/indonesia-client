"use client";

import PageContent from "@/components/common/PageContent";

import KecamatanHeader from "../KecamatanHeader";
import KecamatanTable from "../KecamatanTable";
import KecamatanModal from "../KecamatanModal";

const KecamatanContent = () => (
  <PageContent
    Header={KecamatanHeader}
    Table={KecamatanTable}
    Modal={KecamatanModal}
  />
);

export default KecamatanContent;
