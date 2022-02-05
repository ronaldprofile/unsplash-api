import { GetStaticProps } from "next";
import Head from "next/head";
import axios from "axios";

import { GridPhotos } from "../components/GridPhotos";
import { SectionSearch } from "../components/SectionSearch";

interface IPhoto {
  id: string;
  width: number;
  height: number;
  description: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };

  user: {
    name: string;
    bio: string;
    links: {
      html: string;
    };

    profile_image: {
      small: string;
      medium: string;
    };
  };
}

interface HomeData {
  photos: IPhoto[];
}

function Home({ photos }: HomeData) {
  return (
    <div>
      <Head>
        <title>Unsplash</title>
        <meta
          name="description"
          content="Consumindo recursos da api do Unsplash"
        />
      </Head>

      <SectionSearch />
      <GridPhotos photos={photos} />
    </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const url = `${process.env.API_UNSPLASH}/photos`;

  const response = await axios.get<IPhoto[]>(url, {
    headers: {
      Authorization: `Client-ID ${process.env.ACCESS_KEY}`
    }
  });

  const data = response.data;

  return {
    props: {
      photos: data
    },
    revalidate: 60 * 60 * 10
  };
};
