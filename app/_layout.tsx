/*
 * Course: MAD201 - Assignment 4
 * Student: Ashish Prajapati - A00194842
 * Description: Layout file that sets up the Stack Navigation headers.
 */

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      
      <Stack.Screen 
        name="index" 
        options={{ title: 'My Portfolio' }} 
      />
   
      <Stack.Screen 
        name="projects" 
        options={{ title: 'My Projects' }} 
      />
      
      <Stack.Screen 
        name="contact" 
        options={{ title: 'Contact Me' }} 
      />
    </Stack>
  );
}