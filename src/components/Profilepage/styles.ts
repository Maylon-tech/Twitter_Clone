import styled, { css } from "styled-components";
import { LocationOn, Cake } from '../../styles/icons'


export const Container = styled.div``

export const Banner = styled.div``

export const Avatar = styled.div``

export const ProfileData = styled.div``

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