import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./style.module.css";
import Contact from "../Contact";
import LoadingSkeleton from "../LoadingSkeleton";
import { useAuth } from "../../context/AuthProvider";
const Home = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();   //custom hook

  const pageEnd = useRef(); // ref to the last element on page
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  // fetching data from RandomUser API
  const fetchDetails = async (pageNumber) => {
    const res = await fetch("https://randomuser.me/api/?results=7").then(
      (response) => response.json()
    );
    const data = res.results;
    setPhotos((img) => [...img, ...data]);
    setLoading(true);
  };

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/login", { replace: true });
    }
    setTimeout(() => {
      // It is mentioned in problem statement to fetch new data after the delay of 1sec
      fetchDetails(pageNumber);
    }, 1000);
  }, [pageNumber, isLoggedIn, navigate]);

  const loadMoreContacts = () => {
    setPageNumber((prevPageNum) => prevPageNum + 1);
  };

  useEffect(() => {
    if (loading) {
      /* 
      for observing the the last element to become completely visible to fetch next result
       how ever we can optimize the surfing time by start fetching dta from api when 2-3 component before end.
      */
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
          photoSrc={photo.picture.medium} // it contains user image
          name={`${photo.name.first} ${photo.name.last}`}
        />
      ))}
      <LoadingSkeleton />  
      <div ref={pageEnd} />
    </div>
  );
};

export default Home;
