import home from '../../assets/home.png'
import note from '../../assets/note.png'
import user from '../../assets/user.png'


import React, { useState } from 'react';
import { Icon, MenuContainer, MenuItem, MenuLine, MenuText } from './style';

function Menu(){
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = index => {
    setSelectedItem(index);
  };

  return (
    <MenuContainer>
      <MenuItem href="#" isSelected={selectedItem === 0} onClick={() => handleItemClick(0)}>
        <Icon src={home} alt=''/>
        <MenuText>Página Principal</MenuText>
        {selectedItem === 0 && <MenuLine className="MenuLine" isSelected />}
      </MenuItem>
      <MenuItem href="#" isSelected={selectedItem === 1} onClick={() => handleItemClick(1)}>
        <Icon src={note} alt=''/>
        <MenuText>Minhas postagens</MenuText>
        {selectedItem === 1 && <MenuLine className="MenuLine" isSelected />}
      </MenuItem>
      <MenuItem href="#" isSelected={selectedItem === 2} onClick={() => handleItemClick(2)}>
        <Icon src={user} alt=''/>
        <MenuText>Minha conta</MenuText>
        {selectedItem === 2 && <MenuLine className="MenuLine" isSelected />}
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;