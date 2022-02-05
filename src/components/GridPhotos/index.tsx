import Image from "next/image";

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

interface IGridPhotosProps {
  photos: IPhoto[];
}

export function GridPhotos({ photos }: IGridPhotosProps) {
  return (
    <div className="mt-12">
      <div className="w-full">
        <div className="px-3">
          <div className="md:columns-2 md:gap-6 lg:columns-3">
            {photos.map(photo => (
              <div
                key={photo.id}
                className="mb-6 cursor-zoom-in hover:brightness-90"
              >
                <div className="flex items-center gap-2 mx-3 mb-3 md:hidden">
                  <div>
                    <a
                      href={photo.user.links.html}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={photo.user.profile_image.small}
                        alt={photo.user.name}
                        className="rounded-full"
                        width={32}
                        height={32}
                      />
                    </a>
                  </div>
                  <div>
                    <span>{photo.user.name}</span>
                  </div>
                </div>

                <a
                  href={photo.user.links.html}
                  target="_blank"
                  title={photo.description}
                  rel="noreferrer"
                >
                  <figure>
                    <Image
                      className="w-full h-auto"
                      src={photo.urls.regular}
                      alt={photo.alt_description}
                      title={photo.description}
                      width={photo.width}
                      height={photo.height}
                    />
                    <figcaption className="sr-only">
                      {photo.description}
                    </figcaption>
                  </figure>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
