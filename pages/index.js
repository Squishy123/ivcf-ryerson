import styles from './index.scss';

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

        <div className={styles.page}>
        <div className={styles.hero1}>
            <h1 className={styles.display1}>Intervarsity Christian Fellowship at Ryerson</h1>
        </div>
            <div className={styles.hero2}>
            </div>
        </div>
    </div>
);