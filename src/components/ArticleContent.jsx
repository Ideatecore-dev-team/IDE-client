// eslint-disable-next-line no-unused-vars
import React from "react";
import ArticleImage from "../assets/images/article-carousel-1.png";
import { MdPerson } from "react-icons/md";

export const ArticleContent = () => {
  return (
    <div className="article-content flex flex-col items-start gap-6 lg:gap-12 self-stretch">
      <img
        src={ArticleImage}
        alt="article images"
        className="w-full h-[215.031px] lg:h-[689px]"
      />
      <div className="article-author flex flex-col lg:flex-row lg:justify-between lg:items-start lg:self-stretch gap-6 lg:gap-0">
        <div className="author flex flex-col items-start gap-3">
          <p className="text-base">Author</p>
          <div className="icon-detail flex items-center gap-3">
            <div className="icon text-white flex size-9 p-3 justify-center items-center rounded-lg bg-neutral-3">
              <MdPerson size={24} />
            </div>
            <div className="author-date flex flex-col items-start gap-1">
              <p className="text-bold text-base">Andika Putra</p>
              <p className="text-sm text-neutral-3">5 Desember 2024</p>
            </div>
          </div>
        </div>
        <div className="article-content lg:w-[600px] flex flex-col items-start gap-8 self-stretch">
          <p className="text-base text-neutral-2">
            Di era digital yang serba terbuka, generasi muda Indonesia muncul
            sebagai pilar utama dalam memperkuat transparansi dan akuntabilitas
            dalam demokrasi. Dengan semangat inovasi dan keberanian untuk
            berbicara, mereka menciptakan ruang-ruang baru yang memungkinkan
            masyarakat untuk lebih terlibat dalam pengambilan keputusan publik.
          </p>
          <p className="text-base text-neutral-2">
            <span className="text-lg font-bold mb-3 text-black block">
              Generasi Muda & Teknologi Digital
            </span>
            Salah satu inisiatif yang patut diperhatikan adalah penggunaan
            teknologi digital oleh generasi muda untuk mengawasi kebijakan
            pemerintah dan menyuarakan aspirasi mereka. Platform media sosial
            menjadi alat yang kuat untuk menyampaikan pandangan, memobilisasi
            massa, dan membangun kesadaran akan isu-isu penting seperti hak
            asasi manusia, korupsi, dan keadilan sosial. IDE, sebagai organisasi
            non-profit, mengambil peran aktif dalam mendukung gerakan ini dengan
            mengadakan pelatihan pendidikan politik, lokakarya transparansi, dan
            diskusi publik yang melibatkan berbagai pihak.
          </p>
          <p className="text-base text-neutral-2">
            <span className="text-lg font-bold mb-3 text-black block">
              Awal Dari Perubahan
            </span>
            Melalui program-program tersebut, IDE tidak hanya membekali generasi
            muda dengan pengetahuan tentang sistem politik, tetapi juga
            mengajarkan mereka cara berkolaborasi secara efektif dengan
            komunitas dan pemimpin lokal. Hasilnya, banyak pemuda yang kini
            lebih percaya diri untuk menjadi bagian dari perubahan, baik melalui
            keterlibatan langsung dalam pemerintahan maupun dengan menjadi
            pengamat yang kritis.
          </p>
          <p className="text-base text-neutral-2">
            Tidak hanya itu, kolaborasi lintas generasi juga menjadi salah satu
            kunci keberhasilan. Pemimpin senior memberikan bimbingan dan
            pengalaman mereka, sementara pemuda membawa perspektif segar yang
            mampu menjawab tantangan zaman. Pendekatan ini menciptakan sinergi
            yang menghasilkan solusi inovatif untuk memperkuat demokrasi
            Indonesia.
          </p>
          <p className="text-base text-neutral-2">
            Dengan terus mendukung transparansi dan partisipasi aktif generasi
            muda, masa depan demokrasi Indonesia tampak semakin cerah. Mereka
            tidak hanya menjadi penerus bangsa, tetapi juga penggerak utama
            dalam menciptakan sistem yang lebih adil, inklusif, dan responsif
            terhadap kebutuhan masyarakat. IDE percaya bahwa dengan kolaborasi
            dan komitmen yang kuat, Indonesia dapat menjadi contoh demokrasi
            yang menginspirasi dunia.
          </p>
        </div>
        <div className="author flex flex-col items-start gap-3 xs:hidden w-[157.594px]"></div>
      </div>
    </div>
  );
};
