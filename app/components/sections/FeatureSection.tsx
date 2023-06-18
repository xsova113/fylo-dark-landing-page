import { featureItems } from "@/app/libs/constants";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const FeatureSection = () => {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 text-center container-paddingx md:py-0 flex flex-col text-white gap-20">
        {featureItems.map((item) => (
          <div
            key={item.title}
            className="md:w-[60%] w-[90%] mx-auto flex flex-col justify-center"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={10}
              className="mx-auto pb-7"
            />
            <h1 className={`mb-2 text-lg font-semibold ${raleway.className}`}>
              {item.title}
            </h1>
            <p className="text-sm text-white/70">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
