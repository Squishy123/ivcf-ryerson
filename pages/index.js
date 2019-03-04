import styles from './index.scss';

import Container from './container/container.js';

import NavBar from './navbar/navbar.js';

import Backdrop from './backdrop/backdrop.js';

import PageHead from './pagehead/pagehead.js';

import Button from './button/button.js';

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

        <div className={styles.page}>
        <div className={styles.hero1}>
        <div className={styles.panel}>
            <h1 className={styles.display1}>IVCF at Ryerson University</h1>
            <Button><p className={styles.subtitle2}>Visit Us On Campus</p></Button>
            </div>
       </div>
            <div className={styles.hero2}>
            </div>
        </div>
    </div>
);