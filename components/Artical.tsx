import { StyleSheet, Text, SafeAreaView, Image, View, Pressable } from 'react-native';
import * as WebBrowser from 'expo-web-browser'
import React from 'react';

interface ArticleProps {
  urlToImage?: string | null;  // Image can be a string or null
  title: string;               // Title should always be a string
  description: string;         // Description should always be a string
  author?: string | null;      // Author could be string or null
  publishedAt?: string | null; // Date can be string or null
  source: {
    name: string;  // Ensure 'name' is defined under 'source'
  };  // Source name can be string or null
  url?: string;
}

export default function Artical(props: ArticleProps) {
  const goToSource = ()=>{
    WebBrowser.openBrowserAsync(props.url)
  }
  return (
    <Pressable style={styles.container} onPress={goToSource}>
      {props.urlToImage && (  // Check if image URL exists
        <Image source={{ uri: props.urlToImage }} style={styles.img} />
      )}
      <View style={{ padding: 25 }}>
        <Text style={styles.title}>{props.title?.toString()}</Text>
        <Text style={styles.description}>{props.description?.toString()}</Text>
        <Text style={{ fontSize: 14 }}>
          by: <Text style={{ fontWeight: 'bold' }}>{props.author?.toString()}</Text>
        </Text>
        <Text style={{ color: '#0466c8', fontWeight: 'bold' }}>{props.publishedAt?.toString()}</Text>
        <Text style={{ fontSize: 14 }}>
          source: <Text style={{ fontWeight: 'bold', color: '#0466c8', fontSize: 16 }}>{props.source.name?.toString()}</Text>
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    marginTop: 20,
  },
  img: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
