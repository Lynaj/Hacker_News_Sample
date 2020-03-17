import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Body extends React.Component {
    
    constructor(props) {
        super(props);
    }
    

    render() {

        const href_id = ("up_" + this.props.id)
        const vote_id = ("vote?id=" + this.props.id)

      return (
            <Fragment>
                <Link to="/">Home</Link>

                <tr class="athing" id={ this.props.id }>
                <td class="title" valign="top" align="right">
                    <span class="rank"></span>
                </td>
                <td class="votelinks" valign="top">
                    <center>
                        <a id={ href_id } href={ vote_id }>
                            <div class="votearrow" title="upvote"></div>
                        </a>
                    </center>
                </td>
                <td class="title">
                    <a href={ this.props.url } class="storylink" rel="nofollow">
                        { this.props.title }
                    </a>
                </td>
                </tr>
                
            </Fragment>
        )
    };
}