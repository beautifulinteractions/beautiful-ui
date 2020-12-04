import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import noop from '../../../../test/utils/noop';
import Button from '../Button';
import FloatingContent from '.';

describe('FloatingContent component', () => {
  const Trigger = (<Button>foo</Button>);

  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    render(
      <FloatingContent onToggle={noop} trigger={Trigger} isShown>
        some text here
      </FloatingContent>,
    );

    expect(document.querySelector('#bi-floats')).to.exist;
  });

  it('should have default classes', () => {
    render(
      <FloatingContent onToggle={noop} trigger={Trigger} isShown className="foo" reversePlacementOnSmallSpace={false}>
        some text here
      </FloatingContent>,
    );

    const floatingContent = document.querySelector('#bi-floats > div');

    expect(floatingContent.classList.contains('bi')).to.be.true;
    expect(floatingContent.classList.contains('bi-floater')).to.be.true;
    expect(floatingContent.classList.contains('float-top-center')).to.be.true;
  });

  it('should accept "id" prop', () => {
    render(
      <FloatingContent onToggle={noop} trigger={Trigger} isShown id="foo">
        some text here
      </FloatingContent>,
    );

    const floatingContent = document.querySelector('#bi-floats .bi.bi-floater');

    expect(floatingContent.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    render(
      <FloatingContent onToggle={noop} trigger={Trigger} isShown className="foo">
        some text here
      </FloatingContent>,
    );

    const floatingContent = document.querySelector('#bi-floats .bi.bi-floater');

    expect(floatingContent.classList.contains('foo')).to.be.true;
  });

  it('should not render the FloatingContent component if isShown prop is set to false', () => {
    render(
      <FloatingContent onToggle={noop} trigger={Trigger} isShown={false}>
        some text here
      </FloatingContent>,
    );

    expect(document.querySelector('#bi-floats .bi.bi-floater')).not.to.exist;
  });

  it('should allow to define when to fire the "onToggle" callback', () => {
    const onToggleHoverSpy = sinon.spy();

    const { container } = render(
      <FloatingContent trigger={Trigger} isShown action="hover" onToggle={onToggleHoverSpy}>
        some text here
      </FloatingContent>,
    );

    const floatTrigger = container.querySelector('.bi-float-trigger');

    fireEvent.mouseOver(floatTrigger);

    expect(onToggleHoverSpy.calledOnce).to.be.true;
  });

  it('should allow to define the floating content placement', () => {
    const { rerender } = render(
      <FloatingContent
        onToggle={noop}
        trigger={Trigger}
        isShown
        placement="top-left"
        reversePlacementOnSmallSpace={false}
      >
        some text here
      </FloatingContent>,
    );

    const floatingContent = document.querySelector('#bi-floats .bi.bi-floater');

    expect(floatingContent.classList.contains('float-top-center')).to.not.be.true;
    expect(floatingContent.classList.contains('float-top-left')).to.be.true;

    rerender(
      <FloatingContent
        onToggle={noop}
        trigger={Trigger}
        isShown
        placement="bottom-right"
        reversePlacementOnSmallSpace={false}
      >
        some text here
      </FloatingContent>,
    );

    expect(floatingContent.classList.contains('float-top-left')).to.not.be.true;
    expect(floatingContent.classList.contains('float-bottom-right')).to.be.true;

    rerender(
      <FloatingContent onToggle={noop} trigger={Trigger} isShown reversePlacementOnSmallSpace={false}>
        some text here
      </FloatingContent>,
    );

    expect(floatingContent.classList.contains('float-top-left')).to.not.be.true;
    expect(floatingContent.classList.contains('float-bottom-right')).to.not.be.true;
    expect(floatingContent.classList.contains('float-top-center')).to.be.true;
  });

  it('should avoid adding custom style', () => {
    render(
      <FloatingContent onToggle={noop} trigger={Trigger} isShown style={{ margin: '10px' }}>
        some text here
      </FloatingContent>,
    );
    const floatingContent = document.querySelector('#bi-floats .bi.bi-floater');

    expect(floatingContent.getAttribute('style')).not.equal('margin: 10px;');
  });

  it('should perform "onToggle" callback when clicking outside the Floating Component', () => {
    const onToggleSpy = sinon.spy();

    const { container } = render(
      <div>
        <div id="foo" />
        <FloatingContent trigger={Trigger} isShown onToggle={onToggleSpy}>
          some text here
        </FloatingContent>
      </div>,
    );

    const externalDiv = container.querySelector('#foo');

    fireEvent.click(externalDiv);

    expect(onToggleSpy.calledOnce).to.be.true;
  });
});
