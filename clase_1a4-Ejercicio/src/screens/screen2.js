import React, {useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

const Screen2 = () => {
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    fetch('https://rickandmortyapi.com/api/character/1')
      .then(response => response.json())
      .then(response => {
        setSelectedCharacter(response);
        setLoading(false);
      });
  }, 3000);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" animating={loading} />
      ) : (
        <Text>Hola {selectedCharacter.name}</Text>
      )}
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
