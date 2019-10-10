import React from 'react';
import {connect} from "react-redux";
import MenuItem from "../menu-item/MenuItem";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import "./directory.styles.scss"
const Directory = ({sections})=>((
            <div className="directory-menu">
                {
                    sections.map(({id,size,...sectionProps})=><MenuItem key={id} size={size?size:''} {...sectionProps} />)
                }
            </div>
        ));
    const mapStateToProps=createStructuredSelector({
        sections:selectDirectorySections
    })
export default connect(mapStateToProps)(Directory);