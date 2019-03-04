import styles from './index.scss';

import Container from './container/container.js';

import NavBar from './navbar/navbar.js';

import Backdrop from './backdrop/backdrop.js';

import PageHead from './pagehead/pagehead.js';

import Button from './button/button.js';

export default () => (
    <div>
        <PageHead />
        <NavBar pages={[
            { href: "/", name: "home" },
            { href: "/about", name: "about" },
            { href: "/contact", name: "contact" }
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
                <div className={styles.panel}>
                <h1 className={styles.display2}>What We Do</h1>
                    <p className={styles.subtitle2}>
                        Meet with us on a weekly basis for Bible Study and Prayer where we dig deeper into the Word to uncover truths and how we can live it out on a daily basis.
                        Each semester we focus on a different theme, topic, or book in the Bible, but we tailor each individual study so that if you’ve missed one you are still able to and welcome to participate.
                </p>
                </div>
            </div>
        </div>
    </div>
);