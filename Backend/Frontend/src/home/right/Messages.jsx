import React, { useEffect } from 'react';
import Message from './Message';
import useGetMessage from '../../context/useGetMessage.js';
import Loading from '../../components/Loading';
import { useRef } from 'react';
import useGetSocketMessage from '../../context/useGetSocketMessage.js';
import useConversation from '../../statemanage/useConversation.js';
import toast from 'react-hot-toast';

const Messages = () => {
  const { loading, messages } = useGetMessage();
  const {selectedConversation}=useConversation();

  console.log("selectedConversation in mesaages",selectedConversation._id);
    
  // Early return if no conversation is selected
  // if (!selectedConversation) {
  //   toast.error("Please select a conversation to send a message.");
  //   return null; // Stop rendering the component if there's no selected conversation
  // }

  console.log("messages",messages);
  useGetSocketMessage();

  const lastMsgRef = useRef();

   // Scroll to the last message when messages update
   useEffect(() => {
    if (lastMsgRef.current) {
      // Scroll after the component has mounted
      setTimeout(() => {
        lastMsgRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100); // You may adjust this timeout value if needed
    }
  }, [messages]); // This effect runs whenever messages are updated



  return (
    <div className="h-[75vh] max-h-screen overflow-y-auto p-4 bg-gray-900 custom-scrollbar">
      <div className="space-y-4">
        {/* Individual Messages */}

        {loading ? (
          <Loading />
        ) : (
          messages.length > 0 &&
          messages.map((message) => (
            <div key={message._id} ref={lastMsgRef}>
              <Message message={message} />
            </div>
          ))
        )}

        {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-10">
            Say! Hi to start the conversation
          </p>
        </div>
      )}
      </div>
    </div>
  );
};

export default Messages;
