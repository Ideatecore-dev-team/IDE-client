import OurProgramBanner from "../assets/images/our-program-banner.webp";
import ButtonLink from "./Buttons/ButtonLink";

export const HomeProgram = () => {
  return (
    <section className="ourprog-section flex justify-center items-start self-stretch">
      <div className="ourprog-container flex w-full xs:px-6 lg:w-[1224px] py-12 flex-col lg:flex-row-reverse items-center lg:justify-between gap-6 lg:gap-8">
        <img
          src={OurProgramBanner}
          className="w-full lg:w-[750px] lg:h-[250px] object-cover rounded-xl shadow-sm"
          alt="Program Banner IDE Indonesia" 
        />
        
        <div className="heading-button lg:w-[440px] flex flex-col items-start gap-3 lg:gap-5 self-stretch">
          <h2 className="text-3xl font-bold leading-tight">
            Bersama Mewujudkan Masa Depan Indonesia yang Lebih Baik
          </h2>
          <p className="text-base text-neutral-600">
            Kami memiliki berbagai program di bidang riset dan politik,
            pendidikan dan hukum, sosial, seni budaya dan keagamaan,
            kewirausahaan, serta inovasi media dan kreatif sebagai wadah bagi
            seluruh anak bangsa untuk berkreasi, berproses, dan mempersiapkan
            diri.
          </p>
          <ButtonLink
            caption="Check Our Program"
            color="bg-brand-red hover:bg-brand-red-hover"
            to="/our-program"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeProgram;