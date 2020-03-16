import React, { Component, Fragment } from 'react';
import Comment from './comment/element';

export default class CommentsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            final_list_of_comments: [],
            list_of_parent_comments: [],
            local_list_of_parents_id: [],
            post_kids: [ 2921983 ],
            indentation_value: 0,
            list_of_comments: [
                {
                    "by" : "test12",
                    "id" : 20391293,
                    "parent" : 8861,
                    "text" : "Tell me tomorrow",
                    "time" : 1314211127,
                    "indentation_value": 0,
                    "type" : "comment"
                },
                {
                    "by" : "norvig",
                    "id" : 2921983,
                    "kids" : [ 2922429, 2921980],
                    "parent" : 8861,
                    "text" : "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
                    "time" : 1314211127,
                    "indentation_value": 0,
                    "type" : "comment"
                },
                {
                    "by" : "spenrose",
                    "id" : 2922429,
                    "parent" : 2921983,
                    "text" : "Three of the five, by my debatable assessment, use technology to have a direct impact on human lives. Really impressed to see YC going after \"stuff that matters\".",
                    "time" : 1314211126,
                    "indentation_value": 0,
                    "type" : "comment"
                },
                {
                    "by" : "msencenb",
                    "id" : 2921980,
                    "kids" : [ 2921933 ],
                    "parent" : 2921983,
                    "text" : "There are demos on the pricing page... although I should probably put them on the home page also now that you mention it.",
                    "time" : 1314211116,
                    "indentation_value": 0,
                    "type" : "comment"
                },
                {
                    "by" : "xddd",
                    "id" : 2921933,
                    "parent" : 2921980,
                    "kids": [ 192302 ],
                    "text" : "There are demos on the pricing page... although I should probably put them on the home page also now that you mention it.",
                    "time" : 1314211116,
                    "indentation_value": 0,
                    "type" : "comment"
                },
                {
                    "by" : "SwellJoe",
                    "id" : 192302,
                    "parent" : 2921980,
                    "text" : "I never understand these text editor questions that come up every few days on every site about hacking.<p>There are two text editors: vim and emacs<p>Editing text is a solved problem.  Pick one, and get back to work.",
                    "time" : 1210979615,
                    "indentation_value": 0,
                    "type" : "comment"
                }
            ]
        }
        
        this.assign_kid_comments_to_parents = this.assign_kid_comments_to_parents.bind(this);
        this.format_list_of_parent_comments();
        console.log(this.state.list_of_parent_comments);
        this.assign_kid_comments_to_parents();
        this.assign_not_linked_comments();
    }

    format_list_of_parent_comments = () => {
        // Querying all comments having kid objects attached to it 
        var local_list_of_comments = this.state.list_of_comments.filter(function (e) {
            return (e.kids !== undefined && e.kids.length > 0);
        });
        

        var mapped_ids = local_list_of_comments.map(x => x.id);
        // Fetching IDs of stored instances
        this.state.local_list_of_parents_id = mapped_ids;
        /* 
            Filtering out elements that do have parent stored in list_of_parent_comments.
            These cannot be parents on their own
        */
        var self = this;
        console.log('mapped_ids: ' + mapped_ids);
        var local_list_of_parent_comments = local_list_of_comments.filter(function (e) {
            return (e.parent !== undefined && self.state.local_list_of_parents_id.indexOf(e.parent) == -1);
        });

        /*
            Removing elements that are in the local_list_of_parent_comments
            from list_of_comments array
        */

        console.log('local_list_of_parent_comments: ' + local_list_of_parent_comments);
        
        this.state.list_of_parent_comments = local_list_of_parent_comments;

        for (let index = 0; index < local_list_of_parent_comments.length; index++) {
            const local_parent_element = local_list_of_parent_comments[index];
            this.state.list_of_comments.splice(
                this.state.list_of_comments.indexOf(local_parent_element),
                1
            )    
        }

        console.log('this.state.list_of_parent_comments: ' + this.state.list_of_parent_comments);
    }


    assign_not_linked_comments() {

        for (let index = 0; index < this.state.list_of_comments.length; index++) {
            const element = this.state.list_of_comments.pop();
            this.state.final_list_of_comments.push(
                <Comment
                    author={element.by}
                    date={element.time}
                    text={element.text}
                    id={element.id}
                    indentation_value={0}
                />
            )   
        }


        // Popping element from list_of_comments arra
        // var splitted_elemet = this.state.list_of_comments.splice(
        //     this.state.list_of_comments.indexOf(kid_element[0]),
        //     1
        // )
        
        
    }

    assign_kid_comments_to_parents(element_to_add=undefined) {
        // 1 build.
        // 2 sort by relevance.
        while(this.state.list_of_comments.length > 0) {
            var element = undefined;
            if(element_to_add != undefined) {
                element = element_to_add
            } else {
                if(this.state.list_of_parent_comments.length > 0)
                    element = this.state.list_of_parent_comments.pop()
                else
                    return
            }
            
            console.log('biore element: ' + JSON.stringify(element));
            console.log('indentation_value: ' + JSON.stringify(this.state.indentation_value));

            // this.state.indentation_value
            var indentation_value = this.state.indentation_value.toString();
            this.state.final_list_of_comments.push(
                <Comment
                    author={element.by}
                    date={element.time}
                    text={element.text}
                    id={element.id}
                    indentation_value={element.indentation_value}
                />
            )

            if(element.kids != undefined && element.kids.length > 0) {
                
                this.state.indentation_value += 20;
                const length_of_the_array = element.kids.length;
                for (let index = 0; index < length_of_the_array; index++) {
                    
                    this.assign_kid_comments_to_parents = this.assign_kid_comments_to_parents.bind(this);

                    var kid_element_id = element.kids.pop();
                    var kid_element = this.state.list_of_comments.filter(function (e) {
                        return (e.id == kid_element_id);
                    });
                    
                    console.log('zlecam element ( parent: ' + JSON.stringify(element) + ') ');
                    console.log('kid element ' + JSON.stringify(kid_element[0]));

                    // Popping element from list_of_comments arra
                    var splitted_elemet = this.state.list_of_comments.splice(
                        this.state.list_of_comments.indexOf(kid_element[0]),
                        1
                    )

                    kid_element[0].indentation_value = element.indentation_value + 20;

                    console.log('Usuwam element: ' + JSON.stringify(splitted_elemet));
                    console.log('po usunieciu: ' + JSON.stringify(this.state.list_of_comments));
                    
                    this.assign_kid_comments_to_parents(kid_element[0]);
                }
            }

            // if(this.state.indentation_value > 0) {
            //     this.state.indentation_value -= 20;
            // }
            
            return;
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