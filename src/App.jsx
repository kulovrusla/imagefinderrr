import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./api/fetchData";
import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import NotFound from "./components/NotFound";
import Modal from "./components/Modal";
import Button from "./components/Button";
import arrow from "./assets/up-arrow.png";
const App = () => {
  const [images, setImages] = useState([]);

  const [query, setQuery] = useState("цветы");
  const [largeImg, setLargeImg] = useState(null);
  const [page, setPage] = useState(1);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    fetchData(query, page).then((data) => setImages(data.hits));
  }, [query, page]);
  useEffect(() => {
    if (page > 1) {
      fetchData(query, page).then((data) =>
        setImages([...images, ...data.hits])
      );
    } else {
      fetchData(query, page).then((data) => setImages(data.hits));
    }
  }, [query, page]);

  const handleQuery = (value) => {
    setImages("");
    setQuery(value);
  };

  const handleLargeImg = (image) => {
    setLargeImg(image);
  };

  const handleDelete = () => {
    setLargeImg(null);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", () => {
    setScroll(true);
  });

  return (
    <main>
      <Searchbar handleQuery={handleQuery} />

      {images.length > 0 ? (
        <ImageGallery handleLargeImg={handleLargeImg} images={images} />
      ) : (
        <NotFound />
      )}

      {largeImg ? (
        <Modal largeImg={largeImg} handleDelete={handleDelete} />
      ) : (
        ""
      )}

      <Button handleLoadMore={handleLoadMore} />
      {scroll ? (
        <button className="btn-scroll" onClick={handleScroll}>
          <img width={50} src={arrow} alt="arrow" />
        </button>
      ) : (
        ""
      )}
    </main>
  );
};

export default App;
