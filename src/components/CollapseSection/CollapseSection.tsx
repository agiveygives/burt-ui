import React, { FC, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import StyledCollapseSection from './CollapseSection.styles';
import { CollapseSectionTypes } from './CollapseSection.types';

const CollapseSection: FC<CollapseSectionTypes> = ({
  headerText, isCollapsed, className, variation, children
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(isCollapsed || false);
  const contentElementRef = useRef<HTMLDivElement>(null);

  const collapseSection = (element: HTMLDivElement) => {
    var sectionHeight = element.scrollHeight;

    var elementTransition = element.style.transition;
    element.style.transition = '';

    requestAnimationFrame(() => {
      element.style.height = sectionHeight + 'px';
      element.style.transition = elementTransition;

      requestAnimationFrame(() => {
        element.style.height = 0 + 'px';
      });
    });

    element.setAttribute('aria-hidden', 'true');
  }

  const expandSection = (element: HTMLDivElement, eventListener: () => void) => {
    var sectionHeight = element.scrollHeight;

    if (sectionHeight > 0) {
      element.style.height = sectionHeight + 'px';

      element.addEventListener('transitionend', eventListener, { once: true });

      element.setAttribute('aria-hidden', 'false');
    }
  }

  useEffect(() => {
    if (isCollapsed !== undefined) {
      setCollapsed(isCollapsed);
    }
  }, [isCollapsed]);

  useEffect(() => {
    const contentElement = contentElementRef.current;

    const expandTransitionEndListener = () => {
      if (contentElement) {
        contentElement.style.height = 'auto'
      }
    }

    if (contentElement) {
      if (collapsed) {
        collapseSection(contentElement);
      } else {
        expandSection(contentElement, expandTransitionEndListener);
      }
    }

    return () => {
      contentElement?.removeEventListener('transitionend', expandTransitionEndListener)
    }
  }, [collapsed]);

  return (
    <StyledCollapseSection className={className} variation={variation}>
      <div
        className='section-header'
        tabIndex={0}
        onClick={() => setCollapsed((oldState) => !oldState)}
      >
        <FontAwesomeIcon
          className={classNames(
            'header-icon',
            { 'collapsed-icon': collapsed }
          )}
          icon={faCaretDown}
        />
        <h2>{headerText}</h2>
      </div>

      <div
        className='content'
        ref={contentElementRef}
      >
        {children}
      </div>
    </StyledCollapseSection>
  );
}

CollapseSection.defaultProps = {
  isCollapsed: false,
  variation: 'secondary',
}

export default CollapseSection;
