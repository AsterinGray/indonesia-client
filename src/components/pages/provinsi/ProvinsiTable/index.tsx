import Button from "@/components/common/Button";

import styles from "./styles.module.scss";
import { PageTableProps } from "@/types/page";
import { useGetProvincesQuery } from "@/api/slices/province";
import { useEffect } from "react";

const ProvinsiTable: React.FC<PageTableProps> = ({
  openModal,
  setId,
  setRefetch,
}) => {
  const { data: provinces, isLoading, refetch } = useGetProvincesQuery();

  useEffect(() => {
    setRefetch({ refetch });
  }, [refetch]);

  const onEditButtonClick = async (id: number | string) => {
    setId(id);
    openModal("Edit");
  };

  const onDeleteButtonClick = async (id: number | string) => {
    setId(id);
    openModal("Delete");
  };

  const renderData = () => {
    if (!isLoading) {
      if (provinces?.length) {
        return provinces?.map(({ id, name }) => {
          return (
            <div key={id} className={styles.trow}>
              <div>{id}</div>
              <div>{name}</div>
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
      } else return <div className={styles.info}>No Data</div>;
    } else {
      return <div className={styles.info}>Loading...</div>;
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.table}>
        <div className={`${styles.trow} ${styles.thead}`}>
          <div>#</div>
          <div>Provinsi</div>
        </div>
        {renderData()}
      </div>
    </main>
  );
};

export default ProvinsiTable;
