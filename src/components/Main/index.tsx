import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

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

      {/* <ProfilePage /> */}

      {/* <ButtonMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </ButtonMenu> */}

    </Container>
  )
}

export default Main;