import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import GlobalStyle from '../styles/Globalstyle';
import TrashButtonIcon from '../assets/icon/trash_button.svg';

const Container = styled.div`
  min-height: 100vh;
  background: #f4f3ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const MainCard = styled.div`
  width: 1300px;
  min-height: 900px;
  background: #ffffff;
  border-radius: 30px;
  padding: 24px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex-shrink: 0;
  max-height: calc(100vh - 60px);
`;

const FavoritesSection = styled.div`
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
  max-height: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin-left: 90px;
  color: #424242;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const FavoriteItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
  margin-left: 90px;
  background: none;
  border-radius: 30px;
  box-shadow: none;
  width: 800px;
`;

const ItemContent = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #D9D9D9;
  border-radius: 30px;
  width: 700px;
  height: 80px;
  padding: 0 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const ClickableArea = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-right: 50px;
`;

const ItemLogo = styled.div`
  width: 50px;
  height: 50px;
  background: #e0f2f1;
  border-radius: 12px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #00796b;
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333333;
  margin: 0;
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

const ItemSubtitle = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: #6b7280;
`;

const ItemMeta = styled.span`
  font-size: 0.85rem;
  color: #9e9e9e;
  margin-left: 8px;
`;

const ItemDescription = styled.p`
  font-size: 0.95rem;
  color: #616161;
  margin: 5px 0 0 0;
  max-width: 500px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  transition: background 0.2s ease;

  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  img {
    width: 24px;
    height: 24px;
  }
`;

const TrashIcon = () => (
  <img src={TrashButtonIcon} alt="Delete" />
);

function Stars() {
  const [favoriteItems, setFavoriteItems] = useState([
    {
      id: 1,
      name: 'Chat GPT',
      subtitle: 'by OpenAI',
      meta: '1.2M views',
      description: 'ChatGPT is an AI chatbot developed by OpenAI that understands and...',
      logo: '⬡',
      link: 'https://chat.openai.com/'
    },
    {
      id: 2,
      name: 'Perplexity',
      subtitle: 'Perplexity AI',
      meta: '500K views',
      description: 'A powerful research tool.',
      logo: 'P',
      link: 'https://www.perplexity.ai/'
    },
    {
      id: 3,
      name: 'Grok',
      subtitle: 'by xAI',
      meta: '300K views',
      description: 'Grok is an AI model designed to answer almost anything.',
      logo: 'G',
      link: 'https://grok.x.ai/'
    },
    {
      id: 4,
      name: 'Copilot',
      subtitle: 'by Microsoft',
      meta: '800K views',
      description: 'Your AI companion.',
      logo: 'C',
      link: 'https://copilot.microsoft.com/'
    },
    {
      id: 5,
      name: 'Gemini',
      subtitle: 'by Google',
      meta: '2.5M views',
      description: 'A family of multimodal models developed by Google.',
      logo: '⭐',
      link: 'https://gemini.google.com/'
    },
    {
      id: 6,
      name: 'Claude',
      subtitle: 'by Anthropic',
      meta: '700K views',
      description: 'Next-generation AI assistant for your everyday tasks.',
      logo: 'A',
      link: 'https://claude.ai/'
    },
    {
      id: 7,
      name: 'Midjourney',
      subtitle: 'AI Art Generator',
      meta: '1.5M views',
      description: 'An independent research lab exploring new mediums of thought.',
      logo: 'M',
      link: 'https://www.midjourney.com/'
    },
    {
      id: 8,
      name: 'DALL-E',
      subtitle: 'by OpenAI',
      meta: '900K views',
      description: 'A new AI system that creates realistic images and art from a text description.',
      logo: 'D',
      link: 'https://openai.com/dall-e/'
    }
  ]);

  const handleDelete = (itemId) => {
    setFavoriteItems(favoriteItems.filter(item => item.id !== itemId));
  };

  const handleItemClick = (link) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <MainCard>
          <Nav activeNav="stars" />
          <FavoritesSection>
            <SectionTitle>
              " {favoriteItems.length} " Favorites Are Here!
            </SectionTitle>
            {favoriteItems.map(item => (
              <FavoriteItem key={item.id}>
                <ItemContent onClick={() => handleItemClick(item.link)}>
                  <ClickableArea>
                    <ItemLogo>{item.logo}</ItemLogo>
                    <ItemText>
                      <ItemTitle>
                        {item.name} <ItemSubtitle>{item.subtitle}</ItemSubtitle><ItemMeta>{item.meta}</ItemMeta>
                      </ItemTitle>
                      <ItemDescription>{item.description}</ItemDescription>
                    </ItemText>
                  </ClickableArea>
                  <DeleteButton onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}>
                    <TrashIcon />
                  </DeleteButton>
                </ItemContent>
              </FavoriteItem>
            ))}
          </FavoritesSection>
        </MainCard>
      </Container>
    </>
  );
}

export default Stars;