import {
  useCreateRegencyMutation,
  useEditRegencyMutation,
  useGetRegencyByIdQuery,
} from "@/api/slices/regency";
import Button from "@/components/common/Button";
import InputGroup from "@/components/common/InputGroup";
import { ModifyFormProps } from "@/types/page";
import { FormEvent, useEffect, useState } from "react";

import { toast } from "react-toastify";
import styles from "./styles.module.scss";
import { useGetProvincesQuery } from "@/api/slices/province";

const KotaFormModify: React.FC<ModifyFormProps> = ({
  type,
  id = 0,
  closeModal,
}) => {
  const { data: regency } = useGetRegencyByIdQuery(id);
  const { data: provinces, isSuccess: isSuccessGetProvinces } =
    useGetProvincesQuery();
  const [
    createRegency,
    { isSuccess: isSuccessCreate, isLoading: isLoadingCreate },
  ] = useCreateRegencyMutation();
  const [editRegency, { isSuccess: isSuccessEdit, isLoading: isLoadingEdit }] =
    useEditRegencyMutation();

  const isSuccess = isSuccessCreate || isSuccessEdit;
  const isLoading = isLoadingCreate || isLoadingEdit;

  const [name, setName] = useState("");
  const [provinceId, setProvinceId] = useState(0);

  useEffect(() => {
    if (type == "Edit") {
      setName(regency?.name || "");
    }
  }, [regency, type]);

  useEffect(() => {
    if (type === "Edit") {
      const selectedProvinceId = findSelectedProvinceId();
      if (selectedProvinceId) setProvinceId(selectedProvinceId);
    } else setProvinceId(provinces?.at(0)?.id || 0);
  }, [isSuccessGetProvinces]);

  useEffect(() => {
    if (isSuccess) {
      closeModal(true);
      toast.success(
        `Berhasil ${type === "Edit" ? "Mengubah" : "Membuat"} Kota/Kabupaten`
      );
    }
  }, [isSuccess]);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      if (type === "Edit") editRegency({ name, provinceId, id });
      else createRegency({ name, provinceId });
    }
  };

  const validate = () => {
    let isValid = true;

    if (!name.length) {
      isValid = false;
      toast.error("Nama harus diisi!");
    }

    if (!provinceId) {
      isValid = false;
      toast.error("Provinsi harus diisi!");
    }

    return isValid;
  };

  const findSelectedProvinceId = () => {
    const selectedProvince = provinces?.find(
      (province) => province.name === regency?.province
    );

    return selectedProvince?.id || 0;
  };

  const renderProvinceOptions = () => {
    if (provinces && provinces.length) {
      return provinces.map((province) => (
        <option key={province.id} value={province.id}>
          {province.name}
        </option>
      ));
    } else {
      return <option disabled>Tidak ada Provinsi</option>;
    }
  };

  return (
    <>
      <h1>{type} Kota/Kabupaten</h1>
      <form onSubmit={(e) => onFormSubmit(e)} className={styles.form}>
        <InputGroup
          value={name}
          setValue={setName}
          label="Kota/Kabupaten"
          type="text"
        />
        <InputGroup
          value={provinceId}
          setValue={setProvinceId}
          label="Provinsi"
          select={true}
          defaultValue={provinceId}
        >
          {renderProvinceOptions()}
        </InputGroup>
        <Button text="Submit" />
      </form>
    </>
  );
};

export default KotaFormModify;
