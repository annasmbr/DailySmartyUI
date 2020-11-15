import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

import Post from './post';

//class SearchBar extends Component {
class RecentPosts extends Component {

    componentDidMount() {
      this.props.fetchRecentPosts();
    }  

    renderPosts = function() {
        const posts = this.props.recentPosts.map((post, index) => {
            if(index < 3) {
                return (
                    <Post {...post} key={index}/>
                   // <li key={index}>
                      //  {post.title}
                   // </li>
                   //pass in to post.js
                )   
            }
        })
        return posts
    }

    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts__wrapper">
                    <div className="recent-posts__heading">Recent Posts</div>
                    <ul className="recent-posts__posts">
                        {this.renderPosts()}
                    </ul>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        recentPosts: state.posts.recentPosts
    }
}

export default connect(mapStateToProps, actions)(RecentPosts);

//export default connect(null, actions)(RecentPosts);

//export default connect()(SearchBar);
//export default SearchBar;

//<li>recent post 0</li>
//<li>recent post 1</li>
//<li>recent post 2</li>

//<Post title={post.title} content={post.content} associated_topics={post.associated_topics} key={index}/>