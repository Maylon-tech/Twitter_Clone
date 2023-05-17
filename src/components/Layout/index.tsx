import React from 'react'
import Main from '../Main/index'
import { Container, Wrapper } from './styles'
import MenuSideBar from '../MenuSideBar'

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
         <MenuSideBar /> 
          <Main />
        {/* <Sidebar /> */}
      </Wrapper>
    </Container> 
  )
}

export default Layout