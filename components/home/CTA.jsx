import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Cta = () => {
  return (
    <section className="bg-CTA relative mb-44 bg-cover bg-[-20rem_bottom] py-32 text-white max-md:bg-fixed max-md:bg-[20rem_center]">
      <div className="absolute -inset-[1px] bg-black/40" />
      <div className="relative mx-auto md:container md:max-xl:max-w-[90%]">
        <div className="flex flex-col items-center">
          <div className="mb-6 flex flex-col items-center justify-center gap-y-2 text-center xl:max-w-5xl">
            <h3 className="text-orange">
              Scrie-ne pentru o consultație gratuită
            </h3>
            <h2 className="text-balance max-md:text-lg">
              Fiecare poveste de dragoste merită flori pe măsură. Hai să le
              alegem împreună!
            </h2>
          </div>
          <div>
            <Link href="/contact">
              <Button size={"lg"} className="group gap-x-2">
                Contactează-ne
                <Send
                  size={18}
                  className="transition-all duration-300 ease-in-out group-hover:rotate-[20deg]"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
