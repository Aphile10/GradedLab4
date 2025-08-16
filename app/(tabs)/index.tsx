import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const App = () =>{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (username.trim().length === 0 && password.trim().length === 0){
      setMessage("Please enter both username and password!");
    }else if (username === "admin" && password === "1234"){
      setMessage("Login successful!");
    }else{
      setMessage("Invalid credentials. Try again.");
    }
  };

return (
  <View style={styles.container}>
    <Text style={styles.title}>Login Screen</Text>

    <TextInput
      style={styles.input}
      placeholder="Username"
      placeholderTextColor="#888"
      value={username}
      onChangeText={setUsername}
    />

    <TextInput
      style={styles.input}
      placeholder="Password"
      placeholderTextColor="#888"
      secureTextEntry={true}
      value={password}
      onChangeText={setPassword}
    />

    <Button title="Login" onPress={handleLogin} />

    {message ? (
      <Text
        style={[
          styles.message,
          message.includes("successful") ? styles.success : styles.error,
        ]}
      >
        {message}
      </Text>
    ) : null}
  </View>
);
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title:{
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input:{
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  message: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  success:{
    color: "green",
  },
  error:{
    color: "red",
  },
});
