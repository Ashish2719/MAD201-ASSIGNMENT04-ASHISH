/*
 * Course: MAD201 - Assignment 4
 * Student: Ashish Prajapati - A00194842
 * Description: Home Screen with profile and bio.
 */

import { router } from 'expo-router'; // Teacher's method for navigation
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/*Profile Picture */}
      <Image 
        source={require('../assets/images/ASHISH.jpeg')} 
        style={styles.profileImage} 
      />
      
      {/*  Name and Bio */}
      <Text style={styles.name}>ASHISH PRAJAPATI</Text>
      <Text style={styles.bio}>
        Hi! I am a Geology master turned mobile developer. 
        Welcome to my Portfolio.
      </Text>

      {/* Button to navigate to Projects */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/projects')}
      >
        <Text style={styles.buttonText}>View My Projects</Text>
      </TouchableOpacity>

      {/* Button to navigate to Contact */}
      <TouchableOpacity 
        style={[styles.button, styles.contactButton]} 
        onPress={() => router.push('/contact')}
      >
        <Text style={styles.buttonText}>Contact Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    borderBlockColor: '#000',
    borderWidth: 3,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3f87d0ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  contactButton: {
    backgroundColor: '#4cc984ff', // Green for contact
  },
  buttonText: {
    color: '#000000ff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});