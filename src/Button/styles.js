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
    darker: '#191966',
    primary: 'rgba(126, 152, 208, 0.5)',
    dark: '#ebebfa',
    white: '#EEF1EF'
  };

const {
  widthBiggerButton, widthSmallButton, heightButton
} = sizes;
const { darker, white } = colors;

export const Key = styled.button`
  font-family: 'digital';
  background-color: ${darker};
  height: ${heightButton};
  width: ${(props) => (props.size ? widthBiggerButton : widthSmallButton)};
  border-style: none;
  border-radius: ${(props) => (props.size ? '0%' : '50%')};
  color: ${white};
  cursor: pointer;
  margin-top: 10px;
  margin-right: 15px;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`;