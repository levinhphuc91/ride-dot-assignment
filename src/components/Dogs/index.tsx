import ImageGallery from 'react-image-gallery';
import { Gallery } from '../../typing';

type Props = {
  data: Gallery[];
};

const Dogs = ({ data }: Props) => {
  if (data.length === 0) {
    return (
      <h2 className='text-4xl mb-4'>
        Can not find dogs same bread, please upload another image
      </h2>
    );
  }
  return (
    <>
      <h2 className='text-4xl mb-4'>Suggestions</h2>
      <ImageGallery
        items={data}
        showBullets={true}
        showFullscreenButton={true}
        showIndex={false}
        infinite={true}
        showNav={true}
        lazyLoad={true}
      />
    </>
  );
};

export default Dogs;
