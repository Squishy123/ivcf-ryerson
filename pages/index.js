import style from './index.scss';

import Container from './container/container.js';

import NavBar from './navbar/navbar.js';

import Backdrop from './backdrop/backdrop.js';

import PageHead from './pagehead/pagehead.js';

export default () => (
    <div>
        <PageHead/>
        <Backdrop>
        </Backdrop>
        <NavBar pages={[
            {href: "/", name: "home"},
            {href: "/about", name: "about"},
            {href: "/contact", name: "contact"}
        ]} logoSRC={"/static/ivcf-national-logo.png"}
        />
        <Container>
        </Container>
    </div>
);