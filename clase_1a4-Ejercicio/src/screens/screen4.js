import React, {useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

const Screen4 = () => {
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

  const renderItem = ({item}) => (
    <>
      <Image style={styles.image} source={{uri: item.image}} />
      <Text style={styles.texto}>{item.name}</Text>
    </>
  );
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" animating={loading} />
      ) : (
        <FlatList
          key={item => item.id}
          data={characters}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
};

export default Screen4;

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
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
  },
  image: {
    width: 100,
    height: 100,
  },
});
