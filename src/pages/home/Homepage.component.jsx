import React, {Component} from 'react';
import './homepage.styles.scss';
import Directory from "../../components/directory/Directory";
class HomepageComponent extends Component {
    render() {
        return (
            <div className="homepage">
                <Directory/>
            </div>
        );
    }
}

export default HomepageComponent;