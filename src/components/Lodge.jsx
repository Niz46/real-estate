import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lodgeData } from "../constants/data";
import FetchDataCount from "../utils/FetchDataCount";
import { fetchZillowData } from "../store/slice/zillowSlice";
import { VscSettings } from "react-icons/vsc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";
import Item from "./ui/Item";

const Lodge = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.zillow);

  useEffect(() => {
    dispatch(fetchZillowData());
  }, [dispatch]);

  return (
    <section className="max-padd-container">
      {lodgeData &&
        lodgeData.map((property, index) => (
          <div
            key={index}
            className="max-padd-container bg-primary py-16 xl:py-28 rounded-3xl"
          >
            <span className="medium-18">{property.title}</span>
            <h2 className="h2">{property.message}</h2>
            <div className="flexBetween mt-8 mb-6">
              <h5>
                <span className="font-bold">Showing 1-9</span> out of{" "}
                {FetchDataCount()} properties
              </h5>
              <Link
                to={"/"}
                className="bg-white text-3xl rounded-md h-10 w-10 p-1 border"
              >
                <VscSettings />
              </Link>
            </div>
            {/* Swiper Container */}
            <Swiper
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1124: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1300: {
                  slidesPerView: 3,
                  spaceBetween: 30, 
                },
              }}
              modules={[Autoplay]}
              className="h-[488px] md:h-[533px] xl:h-[422px] mt-5"
            >
              {!loading && data
                ? data.map((item, idx) => (
                    <SwiperSlide key={item.id || idx}>
                      <Item
                        data={item}
                        personId={item.personId || idx}
                        generalId="exampleGeneralId" 
                      />
                    </SwiperSlide>
                  ))
                : !loading && <p>No data available.</p>}
            </Swiper>
          </div>
        ))}
    </section>
  );
};

export default Lodge;
