import React, { Component } from 'react';
import Idea from './Idea';

class IdeasComponent extends Component {
    state = {
        search: ""
    }

    searchChange = event => {
        this.setState({ search: event.target.value });
    }

    render() {
        const filtered = this.props.ideas.filter(idea => {
            return idea.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1; 
        });

        const list = filtered.map(idea => {
            return <Idea
                        title={idea.title}
                        description={idea.description}
                        quality={idea.quality}
                        changeQuality={this.props.changeQuality}
                        removeIdea={this.props.removeIdea}
                        numToWordQuality={this.props.numToWordQuality}
                        idea={idea}
                    />
        });

        return (
            <section className="container-wrapper">
                  <div className="container">
                      <input onChange={this.searchChange} value={this.state.search} className="search" type="text" placeholder="Search..."/>
                      <div className="ideas">

                        {list}

                      </div>
                  </div>
            </section>
        );
    }
}

export default IdeasComponent;