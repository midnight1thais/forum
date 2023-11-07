import home from '../../assets/home.png'
import note from '../../assets/note.png'
import user from '../../assets/user.png'

import React from 'react';
import { Icon, MenuContainer, MenuItem, MenuLine, MenuText } from './style';

function Menu(){

  // const [selectedItem, setSelectedItem] = useState(0);

  // const handleItemClick = index => {
  //   setSelectedItem(index);
  // };

  return (
    <MenuContainer>
      <MenuItem href="/home">
        <Icon src={home} alt=''/>
        <MenuText>Página Principal</MenuText>
        <MenuLine className="MenuLine"  />
      </MenuItem>

      <MenuItem href="/account">
        <Icon src={user} alt=''/>
        <MenuText>Minha conta</MenuText>
        <MenuLine className="MenuLine"  />
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;