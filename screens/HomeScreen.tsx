import { StyleSheet, View, FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from '@/components/Artical'; // Adjust import path if needed

interface ArticleData {
  urlToImage?: string | null;
  title: string;
  description: string;
  author?: string | null;
  publishedAt?: string | null;
  source: {
    name: string;  // Ensure 'name' is defined under 'source'
  };
  url?: string; // Assuming each article has a unique URL or similar identifier
}

export default function HomeScreen() {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getNews = () => {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=8c6fe5fad3ea4a92b694981b8068b17e', {
        params: {
          category: 'technology',
        },
      })
      .then((response) => {
        setArticles(response.data.articles as ArticleData[]); //telling TypeScript to treat response.data.articles as an array of ArticleData
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError('Failed to fetch articles');
        setLoading(false);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  if (loading) {
    return <View style={styles.center}><Text>Loading...</Text></View>;
  }

  if (error) {
    return <View style={styles.center}><Text>{error}</Text></View>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Article
            urlToImage={item.urlToImage || null}  //Passing undefined or an empty string ("") to Image can lead to warnings or errors, depending on the component. null is a safe way to indicate that the Image should not render anything if no valid image URL is provided.
            title={item.title || 'No Title'}
            description={item.description || 'No Description'}
            author={item.author || 'Unknown'}
            publishedAt={item.publishedAt || 'Unknown Date'}
            source={item.source}
            url={item.url}
          />
        )}
        keyExtractor={(item) => item.url || item.title} // Ensure each key is unique
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
