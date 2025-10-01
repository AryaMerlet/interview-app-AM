import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

//Component properties
type Props = {
  title: string;
  onPress: () => void;
};

//export = return
//default = when importing, no need to use {} and can use any name
//can be written like this or later in the code like "export default CustomButton;"
export default function CustomButton({title, onPress}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.button, {opacity: pressed ? 0.5 : 1}]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
