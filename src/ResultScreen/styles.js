import styled from 'styled-components';

export const sizes = {
    sizeScreen: '80px',
    heightButton: '65px',
    heightMobileButton: '80px',
    widthMobileButton: '80px',
    widthSmallButton: '65px',
    widthBiggerButton: '225px'
  };
  
  export const colors = {
    darker: '#8c8c8c',
    primary: 'rgba(126, 152, 208, 0.5)',
    dark: '#ebebfa',
    white: '#EEF1EF'
  };

const { sizeScreen } = sizes;
const { white, darker } = colors;

export const Container = styled.div`
  min-height: ${sizeScreen};
  font-size: ${sizeScreen};
  text-align: right;
  word-wrap: break-word;
  background-color: ${darker};
  color: ${white};
  margin-top: 15px;
  margin-bottom: 10px;
  width: 90%;
  padding: 7px;
  font-family: 'digital';
  @media (max-width: 768px) {
    max-width: 330px;
  }
`;