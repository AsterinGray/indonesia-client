import { DeleteFormProps } from "@/types/page";
import { toast } from "react-toastify";

import DeleteForm from "@/components/common/FormDelete";
import { useDeleteSubdistrictMutation } from "@/api/slices/subdistrict";
import { useEffect } from "react";

const KecamatanFormDelete: React.FC<DeleteFormProps> = ({ id, closeModal }) => {
  const [deleteSubdistrict, { isSuccess }] = useDeleteSubdistrictMutation();

  const submitForm = () => {
    deleteSubdistrict(id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Sukses Menghapus Kecamatan");
      closeModal(true);
    }
  });

  return (
    <DeleteForm
      id={id}
      text="Kecamatan"
      closeModal={closeModal}
      submitForm={submitForm}
    />
  );
};

export default KecamatanFormDelete;
