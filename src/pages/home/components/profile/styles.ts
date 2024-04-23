import styled from 'styled-components'

export const ProfileContainer = styled.section`
  margin-top: -88px;

  padding: 32px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  gap: 32px;

  background: ${(props) => props.theme['base-profile']};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      line-height: 160%;

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Avatar = styled.img`
  border-radius: 8px;
  width: 148px;
  height: 148px;
  object-fit: cover;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

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

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

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
