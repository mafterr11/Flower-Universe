import { LuFacebook, LuInstagram } from "react-icons/lu";

const FixedSocials = () => {
  return (
    <div className="fixed bottom-10 right-10 flex flex-col gap-y-3 items-end">
      {/* Instagram Button */}
      <a href="https://www.instagram.com/flower_universe_ro" target="_blank">
        <div className="group relative flex items-center bg-accent rounded-full overflow-hidden transition-all duration-300 cursor-pointer w-14 hover:w-40">
          <div className="w-14 h-14 flex items-center justify-center">
            <LuInstagram size={30} color="white" />
          </div>
          <span className="absolute left-16 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Instagram
          </span>
        </div>
      </a>

      {/* Facebook Button */}
      <a href="https://www.facebook.com/floweruniversero">
        <div className="group relative flex items-center bg-accent rounded-full overflow-hidden transition-all duration-300 cursor-pointer w-14 hover:w-40">
          <div className="w-14 h-14 flex items-center justify-center">
            <LuFacebook size={30} color="white" />
          </div>
          <span className="absolute left-16 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Facebook
          </span>
        </div>
      </a>
    </div>
  );
};

export default FixedSocials;
