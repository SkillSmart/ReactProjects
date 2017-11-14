import React, { Component } from 'react';
import axios from 'axios';

import Layout from '../../components/Layout/Layout';
import BlogPost from '../../components/BlogPost/BlogPost';

import styles from './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPost: null
    }

    ComponentDidMount () {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then( (response) => {
                console.log(response);
            })
    };

    render() {

        // Prepare the collected

        return (
            <Layout >
                <section className={styles.Posts}>
                    {this.state.posts}
                </section>
            </Layout>
        );
    };
}

export default Blog;