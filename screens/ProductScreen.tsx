import React, {useEffect, useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import {BASE_URL} from '../constants';

// Define the structure of a product object
interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductScreen() {
  // array of products fetched from the API, empty as initial state
  const [data, setData] = useState<Products[]>([]);
  // loading state for the API call
  const [isLoading, setLoading] = useState(true);
  // error state for the API call
  const [error, setError] = useState<string | null>(null);

  // async function to fetch data from the API
  const getApi = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${BASE_URL}products`);
      if (!response.ok) {
        throw new Error('failed to fetch');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      // if error is an instance of Error, use its message; otherwise, use a generic message
      setError(error instanceof Error ? error.message : 'Error fetching data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect is a hook that allows you to perform side effects after rendering
  // second argument [] means it runs only once when the component is mounted
  useEffect(() => {
    getApi();
  }, []);

  // show loading indicator while fetching data
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  // show error message if there was an error fetching data
  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.productCard}>
            <Image source={{uri: item.image}} style={styles.image} />
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    padding: 16,
  },
  productCard: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
