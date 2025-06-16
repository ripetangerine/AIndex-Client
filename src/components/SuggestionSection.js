import React from 'react';
import styled from 'styled-components';
import StarsButtonIcon from './icon/StarsButtonIcon'; // Adjust path if needed

const SuggestionSectionWrapper = styled.div`
  margin-top: 40px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;  
  margin-bottom: 23px; 
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #22223b;
  margin: 0 20px 0 60px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FilterTabs = styled.div`
  display: flex;
  gap: 10px;
`;

const FilterTab = styled.button`
  background: ${props => props.$active ? '#EDEBFD' : '#EEEEEE'};
  color: ${props => props.$active ? '#424242' : '#9E9E9E'};
  font-size: 15px;
  border: none;
  border-radius: 12px;
  padding: 6px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
`;

const SuggestionRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0;
`;

const SuggestionCard = styled.div`
  border-radius: 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  width: 280px;
  min-height: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 60px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.12);
  }
`;

const CardImageSection = styled.div`
  height: 120px;
  background:rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StarButton = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardSubtitleInline = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: #6b7280;
`;

const CardDesc = styled.div`
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 16px;
  line-height: 1.4;
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const CardTag = styled.span`
  background: #EDEBFD;
  color: #616161;
  font-size: 0.85rem;
  border-radius: 12px;
  padding: 4px 12px;
  font-weight: 500;
`;

function SuggestionSection({ activeFilter, setActiveFilter, suggestions, starredItems, toggleStar }) {
  return (
    <SuggestionSectionWrapper>
      <SectionHeader>
        <SectionTitle>
          Today's suggestion 😊
        </SectionTitle>
        <FilterTabs>
          <FilterTab 
            onClick={() => setActiveFilter('chat')}
            $active={activeFilter === 'chat'}
          >
            chat
          </FilterTab>
          <FilterTab 
            $active={activeFilter === 'generate'}
            onClick={() => setActiveFilter('generate')}
          >
            generate
          </FilterTab>
          <FilterTab 
            $active={activeFilter === 'productivity'}
            onClick={() => setActiveFilter('productivity')}
          >
            productivity
          </FilterTab>
        </FilterTabs>
      </SectionHeader>
      <SuggestionRow>
        {suggestions.map((item) => (
          <SuggestionCard key={item.id}>
            <CardImageSection>
              <StarButton
                $isStarred={starredItems.has(item.id)}
                onClick={e => {
                  e.stopPropagation();
                  toggleStar(item.id);
                }}
              >
                <StarsButtonIcon filled={starredItems.has(item.id)} />
              </StarButton>
            </CardImageSection>
              
            <CardContent>
              <CardHeader>
                <CardTitle>
                  {item.name}
                  <CardSubtitleInline>{item.subtitle}</CardSubtitleInline>
                </CardTitle>
              </CardHeader>
              {item.description && <CardDesc>{item.description}</CardDesc>}
              <CardTags>
                {item.tags.map((tag) => (
                  <CardTag key={tag}>#{tag}</CardTag>
                ))}
              </CardTags>
            </CardContent>
          </SuggestionCard>
        ))}
      </SuggestionRow>
    </SuggestionSectionWrapper>
  );
}

export default SuggestionSection;