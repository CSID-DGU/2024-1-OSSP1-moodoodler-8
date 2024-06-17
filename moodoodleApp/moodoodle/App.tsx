import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const App = (): React.ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView 
        source={{ uri: 'https://moodoodle.netlify.app/' }} 
        style={{ flex: 1 }} 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
