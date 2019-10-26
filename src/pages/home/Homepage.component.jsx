import React, {Component} from 'react';
import Directory from "../../components/directory/Directory";
import {HomePage} from "./homepage.styles";

class HomepageComponent extends Component {
    render() {
        return (
            <HomePage>
                <Directory/>
            </HomePage>
        );
    }
}

export default HomepageComponent;