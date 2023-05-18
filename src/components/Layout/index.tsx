import React from 'react'
import Main from '../Main/index'
import { Container, Wrapper } from './styles'
import MenuSideBar from '../MenuBar'
import SideBar from '../SideBar'

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
         <MenuSideBar /> 
          <Main />
          <SideBar /> 
      </Wrapper>
    </Container> 
  )
}

export default Layout