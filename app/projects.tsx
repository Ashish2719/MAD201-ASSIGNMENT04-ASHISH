/*
 * Course: MAD201 - Assignment 4
 * Student: Ashish Prajapati - A00194842
 * Description: Projects screen using ScrollView and Flexbox.
 */

import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProjectsScreen() {
  const projects = [
    { id: 1, title: "Weather App", description: "Displays current weather API data" },
    { id: 2, title: "ToDo List", description: "Task tracker with local storage" },
    { id: 3, title: "Portfolio", description: "This current application." },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>My Work</Text>
      
      {projects.map((project) => (
        <View key={project.id} style={styles.card}>
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectDesc}>{project.description}</Text>
          
          <TouchableOpacity style={styles.learnMoreBtn}>
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  projectDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  learnMoreBtn: {
    backgroundColor: '#457ee0ff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  learnMoreText: {
    color: 'white',
    fontWeight: 'bold',
  },
});