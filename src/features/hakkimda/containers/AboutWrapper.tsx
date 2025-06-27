import PageHeader from "@/components/PageHeader";
import AboutMe from "../components/AboutMe";
import AboutServices from "../components/AboutServices";

export default function AboutWrapper() {
  return (
    <div className="min-h-[100dvh]">
      <PageHeader
        title="Hakkımda"
        description="Gayrimenkul Hukuku ve Miras Hukuku alanlarında karşılaştığınız her türlü hukuki soruna çözüm üretiyor, sürecin her aşamasında yanınızda oluyoruz."
      />
      <AboutMe />
      <AboutServices />
    </div>
  );
}
