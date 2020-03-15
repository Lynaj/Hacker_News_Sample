import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Body extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: props.comments
        }

    }

    render() {
        var number_of_comments = 0
        if(this.state.comments != undefined) {
            number_of_comments = this.state.comments.length
        }

        return (
            <Fragment>
                <tr>
                    <td colspan="2"></td>
                    <td class="subtext">
                        <span class="score" id="score_{this.props.id}">
                            { this.props.score } points
                        </span> 
                            by 
                        <a href="user?id=pseudolus" class="hnuser">
                            pseudolus
                        </a> <span class="age"><a href="item?id={this.props.id}">
                            1 hour ago
                        </a></span> <span id="unv_{this.props.id}"></span> 
                            |
                        <a href="hide?id={this.props.id}&amp;goto=news">
                            hide
                        </a> 
                            |
                        <a href="item?id={this.props.id}">
                            discuss
                        </a>              
                        |
                        <a href="item?id={this.props.id}">
                            { number_of_comments }
                            comments
                        </a>
                    </td>
                </tr>
            </Fragment>
        )
    }
}