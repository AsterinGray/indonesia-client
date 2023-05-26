import Layout from "@/components/common/Layout";
import KecamatanContent from "@/components/pages/kecamatan/KecamatanContent";

export const metadata = {
  title: "Indonesia | Kecamatan",
};

const Kecamatan = () => {
  return (
    <Layout>
      <KecamatanContent />
    </Layout>
  );
};

export default Kecamatan;
