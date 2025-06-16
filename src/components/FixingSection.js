import React from 'react';
import styled from 'styled-components';
import FixButtonIcon from '../assets/icon/fix_button.svg';

const FixingSectionWrapper = styled.div`
  position: absolute;
  right: 250px;
  top: 830px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FixedButton = styled.button` /* <button> 태그를 유지하고 window.open 사용 */
  width: 220px;
  height: 50px;
  background: #EBE1FC;
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: #7C3AED;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #e0d5f2;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

function FixingSection() {
  // AI 이름과 해당 외부 URL을 매핑
  const externalLinks = {
    'Perplexity': 'https://www.perplexity.ai/',
    'Grok': 'https://grok.x.ai/',
    'Copilot': 'https://copilot.microsoft.com/'
  };

  const handleFixedButtonClick = (aiName) => {
    const url = externalLinks[aiName];
    if (url) {
      // 새 탭으로 외부 URL을 열기
      window.open(url, '_blank', 'noopener,noreferrer');
      console.log(`Opening external link for ${aiName}: ${url}`);
    } else {
      console.warn(`No external link defined for ${aiName}`);
    }
  };

  return (
    <FixingSectionWrapper>
      <FixedButton onClick={() => handleFixedButtonClick('Perplexity')}>
        Perplexity
        <img src={FixButtonIcon} alt="fix" />
      </FixedButton>
      <FixedButton onClick={() => handleFixedButtonClick('Grok')}>
        Grok
        <img src={FixButtonIcon} alt="fix" />
      </FixedButton>
      <FixedButton onClick={() => handleFixedButtonClick('Copilot')}>
        Copilot
        <img src={FixButtonIcon} alt="fix" />
      </FixedButton>
    </FixingSectionWrapper>
  );
}

export default FixingSection;