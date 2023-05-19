import React from 'react'
import StickyBox from 'react-sticky-box';
import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles'
import List from '../List/index'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List 
            title="Talvez voce curta"
            elements={[
              <FollowSuggestion 
                name="Luiz hota"
                nickname="@ZesoHota"
              />,
              <FollowSuggestion 
                name="John hota"
                nickname="@SiofeHota"
              />,
              <FollowSuggestion 
                name="Joze hota"
                nickname="@ManeHota"
              />
            ]}
          />
          <List 
            title="Talvez voce curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List 
            title="Talvez voce curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List 
            title="Talvez voce curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar