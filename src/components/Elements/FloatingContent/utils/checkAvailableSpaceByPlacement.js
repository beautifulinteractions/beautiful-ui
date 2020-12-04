/**
 * Check if there space for an element to be shown based on its trigger and placement
 */
const checkAvailableSpaceByPlacement = (el, trigger, placement) => {
  const h = window.innerHeight || document.documentElement.clientHeight;
  const w = window.innerWidth || document.documentElement.clientWidth;

  const placementCoords = placement.split('-');
  if (placementCoords[0] === 'bottom') {
    const isThereEnoughHeight = h - trigger.bottom >= el.height;
    const checkSpace = {
      right: trigger.x >= el.width && isThereEnoughHeight,
      left: w - trigger.x >= el.width && isThereEnoughHeight,
      center: isThereEnoughHeight,
    };
    return checkSpace[placementCoords[1]];
  }

  if (placementCoords[0] === 'top') {
    const isThereEnoughHeight = el.top > 0 && el.bottom < h;
    const checkSpace = {
      right: trigger.x >= el.width && isThereEnoughHeight,
      left: w - trigger.x >= el.width && isThereEnoughHeight,
      center: isThereEnoughHeight,
    };

    return checkSpace[placementCoords[1]];
  }

  if (placementCoords[0] === 'right' && w - (trigger.width + trigger.x) >= el.width) {
    return true;
  }

  if (placementCoords[0] === 'left' && trigger.x >= el.width) {
    return true;
  }

  return false;
};

export default checkAvailableSpaceByPlacement;
