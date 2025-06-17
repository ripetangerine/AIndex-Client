import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import GlobalStyle from '../styles/Globalstyle';

const Container = styled.div`
  min-height: 100vh;
  background: #f4f3ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const MainCard = styled.div`
  width: 1300px;
  background: #ffffff;
  border-radius: 30px;
  padding: 24px;
  margin-top: auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
`;

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
  padding-bottom: 115px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  letter-spacing: -0.02em;
`;

const ChatContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MessagesContainer = styled.div`
  width: 100%;
  max-width: 800px;
  flex: 1;
  overflow-y: auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 0;
  margin: 0 auto;
`;

const Message = styled.div`
  display: flex;
  justify-content: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  margin-bottom: 12px;
`;

const MessageBubble = styled.div`
  max-width: 70%;
  padding: 16px 20px;
  border-radius: 20px;
  font-size: 16px;
  line-height: 1.5;
  word-break: break-word;
  box-sizing: border-box;
  
  ${props => props.isUser ? `
    background: #7C3AED;
    color: white;
    border-bottom-right-radius: 8px;
  ` : `
    background: #f7fafc;
    color: #2d3748;
    border: 1px solid #e2e8f0;
    border-bottom-left-radius: 8px;
  `}
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #a0aec0;
  font-size: 18px;
  flex: 1;
  height: 100%;
  min-height: 200px;
`;

const EmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f7fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 32px;
`;

const InputContainer = styled.div`
  width: 910px;
  height: 50px;
  position: fixed;
  bottom: 45px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 25px;
  padding: 8px 20px;
  transition: all 0.2s ease;
  height: 100%;
  box-sizing: border-box;
  
  &:focus-within {
    border-color: #EBE1FC;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 12px 16px;
  font-size: 16px;
  background: transparent;
  color: #2d3748;
  height: 100%;
  
  &::placeholder {
    color: #a0aec0;
  }
`;

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #7C3AED;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 8px;
  flex-shrink: 0;
  
  &:hover {
    background: #EBE1FC;
    transform: scale(1.05);
  }
  
  &:disabled {
    background: #cbd5e0;
    cursor: not-allowed;
    transform: none;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px 20px;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  border-bottom-left-radius: 8px;
  max-width: 70%;
  
  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #a0aec0;
    animation: typing 1.4s infinite ease-in-out;
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
  
  @keyframes typing {
    0%, 60%, 100% {
      transform: translateY(0);
      opacity: 0.4;
    }
    30% {
      transform: translateY(-10px);
      opacity: 1;
    }
  }
`;

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(userMessage.text),
        isUser: false
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const getBotResponse = (userInput) => {
    const responses = [
      "띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따띳따띠라띠따따또따"
    ];
    
    if (userInput.includes('안녕') || userInput.includes('hello')) {
      return "안녕하세요! AIndex AI입니다. 오늘 무엇을 도와드릴까요?";
    }
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <MainCard>
          <Nav activeNav="chat" />
          <ChatContainer>
            {messages.length === 0 && (
              <Header>
                <Title>AIndex</Title>
              </Header>
            )}
            
            <ChatContent>
              {messages.length === 0 ? (
                <EmptyState>
                  <div>대화를 시작해보세요!</div>
                </EmptyState>
              ) : (
                <MessagesContainer>
                  {messages.map((message) => (
                    <Message key={message.id} isUser={message.isUser}>
                      <MessageBubble isUser={message.isUser}>
                        {message.text}
                      </MessageBubble>
                    </Message>
                  ))}
                  {isTyping && (
                    <Message isUser={false}>
                      <TypingIndicator>
                        <span></span>
                        <span></span>
                        <span></span>
                      </TypingIndicator>
                    </Message>
                  )}
                  <div ref={messagesEndRef} />
                </MessagesContainer>
              )}
            </ChatContent>
          </ChatContainer>
        </MainCard>
        <InputContainer>
          <InputWrapper>
            <Input
              type="text"
              placeholder="AIndex에게 질문하세요."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isTyping}
            />
            <SendButton 
              onClick={handleSend} 
              disabled={!inputValue.trim() || isTyping}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </SendButton>
          </InputWrapper>
        </InputContainer>
      </Container>
    </>
  );
}

export default Chat;