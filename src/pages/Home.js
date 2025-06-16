import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import GlobalStyle from '../styles/Globalstyle';

// Import the new components
import SearchSectionComponent from '../components/SearchSection';
import SuggestionSectionComponent from '../components/SuggestionSection';
import RankingSectionComponent from '../components/RankingSection';
import FixingSectionComponent from '../components/FixingSection';

const Container = styled.div`
  min-height: 100vh;
  background: #f4f3ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainCard = styled.div`
  width: 1300px;
  background: #ffffff;
  border-radius: 30px;
  padding: 24px;
  margin: 30px;
`;

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('view');
  const [activeFilter, setActiveFilter] = useState('chat');
  const [starredItems, setStarredItems] = useState(new Set());

  // 태그 목록
  const tags = [
    '# chat', '# ui/ux', '# generate', '# video', '# image', '# docs', '# counsel',
    '# code', '# finance', '# legal', '# picture', '# automation', '# etc'
  ];

  // 추천 AI 도구들
  const suggestions = [
    {
      id: 1,
      name: 'Grok',
      subtitle: 'by xAI',
      description: 'Get unlimited answers from Grok.',
      logo: 'G',
      logoBg: '#000',
      tags: ['chat', 'generate', 'image', 'part-free']
    },
    {
      id: 2,
      name: 'Gemini',
      subtitle: 'by Google',
      description: 'Advanced AI assistant by Google.',
      logo: '◆',
      logoBg: 'linear-gradient(135deg, #4285f4, #ea4335, #fbbc04, #34a853)',
      tags: ['chat', 'generate', 'image', 'part-free']
    },
    {
      id: 3,
      name: 'Chat GPT',
      subtitle: 'by OpenAI',
      description: 'Conversational AI that understands context.',
      logo: '⬡',
      logoBg: '#10b981',
      tags: ['chat', 'generate', 'counsel', 'part-free']
    }
  ];

  // 랭킹 데이터
  const rankingData = [
    {
      rank: 1,
      name: 'Chat GPT',
      meta: 'by OpenAI • 2.3M reviews',
      description: 'ChatGPT is an AI chatbot developed by OpenAI that understands and...'
    },
    {
      rank: 2,
      name: 'Claude',
      meta: 'by Anthropic • 1.8M reviews',
      description: 'Claude is an AI assistant created by Anthropic that can help with...'
    },
    {
      rank: 3,
      name: 'Gemini',
      meta: 'by Google • 1.2M reviews',
      description: 'Gemini is Google\'s most capable AI model that can understand...'
    },
    {
      rank: 4,
      name: 'Grok',
      meta: 'by xAI • 970k reviews',
      description: 'Grok is an AI assistant with real-time knowledge and wit...'
    },
    {
      rank: 5,
      name: 'Perplexity',
      meta: 'by Perplexity AI • 850k reviews',
      description: 'Perplexity is an AI-powered search engine that provides...'
    },
    {
      rank: 6,
      name: 'Copilot',
      meta: 'by Microsoft • 720k reviews',
      description: 'Microsoft Copilot is an AI companion that helps you get...'
    }
  ];

  const toggleStar = (itemId) => {
    setStarredItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleFixedButtonClick = (aiName) => {
    console.log(`Navigating to ${aiName} page.`);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <MainCard>
          <Nav />
          
          <SearchSectionComponent 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            tags={tags} 
          />

          <SuggestionSectionComponent
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            suggestions={suggestions}
            starredItems={starredItems}
            toggleStar={toggleStar}
          />

          <RankingSectionComponent
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            rankingData={rankingData}
          />

          <FixingSectionComponent 
            handleFixedButtonClick={handleFixedButtonClick} 
          />

        </MainCard>
      </Container>
    </>
  );
}

export default Home;