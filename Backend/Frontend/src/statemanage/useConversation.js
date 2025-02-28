// useConversation.js

import {create} from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,  // Initial state is null
  setSelectedConversation: (conversation) => set({ selectedConversation: conversation }), // Method to set selectedConversation
  messages: [],  // Initial state is an empty array
  setMessages: (messages) => set({ messages }),  // Method to set messages
}));

export default useConversation;
