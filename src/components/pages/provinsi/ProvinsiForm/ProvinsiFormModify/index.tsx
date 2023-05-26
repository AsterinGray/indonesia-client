import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

import styles from "./styles.module.scss";
import {
  useCreateProvinceMutation,
  useEditProvinceMutation,
  useGetProvinceByIdQuery,
} from "@/api/slices/province";
import Button from "@/components/common/Button";
import InputGroup from "@/components/common/InputGroup";
import { ModifyFormProps } from "@/types/page";

const ProvinsiFormModify: React.FC<ModifyFormProps> = ({
  type,
  id = 0,
  closeModal,
}) => {
  const { data: province } = useGetProvinceByIdQuery(id);
  const [
    createProvince,
    { isSuccess: isSuccessCreate, isLoading: isLoadingCreate },
  ] = useCreateProvinceMutation();
  const [
    updateProvince,
    { isSuccess: isSuccessUpdate, isLoading: isLoadingUpdate },
  ] = useEditProvinceMutation();

  const [name, setName] = useState("");

  const isLoading = isLoadingCreate || isLoadingUpdate;
  const isSuccess = isSuccessCreate || isSuccessUpdate;

  useEffect(() => {
    if (type == "Edit") {
      setName(province?.name || "");
    }
  }, [province, type]);

  useEffect(() => {
    if (isSuccess) {
      closeModal(true);
      toast.success(
        `Suskses ${type === "Edit" ? "Mengubah" : "Menambahkan"} Provinsi`
      );
    }
  }, [closeModal, isSuccess, type]);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      if (type === "Edit") updateProvince({ name, id });
      else createProvince({ name });
    }
  };

  const validate = (): boolean => {
    let isValid = true;

    if (!name.length) {
      isValid = false;
      toast.error("Nama harus diisi!");
    }

    return isValid;
  };

  return (
    <>
      <h1>{type} Provinsi</h1>
      <form className={styles.form} onSubmit={(e) => onFormSubmit(e)}>
        <InputGroup
          value={name}
          setValue={setName}
          label="Provinsi"
          type="text"
        />
        <Button text="Submit" />
      </form>
    </>
  );
};

export default ProvinsiFormModify;
