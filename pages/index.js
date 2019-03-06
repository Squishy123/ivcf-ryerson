import styles from './index.scss';

import Container from './container/container.js';

import NavBar from './navbar/navbar.js';

import Backdrop from './backdrop/backdrop.js';

import PageHead from './pagehead/pagehead.js';

import Button from './button/button.js';

import Link from 'next/link';

import ScrollNav from './scrollnav/scrollnav.js';

export default () => (
    <div>
        <PageHead />
        <NavBar pages={[
            { href: "/", name: "home" },
            { href: "/about", name: "about" },
            { href: "/contact", name: "contact" }
        ]} logoSRC={"/static/ivcf-national-logo.png"}
        />
        <ScrollNav />

        <div className={styles.page}>
            <div className={`${styles.hero} ${styles.hero1}`}>
                <div className={styles.panel}>
                    <h1 className={styles.display1}>IVCF Ryerson</h1>
                    <Button href={"/about"}><p className={styles.subtitle2}>Visit Us On Campus</p></Button>
                </div>
            </div>
            <div className={`${styles.hero} ${styles.hero2}`}>
                <div className={styles.panel}>
                    <h1 className={styles.display2}>Who Are We</h1>
                    <div className={styles.row}>
                        <div className={styles.item}>
                            <i className="fas fa-globe-americas fa-4x" />
                            <p className={styles.para2}>Here at InterVarsity Christian Fellowship at Ryerson University, we create Christian communities on campus where students can explore, discover, and deepen their faith, develop friendships, and make a difference in the world.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.hero} ${styles.hero3}`}>
                <div className={styles.panel}>
                    <h1 className={styles.display2}>What We Do</h1>
                    <div className={styles.row}>
                        <div className={styles.item}>
                            <i className={"icon fas fa-thumbs-up fa-4x"} />
                            <p className={styles.para2}>
                                Meet with us on a weekly basis for Bible Study and Prayer where we dig deeper into the Word to uncover truths and how we can live it out on a daily basis.
                            </p>
                        </div>
                        <div className={styles.item}>
                            <i className={"icon fas fa-bible fa-4x"} />
                            <p className={styles.para2}>
                                Each semester we focus on a different theme, topic, or book in the Bible, but we tailor each individual study so that if you’ve missed one you are still able to and welcome to participate.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
            <div className={`${styles.hero} ${styles.hero4}`}>
                <div className={styles.panel}>
                    <h1 className={styles.display2}>Our Calendar</h1>
                    <div className={styles.row}>
                        <div className={styles.item}>
                            <i className={"icon far fa-calendar-alt fa-4x"} />
                            <p className={styles.para2}>
                                Join us every Wednesday at 12pm to 2pm & Thursday at 6pm to 8pm.
                                <br />Stay Tuned for Social Events and Activities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.hero} ${styles.hero5}`}>
                <div className={styles.panel}>
                    <h1 className={styles.display2}>Get In Touch</h1>
                    <div className={styles.row}>
                        <div className={styles.item}>
                            <i className="far fa-hand-peace fa-4x" />
                            <p className={styles.para2}>
                                Have any questions or just want to chat?
                                Send us an email at ivcf@ryerson.ca or connect with us on any of our social media accounts.
                            </p>
                            <div className={styles.socialMedia}>
                                <a href="https://www.facebook.com/groups/2218827685/about/">
                                    <i className="fab fa-facebook fa-3x" />
                                </a>
                                <a href="https://twitter.com/@RIVCF">
                                    <i className="fab fa-twitter-square fa-3x" />
                                </a>
                                <a href="https://www.instagram.com/ivcf.ryerson/?hl=en">
                                    <i className="fab fa-instagram fa-3x" />
                                </a>
                                <a href="mailto:ivcf.ryerson@gmail.com">
                                    <i className="fas fa-envelope-square fa-3x" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.footer}`}>
                <p className={styles.para3}>@2019 Inter-Varsity Christian Fellowship Ryerson</p>
            </div>
        </div>
    </div>
);