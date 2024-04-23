import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  margin-top: 48px;
  margin-bottom: 48px;
`

export const Post = styled(Link)`
  padding: 32px;
  border-radius: 10px;
  height: 260px;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background: ${(props) => props.theme['base-post']};

  &:hover {
    margin: -2px;
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  header {
    display: flex;
    gap: 16px;

    h3 {
      flex: 1;
      font-size: 1.25rem;
      font-weight: 700;

      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;

      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }
`
