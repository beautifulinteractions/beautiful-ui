import checkAvailableSpaceByPlacement from './checkAvailableSpaceByPlacement';

describe('checkAvailableSpaceByPlacement function', () => {
  it('should be a function', () => {
    expect(checkAvailableSpaceByPlacement).to.be.a('function');
  });

  it('should return false if there\'s no space', () => {
    const el = { bottom: 771.25, height: 205, top: 566.25, width: 147.15625, x: 272.1875 };
    const trigger = { bottom: 797.34375, height: 18, top: 779.34375, width: 121.34375, x: 306 };
    const checkSpaceBottomRight = checkAvailableSpaceByPlacement(el, trigger, 'bottom-right');
    const checkSpaceBottomCenter = checkAvailableSpaceByPlacement(el, trigger, 'bottom-center');
    const checkSpaceBottomLeft = checkAvailableSpaceByPlacement(el, trigger, 'bottom-left');

    expect(checkSpaceBottomRight).to.be.equal(false);
    expect(checkSpaceBottomCenter).to.be.equal(false);
    expect(checkSpaceBottomLeft).to.be.equal(false);

    el.top = -100;
    el.bottom = 800;
    const checkSpaceTopRight = checkAvailableSpaceByPlacement(el, trigger, 'top-right');
    const checkSpaceTopCenter = checkAvailableSpaceByPlacement(el, trigger, 'top-center');
    const checkSpaceTopLeft = checkAvailableSpaceByPlacement(el, trigger, 'top-left');


    expect(checkSpaceTopRight).to.be.equal(false);
    expect(checkSpaceTopCenter).to.be.equal(false);
    expect(checkSpaceTopLeft).to.be.equal(false);


    const checkSpaceLeft = checkAvailableSpaceByPlacement(el, trigger, 'left-center');

    expect(checkSpaceLeft).to.be.equal(true);

    const checkSpaceRight = checkAvailableSpaceByPlacement(el, trigger, 'right-center');

    expect(checkSpaceRight).to.be.equal(true);
  });
});
