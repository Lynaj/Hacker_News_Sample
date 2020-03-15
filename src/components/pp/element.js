import React, { Component, Fragment } from 'react';

class CardExtension extends React.Component {   
    render() {
        return (
            <div> 
            { this.props.value }
            </div>
        );
    }
}

class Card extends React.Component {   
    render() {
        return (
            <div> 
            { this.props.title }
            </div>
        );
    }
}


export default class CardContainer extends React.Component {   
    render() {
        
        var arr = [
            {
                'id':1,
                'title':'title',
                'value':'test_value'
            }
        ]

        return (
            <div> 
                {arr.map((el, idx) => (
                    <Fragment>
                        <Card title={ el.value } />
                        <CardExtension value={ el.title } />
                    </Fragment>
                ))}
            </div>
        );
    }
}