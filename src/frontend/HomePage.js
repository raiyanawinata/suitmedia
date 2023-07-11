import React, { Component } from 'react';
import HeaderNav from './components/header/HeaderNav';
import 'bootstrap/dist/css/bootstrap.min.css';

import CarouselNav from './components/carousel/CarouselNav';
import CardNav from './components/card/CardNav';
import FormNav from './components/form/FormNav';
import FooterNav from './components/footer/FooterNav';

class HomePage extends Component {
    render() {
        return (
            <div>
                <HeaderNav/>
                <CarouselNav/>
                <CardNav/>
                <FormNav/>
                <FooterNav/>
            </div>
        );
    }
}

export default HomePage;

