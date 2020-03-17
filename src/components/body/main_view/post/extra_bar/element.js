import React, { Component, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

function BarExtension(props) {

    const calculate_props_vaue = () => {
        return props.value + 2
    }


    const [why, tellme] = useState(15);


    return (
        <Fragment>
            hello world { calculate_props_vaue }
        </Fragment>
    )
}

export default class ExtraBar extends React.Component {

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
                        </a> <span class="age"><a href="item/{this.props.id}">
                            1 hour ago
                        </a></span> <span id="unv_{this.props.id}"></span> 
                            |
                        <a href={`item/${this.props.id}`}>
                            hide
                        </a> 
                            |
                        <a href={`item/${this.props.id}`}>
                            discuss
                        </a>              
                        |
                        <a href={`item/${this.props.id}`}>
                            { number_of_comments }  comments
                        </a>
                    </td>
                </tr>
            </Fragment>
        )
    }
}