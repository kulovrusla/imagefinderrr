import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, handleLargeImg }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          handleLargeImg={handleLargeImg}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
