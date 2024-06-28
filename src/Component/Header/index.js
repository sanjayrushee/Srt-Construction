import React, { Component } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import './index.css';

class Header extends Component {
    state = {
        clickedMobileBtn: false
    }

    onClickMobileBtn = () => {
        this.setState(prevState => ({ clickedMobileBtn: !prevState.clickedMobileBtn }));
    }

    render() {
        const { clickedMobileBtn } = this.state;

        return (
            <div className='navbar-main'>
                <nav className='mobilenav'>
                    <div className="mobilenav__div">
                        <img src="./SRTLOGO.png" alt="logo" className="mobilenav__image" />
                        <button
                            type="button"
                            className="mobilenav__button"
                            onClick={this.onClickMobileBtn}
                            aria-label="Toggle navigation"
                        >
                            {clickedMobileBtn ? <MdClose className='mobilenav__icon' /> : <TiThMenuOutline className='mobilenav__icon' />}
                        </button>
                    </div>
                    <ul className={`mobilenav__list ${clickedMobileBtn ? "mobilenav__list--open" : "mobilenav__list--hidden"}`}>
                        <li className="mobilenav__item">HOME</li>
                        <li className="mobilenav__item">PROJECTS</li>
                        <li className="mobilenav__item">SERVICE</li>
                        <li className="mobilenav__item">ABOUT US</li>
                        <li className="mobilenav__item">CONTACT</li>
                    </ul>
                </nav>

                <nav className='navbar'>
                    <img src="./SRTLOGO.png" alt="logo" className="navbar__image" />
                    <ul className="navbar__list">
                        <li className="navbar__item">HOME</li>
                        <li className="navbar__item">PROJECTS</li>
                        <li className="navbar__item">SERVICE</li>
                        <li className="navbar__item">ABOUT US</li>
                        <li className="navbar__item">CONTACT</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
