import React, { Component, Fragment } from 'react';
import Comment from './comment/element';

export default class CommentsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            final_list_of_comments: [],
            post_kids: [ 2921983 ],
            indentation_value: 0,
            list_of_comments: [
                {
                    "by" : "norvig",
                    "id" : 2921983,
                    "kids" : [ 2922429, 2921980],
                    "parent" : 8861,
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
        
        this.assign_kid_comments_to_parents = this.assign_kid_comments_to_parents.bind(this);
        this.assign_kid_comments_to_parents();
    }

    assign_kid_comments_to_parents = (element_to_add, child_element=false) => {
        // 1 build.
        // 2 sort by relevance.
        
        while(this.state.list_of_comments.length > 0) {
            const element = this.state.list_of_comments.pop()

            // this.state.indentation_value
            var indentation_value = this.state.indentation_value.toString()
            if(indentation_value == true) {
                this.state.final_list_of_comments.append(
                    <Comment 
                        author={element.by}
                        date={element.time}
                        text={element.text}
                        id={element.id}
                        indentation_value={indentation_value}
                    />
                )
            } else {
                this.state.final_list_of_comments.append(
                    <Comment 
                        author={element.by}
                        date={element.time}
                        text={element.text}
                        id={element.id}
                        indentation_value={indentation_value}
                    />
                )
            }
            

            if(element.kids.length > 0) {
                this.state.indentation_value += 20;
                this.assign_kid_comments_to_parents = this.assign_kid_comments_to_parents.bind(this);
                this.assign_kid_comments_to_parents(element.kids[0], true)
            } else {
                return;
            }
            if(this.state.indentation_value > 0) {
                this.state.indentation_value -= 20;
            }
        }
    }
    
    render() {
        return (
            <tbody>
                hello comments_view
                { this.state.final_list_of_comments }
            </tbody>
        );
    }
}