/**
 * This function returns the reverse of the given placement
 */
const getOppositePlacement = (el, placement) => {
  const bounding = el;
  const placementCoords = placement.split('-');
  const h = window.innerHeight || document.documentElement.clientHeight;
  const w = window.innerWidth || document.documentElement.clientWidth;

  if (bounding.top < 0 && placementCoords[0] === 'top') {
    placementCoords[0] = 'bottom';
  }
  if (bounding.bottom > h && placementCoords[0] === 'bottom') {
    placementCoords[0] = 'top';
  }

  /**
   * If placement is left-center or right-center, the opposite are respectively right-center and left-center
   * but if the placement is, for example, bottom-right and there's not enough space for the element to be shown,,
   * it means that there is not enough space on the LEFT of the element, so it's opposite will bottom-left.
   */
  if (bounding.left < 0) {
    if (placementCoords[0] === 'left') {
      placementCoords[0] = 'right';
    }
    if (placementCoords[1] === 'right') {
      placementCoords[1] = 'left';
    }
  }

  if (bounding.right > w) {
    if (placementCoords[0] === 'right') {
      placementCoords[0] = 'left';
    }
    if (placementCoords[1] === 'left') {
      placementCoords[1] = 'right';
    }
  }
  const oppositePosition = `${placementCoords[0]}-${placementCoords[1]}`;

  return oppositePosition;
};

export default getOppositePlacement;
