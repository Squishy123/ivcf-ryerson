import styles from './container.scss';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
                {this.props.children}
            </div>
        )
    }
}