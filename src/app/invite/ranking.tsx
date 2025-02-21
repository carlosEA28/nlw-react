import medal1 from "../../assets/Medal_1.svg";
import medal2 from "../../assets/Medal_2.svg";
import medal3 from "../../assets/Medal_3.svg";
import Image from "next/image";

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="rounded-xl relative bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-2">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Carlos Eduardo
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={medal1} alt="" className="absolute top-0 right-8 " />
        </div>

        <div className="rounded-xl relative bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-2">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | João Vitor
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1029
          </span>

          <Image src={medal2} alt="" className="absolute top-0 right-8 " />
        </div>

        <div className="rounded-xl relative bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-2">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Diego Fernandes
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1028
          </span>

          <Image src={medal3} alt="" className="absolute top-0 right-8 " />
        </div>
      </div>
    </div>
  );
}
