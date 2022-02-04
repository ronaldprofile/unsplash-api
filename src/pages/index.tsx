import Head from "next/head";
// import { GridPhotos } from "../components/GridPhotos";
import { SectionSearch } from "../components/SectionSearch";

function Home() {
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
      {/* <GridPhotos /> */}
    </div>
  );
}

export default Home;
