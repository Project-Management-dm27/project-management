import React, { Component } from 'react';

class Footer extends Component {
    constructor() {
        super();

        this.state = {
            footer: 'footer'
        }
    }

    render() {
        return(
            <footer>
                This is the {this.state.footer}!!
            </footer>
        )
    }
}

export default Footer;