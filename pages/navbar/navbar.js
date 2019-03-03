import styles from './navbar.scss';

import Link from 'next/link';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.navbarContainer}>
                <div className={styles.navbar}>
                    <div className={styles.logoContainer}>
                        <img src={this.props.logoSRC} className={styles.logo}/>
                    </div>
                    <div className={styles.pages}>
                        {this.props.pages.map((p) => (
                            <Link href={p.href} key={p.name}>
                                <p className={styles.navbarLink}>{p.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}