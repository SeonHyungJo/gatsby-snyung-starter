import React from 'react';
import Link from 'gatsby-link';
import { classNames } from '../util/commonUtil'

import '../css/_button.scss';

/**
 * @description 상단 헤더 부분 구현
 */
const Button = ({ children = "Button", type = "nav" }) => {
    return (
        <div className={type.toLowerCase() === "nav" ? classNames('ButtonContainer') : 'test'}>
            {children}
        </div >
    );
}

export default Button;