export const formatNumber = (val) => {
  if (!val) return "";
  // Remove non-numeric characters except decimal
  const numericValue = val.toString().replace(/[^\d.]/g, "");
  // Handle multiple decimal points
  const parts = numericValue.split(".");
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.length > 1 ? `${integerPart}.${parts[1]}` : integerPart;
};
