import PageHeader from "@/components/PageHeader";
import AboutMe from "../components/AboutMe";
import AboutServices from "../components/AboutServices";

export default function AboutWrapper() {
  return (
    <>
      <PageHeader
        title="Hakkımda"
        description="Gayrimenkul Hukuku ve Miras Huku"
      />
      <AboutMe />
      <AboutServices />
    </>
  );
}
