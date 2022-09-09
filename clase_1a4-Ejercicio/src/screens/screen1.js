import React, {useState, useEffect} from 'react';
import Counter from '../components/counter';
import Input from '../components/input';
import {
  Text,
  View,
  Image,
  Button,
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';

const Screen1 = () => {
  const [datos, setDatos] = useState(0);

  const [texto, setTexto] = useState('Esta es nuestraApp.');
  const [showModal, setShowModal] = useState(false);

  const onPressHandler = () => {
    setDatos(dato => dato + 1);
  };

  const onLongPressHandler = () => {
    setDatos(dato => dato + 10);
  };

  const onButtonPress = () => {
    Alert.alert('Confirmar ' + texto + ':', 'Desea resetear el contador?', [
      {
        text: 'Aceptar',
        onPress: () => {
          setDatos(0);
        },
      },
      {text: 'Cancelar'},
    ]);
  };

  const onChangeText = value => {
    setTexto(value);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Image
          //source={require('../assets/Bart_Simpson_200px.png')}
          style={{width: 200, height: 58}}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/07/25/08/05/the-button-859351_960_720.png',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.box1}>
          <Text
            style={styles.texto}
            selectable={false}
            onPress={onPressHandler}
            onLongPress={onLongPressHandler}>
            {texto}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.box2}>
        <Text style={styles.texto}>{datos}</Text>
        <Button onPress={onButtonPress} title="Reset" />
      </View>

      <View style={styles.box3}>
        <Counter title="Este es un contador!" init="100" />
      </View>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalCard}>
            <Input onSubmit={onChangeText} />
            <Text onPress={() => setShowModal(false)}>Cerrar</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '80%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#555555',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  box1: {
    backgroundColor: 'orange',
    height: 200,
    width: 300,
    borderRadius: 20,
    alignItems: 'center',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  box2: {
    backgroundColor: 'pink',
    height: 100,
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  box3: {
    backgroundColor: 'green',
    alignSelf: 'flex-end',
    height: 50,
    width: '50%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
  },
});
