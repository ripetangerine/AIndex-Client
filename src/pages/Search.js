import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import GlobalStyle from '../styles/Globalstyle';
import SearchSectionComponent from '../components/SearchSection';
import { useSearchParams } from 'react-router-dom';

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

const ResultSection = styled.div`
  margin-top: 32px;
`;

const ResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ResultTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #374151;
`;

const ResultCount = styled.span`
  font-size: 16px;
  color: #6b7280;
`;

const AIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const AICard = styled.div`
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 20px;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #a78bfa;
    box-shadow: 0 4px 12px rgba(167, 139, 250, 0.1);
    transform: translateY(-2px);
  }
`;

const AIHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const AILogo = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #a78bfa, #7c3aed);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-right: 12px;
`;

const AIInfo = styled.div`
  flex: 1;
`;

const AIName = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 4px 0;
`;

const AIDescription = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 12px 0;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const AITag = styled.span`
  background: #ede9fe;
  color: #7c3aed;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 500;
`;

const NoResult = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #6b7280;
`;

const NoResultIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const NoResultTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
`;

const NoResultText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 4px solid #e5e7eb;
    border-top: 4px solid #a78bfa;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function Search() {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('query') || '';
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [isLoading, setIsLoading] = useState(false);

  // 확장된 AI 데이터
  const aiList = [
    { 
      id: 1, 
      name: 'ChatGPT', 
      description: '대화형 AI 어시스턴트로 텍스트 생성과 질문 답변에 특화',
      tags: ['chat', 'generate', 'writing', 'counsel'],
      logo: 'C'
    },
    { 
      id: 2, 
      name: 'Claude', 
      description: '문서 분석과 긴 텍스트 처리에 뛰어난 AI 어시스턴트',
      tags: ['chat', 'docs', 'analysis', 'writing'],
      logo: 'CL'
    },
    { 
      id: 3, 
      name: 'Gemini', 
      description: 'Google의 멀티모달 AI로 텍스트, 이미지, 코드 생성 가능',
      tags: ['chat', 'generate', 'image', 'code'],
      logo: 'G'
    },
    { 
      id: 4, 
      name: 'Midjourney', 
      description: '고품질 AI 이미지 생성에 특화된 창작 도구',
      tags: ['image', 'generate', 'art', 'creative'],
      logo: 'MJ'
    },
    { 
      id: 5, 
      name: 'GitHub Copilot', 
      description: '코드 작성을 도와주는 AI 프로그래밍 어시스턴트',
      tags: ['code', 'programming', 'automation', 'generate'],
      logo: 'GH'
    },
    { 
      id: 6, 
      name: 'Perplexity', 
      description: '실시간 정보 검색과 답변을 제공하는 AI 검색 엔진',
      tags: ['search', 'chat', 'research', 'information'],
      logo: 'P'
    },
    { 
      id: 7, 
      name: 'Notion AI', 
      description: '문서 작성과 업무 자동화를 위한 생산성 AI',
      tags: ['docs', 'automation', 'writing', 'productivity'],
      logo: 'N'
    },
    { 
      id: 8, 
      name: 'Figma AI', 
      description: 'UI/UX 디자인 작업을 지원하는 디자인 AI 도구',
      tags: ['ui/ux', 'design', 'creative', 'automation'],
      logo: 'F'
    },
    { 
      id: 9, 
      name: 'Runway ML', 
      description: '비디오 편집과 생성을 위한 창작 AI 플랫폼',
      tags: ['video', 'generate', 'creative', 'editing'],
      logo: 'R'
    },
    { 
      id: 10, 
      name: 'Legal AI', 
      description: '법률 문서 분석과 법적 조언을 제공하는 전문 AI',
      tags: ['legal', 'docs', 'analysis', 'counsel'],
      logo: 'L'
    }
  ];

  // 태그 목록
  const tags = [
    '# chat', '# ui/ux', '# generate', '# video', '# image', '# docs', '# counsel',
    '# code', '# finance', '# legal', '# picture', '# automation', '# etc'
  ];

  // 검색어에 해당하는 AI만 필터링
  const filteredAI = searchQuery
    ? aiList.filter(ai =>
        ai.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ai.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ai.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : aiList;

  // 쿼리 파라미터가 바뀌면 검색어도 바뀌게
  useEffect(() => {
    const newQuery = searchParams.get('query') || '';
    setSearchQuery(newQuery);
    
    // 검색 로딩 효과
    if (newQuery) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const handleAIClick = (ai) => {
    // AI 상세 페이지로 이동 (구현 필요)
    console.log('AI 클릭됨:', ai.name);
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
          <ResultSection>
            <ResultHeader>
              <ResultTitle>
                {searchQuery ? `"${searchQuery}" 검색 결과` : '전체 AI 목록'}
              </ResultTitle>
              <ResultCount>
                {filteredAI.length}개의 AI 도구
              </ResultCount>
            </ResultHeader>
            
            {isLoading ? (
              <LoadingSpinner />
            ) : filteredAI.length === 0 ? (
              <NoResult>
                <NoResultIcon>🔍</NoResultIcon>
                <NoResultTitle>검색 결과가 없습니다</NoResultTitle>
                <NoResultText>
                  "{searchQuery}"에 해당하는 AI를 찾을 수 없습니다.<br/>
                  다른 키워드로 검색해보세요.
                </NoResultText>
              </NoResult>
            ) : (
              <AIGrid>
                {filteredAI.map(ai => (
                  <AICard key={ai.id} onClick={() => handleAIClick(ai)}>
                    <AIHeader>
                      <AILogo>{ai.logo}</AILogo>
                      <AIInfo>
                        <AIName>{ai.name}</AIName>
                      </AIInfo>
                    </AIHeader>
                    <AIDescription>{ai.description}</AIDescription>
                    <TagContainer>
                      {ai.tags.map((tag, index) => (
                        <AITag key={index}>#{tag}</AITag>
                      ))}
                    </TagContainer>
                  </AICard>
                ))}
              </AIGrid>
            )}
          </ResultSection>
        </MainCard>
      </Container>
    </>
  );
}

export default Search;