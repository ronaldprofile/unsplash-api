import Image from "next/image";
import searchIcon from "../../assets/search.svg";

export function SectionSearch() {
  return (
    <div className="w-full bg-[url('https://source.unsplash.com/random')] bg-no-repeat bg-cover object-cover">
      <div className="py-8 px-3 md:pt-36 md:pb-[134px]">
        <div className="md:mx-[124px] lg:w-[864px] lg:mx-[216px]">
          <h1 className="text-2xl font-bold text-white md:text-[46px] md:text-left">
            Unsplash
          </h1>

          <div>
            <h2
              className="mt-2 text-[15px] font-normal text-white/80
                md:text-[18px] md:mt-4"
            >
              The internet’s source of{" "}
              <a href="#" className="underline">
                freely-usable images.
              </a>
            </h2>
            <p className="text-[15px] font-normal text-white/80 md:text-[18px] md:mb-6">
              Powered by creators everywhere.
            </p>
          </div>

          <div className="hidden md:block bg-white border rounded hover:shadow-md">
            <form action="/photos/keyword">
              <label className="sr-only" htmlFor="search">
                Search Photos
              </label>

              <div className="flex items-center h-14">
                <button
                  title="Search Unsplash"
                  className="h-full pl-2 border-none outline-none flex items-center"
                >
                  <Image src={searchIcon} alt="search icon" />
                </button>
                <input
                  className="w-full h-full pl-3 border-none outline-none"
                  id="search"
                  name="search"
                  title="Search Unsplash"
                  type="text"
                  placeholder="Search photos"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
