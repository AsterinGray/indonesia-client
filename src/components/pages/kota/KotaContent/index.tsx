"use client";

import PageContent from "@/components/common/PageContent";

import KotaHeader from "../KotaHeader";
import KotaTable from "../KotaTable";
import KotaModal from "../KotaModal";

const KotaContent = () => (
  <PageContent Header={KotaHeader} Table={KotaTable} Modal={KotaModal} />
);

export default KotaContent;
