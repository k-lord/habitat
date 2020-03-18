import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../assets/styles/Styles';
import Button from './BlogSubmit'
// import t from 'tcomb-form-native';


// const Form = t.form.Form;

// const BlogPost = t.struct({
//     post: t.String,
// });

export default class BlogText extends Component {
    handleSubmit = () => {

    }

    render(){
        return (
            <View style={styles.container}>
                {/* <Form type={BlogPost}/> */}
                <Button style={styles.button} onPress={this.handleSubmit}>Publish</Button>
            </View>
        )
    }
}