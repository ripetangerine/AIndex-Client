import React from 'react';
import styled from 'styled-components';
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
          >
            {tag}
          </Tag>
        ))}
      </TagList>
    </SearchSectionWrapper>
  );
}

export default SearchSection;