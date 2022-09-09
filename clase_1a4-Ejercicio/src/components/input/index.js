import React, { useState} from 'react';
import {
    TextInput,
    TouchableWithoutFeedback,
    View,
    Text
} from 'react-native';
import styles from './style';

const Input = (props) => {
    const { onSubmit } = props;
    const [ color, setColor ] = useState('lightblue');
    const [ texto, setTexto ] = useState("");

    const onPressHandler = () => {
        onSubmit(texto);
    }

    return (
    <View>
        <TextInput style={styles.input}
            onChangeText={ (value) => setTexto(value) } 
        /> 
        <TouchableWithoutFeedback onPress={onPressHandler}
            onPressIn={ () => setColor('blue') }
            onPressOut={ () => setColor('lightblue')}>        
            <View style={[styles.boton, {backgroundColor: color}]}>
            <Text style={styles.botonText}>Press Me!</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>
    )
}

export default Input;