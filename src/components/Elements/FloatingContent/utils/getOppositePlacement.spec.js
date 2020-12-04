import getOppositePlacement from './getOppositePlacement';

describe('getOppositePlacement function', () => {
  it('should be a function', () => {
    expect(getOppositePlacement).to.be.a('function');
  });

  it('should return the opposite element position', () => {
    const el = { bottom: 1000, left: 8, right: 155, top: 904 };
    let oppositePosition = getOppositePlacement(el, 'bottom-right');

    expect(oppositePosition).to.be.equal('top-right');

    el.left = -10;
    oppositePosition = getOppositePlacement(el, 'bottom-right');
    expect(oppositePosition).to.be.equal('top-left');

    oppositePosition = getOppositePlacement(el, 'left-center');
    expect(oppositePosition).to.be.equal('right-center');

    el.top = -104;
    el.bottom = 6;
    oppositePosition = getOppositePlacement(el, 'top-left');
    expect(oppositePosition).to.be.equal('bottom-left');

    el.right = 1300;
    oppositePosition = getOppositePlacement(el, 'right-center');
    expect(oppositePosition).to.be.equal('left-center');

    oppositePosition = getOppositePlacement(el, 'bottom-left');
    expect(oppositePosition).to.be.equal('bottom-right');
  });
});
