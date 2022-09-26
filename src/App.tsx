import { useEffect, useState } from 'react';
import { ImageListType } from 'react-images-uploading';
import DotLoader from 'react-spinners/DotLoader';
import Dogs from './components/Dogs';
import Upload from './components/Upload';
import { formatBreedName } from './utils';
import { Gallery, Response } from './typing';
import { GET } from './api';
import './App.css';

const mobilenet = require('@tensorflow-models/mobilenet');

function App() {
  const [images, setImages] = useState([] as ImageListType);
  const [listDogs, setListDogs] = useState([] as Gallery[]);
  const [loading, setLoading] = useState(false);

  const onChange = (imageList: ImageListType) => {
    setImages(imageList);
  };

  const fetchDogBreeds = async () => {
    images.forEach(async (image, idx) => {
      const img = document.getElementById(`dog-image-${idx}`);
      setLoading(true);
      // Load the model.
      const model = await mobilenet.load();

      // Classify the image.
      const predictions = await model.classify(img);
      const topBreed = predictions[0]?.className;
      if (topBreed) {
        GET(`breed/${formatBreedName(topBreed)}/images/random/20`)
          .then(({ message, code }: Response) => {
            if (code) {
            } else {
              const data = message.map((m: string) => {
                return {
                  original: m,
                  thumbnail: m,
                };
              }) as Gallery[];
              setListDogs(data);
            }
          })
          .catch(() => {})
          .finally(() => {
            setLoading(false);
          });
      }
    });
  };

  useEffect(() => {
    setListDogs([]);
    fetchDogBreeds();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  return (
    <div className='App md:container md:mx-auto items-center flex flex-col text-center'>
      <h2 className='text-4xl mb-4'>Searching dogs based on breed</h2>
      <Upload onChange={onChange} data={images} />
      {loading && <DotLoader color='#36d7b7' />}
      {images.length > 0 && !loading && <Dogs data={listDogs} />}
    </div>
  );
}

export default App;
