import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as TWF, //apelido para a propriedade.
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends Component {
    state = {
        comment: '',
        askComment: true
    }

    handleAddComment = () => {
        Alert.alert('Added!', this.state.comment)
    }

    render() {
        let commentArea = null
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder='Ready to comment!...'
                        style={styles.input} autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })} //quando o usuario mudar, automaticamente o estado é mudado...
                        onSubmitEditing={this.handleAddComment} />
                    <TWF onPress={() => this.setState({ editMode: false })}>
                        <Icon name='times' size={15} color='#555' />
                    </TWF>
                </View >
            )
        } else {
            commentArea = (
                <TWF onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name='comment-o' size={25} color='#555' />
                        <Text style={styles.caption}>
                            Insert a comment...
                        </Text>
                    </View>
                </TWF>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {commentArea}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    },
    input: {
        width: '90%'
    }
})

export default AddComment