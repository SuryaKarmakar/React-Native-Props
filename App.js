import React from 'react';
import { StyleSheet, View } from 'react-native';

import FunctionCom from './component/FunctionCom';
import ClassCom from './component/ClassCom';
import CustomCom from './component/CustomCom';

const App = () => {
  return (
    <View style={styles.container}>

      {/* Here we pass props attributes with value*/}
      <FunctionCom name='Function Component' />

      <ClassCom name='Class Component' />

      {/* Passing Multiple Props*/}
      <CustomCom name='Admin' work='Coding' />

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
});
export default App;