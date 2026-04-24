import React from 'react'
import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJs, NextJs e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Ilustration
        src="/img/hero-illustration.svg"
        alt="Uma pessoa desenvolvedora em frente de uma tela com código"
      />
    </S.Wrapper>
  )
}

export default Main
// test comment
