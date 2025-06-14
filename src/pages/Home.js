import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/nav';
import GlobalStyle from '../styles/Globalstyle';
import SearchButtonIcon from '../assets/icon/search_button.svg';

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

const SearchSection = styled.div`
  text-align: center;
`;

const SearchTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: #424242;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const SearchContainer = styled.div`
  position: relative;
  /* SearchInput의 새 너비에 맞춰 max-width 조정 */
  max-width: 500px; 
  margin: 0 auto 24px auto;
`;

const SearchInput = styled.input`
  width: 500px;
  height: 50px;
  padding: 0 1.5rem; 
  padding-right: 3rem;
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 2rem;
  font-size: 1.1rem; 
  color: #374151;
  outline: none;
  transition: all 0.2s ease;
  line-height: 50px; 

  &::placeholder {
    color: #9ca3af;
  }
  &:focus {
    border-color: #a78bfa;
    box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.1);
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.5rem;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin-bottom: 40px;
  max-width: 900px;
  margin: 0 auto 40px auto;
  padding: 0 10px;
  box-sizing: border-box;
`;

const Tag = styled.span`
  background: #ede9fe;
  color: #616161;
  font-size: 1rem;
  border-radius: 16px;
  padding: 6px 18px;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  min-width: 80px;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #22223b;
  margin: 40px 0 16px 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SuggestionRow = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 16px;
`;

const SuggestionCard = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  width: 280px;
  min-height: 180px;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.div`
  background: #000;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 80%;
    max-height: 80%;
  }
`;

const CardContent = styled.div`
  padding: 18px 18px 12px 18px;
`;

const CardTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 2px;
`;

const CardDesc = styled.div`
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 10px;
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const CardTag = styled.span`
  background: #ede9fe;
  color: #7c3aed;
  font-size: 0.85rem;
  border-radius: 12px;
  padding: 3px 10px;
`;

const FilterTags = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const FilterTag = styled.span`
  background: #f3f4f6;
  color: #6b7280;
  font-size: 0.95rem;
  border-radius: 12px;
  padding: 4px 14px;
`;
function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // 태그 목록
  const tags = [
    '# chat', '# ui/ux', '# generate', '# video', '# image', '# docs', '# counsel',
    '# code', '# finance', '# legal', '# picture', '# automation', '# etc'
  ];

  return (
    <>
      <GlobalStyle />
      <Container>
        
        <MainCard>
           <Nav />
          <SearchSection>
            <SearchTitle>
              Search your AI 💡
            </SearchTitle>
            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="AI, category, info..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchButton>
                <img src={SearchButtonIcon} alt="검색" width={22} />
              </SearchButton>
            </SearchContainer>
            <TagList>
              {tags.map((tag) => (
                <Tag
                  key={tag}
                  onClick={() => setSearchQuery(tag.replace('# ', ''))}
                  style={{ cursor: 'pointer' }}
                >
                  {tag}
                </Tag>
              ))}
            </TagList>
          </SearchSection>
          {/* ...existing code... */}
        </MainCard>
      </Container>
    </>
  );
}

export default Home;