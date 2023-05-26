import { useDeleteRegencyMutation } from "@/api/slices/regency";
import FormDelete from "@/components/common/FormDelete";
import { DeleteFormProps } from "@/types/page";
import { useEffect } from "react";
import { toast } from "react-toastify";

const KotaFormDelete: React.FC<DeleteFormProps> = ({ id, closeModal }) => {
  const [deleteRegency, { isSuccess }] = useDeleteRegencyMutation();

  const submitForm = () => {
    deleteRegency(id);
  };

  useEffect(() => {
    if (isSuccess) {
      closeModal(true);
      toast.success("Sukses Menghapus Kota/Kabupaten");
    }
  });

  return (
    <FormDelete
      id={id}
      text="Kota/Kabupaten"
      closeModal={closeModal}
      submitForm={submitForm}
    />
  );
};

export default KotaFormDelete;
