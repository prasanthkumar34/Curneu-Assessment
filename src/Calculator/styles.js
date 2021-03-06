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
    darker: '#7BB1CC',
    primary: 'rgba(126, 152, 208, 0.5)',
    dark: '#ebebfa',
    white: '#EEF1EF'
  };

const { primary, dark, white } = colors;

export const Wrapper = styled.div`
  font-family: GTWalsheim;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  transition: background-color 5s linear; 
  margin-left: 400px;
  width: 480px;
  border-radius: 50px;
  background-color: ${dark};
  padding: 120px;    margin-top: 15px;
  margin-bottom: 15px;

`;