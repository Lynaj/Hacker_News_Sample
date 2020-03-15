import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Body extends React.Component {
    render() {
      return (
            <Fragment>
                <tr class="athing" id="{ this.props.id }">
                <td class="title" valign="top" align="right">
                    <span class="rank"></span>
                </td>
                <td class="votelinks" valign="top">
                    <center>
                        <a id="up_{ this.props.id }" href="vote?id={ this.props.id }&amp;how=up&amp;goto=from%3Fsite%3Dhelpnetsecurity.com">
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