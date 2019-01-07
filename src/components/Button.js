import React from 'react';
import { classNames } from '../util/commonUtil'

import '../css/button.scss';

/**
 * @description 상단 헤더 부분 Nav Button 구현
 */
const Button = ({ children = "Button", type = "nav", to = "" }) => {
    return (
        <a href={to}>
            <div className={type.toLowerCase() === "nav" ? classNames(`defaultClass, buttonContainer`) : classNames(`defaultClass, ${type}`)} >
                {children}
            </div>
        </a>
    );
}

const movePage = (e) => {
}

export default Button;