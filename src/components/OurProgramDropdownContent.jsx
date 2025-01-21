import React from "react";
import ProgramImage from "../assets/images/program-image-1.png";

export const OurProgramDropdownContent = ({ programId }) => {
  const programDetails = {
    1: {
      name: "Democracy Affairs",
      description:
        "Menyediakan ruang kajian, penelitian, diskusi, dialog, serta kolaborasi untuk memperkuat wawasan demokrasi dan pendidikan politik.",
    },
    2: {
      name: "Education Affairs",
      description:
        "Memberikan akses informasi, pelatihan, dan pendidikan bagi seluruh anak bangsa di berbagai isu seperti informasi beasiswa dan workshop yang berkaitan dengan peningkatan keterampilan, wawasan hukum, keperempuanan, lingkungan, serta kesehatan. ",
    },
    3: {
      name: "Social Affairs",
      description:
        "Menjaga tradisi dan budaya serta mempromosikan nilai-nilai keindonesiaan berdasarkan semangat Pancasila yang penuh cinta kasih, persatuan dan gotong-royong.",
    },
    4: {
      name: "Entrepreneurship Affairs",
      description:
        "Menghubungkan wirausahawan muda di berbagai sektor dan mendukung berbagai inovasi ekonomi kreatif UMKM Lokal serta mempromosikannya di panggung global.",
    },
    5: {
      name: "Media, Art, And Creative Affairs",
      description:
        "Melahirkan berbagai inovasi baru dalam rangka menciptakan masa depan anak bangsa yang kreatif, adaptif, inklusif, dan berdaya saing global.",
    },
  };

  const { name, description } = programDetails[programId] || {
    name: "Unknown Program",
    description: "Data tidak tersedia untuk program ini.",
  };

  return (
    <div className="program-content py-12 flex flex-col items-start self-stretch border-b-[1px] border-neutral-3 gap-[34px] lg:gap-[38px] lg:self-stretch ">
      <div className="program-header xs:gap-[34px] flex flex-col lg:flex-row-reverse items-start lg:self-stretch lg:justify-between">
        <img
          src={ProgramImage}
          className="w-full lg:w-[750px] lg:h-[250px] h-[127.333px]"
          alt="program-banner"
        />
        <div className="program-header-content flex flex-col items-start gap-4 self-stretch lg:w-[440px]">
          <p className="font-bold text-sm text-black">PROGRAM</p>
          <div className="program-heading-desc flex flex-col gap-3 items-start self-stretch ">
            <h2 className="text-black text-2xl lg:text-[32px] font-bold">
              {name}
            </h2>
            <p className="text-base text-neutral-2">{description}</p>
          </div>
        </div>
      </div>
      <p className="text-base text-neutral-2 text-justify">
        Democracy Affairs adalah ruang yang dirancang untuk memperkuat fondasi
        demokrasi melalui kajian, penelitian, diskusi, dan dialog terbuka.
        Program ini berkomitmen untuk meningkatkan pemahaman masyarakat terhadap
        prinsip-prinsip demokrasi, hak asasi manusia, dan tata kelola yang
        transparan. Dengan menyediakan platform kolaborasi lintas sektor, kami
        mendorong pertukaran ide serta wawasan yang relevan untuk menciptakan
        solusi inovatif dalam menghadapi tantangan politik dan sosial di
        Indonesia.
        <br />
        <br />
        Melalui Democracy Affairs, kami juga memberikan pelatihan dan
        pengembangan kapasitas bagi generasi muda, komunitas, dan pemimpin lokal
        untuk membangun kesadaran akan pentingnya partisipasi aktif dalam proses
        demokrasi. Program ini bertujuan menciptakan masyarakat yang lebih
        kritis, terinformasi, dan siap berkontribusi dalam penguatan demokrasi,
        baik di tingkat nasional maupun global.
      </p>
    </div>
  );
};
