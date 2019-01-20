import React, { Component } from 'react';
import './App.css';

import HeadComponent from './HeadComponent';
import Header from './Header';
import IdeasComponent from './IdeasComponent';

class App extends Component {
    state = {
        ideas: [
    
        ]
    }

    addIdea = idea => {
        idea = {
            ...idea,
            id: this.state.ideas.length
        }
        
        this.setState({ ideas: [...this.state.ideas, idea] }, () => {
            localStorage.setItem("ideas", JSON.stringify(this.state.ideas));
        });
    }

    changeQuality = (obj, sign) => {
        return event => {
            const tempIdeas = [
                ...this.state.ideas
            ]
    
            if(sign === "+") {
                if(tempIdeas[obj.id].quality < 3) { tempIdeas[obj.id].quality++ }
            } else {
                if(tempIdeas[obj.id].quality > 1) { tempIdeas[obj.id].quality-- }
            }
    
            this.setState({ ideas: tempIdeas }, () => {
                localStorage.setItem("ideas", JSON.stringify(this.state.ideas));
            });
        }
    }

    removeIdea = obj => {
        return event => {
            const tempIdeas = [
                ...this.state.ideas
            ]

            tempIdeas.splice(obj.id, 1);
            tempIdeas.map(idea => {
                return idea.id = tempIdeas.indexOf(idea);
            });
            this.setState({ ideas: tempIdeas }, () => {
                localStorage.setItem("ideas", JSON.stringify(this.state.ideas));
            })
        }
    }

    numToWordQuality = idea => {
        if(idea.quality === 1) {
            return "swill";
        } else if(idea.quality === 2) {
            return "plausible";
        } else {
            return "genius";
        }
    }

    componentWillMount() {
        const ideas = JSON.parse(localStorage.getItem("ideas"));
        if(ideas === null || ideas.length === 0) {
            const idea1 = { 
                title: "Original Name #1",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                quality: 1,
                id: 0
            };
            const idea2 = { 
                title: "Original Name #2",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                quality: 3,
                id: 1
            };
            this.state.ideas.push(idea1);
            this.state.ideas.push(idea2);
            localStorage.setItem("ideas", JSON.stringify(this.state.ideas));
        } else {
            localStorage.setItem("ideas", JSON.stringify(ideas));
        }
    }

    componentDidMount() {
        const ideas = JSON.parse(localStorage.getItem("ideas"));
        this.setState({ ideas: ideas || [] });
    }

    render() {
        return (
            <div>
                <HeadComponent/>
                
                <Header addIdea={this.addIdea}/>

                <IdeasComponent ideas={this.state.ideas} changeQuality={this.changeQuality} removeIdea={this.removeIdea} numToWordQuality={this.numToWordQuality}/>
            </div>
        );
    }
}

export default App;
