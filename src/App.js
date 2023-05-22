import React from "react";

const importAll = (r) => {
  return r.keys().map(r)
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|gif|svg)$/));



const App = () => {
  return (
    <>
      <div className='relative'>
        <div className='flex justify-between px-1 pt-4'>
          <h1 className='text-black text-[8px] font-main italic'>pariscoolnoldstuff</h1>
         
        </div>
          <div>
              
              {images.map((image, index) => (
                <img key={index} src={image.default} />
              ))}
          </div>
          {/* <Modal isOpen={active} closeModal={closeModal} photos={img} imageIndex={imageIndex} /> */}
      </div>
    </>
  );
};

export default App;