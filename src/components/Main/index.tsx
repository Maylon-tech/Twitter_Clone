import React from 'react';
import ProfilePage from '../Profilepage/index'

import { 
  Container, 
  Header, 
  BackIcon, 
  ProfileInfo,
  BottonMenu,
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

      <BottonMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottonMenu> 

    </Container>
  )
}

export default Main;