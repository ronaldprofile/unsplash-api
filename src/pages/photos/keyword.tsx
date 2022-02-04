import axios from "axios";
import { GetServerSideProps } from "next";

interface IPhoto {
  id: string;
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

interface IPhotoResponse {
  keyword_key: string;
  data: {
    total: number;
    total_pages: number;
    results: IPhoto[];
  };
}

export default function Keyword({ data, keyword_key }: IPhotoResponse) {
  return (
    <div>
      <div className="py-12 px-3  md:pt-[60px] md:pb-[72px]">
        <div className="mb-4">
          <h1 className="text-[28px]  md:text-5xl capitalize font-bold">
            {keyword_key}
          </h1>
        </div>
      </div>

      <div className="md:px-3">
        <div className="md:columns-2 md:gap-6 lg:columns-3">
          {data.results.map(photo => {
            return (
              <div
                key={photo.id}
                className="mb-6 hover:brightness-90 cursor-zoom-in"
              >
                <div className="flex items-center gap-2 mx-3 mb-3 md:hidden">
                  <div>
                    <a
                      href={photo.user.links.html}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={photo.user.profile_image.small}
                        alt={photo.user.name}
                        className="w-8 h-8 rounded-full"
                      />
                    </a>
                  </div>
                  <div>
                    <span>{photo.user.name}</span>
                  </div>
                </div>

                <figure>
                  <img
                    className="w-full h-auto"
                    src={photo.urls.regular}
                    alt={photo.description}
                    title={photo.alt_description}
                  />

                  <figcaption className="sr-only">
                    {photo.description}
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { search } = context.query;

  const url = `${process.env.API_UNSPLASH}/search/photos?query=${search}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Client-ID ${process.env.ACCESS_KEY}`
    }
  });

  const data = response.data;

  return {
    props: {
      data,
      keyword_key: search
    }
  };
};
