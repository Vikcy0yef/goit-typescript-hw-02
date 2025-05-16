import {  useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import { Toaster } from "react-hot-toast";
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from "./components/ImageModal/ImageModal"; 
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { Image, UnsplashResponse, UnsplashApiImage  } from './App.types';


const ACCESS_KEY = "faqkgSo34geXeTxFk9k4_SjWLmxa0MQsQ7_BAiG9Ta4"

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string|null>(null);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Image|null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
 

useEffect(() => {
  localStorage.removeItem("images");
}, []);

  const fetchImages = async (searchQuery: string, pageNumber: number):Promise<void> => {
    setLoading(true);
    setError(null)
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&page=${pageNumber}&per_page=12&client_id=${ACCESS_KEY}`
      );
      if (!response.ok) {
       throw new Error("Failed to fetch images. Try again later.");
      }
      const data: UnsplashResponse=  await response.json();
      const formatted:Image[] =  data.results.map((img: UnsplashApiImage) => ({
        id: img.id,
        src: img.urls.small,
        alt: img.alt_description || "Unsplash image",
        alt_description: img.alt_description,
        urls: img.urls,
      }));
      setImages((prev) =>
        pageNumber === 1 ? formatted : [...prev, ...formatted]);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Something went wrong")
      }
     
    } finally {
      setLoading(false)
    }
  };
  const handleSearchSubmit = (newQuery:string): void => {
    setQuery(newQuery);
    setPage(1)
    setImages([])
    fetchImages(newQuery, 1)
  };
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  }
  const openModal = (image:Image) => {
  setSelectedImage(image);
  setIsModalOpen(true);
};

const closeModal = () => {
  setSelectedImage(null);
  setIsModalOpen(false);
};

  return (
    
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
            <ImageGallery
              images={images} onImageClick={openModal} />
          {(images.length > 0 || loading) && (
  <div className="centered-wrapper">
    {loading ? (
      <Loader />
    ) : (
      <LoadMoreBtn onClick={handleLoadMore} />
    )}
  </div>
)}
        </>
      )}
     {loading && (
  <div className="centered-wrapper">
    <Loader />
  </div>
)}
      <Toaster position="top-right" />
      <ImageModal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  image={selectedImage}
/>
    </>
  );
}

export default App
