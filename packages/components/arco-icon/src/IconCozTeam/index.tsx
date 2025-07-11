import React, { ForwardedRef, useContext } from 'react';

import { OriginIconProps } from '../type';
import { Context } from '../context';

function IconCozTeamComponent(
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
      className={`${prefix}-icon ${prefix}-icon-coz_team${loadingKls} ${className}`}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={useCurrentColor ? 'currentColor' : '#000'}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      ref={ref}
    >
      <path d="M8.5 5C7.12 5 6 6.1195 6 7.5C6 8.8805 7.12 10 8.5 10C9.88 10 11 8.8805 11 7.5C11 6.1195 9.88 5 8.5 5ZM4 7.5C4 5.0145 6.015 3 8.5 3C10.985 3 13 5.0145 13 7.5C13 9.9855 10.985 12 8.5 12C6.015 12 4 9.9855 4 7.5ZM5.835 15C4.015 15 2.5 16.4985 2.5 18.4V20H14.5V18.4C14.5 16.4985 12.985 15 11.165 15H5.835ZM0.5 18.4C0.5 15.4175 2.89 13 5.835 13H11.165C14.11 13 16.5 15.4175 16.5 18.4V20C16.5 21.1 15.6 22 14.5 22H2.5C1.4 22 0.5 21.1 0.5 20V18.4ZM22.5 21H18.365V19H21.5V18.4C21.5 17.398 20.655 16.5 19.5 16.5H18.19C18 15.761 17.66 15.083 17.205 14.5H19.5C21.71 14.5 23.5 16.246 23.5 18.4L23.5 20C23.5248 20.5354 23.0094 21.0191 22.5 21ZM16.5 10C16.5 9.4475 16.95 9 17.5 9C18.05 9 18.5 9.4475 18.5 10C18.5 10.5525 18.05 11 17.5 11C16.95 11 16.5 10.5525 16.5 10ZM17.5 7C15.845 7 14.5 8.343 14.5 10C14.5 11.657 15.845 13 17.5 13C19.155 13 20.5 11.657 20.5 10C20.5 8.343 19.155 7 17.5 7Z" />
    </svg>
  );
}

const IconCozTeam = React.forwardRef(IconCozTeamComponent);
export default IconCozTeam;
