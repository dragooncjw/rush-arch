import React, { ForwardedRef, useContext } from 'react';

import { OriginIconProps } from '../type';
import { Context } from '../context';

function IconCozLocationComponent(
  props: OriginIconProps,
  ref: ForwardedRef<SVGSVGElement>,
) {
  const { prefix: prefixFromContext } = useContext(Context);
  const {
    className = '',
    prefix: prefixFromProps,
    width = '1em',
    height = '1em',
    useCurrentColor = true,
    spin,
    ...rest
  } = props;

  const prefix = prefixFromProps || prefixFromContext || 'icon';
  const loadingKls = spin ? ` ${prefix}-icon-loading` : '';
  return (
    <svg
      className={`${prefix}-icon ${prefix}-icon-coz_location${loadingKls} ${className}`}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={useCurrentColor ? 'currentColor' : '#000'}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      ref={ref}
    >
      <path d="M20 10.5C20 6.08172 16.4183 2.5 12 2.5C7.58172 2.5 4 6.08172 4 10.5C4 13.783 6.58215 17.3438 12.0013 21.0925C17.419 17.3528 20 13.7927 20 10.5ZM12.5566 23.133C12.2198 23.3583 11.7804 23.3581 11.4438 23.1324C5.14794 18.9115 2 14.7007 2 10.5C2 4.97715 6.47715 0.5 12 0.5C17.5228 0.5 22 4.97715 22 10.5C22 14.711 18.8522 18.922 12.5566 23.133ZM12 14.5C9.79086 14.5 8 12.7091 8 10.5C8 8.29086 9.79086 6.5 12 6.5C14.2091 6.5 16 8.29086 16 10.5C16 12.7091 14.2091 14.5 12 14.5ZM12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z" />
    </svg>
  );
}

const IconCozLocation = React.forwardRef(IconCozLocationComponent);
export default IconCozLocation;
