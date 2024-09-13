import Marquee from "react-fast-marquee";

const Headline = () => {
  return (
    <div className="mt-8 p-4 bg-[#F3F3F3] flex gap-5 items-center">
      <p className="bg-[#D72050] px-6 py-2 text-white">Latest</p>
      <Marquee speed={100}>
        <p className="text-lg font-semibold text-[#403F3F]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          impedit quod id vitae? Distinctio doloribus vel cumque tempore
          obcaecati. Non.
        </p>
      </Marquee>
    </div>
  );
};

export default Headline;
