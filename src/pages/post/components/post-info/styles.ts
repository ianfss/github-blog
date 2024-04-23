import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  margin-top: -88px;

  padding: 32px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['base-profile']};
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  margin-bottom: 24px;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 20px;

  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  color: ${(props) => props.theme.blue};

  &:hover {
    margin-top: 1px;
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  margin-top: 8px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      line-height: 160%;

      color: ${(props) => props.theme['base-subtitle']};
    }

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
