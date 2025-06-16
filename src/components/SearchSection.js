import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SearchButtonIcon from '../assets/icon/search_button.svg';

const SearchSectionWrapper = styled.div`
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
  transition: color 0.2s ease;

  &:hover {
    color: #7c3aed;
  }
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
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ddd6fe;
    color: #7c3aed;
  }
`;

function SearchSection({ searchQuery, setSearchQuery, tags }) {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // 검색어가 있으면 검색 페이지로 이동
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleTagClick = (tag) => {
    const cleanTag = tag.replace('# ', '');
    // 검색어 설정과 네비게이션을 동시에 처리
    setSearchQuery(cleanTag);
    
    // 현재 경로가 /search인지 확인
    if (window.location.pathname === '/search') {
      // 이미 검색 페이지에 있다면 URL만 업데이트
      navigate(`/search?query=${encodeURIComponent(cleanTag)}`, { replace: true });
    } else {
      // 다른 페이지에서 검색 페이지로 이동
      navigate(`/search?query=${encodeURIComponent(cleanTag)}`);
    }
  };

  return (
    <SearchSectionWrapper>
      <SearchTitle>
        Search your AI 💡
      </SearchTitle>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="AI, category, info..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <SearchButton onClick={handleSearch}>
          <img src={SearchButtonIcon} alt="검색" width={22} />
        </SearchButton>
      </SearchContainer>
      <TagList>
        {tags.map((tag, index) => (
          <Tag
            key={index}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Tag>
        ))}
      </TagList>
    </SearchSectionWrapper>
  );
}

export default SearchSection;