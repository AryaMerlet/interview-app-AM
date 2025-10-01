import React from 'react';
import {View, Button} from 'react-native';

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
    //view = div in HTML
    <View>
      <Button title={title} onPress={onPress} />
    </View>
  );

  /* use pressable or touchableopacity to use style props, no need to use View when doing so
...
import {Pressable, Text} from 'react-native';
...
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
...
return (
    <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
);
  */
}
