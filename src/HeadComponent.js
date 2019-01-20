import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class HeadComponent extends Component {
    render() {
        return (
            <Helmet>
              <meta charset="utf-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
              <title>IdeaBox</title>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" 
                  integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" 
                  crossorigin="anonymous"/>
            </Helmet>
        );
    }
}

export default HeadComponent;