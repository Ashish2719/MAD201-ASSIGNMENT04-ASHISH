/*
 * Course: MAD201 - Assignment 4
 * Student: Ashish Prajapati - A00194842
 * Description: Contact screen demonstrating Flexbox Row layout.
 */

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Get In Touch</Text>
      
      {/* Requirement: Flexbox Row Layout */}
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.contactBtn}>
          <Text style={styles.btnText}>LinkedIn</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.contactBtn}>
          <Text style={styles.btnText}>GitHub</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.contactBtn, styles.emailBtn]}>
        <Text style={styles.btnText}>Email Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  rowContainer: {
    flexDirection: 'row', // This makes items sit side-by-side
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  contactBtn: {
    backgroundColor: '#34b0daff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  emailBtn: {
    backgroundColor: '#34b0daff',
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  btnText: {
    color: '#000000ff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});