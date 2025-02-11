const ImageGalleryItem = ({ image, handleLargeImg }) => {
  return (
    <li
      onClick={() => handleLargeImg(image.largeImageURL)}
      className="ImageGalleryItem"
    >
      <img
        className="ImageGalleryItem-image"
        src={image.webformatURL}
        alt="{image.tags}"
      />
    </li>
  );
};

export default ImageGalleryItem;
