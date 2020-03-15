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
                <tr>
                <td colspan="2"></td>
                <td class="subtext">
                    <span class="score" id="score_{ this.props.id }">
                        1 point
                    </span> 
                    by 
                    <a href="user?id=h1x" class="hnuser">
                        h1x
                    </a>
                    <span class="age">
                        <a href="item?id={ this.props.id }">
                            16 days ago
                        </a>
                    </span> 
                    <span id="unv_{ this.props.id }"></span> 
                        | 
                    <a href="https://hn.algolia.com/?query=New%20RCE%20in%20OpenSMTPD%E2%80%99s%20default%20install&amp;sort=byDate&amp;dateRange=all&amp;type=story&amp;storyText=false&amp;prefix&amp;page=0" class="hnpast">
                        past
                    </a> 
                        | 
                    <a href="https://www.google.com/search?q=New%20RCE%20in%20OpenSMTPD%E2%80%99s%20default%20install">
                        web
                    </a> 
                </td>
                </tr>
                <tr class="spacer" style={{ 'height':'5px' }}>
                </tr>
            </Fragment>
        )       
    };
}