import { ToggleButtonProps } from '@react-types/button';
import { CSSProperties, ReactNode } from 'react';

export interface Props extends ToggleButtonProps {
  /**
   * String that displays the label of this checkbox.
   */
  label?: string;
  /**
   * Custom class for overriding this component's CSS.
   */
  className?: string;

  /**
   * Custom id for overriding this component's CSS.
   */
  id?: string;

  /**
   * Custom style for overriding this component's CSS.
   */
  style?: CSSProperties;

  /**
   * Boolean to describe if checkbox is selected.
   */
  isSelected?: boolean;

  /**
   * Boolean to describe if checkbox is disabled.
   */
  disabled?: boolean;

  /**
   * Boolean to describe if checkbox is indeterminate.
   */
  isIndeterminate?: boolean;
}
