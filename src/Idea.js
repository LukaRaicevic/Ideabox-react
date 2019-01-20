import React, { Component } from 'react';

class Idea extends Component {
    

    render() {
        return (
            <div className="idea">
                <section className="idea-name">
                    <h2>{this.props.title}</h2>
                    <span onClick={this.props.removeIdea(this.props.idea)} className="remove circle">&times;</span>
                </section>

                <section className="idea-description">
                    {this.props.description}
                </section>

                <section className="idea-quality">
                    <span onClick={this.props.changeQuality(this.props.idea, "+")} className="upvote circle"><i className="fas fa-arrow-up"></i></span>
                    <span onClick={this.props.changeQuality(this.props.idea, "-")} className="downvote circle"><i className="fas fa-arrow-down"></i></span>
                    <small>quality: {this.props.numToWordQuality(this.props.idea)}</small>
                </section>
            </div>
        );
    }
}

export default Idea;