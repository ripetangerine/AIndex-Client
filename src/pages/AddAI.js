import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/Nav';
import GlobalStyle from '../styles/Globalstyle';

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

const Content = styled.div`
  padding: 50px;
`;

const UploadSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const UploadButton = styled.button`
  background: #9ca3af;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 16px 24px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 auto 12px;
  
  &:hover {
    background: #6b7280;
  }
`;

const UploadText = styled.p`
  color: #9ca3af;
  font-size: 14px;
  margin: 0;
`;

const HiddenInput = styled.input`
  display: none;
`;

const FormSection = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  color: #374151;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  
  &::placeholder {
    color: #9ca3af;
  }
  
  &:focus {
    outline: none;
    border-color: #7c3aed;
  }
`;

const TwoColumnRow = styled.div`
  display: flex;
  gap: 24px;
  
  > div {
    flex: 1;
  }
`;

const SelectContainer = styled.div`
  position: relative;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #7c3aed;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
  resize: vertical;
  font-family: inherit;
  
  &::placeholder {
    color: #9ca3af;
  }
  
  &:focus {
    outline: none;
    border-color: #7c3aed;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 40px;
`;

const CancelButton = styled.button`
  background: #f3f4f6;
  color: #374151;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: #e5e7eb;
  }
`;

const SubmitButton = styled.button`
  background: ${props => props.disabled ? '#d1d5db' : '#7c3aed'};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  &:hover {
    background: ${props => props.disabled ? '#d1d5db' : '#6d28d9'};
  }
`;

const UploadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

function AddAI() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    url: '',
    category: '',
    languages: '',
    promptExample: '',
    explanation: ''
  });
  
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);
  
  const categories = [
    '# chat',
    '# ui/ux',
    '# generate',
    '# video',
    '# image',
    '# docs',
    '# counsel',
    '# code',
    '# finance',
    '# legal',
    '# picture',
    '# automation',
    '# etc'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      if (file.size <= 5 * 1024 * 1024) { // 5MB 제한
        setUploadedFile(file);
      } else {
        alert('파일 크기는 5MB 이하여야 합니다.');
      }
    } else {
      alert('PNG 또는 JPG 파일만 업로드 가능합니다.');
    }
  };

  const isFormValid = () => {
    return formData.name.trim() &&
           formData.company.trim() &&
           formData.url.trim() &&
           formData.category &&
           formData.languages.trim() &&
           formData.promptExample.trim() &&
           formData.explanation.trim() &&
           uploadedFile;
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      console.log('Form submitted:', { ...formData, file: uploadedFile });
      alert('AI 등록이 완료되었습니다!');
      navigate('/');
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      company: '',
      url: '',
      category: '',
      languages: '',
      promptExample: '',
      explanation: ''
    });
    setUploadedFile(null);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <MainCard>
          <Nav activeNav="add" />
          <Content>
            <UploadSection>
              <UploadButton onClick={() => fileInputRef.current?.click()}>
                <UploadIcon />
                upload
              </UploadButton>
              <UploadText>
                {uploadedFile ? uploadedFile.name : 'Upload AI Image PNG, JPG files (up to 5MB)'}
              </UploadText>
              <HiddenInput
                ref={fileInputRef}
                type="file"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileUpload}
              />
            </UploadSection>

            <FormSection>
              <Label>AI name</Label>
              <Input
                type="text"
                name="name"
                placeholder="AI의 이름을 입력해주세요"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormSection>

            <TwoColumnRow>
              <FormSection>
                <Label>AI company</Label>
                <Input
                  type="text"
                  name="company"
                  placeholder="AI가 속한 회사를 입력해주세요"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </FormSection>
              <FormSection>
                <Label>URL</Label>
                <Input
                  type="text"
                  name="url"
                  placeholder="AI 관련 웹사이트를 입력해주세요"
                  value={formData.url}
                  onChange={handleInputChange}
                />
              </FormSection>
            </TwoColumnRow>

            <FormSection>
              <Label>AI Category</Label>
              <SelectContainer>
                <Select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="">AI의 카테고리를 선택해주세요</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
              </SelectContainer>
            </FormSection>

            <FormSection>
              <Label>Supported languages</Label>
              <Input
                type="text"
                name="languages"
                placeholder="global, English..."
                value={formData.languages}
                onChange={handleInputChange}
              />
            </FormSection>

            <FormSection>
              <Label>Prompt Example</Label>
              <Textarea
                name="promptExample"
                placeholder={`AI를 사용하는 예시 prompt를 입력해주세요.

예시:
- 이 이미지의 주요 객체를 설명해주세요
- 데이터의 통계치 패턴을 분석해주세요
- 전자의 대출에 대한 정보를 설명해주세요`}
                value={formData.promptExample}
                onChange={handleInputChange}
              />
            </FormSection>

            <FormSection>
              <Label>AI Explanation</Label>
              <Textarea
                name="explanation"
                placeholder="AI의 특징, 주요 기능"
                value={formData.explanation}
                onChange={handleInputChange}
              />
            </FormSection>

            <ButtonSection>
              <CancelButton onClick={handleCancel}>
                cancel
              </CancelButton>
              <SubmitButton 
                disabled={!isFormValid()}
                onClick={handleSubmit}
              >
                Add New AI
              </SubmitButton>
            </ButtonSection>
          </Content>
        </MainCard>
      </Container>
    </>
  );
}

export default AddAI;