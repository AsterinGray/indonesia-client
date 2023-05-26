import Button from "@/components/common/Button";
import InputGroup from "@/components/common/InputGroup";
import { ModifyFormProps } from "@/types/page";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

import styles from "./styles.module.scss";
import {
  useCreateSubdistrictMutation,
  useEditSubdistrictMutation,
  useGetSubdistrictByIdQuery,
} from "@/api/slices/subdistrict";
import { useGetProvincesQuery } from "@/api/slices/province";
import { useGetRegencyQuery } from "@/api/slices/regency";

const KecamatanFormModify: React.FC<ModifyFormProps> = ({
  type,
  id = 0,
  closeModal,
}) => {
  const [
    createSubdistrict,
    { isSuccess: isSuccessCreate, isLoading: isLoadingCreate },
  ] = useCreateSubdistrictMutation();
  const [
    editSubdistrict,
    { isSuccess: isSuccessEdit, isLoading: isLoadingEdit },
  ] = useEditSubdistrictMutation();
  const { data: subdistrict } = useGetSubdistrictByIdQuery(id);
  const { data: provinces, isSuccess: isSuccessGetProvinces } =
    useGetProvincesQuery();
  const { data: regencies, isSuccess: isSuccessGetRegencies } =
    useGetRegencyQuery();

  const isSuccess = isSuccessCreate || isSuccessEdit;
  const isLoading = isLoadingCreate || isLoadingEdit;

  const isSuccessGetOption = isSuccessGetProvinces || isSuccessGetRegencies;

  const [name, setName] = useState("");
  const [regencyId, setRegencyId] = useState(1);
  const [provinceId, setProvinceId] = useState(1);

  useEffect(() => {
    if (type == "Edit") {
      setName(subdistrict?.name || "");
    }
  }, [subdistrict, type]);

  useEffect(() => {
    if (type == "Edit") {
      const selectedProvinceId = findSelectedProvinceId();
      const selectedRegencyId = findSelectedRegencyId();
      if (selectedProvinceId) setProvinceId(selectedProvinceId);
      if (selectedRegencyId) setRegencyId(selectedRegencyId);
    } else {
      setProvinceId(provinces?.at(0)?.id || 0);
      setRegencyId(regencies?.at(0)?.id || 0);
    }
  }, [isSuccessGetOption]);

  useEffect(() => {
    if (isSuccess) {
      closeModal(true);
      toast.success(
        `Berhasil ${type === "Edit" ? "Mengubah" : "Memubuat"} Kecamatan`
      );
    }
  }, [isSuccess]);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      if (type === "Edit") editSubdistrict({ id, name, regencyId, provinceId });
      else createSubdistrict({ name, regencyId, provinceId });
    }
  };

  const validate = () => {
    let isValid = true;

    if (!name.length) {
      isValid = false;
      toast.error("Kecamatan harus diisi!");
    }

    if (!provinceId) {
      isValid = false;
      toast.error("Provinsi harus diisi!");
    }

    if (!regencyId) {
      isValid = false;
      toast.error("Kota/Kabupaten harus diisi!");
    }

    return isValid;
  };

  const findSelectedProvinceId = () => {
    const selectedProvince = provinces?.find(
      (province) => province.name === subdistrict?.province
    );

    return selectedProvince?.id || 0;
  };

  const findSelectedRegencyId = () => {
    const selectedRegency = regencies?.find(
      (regency) => regency.name === subdistrict?.regency
    );
    return selectedRegency?.id || 0;
  };

  return (
    <>
      <h1>{type} Kecamatan</h1>
      <form onSubmit={(e) => onFormSubmit(e)} className={styles.form}>
        <InputGroup
          value={name}
          setValue={setName}
          label="Kecamatan"
          type="text"
        />
        <InputGroup
          value={regencyId}
          setValue={setRegencyId}
          select={true}
          label="Kota/Kabupaten"
          defaultValue={regencyId}
        >
          {regencies?.map((regency) => (
            <option key={regency.id} value={regency.id}>
              {regency.name}
            </option>
          ))}
        </InputGroup>
        <InputGroup
          value={provinceId}
          setValue={setProvinceId}
          label="Provinsi"
          select={true}
          defaultValue={provinceId}
        >
          {provinces?.map((province) => (
            <option key={province.id} value={province.id}>
              {province.name}
            </option>
          ))}
        </InputGroup>
        <Button text="Submit" />
      </form>
    </>
  );
};

export default KecamatanFormModify;
