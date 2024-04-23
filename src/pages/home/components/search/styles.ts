import styled from 'styled-components'

export const SearchContainer = styled.form`
  margin-top: 72px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 1.125rem;
      line-height: 160%;
      font-weight: 700;

      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;

    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
