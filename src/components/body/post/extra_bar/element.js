import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Body extends React.Component {

    // comments
    // time
    // score
    
    render() {

        return (
            <Fragment>
                <tr>
                    <td colspan="2"></td>
                    <td class="subtext">
                        <span class="score" id="score_22582067">
                            { this.props.score } points
                        </span> 
                            by 
                        <a href="user?id=pseudolus" class="hnuser">
                            pseudolus
                        </a> <span class="age"><a href="item?id=22582067">
                            1 hour ago
                        </a></span> <span id="unv_22582067"></span> 
                            |
                        <a href="hide?id=22582067&amp;goto=news">
                            hide
                        </a> 
                            |
                        <a href="item?id=22582067">
                            discuss
                        </a>              
                        |
                        <a href="item?id=22579719">
                            { this.props.comments }
                            comments
                        </a>
                    </td>
                </tr>
            </Fragment>
        )
    }
}