import Link from 'next/link';

import styles from './button.scss';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link href={this.props.href}>
                <a className={styles.button}>
                    {this.props.children}
                </a>
            </Link>
        )
    }
}