import { useEffect, useRef, useState } from "react";
import classes from "./style.module.css";
import Contact from "../Contact";
import LoadingSkeleton from "../LoadingSkeleton";

const InnerContainer = () => {
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchDetails = async (pageNumber) => {
    const res = await fetch("https://randomuser.me/api/?results=7")
    .then(response => response.json());
    const data = res.results;
    console.log(res.results);
    setPhotos((img) => [...img, ...data]);
    setLoading(true);
  };
  useEffect(() => {
    fetchDetails(pageNumber);
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
          photoSrc={photo.picture.medium}
          name={`${photo.name.first} ${photo.name.last}`}
        />
      ))}
      <LoadingSkeleton />
      <div ref={pageEnd} />
    </div>
  );
};

export default InnerContainer;
