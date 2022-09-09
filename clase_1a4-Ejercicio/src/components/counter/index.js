import React, { useState, useEffect} from 'react';
import styles from './style';

import {
    Text,
    View,
  } from 'react-native';

const Counter = ({ init, title }) => {

    const [ contador, setContador ] = useState(parseInt(init));
  
    useEffect(() => {
      const intervalId = setInterval( () => actualizar(contador)
      , 1000);
      console.log("UseEffect");
  
      setTimeout(() => {
        clearInterval(intervalId);
      }, 10000);
  
    }, []);
  
    const actualizar = (cont) => {

      setContador(cont => cont + 1);
      console.log("Actualizar: " + cont + 1);
    }

    return (
        <View style={styles.bodyCounter}>
          <Text>
              {title}: {contador.toString()}
          </Text>
        </View>
    )
}

export default Counter;