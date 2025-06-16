import React from 'react';
import styled from 'styled-components';

const RankingSectionWrapper = styled.div`
  margin-top: 40px;
`;

const RankingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const RankingLeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
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

const RankingTabs = styled.div`
  display: flex;
  background: #EDEBFD;
  border-radius: 24px;
  padding: 4px;
  margin-left: -30px;
`;

const RankingTab = styled.button`
  background: ${props => props.active ? '#ffffff' : 'transparent'};
  border: none;
  font-size: 1rem;
  color: ${props => props.active ? '#1f2937' : '#6b7280'};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: ${props => props.active ? '500' : '400'};
  transition: all 0.2s ease;
  box-shadow: ${props => props.active ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'};

  &:hover {
    color: #1f2937;
  }
`;

const RankingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 60px;
`;

const RankingItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
`;

const RankNumber = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: ${props => props.rank <= 3 ? '#7c3aed' : '#616161'};
  width: 40px;
  text-align: center;
`;

const RankingItem = styled.div`
  display: flex;
  width: 600px;
  height: 90px;
  align-items: center;
  padding: 16px;
  border-radius: 30px;
  border: 1px solid #D9D9D9; 
  background: #fff;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
  }
`;

const ItemLogo = styled.div`
  width: 48px;
  height: 48px;
  background: #10b981;
  border-radius: 12px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const ItemContent = styled.div`
  flex-grow: 1;
`;

const ItemTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ItemMeta = styled.span`
  font-size: 0.85rem;
  color: #BDBDBD;
  font-weight: 400;
`;

const ItemDesc = styled.div`
  font-size: 0.9rem;
  color: #6b7280;
  margin-top: 4px;
  max-width: 400px;
`;

function RankingSection({ activeTab, setActiveTab, rankingData }) {
  return (
    <RankingSectionWrapper>
      <RankingHeader>
        <RankingLeftSection>
          <SectionTitle>
            AI RANKING🔥
          </SectionTitle>
          <RankingTabs>
            <RankingTab 
              active={activeTab === 'view'} 
              onClick={() => setActiveTab('view')}
            >
              view
            </RankingTab>
            <RankingTab 
              active={activeTab === 'star'} 
              onClick={() => setActiveTab('star')}
            >
              star
            </RankingTab>
          </RankingTabs>
        </RankingLeftSection>
      </RankingHeader>

      <RankingList>
        {rankingData.map((item, index) => (
          <RankingItemContainer key={index}>
            <RankNumber rank={item.rank}>{item.rank}</RankNumber>
            <RankingItem>
              <ItemLogo>⬡</ItemLogo>
              <ItemContent>
                <ItemTitle>
                  {item.name}
                  <ItemMeta>{item.meta}</ItemMeta>
                </ItemTitle>
                <ItemDesc>{item.description}</ItemDesc>
              </ItemContent>
            </RankingItem>
          </RankingItemContainer>
        ))}
      </RankingList>
    </RankingSectionWrapper>
  );
}

export default RankingSection;