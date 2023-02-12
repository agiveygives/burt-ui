import { ReactNode } from 'react';

export type StyledCollapseSectionTypes = {
  variation: 'primary' | 'secondary' | 'ghost';
}

export type CollapseSectionTypes = {
  headerText: string;
  isCollapsed?: boolean;
  className?: string;
  children: ReactNode;
} & StyledCollapseSectionTypes;