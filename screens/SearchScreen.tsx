import { View, FlatList,TouchableWithoutFeedback,Keyboard,Text } from 'react-native';
import SearchBar from '@/components/SearchBar';
import React, { useState, useEffect } from 'react';
import Article from '@/components/Artical';
import axios from 'axios';

// Define the ArticleData interface as mentioned above
interface ArticleData {
  urlToImage: string | null;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  source: {
    name: string;
  };
  url: string;
}

export default function SearchScreen() {
  const [searchText, setSearchText] = useState<string>(''); // Explicitly define the state type
  const [articles, setArticles] = useState<ArticleData[]>([]); // Use the ArticleData type here

  const searchArticles = () => {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=8c6fe5fad3ea4a92b694981b8068b17e', {
        params: {
          category: 'technology',
          q: searchText,
        },
      })
      .then((response) => {
        setArticles(response.data.articles); // Ensure you're setting the articles correctly
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    searchArticles();
  }, []);


  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View>
      <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticles} />
      <FlatList
        data={articles } // TS will now know this is an array of ArticleData
        renderItem={({ item }) => (
          <Article
          urlToImage={item.urlToImage || null}
          title={item.title || 'No Title'}
          description={item.description || 'No Description'}
          author={item.author || 'Unknown'}
          publishedAt={item.publishedAt || 'Unknown Date'}
          source={item.source || { name: 'Unknown Source' }}
          url={item.url}
          />
        )}
        keyExtractor={(item) => item.url} // Ensure unique keys with the URL
        />
    </View>
    </TouchableWithoutFeedback>
  );
}
