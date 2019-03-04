import styles from './navbar.scss';

import Link from 'next/link';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuExpanded: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menuExpanded: !this.state.menuExpanded });
    }

    render() {
        return (
            <div className={styles.navbarContainer}>
                <div className={styles.navbar}>
                    <div className={styles.logoContainer}>
                        <img src={this.props.logoSRC} className={styles.logo}/>
                    </div>
                    <div className={`${styles.pages} ${(this.state.menuExpanded) ? styles.pagesExpanded : ""}`}>
                        {this.props.pages.map((p) => (
                            <Link href={p.href} key={p.name}>
                                <a className={styles.navbarLink}>{p.name}</a>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={`${styles.toggler} ${(this.state.menuExpanded) ? styles.menuExpand : ""}`} onClick={this.toggleMenu}>
                    <div className={styles.bar1}/>
                    <div className={styles.bar2}/>
                    <div className={styles.bar3}/>
                </div>
            </div>
        )
    }
}