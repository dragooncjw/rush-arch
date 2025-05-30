//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import React, { ForwardedRef, useContext } from 'react';
import { OriginIconProps } from '../type';
import { Context } from '../context';

function IconCozImageExtendComponent(props: OriginIconProps, ref: ForwardedRef<SVGSVGElement>) {
    const { prefix: prefixFromContext } = useContext(Context);
    const { className = '', prefix: prefixFromProps, width = '1em', height = '1em', useCurrentColor = true, spin, ...rest } = props;

    const prefix = prefixFromProps || prefixFromContext || 'icon';
    const loadingKls = spin ? ` ${prefix}-icon-loading` : '';
    return <svg className={`${prefix}-icon ${prefix}-icon-coz_image_extend${loadingKls} ${className}`} width={width} height={height} viewBox="0 0 24 24" fill={useCurrentColor ? 'currentColor' : '#000'} xmlns="http://www.w3.org/2000/svg" {...rest} ref={ref}><path d="M2.25 7.25C2.25 7.80228 2.69772 8.25 3.25 8.25 3.80228 8.25 4.25 7.80229 4.25 7.25L4.25 5.0918 6.33579 7.17758C6.72631 7.56811 7.35948 7.56811 7.75 7.17758 8.14052 6.78706 8.14052 6.15389 7.75 5.76337L5.73663 3.75 7.75 3.75C8.30228 3.75 8.75 3.30229 8.75 2.75 8.75 2.19772 8.30228 1.75 7.75 1.75H4.25C3.14543 1.75 2.25 2.64543 2.25 3.75L2.25 7.25zM16.5 2C15.9477 2 15.5 2.44772 15.5 3 15.5 3.55228 15.9477 4 16.5 4H18.6582L16.5724 6.08579C16.1819 6.47631 16.1819 7.10948 16.5724 7.5 16.9629 7.89052 17.5961 7.89052 17.9866 7.5L20 5.48663V7.5C20 8.05228 20.4477 8.5 21 8.5 21.5523 8.5 22 8.05228 22 7.5V4C22 2.89543 21.1046 2 20 2H16.5zM7.5 21.5C8.05228 21.5 8.5 21.0523 8.5 20.5 8.5 19.9477 8.05229 19.5 7.5 19.5H5.3418L7.42758 17.4142C7.81811 17.0237 7.81811 16.3905 7.42758 16 7.03706 15.6095 6.40389 15.6095 6.01337 16L4 18.0134 4 16C4 15.4477 3.55228 15 3 15 2.44772 15 2 15.4477 2 16V19.5C2 20.6046 2.89543 21.5 4 21.5H7.5zM20.75 15.25C21.3023 15.25 21.75 15.6977 21.75 16.25V19.75C21.75 20.8546 20.8546 21.75 19.75 21.75H16.25C15.6977 21.75 15.25 21.3023 15.25 20.75 15.25 20.1977 15.6977 19.75 16.25 19.75H18.2634L16.25 17.7366C15.8595 17.3461 15.8595 16.7129 16.25 16.3224 16.6405 15.9319 17.2737 15.9319 17.6642 16.3224L19.75 18.4082V16.25C19.75 15.6977 20.1977 15.25 20.75 15.25zM10 8C9.44772 8 9 8.44772 9 9V14C9 14.5523 9.44772 15 10 15H15C15.5523 15 16 14.5523 16 14V9C16 8.44772 15.5523 8 15 8H10z"/></svg>;
}

const IconCozImageExtend = React.forwardRef(IconCozImageExtendComponent);
export default IconCozImageExtend;
