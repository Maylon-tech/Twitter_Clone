import React from 'react';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  CakeIcon,
  LocationIcon,
  Followage
} from './styles';

const Profilepage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton>Editar Perfil</EditButton> */}

        <h1>Nemoto maylon</h1>
        <h2>@nemotoDow@gmail.com</h2>
        
        <p>
          Developer at 
          <a href="https://rocketseat.com.br">@RocketSeat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Parana, Colorado
          </li>
          <li>
            <CakeIcon />
            Nascido (a) em 16 de Abril de 1998
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>87</strong>
          </span>
          <span>
            <strong>547 </strong> seguidores
          </span>
        </Followage>

      </ProfileData>
    </Container>
  )
}

export default Profilepage;