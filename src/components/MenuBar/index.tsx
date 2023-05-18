import React from 'react'
import Button from '../Button/index'

import { 
  Container, 
  Logo, 
  Topside,
  MenuButton, 
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  ProfileData,
  Avatar,
  ExitIcon  
} from './styles'

const MenuSideBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificação</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Nemoto Dev</strong>
          <span>@Nemoto_Dev</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  )
}

export default MenuSideBar