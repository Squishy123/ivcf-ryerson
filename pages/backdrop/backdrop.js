import styles from './backdrop.scss';

export default class Backdrop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.backdrop}>
                {this.props.children}
            </div>
        )
    }
}