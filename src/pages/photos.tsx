import { GetServerSideProps } from "next";
import axios from "axios";

interface IPhoto {
  id: string;

  urls: {
    small: string;
    regular: string;
  };

  user: {
    name: string;
    bio: string;
  };
}

interface IPhotosProps {
  photos: IPhoto[];
}

export default function Photos({ photos }: IPhotosProps) {
  return (
    <div>
      <h1>Photos</h1>

      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.urls.small} alt={photo.user.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get<IPhoto[]>(
    "https://api.unsplash.com/photos/?client_id=ieBsewiiwKVvpO09UUxtfq4vwfADylkyBsDQjuNxVW4"
  );

  const photos = response.data;

  return {
    props: {
      photos
    }
  };
};
