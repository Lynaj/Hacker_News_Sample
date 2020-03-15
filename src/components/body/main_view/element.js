import React, { Component, Fragment } from 'react';
import Post from './post/element'
import ExtraBar from './post/extra_bar/element'

export default class Body extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        posts: [
            { 
                "by" : "dhouston",
                "descendants" : 71,
                "id" : 8863,
                "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
                "score" : 111,
                "time" : 1175714200,
                "title" : "My YC app: Dropbox - Throw away your USB drive",
                "type" : "story",
                "url" : "http://www.getdropbox.com/u/2/screencast.html"
            },
            {
                "by" : "joshwa",
                "id" : 8862,
                "parent" : 8859,
                "text" : "I've seen this before in business plans and such... the being paid in preferred shares part is new to me; I've seen it as deferred compensation accumulating as a liability for the company to be paid in cash at some later date. I suppose being paid in preferred shares makes sense if you are expecting acquisition or a later VC rounds, whereas deferred cash comp. makes sense in a cash-only organic growth situation, and gets factored into your break-even calcs. ",
                "time" : 1175713872,
                "type" : "comment"
            },
            {
                "by" : "danw",
                "descendants" : 0,
                "id" : 8861,
                "score" : 9,
                "time" : 1175713744,
                "title" : "Interface Design Juggling - great advice on typography, color schemes, microformats and more [.pdf]",
                "type" : "story",
                "url" : "http://www.simplebits.com/publications/speak/juggling/"
            }
        ]
    };

    
    
    // this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
    }
    

  render() {

    return (
        <tbody>
            {this.state.posts.map((el, idx) => (
                <Fragment>
                    <Post
                        key={el.id}
                        title={el.title}
                        by={el.by}
                        descendants={el.descendants}
                        id={el.id}
                        score={el.score}
                        time={el.time}
                        title={el.title}
                        type={el.type}
                        url={el.url}
                    />
                    <ExtraBar
                        id={el.id}
                        comments={el.kids}
                        time={el.time}
                        score={el.score}
                    />
                </Fragment>
            ))}

        </tbody>
    );
  }
}