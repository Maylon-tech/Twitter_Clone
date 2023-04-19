import styled, { css } from "styled-components";
import { LocationOn, Cake } from '../../styles/icons'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  
  scrollbar-width: none; // Firefox
  // Chrome
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Banner = styled.div`
  flex-shrink: 0; // Nao deixar diminuir o tamanho.
  width: 100%;
  height: min(33vw, 199px);
  background-color: var(--twitter);
  position: relative;

`

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;
`

export const EditButton = styled.div``


  const iconCSS = css`
    width: 20px;
    height: 20px;

    color: var(--gray);
  `

export const CakeIcon = styled(Cake)`
  ${iconCSS}
`

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`

export const Followage = styled.div``