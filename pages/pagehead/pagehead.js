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
                <title>IVCF | RU</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <link rel="icon" href="res/favicon.png"/>

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"/>
                <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Work+Sans" rel="stylesheet"/>
                <link href="css/styles.css" rel="stylesheet"/>
            </Head>
        )
    }
}