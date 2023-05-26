import { ModalType } from "@/types/utils";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

import styles from "./styles.module.scss";
import { QueryActionCreatorResult } from "@reduxjs/toolkit/dist/query/core/buildInitiate";

type Props = {
  Header: React.FC<any>;
  Table: React.FC<any>;
  Modal: React.FC<any>;
};

const PageContent: React.FC<Props> = ({ Header, Table, Modal }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("Add");
  const [id, setId] = useState<number>();
  const [refetchFunction, setRefetchFunction] = useState<{
    refetch: () => void;
  } | null>(null);

  const closeModal = async (needRefetch = false) => {
    setIsModalVisible(false);
    if (needRefetch && refetchFunction?.refetch) refetchFunction.refetch();
  };

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsModalVisible(true);
  };

  return (
    <>
      <section className={styles.section}>
        <Header openModal={openModal} />
        <Table
          setRefetch={setRefetchFunction}
          setId={setId}
          openModal={openModal}
        />
      </section>
      {isModalVisible && (
        <Modal id={id} closeModal={closeModal} type={modalType} />
      )}
      <ToastContainer position="bottom-right" theme="colored" />
    </>
  );
};

export default PageContent;
