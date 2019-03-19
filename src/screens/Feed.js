import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Raphael Willow',
            email: 'raphaelwll@hotmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'John Ray Sheldon',
                comment: 'Stuning!'
            }, {
                nickname: 'Ann Arrow',
                comment: 'Beautiful image!'
            }]
        }, {
            id: Math.random(),
            nickname: 'Franz Lima',
            email: 'flima@gmail.com',
            image: require('../../assets/imgs/gate.jpg'),
            comments: [{
                nickname: 'John Ray Sheldon',
                comment: 'Stuning!'
            }, {
                nickname: 'Ann Arrow',
                comment: 'Beautiful image!'
            }]
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed