import React, {Component} from 'react';
import PostForm from './post-form';
import PostsList from './posts-list';

class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: [
        // {text: ''},
        // {user: ''},
        // {upvotes: 0}
      ]
    }

    this.addPost = this.addPost.bind(this)
  }

  addPost(post) {
    this.setState({
      posts: this.state.posts.concat([post])
    });
  }

  upvotePost(post) {
    this.setState({})
  }

  // hidePosts() {
  //   this.
  // }

  render() {
    return (<div className="row">
      <div className="col-md-6 col-md-offset-3">
        <div className="page-header">
          <h1>Project Reddit</h1>
        </div>

        <div className="posts"></div>

        <PostsList upvotePost={this.upvotePost} posts={this.state.posts}/>

        <button onClick={this.hidePosts} type="button" className="btn btn-primary">Hide Posts</button>

        <PostForm addPost={this.addPost}/>
      </div>
    </div>);
  }
}

export default App;
