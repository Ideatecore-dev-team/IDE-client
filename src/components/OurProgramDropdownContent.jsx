import React from "react";
import ProgramImage1 from "../assets/images/program-image-1.png";
import ProgramImage2 from "../assets/images/program-image-2.png";
import ProgramImage3 from "../assets/images/program-image-3.png";
import ProgramImage4 from "../assets/images/program-image-4.png";
import ProgramImage5 from "../assets/images/program-image-5.png";
import { motion } from "framer-motion";

export const OurProgramDropdownContent = ({ programId }) => {
  const programDetails = {
    1: {
      image: ProgramImage1,
      name: "Democracy Affairs",
      description:
        "Menyediakan ruang kajian, penelitian, diskusi, dialog, serta kolaborasi untuk memperkuat wawasan demokrasi dan pendidikan politik.",
      caption1:
        "Democracy Affairs adalah ruang yang dirancang untuk memperkuat fondasi demokrasi melalui kajian, penelitian, diskusi, dan dialog terbuka. Program ini berkomitmen untuk meningkatkan pemahaman masyarakat terhadap prinsip-prinsip demokrasi, hak asasi manusia, dan tata kelola yang transparan. Dengan menyediakan platform kolaborasi lintas sektor, kami mendorong pertukaran ide serta wawasan yang relevan untuk menciptakan solusi inovatif dalam menghadapi tantangan politik dan sosial di Indonesia.",
      caption2:
        "Melalui Democracy Affairs, kami juga memberikan pelatihan dan pengembangan kapasitas bagi generasi muda, komunitas, dan pemimpin lokal untuk membangun kesadaran akan pentingnya partisipasi aktif dalam proses demokrasi. Program ini bertujuan menciptakan masyarakat yang lebih kritis, terinformasi, dan siap berkontribusi dalam penguatan demokrasi, baik di tingkat nasional maupun global.",
    },
    2: {
      image: ProgramImage2,
      name: "Education Affairs",
      description:
        "Memberikan akses informasi, pelatihan, dan pendidikan bagi seluruh anak bangsa di berbagai isu seperti informasi beasiswa dan workshop yang berkaitan dengan peningkatan keterampilan, wawasan hukum, keperempuanan, lingkungan, serta kesehatan. ",
      caption1:
        "Education Affairs adalah inisiatif yang bertujuan untuk memperluas akses terhadap informasi pendidikan dan peluang pembelajaran bagi pelajar di seluruh Indonesia. Program ini dirancang untuk memfasilitasi pelatihan dan pembinaan yang relevan dengan kebutuhan masa depan, sehingga mampu mencetak generasi muda yang kompeten dan siap bersaing di era globalisasi. Melalui pendekatan yang inklusif, kami menciptakan ruang yang memungkinkan pelajar dari berbagai latar belakang untuk berbagi pengalaman, bertukar ide, dan mengembangkan potensi diri.",
      caption2:
        "Selain itu, Education Affairs juga membuka ruang dialog dan kolaborasi antar pelajar di tingkat nasional maupun global. Dengan membangun koneksi lintas budaya dan negara, kami membantu menciptakan jaringan pembelajaran yang kaya akan perspektif dan wawasan baru. Program ini tidak hanya membentuk individu yang berprestasi, tetapi juga komunitas yang solid dan berorientasi pada perubahan positif dalam dunia pendidikan.",
    },
    3: {
      image: ProgramImage3,
      name: "Social Affairs",
      description:
        "Menjaga tradisi dan budaya serta mempromosikan nilai-nilai keindonesiaan berdasarkan semangat Pancasila yang penuh cinta kasih, persatuan dan gotong-royong.",
      caption1:
        "Social Affairs berfokus pada upaya menjaga budaya, memperkuat solidaritas sosial, dan menciptakan harmoni di tengah keberagaman masyarakat Indonesia. Program ini menghadirkan ruang diskusi, penelitian, serta kolaborasi untuk membangun kesadaran akan isu-isu sosial yang berdampak pada komunitas lokal maupun nasional. Dengan pendekatan berbasis empati dan inklusivitas, kami mendorong solusi inovatif dalam mengatasi kesenjangan sosial serta memperkuat rasa kebersamaan di masyarakat.",
      caption2:
        "Selain itu, Social Affairs juga aktif dalam pemberdayaan komunitas melalui program edukasi, advokasi sosial, dan kampanye kesadaran. Kami bekerja sama dengan berbagai pemangku kepentingan untuk menciptakan perubahan positif, baik dalam aspek kesejahteraan sosial, keberagaman budaya, maupun perlindungan terhadap kelompok rentan.",
    },
    4: {
      image: ProgramImage4,
      name: "Entrepreneurship Affairs",
      description:
        "Menghubungkan wirausahawan muda di berbagai sektor dan mendukung berbagai inovasi ekonomi kreatif UMKM Lokal serta mempromosikannya di panggung global.",
      caption1:
        "Kami mendorong pertumbuhan ekosistem wirausaha yang inklusif dan berkelanjutan melalui pelatihan kewirausahaan dan pendampingan bisnis. Kami membantu UMKM dan startup mengakses jaringan pemodal serta meningkatkan kapasitas bisnis mereka.",
      caption2:
        "Kami juga menyelenggarakan kompetisi dan pameran bisnis untuk mempromosikan produk lokal dan mendorong inovasi. Dengan program ini, kami bertujuan untuk menciptakan lapangan kerja dan meningkatkan perekonomian masyarakat.",
    },
    5: {
      image: ProgramImage5,
      name: "Media, Art, And Creative Affairs",
      description:
        "Melahirkan berbagai inovasi baru dalam rangka menciptakan masa depan anak bangsa yang kreatif, adaptif, inklusif, dan berdaya saing global.",
      caption1:
        "Kami memajukan industri kreatif Indonesia dengan mendukung seniman, kreator, dan pelaku media melalui workshop, festival, dan pameran seni. Kami memberikan platform bagi mereka untuk menampilkan karya dan mengembangkan potensi kreatif.",
      caption2:
        "Selain itu, kami mengembangkan platform digital untuk mendistribusikan konten kreatif serta bekerja sama dengan media untuk meningkatkan visibilitas industri kreatif Indonesia di kancah global. Dengan ini, kami berharap dapat memperkuat identitas budaya dan ekonomi kreatif Indonesia.",
    },
  };

  const { image, name, description, caption1, caption2 } = programDetails[
    programId
  ] || {
    image: undefined,
    name: "Unknown Program",
    description: "Data tidak tersedia untuk program ini.",
    caption1: "lorem ipsum",
    caption2: "dolor sit ammet",
  };

  return (
    <div className="program-content py-12 flex flex-col items-start self-stretch border-t-neutral-3 gap-[34px] lg:gap-[38px] lg:self-stretch ">
      <motion.div
        key={programId}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
      <div className="program-header xs:gap-[34px] flex flex-col lg:flex-row-reverse items-start lg:self-stretch lg:justify-between">
        <img
          src={image}
          className="w-full lg:w-[750px] lg:h-[250px] h-[127.333px]"
          alt="program-banner"
        />
        <div className="program-header-content flex flex-col items-start gap-4 self-stretch lg:w-[440px]">
          <p className="font-bold text-sm text-black">PROGRAM</p>
          <div className="program-heading-desc flex flex-col gap-3 items-start self-stretch ">
            <h2 className="text-black text-2xl lg:text-[32px] font-bold">
              {name}
            </h2>
            <p className="text-base text-neutral-2 text-justify">
              {description}
            </p>
          </div>
        </div>
      </div>
      <p className="text-base text-neutral-2 text-justify pt-6">
        {caption1}
        <br />
        <br />
        {caption2}
      </p>
      </motion.div>
    </div>
    
  );
};
