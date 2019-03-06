import styles from './scrollnav.scss';

export default class ScrollNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollPositionY: 0
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.toggleScroll = this.toggleScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        this.setState({ scrollPositionY: window.scrollY });
    }

    toggleScroll() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <div>
                {(this.state.scrollPositionY > 100) ? (
                    <div className={styles.scrollNav} onClick={this.toggleScroll}>
                        <div className={styles.scrollArrow} />
                        <label className={styles.scrollLabel}>
                            TOP
                </label>
                    </div>) : null
                }
            </div>
        )
    }
}