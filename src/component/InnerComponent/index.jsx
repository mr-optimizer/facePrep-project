import { useEffect, useRef, useState } from "react";
import classes from "./style.module.css";
import Contact from "../Contact";
import LoadingSkeleton from "../LoadingSkeleton";

const InnerContainer = () => {
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async (pageNumber) => {
    const access_key = "x1xSaI4YjkqcM5B0xs_ZsHNf_g4TZwt-BdGUEG784UU";
    const res = await fetch(
      `https://api.unsplash.com/photos/?client_id=${access_key}&page=${pageNumber}&per_page=10`
    );
    const data = await res.json();
    setPhotos((img) => [...img, ...data]);
    setLoading(true);
  };
  useEffect(() => {
    fetchPhotos(pageNumber);
  }, [pageNumber]);
  const loadMoreContacts = () => {
    setPageNumber((prevPageNum) => prevPageNum + 1);
  };
  const pageEnd = useRef();
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMoreContacts();
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);
  return (
    <div className={classes.container}>
      {photos.map((photo, index) => (
        <Contact
          key={index}
          photoSrc={photo.urls.small}
          name={`${photo.user.first_name} ${photo.user.last_name}`}
        />
      ))}
      <LoadingSkeleton />
      <div ref={pageEnd} />
    </div>
  );
};

export default InnerContainer;
