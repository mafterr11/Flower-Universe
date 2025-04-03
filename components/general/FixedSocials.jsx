import { LuFacebook, LuInstagram } from "react-icons/lu";

const FixedSocials = () => {
  return (
    <div className="fixed right-10 bottom-10 flex flex-col items-end gap-y-3 max-md:right-5 max-md:bottom-5">
      {/* Instagram Button */}
      <a href="https://www.instagram.com/flower_universe_ro" target="_blank">
        <div className="group bg-accent relative flex w-14 cursor-pointer items-center overflow-hidden rounded-full transition-all duration-300 hover:w-40">
          <div className="flex h-14 w-14 items-center justify-center">
            <LuInstagram size={30} color="white" />
          </div>
          <span className="absolute left-16 font-medium whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Instagram
          </span>
        </div>
      </a>

      {/* Facebook Button */}
      <a href="https://www.facebook.com/floweruniversero" target="_blank">
        <div className="group bg-accent relative flex w-14 cursor-pointer items-center overflow-hidden rounded-full transition-all duration-300 hover:w-40">
          <div className="flex h-14 w-14 items-center justify-center">
            <LuFacebook size={30} color="white" />
          </div>
          <span className="absolute left-16 font-medium whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Facebook
          </span>
        </div>
      </a>
    </div>
  );
};

export default FixedSocials;
