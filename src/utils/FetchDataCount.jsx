import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchZillowData } from "../store/slice/zillowSlice";

const FetchDataCount = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.zillow);

  useEffect(() => {
    dispatch(fetchZillowData());
  }, [dispatch]);

  if (loading) return "";
  if (error) return `Error: ${error}`;
  if (!data) return "No data available.";

  
  return data.length;
};

export default FetchDataCount;
