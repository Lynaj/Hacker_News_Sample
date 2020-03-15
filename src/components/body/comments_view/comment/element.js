import React, { Component, Fragment } from 'react';

export default class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            converted_date: "14 minutes ago",
            text: this.props.text,
            author: this.props.author,
            id: this.props.id
        }
    }

    render() {
        return (
            <tr class="athing comtr" id="{this.state.id}">
                <td>
                    <table border="0"> 
                        <tbody>
                            <tr>
                                <td class="ind">
                                    <img src="s.gif" width="{ indentation_value }" height="1" />
                                </td>
                                <td class="votelinks" valign="top">
                                    <center>
                                        <a id="up_{this.state.id}" href="vote?id={this.state.id}&amp;how=up&amp;goto=item%3Fid%3D22582444">
                                            <div class="votearrow" title="upvote">
                                            </div>
                                        </a>
                                    </center>
                                </td>
                                <td class="default">
                                    <div style="margin-top:2px; margin-bottom:-10px;">
                                        <span class="comhead">
                                            <a href="user?id=Dowwie" class="hnuser">
                                                { this.state.author }
                                            </a>
                                            <span class="age">
                                                <a href="item?id={this.state.id}">
                                                    { this.state.converted_date }
                                                </a>
                                            </span> 
                                            <span id="unv_{this.state.id}"></span>
                                            <span class="par"></span>
                                            <a class="togg" n="1" href="javascript:void(0)" onclick="return toggle(event, {this.state.id})">[-]</a>
                                            <span class="storyon"></span>
                                        </span>
                                    </div>
                                    <br/>
                                    <div class="comment">
                                        <span class="commtext c00">
                                            { this.state.text }
                                        </span>
                                        <div class="reply">
                                            <p>
                                                <font size="1">
                                                    <u>
                                                        <a href="reply?id={this.state.id}&amp;goto=item%3Fid%3D22582444%23{this.state.id}">
                                                            reply
                                                        </a>
                                                    </u>
                                                </font>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        )
    }
}