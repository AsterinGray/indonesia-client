import React, { useEffect } from "react";

import { DeleteFormProps } from "@/types/page";
import DeleteForm from "@/components/common/FormDelete";
import { useDeleteProvinceMutation } from "@/api/slices/province";
import { toast } from "react-toastify";

const ProvinsiFormDelete: React.FC<DeleteFormProps> = ({ id, closeModal }) => {
  const [deleteProvince, { isSuccess }] = useDeleteProvinceMutation();

  const submitForm = () => {
    deleteProvince(id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Sukses Menghapus Provinsi`);
      closeModal(true);
    }
  }, [isSuccess]);

  return (
    <DeleteForm
      id={id}
      text="Provinsi"
      submitForm={submitForm}
      closeModal={closeModal}
    />
  );
};

export default ProvinsiFormDelete;
