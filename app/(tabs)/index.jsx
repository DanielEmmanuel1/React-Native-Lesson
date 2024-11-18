import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [userName, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButton = () => {
    if (userName) {
      setIsLoggedIn(true);
    } else {

      alert("Please Enter Username");
    }
  }
  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View>
          <Text>You're currently logged in as {userName}</Text>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={() => setIsLoggedIn(false)}>
            <Text style={styles.TextColor}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.Text}>Login</Text>
          <Text>Username: </Text>
          <TextInput placeholder="Enter Username" style={styles.TextInput} onChangeText={setUsername} />
          <TouchableOpacity style={styles.TouchableOpacity} onPress={handleButton}>
            <Text style={styles.TextColor}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 15,
    paddingRight: 15,
  },

  Text: {
    fontSize: 50,
    fontWeight: 'bold',
  },

  TextInput: {
    borderColor: 'black',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },

  TouchableOpacity: {
    marginTop: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },

  TextColor: {
    color: "white",
    textAlign: 'center',
  },
})