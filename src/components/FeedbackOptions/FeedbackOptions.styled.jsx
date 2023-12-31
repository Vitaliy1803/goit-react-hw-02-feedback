import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff; 
  color: #fff; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  :hover {
    background-color: #0056b3;
  }
  :active {
    background-color: #003f80;
  }
`;
