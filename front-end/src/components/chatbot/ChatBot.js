import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane, FaRobot } from "react-icons/fa";
import tripsy from "../../Assets/tripsy.gif";
import "./ChatBot.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const chatBoxRef = useRef(null);

  // Function to scroll to bottom
  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      const initialBotMessage = {
        sender: "bot",
        text: "Hi! I'm Tripsy. Ask me anything about trips or just say hi.",
      };
      setMessages([initialBotMessage]);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    if (e.target.value.length <= 200) {
      setInput(e.target.value);
    }
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/v1/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput: newMessage.text }),
      });

      const data = await response.json();
      let upatedText = data.response.split("*").join("");
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: upatedText },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
      scrollToBottom();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="chat-bot-toggle" onClick={toggleChat}>
        <img src={tripsy} />
      </div>

      <div className={`chat-bot ${isOpen ? "open" : ""}`}>
        <div className="chat-bot-header" onClick={toggleChat}>
          <span>Tripsy</span>
        </div>
        <div className="chat-bot-body">
          <div className="messages" ref={chatBoxRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="loader2"></div>
              </div>
            )}
          </div>
        </div>
        <div className="chat-bot-input">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            maxLength={200}
          />
          <button onClick={handleSendMessage}>
            {isLoading ? <div className="loader3"></div> : <FaPaperPlane />}
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
