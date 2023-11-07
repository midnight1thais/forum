import styled from 'styled-components';


export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 2%;
  top: 10%;
  padding-top: 8vh;
  z-index: 1;
`;

export const MenuItem = styled.a`
  display: flex;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  border-right: ${props => (props.isSelected ? '2px solid #00166A' : 'none')};
  background: ${props => (props.isSelected ? '#C5D8FF' : 'transparent')};
  transition: background 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  position: relative;

  &:hover {
    background: #C5D8FF;
    border-right: 2px solid #00166A;
  }

  &:hover ~ .MenuLine {
    background-color: #00166A;
  }
`;

export const MenuLine = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${props => (props.isSelected ? '#00166A' : 'transparent')};
  
  top: 0;
  visibility: ${props => (props.isSelected ? 'visible' : 'hidden')};
`;

export const Icon = styled.img`
  width: 1rem; /* Use rem ou em para uma medida responsiva */
  height: 1rem; /* Use rem ou em para uma medida responsiva */
  
`;

export const MenuText = styled.span`
  color: #000;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
`;