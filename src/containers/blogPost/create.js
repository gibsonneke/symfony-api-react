import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Form from '../../components/Form';
import { createBlogPost } from '../../actions/blogPostActions';

export default class Create extends Component {

    handleSubmit(data) {
        createBlogPost(data);
        this.props.router.push('/');
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}></Form>
            </div>
        );
    }
}