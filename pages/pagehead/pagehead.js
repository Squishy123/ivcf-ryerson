import Head from 'next/head';

export default class PageHead extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <title>IVCF | Ryerson University</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <link rel="icon" href="/static/favicon.png"/>

                <script defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js" integrity="sha384-0pzryjIRos8mFBWMzSSZApWtPl/5++eIfzYmTgBBmXYdhvxPc+XcFEk+zJwDgWbP" crossorigin="anonymous"></script>
                <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Work+Sans|Raleway|Roboto" rel="stylesheet"/>
                <link href="css/styles.css" rel="stylesheet"/>
            </Head>
        )
    }
}