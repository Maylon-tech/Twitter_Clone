import React from 'react'

import { 
  Container, 
  Retweeted,  
  RocketSeatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles'

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketSeatIcon />
        You Retweeted...
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>RocketSeat</strong>
            <span>@RocketSeat</span>
            <Dot />
            <time>28 de Fev </time>
          </Header>

          <Description>Foguete nao tem asas</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              19
            </Status>

            <Status>
              <RetweetIcon />
              26
            </Status>

            <Status>
              <LikeIcon />
              99
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet