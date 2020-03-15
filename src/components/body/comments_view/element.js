import React, { Component, Fragment } from 'react';

export default class CommentsView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list_of_comments = [
                {
                    "by" : "norvig",
                    "id" : 2921983,
                    "kids" : [ 2922429, 2921980],
                    "parent" : 2921506,
                    "text" : "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
                    "time" : 1314211127,
                    "type" : "comment"
                },
                {
                    "by" : "spenrose",
                    "id" : 2922429,
                    "parent" : 2921983,
                    "text" : "Three of the five, by my debatable assessment, use technology to have a direct impact on human lives. Really impressed to see YC going after \"stuff that matters\".",
                    "time" : 1314211126,
                    "type" : "comment"
                },
                {
                    "by" : "msencenb",
                    "id" : 2921980,
                    "kids" : [ 2921933 ],
                    "parent" : 2921983,
                    "text" : "There are demos on the pricing page... although I should probably put them on the home page also now that you mention it.",
                    "time" : 1314211116,
                    "type" : "comment"
                },
                {
                    "by" : "xddd",
                    "id" : 2921933,
                    "parent" : 2921980,
                    "text" : "There are demos on the pricing page... although I should probably put them on the home page also now that you mention it.",
                    "time" : 1314211116,
                    "type" : "comment"
                }
            ]
        }
    }

    assign_kid_comments_to_parents = () => {
        var final_list_of_comments
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }
    }
    


    render() {
        return (
            <tbody>
            CommentsView
            </tbody>
        );
    }
}