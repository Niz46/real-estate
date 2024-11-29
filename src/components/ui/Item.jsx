import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  nextImage,
  prevImage,
  initializeImageIndices,
} from "../../store/slice/photoSlice";
import { makeSelectPersonImageIndices } from "../../store/selectors/photoSelector";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HeartBtn from "./HeartBtn";
import Button from "./Button";
import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from "react-icons/md";
import { Link } from "react-router-dom";

const Item = ({ data, personId, generalId }) => {
  const dispatch = useDispatch();

  const selectPersonImageIndices = useMemo(makeSelectPersonImageIndices, []);
  const imageIndices = useSelector((state) =>
    selectPersonImageIndices(state, generalId, personId)
  );

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const photoGroups = useMemo(() => {
    if (!Array.isArray(data.photos)) return [];
    return data.photos.reduce((groups, photo, index) => {
      const groupIndex = Math.floor(index / 10);
      if (!groups[groupIndex]) groups[groupIndex] = [];
      groups[groupIndex].push(photo);
      return groups;
    }, []);
  }, [data.photos]);

  useEffect(() => {
    if (!imageIndices.length && photoGroups.length > 0) {
      dispatch(initializeImageIndices({ generalId, personId, photoGroups }));
    }
  }, [dispatch, imageIndices.length, photoGroups, generalId, personId]);

  const currentImageIndex = imageIndices[currentGroupIndex] || 0;

  const handleNext = () => {
    const nextIndex = (currentGroupIndex + 1) % photoGroups.length;
    setCurrentGroupIndex(nextIndex);
    dispatch(
      nextImage({
        generalId,
        personId,
        groupIndex: nextIndex,
        photoGroups,
      })
    );
  };

  const handlePrev = () => {
    const prevIndex =
      currentGroupIndex === 0 ? photoGroups.length - 1 : currentGroupIndex - 1;
    setCurrentGroupIndex(prevIndex);
    dispatch(
      prevImage({
        generalId,
        personId,
        groupIndex: prevIndex,
        photoGroups,
      })
    );
  };

  const city = data?.address?.city || "No City";
  const style = data?.property?.style || "No Style";
  const bedroom = data?.property?.bedrooms || 0;
  const bathroom = data?.property?.bathsFull || 0;
  const parking = data?.property?.parking?.spaces || 0;
  const description= data?.property?.lotDescription || "No Description";
  const price = data?.listPrice || 0;


  return (
    <div className="rounded-2xl p-5 bg-white">
      {photoGroups.length > 0 && (
        <div className="relative pb-2">
          {/* Image */}
          <img
            src={photoGroups[currentGroupIndex][currentImageIndex]}
            alt={`Property ${currentGroupIndex}-${currentImageIndex}`}
            className="w-full h-[170px] object-cover mb-2 rounded-xl"
          />

          {/* Heart Button */}
          <div className="absolute top-4 right-6">
            <HeartBtn />
          </div>
          <h5 className="bold-16 my-1 text-secondaryBlue">{city}</h5>
          <h4 className="medium-18 line-clamp-1">{style}</h4>
          {/* info */}
          <div className="flex gap-x-2 py-2">
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <MdOutlineBed />
              {bedroom}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <MdOutlineBathtub />
              {bathroom}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <MdOutlineGarage />
              {parking}
            </div>
          </div>
          <p className="pt-2 mb-4 line-clamp-2">{description}</p>
          <div className="flexBetween">
            <div className="bold-18">${price}.00</div>
            <Link to={'/home'}>
              <button className="btn-secondary rounded-xl !py-[7px] !px-5 shadow-sm">Details</button>
            </Link>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={handlePrev}
            className="absolute left-2 top-1/4 transform -translate-y-1/2"
          >
            <FaChevronLeft className="text-secondaryWhite h-14 w-5" />
          </Button>
          <Button
            onClick={handleNext}
            className="absolute right-2 top-1/4 transform -translate-y-1/2"
          >
            <FaChevronRight className="text-secondaryWhite h-14 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Item;
