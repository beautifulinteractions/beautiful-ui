/**
 * This function checks if it has enough space for the FloatingContent to be shown
 */
const checkAvailableSpace = (el) => {
  const bounding = el;
  const h = window.innerHeight || document.documentElement.clientHeight;
  const w = window.innerWidth || document.documentElement.clientWidth;

  return (
    bounding.top >= 0
    && bounding.left >= 0
    && bounding.bottom <= h
    && bounding.right <= w
  );
};

export default checkAvailableSpace;
