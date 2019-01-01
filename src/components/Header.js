import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { classNames } from '../util/commonUtil'

import '../css/header.css';

/**
 * @description 상단 헤더 부분 구현
 */
export default class Header extends React.Component {
    static propTypes = {
        children: PropTypes.func
    };

    render() {
        const { title = "Header" } = this.props;

        return (
            <>
                <div className={classNames('HeaderTitle, test')}>
                    {/* Header Title */}
                    <h1>
                        <Link
                            to="/"
                            style={{
                                textDecoration: 'none'
                            }}
                        >
                            {title}
                        </Link>
                    </h1>

                    <div>
                        {/* 상위 버튼 넣을 공간 또는 다른 것을 넣을 공간 */}
                        {this.props.children}
                    </div>
                </div>
            </>
        );
    }
}
