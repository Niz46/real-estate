import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchZillowData } from "../store/slice/zillowSlice";
import { RiDoubleQuotesL } from "react-icons/ri";
import { aboutData } from "../constants/data";
import { getStatisticsData } from "../constants/data";
import CountUp from "react-countup";

const About = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.zillow);
  const visitCount = useSelector((state) => state.visitCount.count); 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchZillowData());

    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  
  const statistics = getStatisticsData(visitCount);

  return (
    <section id="about" className="max-padd-container py-16 xl:py-28">
      {/* container */}
      <div className="flex flex-col xl:flex-row gap-10">
        {/* left slide */}
        {data && data.length > 0 ? (
          <div className="flex-1 relative">
            <img
              src={data[15].photos[0]}
              alt="Property"
              className="rounded-3xl rounded-tr-[155px] w-[488px]"
            />
            <div className="bg-white absolute bottom-2 left-16 shadow-md max-w-xs p-4 rounded-lg flexCenter flex-col max-md:left-9">
              <span className="relative bottom-8 p-3 shadow-md bg-white h-12 w-12 rounded-full items-center">
                <RiDoubleQuotesL className="text-2xl" />
              </span>
              <p className="text-center relative bottom-3">
                {data[0].showingInstructions}
              </p>
            </div>
          </div>
        ) : (
          !loading && <p>No data available.</p>
        )}

        {/* right slide */}
        {aboutData &&
          aboutData.map((item, index) => (
            <div key={index} className="flex-1 flex justify-center flex-col">
              <span className="medium-18">{item.title}</span>
              <h2 className="h2">{item.mission}</h2>
              <p className="py-5">{item.description}</p>
              {/* statistics */}
              <div className="flex flex-wrap gap-4">
                {statistics.map((statistic, index) => (
                  <div key={index} className="bg-primary p-4 rounded-lg">
                    <div className="flex items-center gap-1">
                      <CountUp
                        start={isVisible ? 0 : null}
                        end={statistic.value}
                        duration={2}
                        delay={1}
                      >
                        {({ countUpRef }) => (
                          <h3
                            ref={countUpRef}
                            className="text-2xl font-semibold"
                          ></h3>
                        )}
                      </CountUp>
                      <h4 className="bold-22">k+</h4>
                    </div>
                    <p>{statistic.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default About;
