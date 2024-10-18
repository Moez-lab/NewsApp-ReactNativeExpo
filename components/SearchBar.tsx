import { View, TextInput, StyleSheet , TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';

interface SearchProps {
  searchText: string;
  setSearchText: (text: string) => void; // Correctly typed as a function
  onSubmit:()=> void
}

export default function SearchBar(props: SearchProps) {''
  return (
    <TouchableWithoutFeedback  onPress={()=>Keyboard.dismiss()}>
    <View style={{ margin: 10 ,height:50}}>
      <TextInput
        style={styles.input}
        placeholder='Search'
        placeholderTextColor="#888"
        value={props.searchText}
        onChangeText={text => props.setSearchText(text)}
        onSubmitEditing={props.onSubmit}
        />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: "#000"
  }
});
