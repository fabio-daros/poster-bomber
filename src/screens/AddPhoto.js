import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native'
import ImagePicker from 'react-native-image-picker' //responsavel por acessar a galeria e a camera.

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }

    pickImage = () => { //metodo para escolher a imagem
        ImagePicker.showImagePicker({
            title: 'Choice your image',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data } })
            }
        })
    }

    save = async () => {
        Alert.alert('Image Added!', this.state.comment)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Share a image</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styleMedia.buttom}>
                        <Text style={styles.buttomText}>Choice the Photo</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Any comment?'
                        style={styles.input} value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })} />
                </View>
            </ScrollView>
        )
    }
}


