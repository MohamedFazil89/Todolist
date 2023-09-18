import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handeltaskchange = (text) => {
    setTask(text);
  }

  const handelAdd = () => {
    if (task.length > 0) {
      setTaskItems([...taskItems, task])
      setTask('')

    }


  }
  const handleDelete = (index) => {
    const newTaskItems = [...taskItems];
    newTaskItems.splice(index, 1);
    setTaskItems(newTaskItems);
  };
  return (
    <ImageBackground source={{ uri: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=400" }} resizeMode="cover" style={{width:1300}}>

    <View style={styles.box}>

        <Text style={styles.head}>To-Do-List</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your task"
          value={task}
          onChangeText={handeltaskchange}
        />
        <TouchableOpacity style={styles.button} onPress={handelAdd}>
          <Text style={styles.add}>Add</Text>
        </TouchableOpacity>
        <ScrollView style={styles.itemView}>
          {taskItems.map((item, index) => (
            <View key={index} style={styles.items}>
              <Text style={styles.item}>{item}</Text>
              <Text style={{ fontWeight: "bold", color: "red" }} onPress={() => handleDelete(index)}>delete</Text>

            </View>

          ))}


        </ScrollView>

    </View>
    </ImageBackground>


  );
}

const styles = StyleSheet.create({
  box: {
    width: 300,
    height: 500,
    marginTop: 30,
    borderRadius: 50,
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 2,
    shadowColor: "black",
    marginLeft: 400,
    borderWidth: 2,
    borderColor: "black"


  },
  head: {
    marginTop: 16,
    marginLeft: 79,
    fontSize: 'xx-large',


  },

  input: {
    marginLeft: 79,
    marginTop: 100,
    marginRight: 70,
    borderWidth: 2,
    borderColor: "black"

  },

  button: {
    marginLeft: 120,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "red",
    width: 40,
    height: 20

  },

  add: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 5,
  },

  itemView: {
    display: "flex",
    flexDirection: "column",
  },
  items: {
    display: 'flex',
    flexDirection: "row",



  },

  item: {
    color: "white",
    fontFamily: "Goldman",
    fontSize: 30,
    borderColor: "white",
    borderWidth: .3,
  },

  item1: {
    color: "white",
    fontFamily: "Goldman",
    fontSize: 20,
    borderColor: "white",
    borderWidth: .3,
    marginLeft: 100,
  }

});
