

import ImageReader from './ImageReader';

const App = () => {
  const handleImage = (imageData) => {
    console.log(imageData);
  };

  return (
    <div>
      <ImageReader handleImage={handleImage} />
    </div>
  );
};

export default App;
