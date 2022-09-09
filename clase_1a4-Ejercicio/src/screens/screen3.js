import React, {useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Screen3 = () => {
  const [characters, setcharacters] = useState();
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(response => {
        setcharacters(response.results);
        setLoading(false);
      });
  }, 3000);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" animating={loading} />
      ) : (
        <ScrollView>
          {characters.map((item, index) => (
            <Text key={index} style={styles.texto}>
              {item.name}
            </Text>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});
