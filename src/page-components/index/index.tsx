import styled from '@emotion/styled';

export const CanvasWrapper = styled.div`
  color: var(--text-main);
  display: flex;
  justify-content: center;
  margin: 40px auto;
  @media (max-width: 600px) {
    margin: 30px auto;
  }
  @media (max-width: 500px) {
    margin: 30px auto;
  }
`;

export const Canvas = styled.div`
  background-color: var(--background-main);
  flex: 1;
  padding: 40px;
  border-radius: 10px;
  max-width: 1200px;
  margin: 30px;
  @media (max-width: 900px) {
    margin: 30px 20px;
    padding: 40px 20px;
  }
  @media (max-width: 500px) {
    margin: 30px 0;
    padding: 40px 20px;
  }
`;
