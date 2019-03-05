import styles from './navbar.scss';

import Link from 'next/link';

import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.body = null;
        this.mediaCheck = null;

        this.state = {
            menuExpanded: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.changeView = this.changeView.bind(this);
    }

    changeView(e) {
        if(e.matches) {
            this.setState({menuExpanded: false});
            clearAllBodyScrollLocks();
        }
    }

    componentDidMount() {
        this.body = document.querySelector('body');

        //add listener for resets
        this.mediaCheck = window.matchMedia('(min-width: 576px)').addListener(this.changeView)
    }

    componentWillUnmount() {
        //clear if no longer needed
        clearAllBodyScrollLocks();

        //unbind listener
        this.mediaCheck.removeListener(this.changeView);
    }

    toggleMenu() {
        this.setState({ menuExpanded: !this.state.menuExpanded });
        if(!this.state.menuExpanded) 
            disableBodyScroll(this.body);
        else 
            enableBodyScroll(this.body);
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