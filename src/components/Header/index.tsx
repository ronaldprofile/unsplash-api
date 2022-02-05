import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search.svg";
import photoProfileGithub from "../../../.github/photo-github.jpeg";

export function Header() {
  const { query } = useRouter();
  const [keyword, setKeyword] = useState(query.search);

  return (
    <div className="w-full h-[80px] sticky z-10 top-0 shadow bg-white backdrop-filter px-5 pt-3 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/" passHref>
          <a>
            <Image
              src={logo}
              alt="Logo Unsplash"
              title="Unsplash Home"
              width={38}
              height={38}
            />
          </a>
        </Link>

        <form
          action="/photos/keyword"
          className="w-full md:w-[500px] h-[38px] pr-3 bg-gray-100 focus-within:bg-white 
          border transition
          hover:shadow
          rounded-full"
        >
          <label className="sr-only" htmlFor="search">
            Search Photos
          </label>

          <div className="w-full h-full flex items-center">
            <button
              title="Search Unsplash"
              className="h-full pl-3 border-none outline-none flex items-center"
            >
              <Image src={searchIcon} alt="search icon" />
            </button>
            <input
              className="w-full h-full pl-3 border-none outline-none bg-transparent"
              id="search"
              name="search"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              type="text"
              placeholder="Search free high-resolutions photos"
            />
          </div>
        </form>
      </div>

      <div className="hidden md:block">
        <a
          className="flex items-center gap-2"
          href="https://github.com/ronaldprofile"
          target="_blank"
          title="Visit profile"
          rel="noreferrer"
        >
          <span className="hover:underline">Ronald Tomaz</span>

          <figure>
            <Image
              className="rounded-full"
              src={photoProfileGithub}
              alt="Ronald Tomaz"
              width={42}
              height={42}
            />
            <figcaption className="sr-only">
              Imagem do Github de Ronald Tomaz
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
}
