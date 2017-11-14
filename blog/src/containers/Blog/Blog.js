import React, { Component } from 'react';
import axios from 'axios';

import Layout from '../../components/Layout/Layout';
import BlogPost from '../../components/BlogPost/BlogPost';
import BlogDetail from '../../components/BlogDetail/BlogDetail';
import Button from '../../components/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import Aux from 'react-aux';

import styles from './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPost: null,
        numShow: 4,
        showModal: false,
    }

    // Render life cycles methods
    componentDidMount () {
        console.log("Component did mount");
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then( (response) => {
                this.setState({posts: response.data})                          
            })
    };

    // Handler Functions
    increaseShowHandler = (numExtra) =>  {
        this.setState({numShow: this.state.numShow + numExtra});
    };

    selectPostHandler = (postId) => {
        // Create find method
        let exists = (el) => {
            return el.id == postId;
        };

        this.setState({ 
            selectedPost : this.state.posts.find(exists),
            showModal: true,
        });
    };

    dismissModalHandler = () => {
        this.setState({showModal: false});
    };

    render() {

        // Prepare the collected
        const formatedPosts = this.state.posts.slice(0,this.state.numShow).map((post) => {
            return <BlogPost 
                        key={post.id}
                        title={post.title}
                        content={post.body}
                        clicked={() => {this.selectPostHandler(post.id)}}
                        headerImg="https://placehold.it/240x140" />
        })
        return (
            <Aux>
                <Modal 
                    visible={this.state.showModal}
                    clicked={() => {
                        this.setState({showModal:false})
                    }}
                    >
                    <BlogDetail 
                            blog={this.state.selectedPost}/>
                </Modal>
                <Layout >
                    <section className={styles.Header}>
                        <div className={styles.Container}>
                            <div className={styles.Posts}>
                                {formatedPosts}
                            </div>
                            <div className={styles.LoadingArea}>
                                <Button
                                    btnType="more"
                                    label="more"
                                    clicked={() => {this.increaseShowHandler(4)}}>
                                    load more..
                                </Button>
                            </div>
                        </div>
                    </section>
                    <section className={styles.BlogDetail}>
                        
                    </section>
                    
                </Layout>
            </Aux>
        );
    };
}

export default Blog;