import { Dispatch, SetStateAction } from "react";
import { ModalType } from "./utils";

export type PageHeaderProps = {
  openModal: (type: ModalType) => void;
};

export type PageModalProps = {
  id?: number;
  closeModal: (needRefetching?: boolean) => void;
  type: ModalType;
};

export type PageTableProps = {
  openModal: (type: ModalType) => void;
  setId: Dispatch<SetStateAction<string | number>>;
  setRefetch: (refetch: any) => void;
};

export type DeleteFormProps = {
  id: number;
  closeModal: (needRefetching?: boolean) => void;
};

export type ModifyFormProps = {
  id?: number;
  type: ModalType;
  closeModal: (needRefetching?: boolean) => void;
};
