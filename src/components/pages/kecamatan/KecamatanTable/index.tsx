import { useGetSubdistrictQuery } from "@/api/slices/subdistrict";
import styles from "./styles.module.scss";
import Button from "@/components/common/Button";
import { PageTableProps } from "@/types/page";
import { useEffect } from "react";

const KecamatanTable: React.FC<PageTableProps> = ({
  openModal,
  setId,
  setRefetch,
}) => {
  const { data: subdistricts, isLoading, refetch } = useGetSubdistrictQuery();

  useEffect(() => {
    setRefetch({ refetch });
  }, [refetch]);

  const onEditButtonClick = (id: number | string) => {
    setId(id);
    setRefetch(refetch);
    openModal("Edit");
  };

  const onDeleteButtonClick = (id: number | string) => {
    setId(id);
    setRefetch(refetch);
    openModal("Delete");
  };

  const renderData = () => {
    if (!isLoading) {
      if (subdistricts?.length)
        return subdistricts?.map(({ id, name, regency, province }) => {
          return (
            <div key={id} className={styles.trow}>
              <div>{id}</div>
              <div>{name}</div>
              <div>{regency}</div>
              <div>{province}</div>
              <div className={styles.taction}>
                <Button onClick={() => onEditButtonClick(id)} text="Edit" />
                <Button
                  onClick={() => onDeleteButtonClick(id)}
                  text="Delete"
                  altBg={true}
                />
              </div>
            </div>
          );
        });
      else return <div className={styles.info}>No Data</div>;
    } else {
      return <div className={styles.info}>Loading...</div>;
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.table}>
        <div className={`${styles.trow} ${styles.thead}`}>
          <div>#</div>
          <div>Kecamatan</div>
          <div>Kabupaten/Kota</div>
          <div>Provinsi</div>
        </div>
        {renderData()}
      </div>
    </main>
  );
};

export default KecamatanTable;
