import React from 'react';
import ProfilePage from '../Profilepage/index'

import { 
  Container, 
  Header, 
  BackIcon, 
  ProfileInfo,
  ButtonMenu,
  SearchIcon,
  HomeIcon,
  BellIcon,
  EmailIcon, 
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Nemoto Mailon</strong>
          <span>1024 tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage /> 

      <ButtonMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </ButtonMenu> 

    </Container>
  )
}

export default Main;