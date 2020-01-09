import React, { Component } from 'react'
import axios from 'axios'

const Post = props => {
    return (
        <section>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </section>
    );
}

export class App extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({ posts: res.data })
        })
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    renderPosts() {
        return this.state.posts.map(post => <Post key={post.id} title={post.title} body={post.body} /> )
    }

    render() {
        return (
            <div>
               {this.renderPosts()} 
            </div>
        );
    }
}

export default App;
