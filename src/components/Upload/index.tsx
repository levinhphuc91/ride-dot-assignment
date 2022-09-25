import ImageUploading, { ImageListType } from 'react-images-uploading';

type Props = {
  onChange: (imageList: ImageListType) => void;
  data: ImageListType | [];
};

const Upload = ({ data, onChange }: Props) => {
  return (
    <ImageUploading value={data} onChange={onChange}>
      {({
        imageList,
        onImageUpload,
        onImageUpdate,
        isDragging,
        dragProps,
      }: any) => (
        <div>
          {data.length === 0 && (
            <button
              data-testid='upload-image'
              className='bg-sky-500 p-16 rounded text-white'
              style={isDragging ? { backgroundColor: 'rgb(7 89 133)' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or drop your dog image here
            </button>
          )}
          {imageList.map((image: any, index: number) => (
            <div key={index} className='flex items-center mb-4'>
              <img
                src={image.dataURL}
                alt='dog'
                width='200'
                id={`dog-image-${index}`}
              />
              <div className='m-4 space-x-4'>
                <button
                  className='px-8 py-4 rounded bg-sky-500 hover:bg-sky-600'
                  onClick={() => onImageUpdate(index)}
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  );
};

export default Upload;
