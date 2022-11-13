import styled from 'styled-components'

export const StyledModal = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 35;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background-color: #11111190;

  form {
    width: min(90%, 450px);
    height: 80%;
    margin: 0 auto;
    padding: 1rem 1.25rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    border: none;
    border-radius: 0.625rem;
    background-color: ${(props) => props.theme.colors.backgroundLevel2};

    span {
      display: inline-block;
      padding: 0 1rem;
      align-self: flex-end;

      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme.colors.textColorBase};

      border: 1px solid transparent;
      border-radius: 0.25rem;

      transition: all 300ms ease-in-out;

      &:hover {
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.colors.textColorLevel1};
      }
    }

    .select-box {
      width: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;

      label {
        color: ${(props) => props.theme.colors.textColorBase};
        font-weight: 500;
      }

      select {
        flex: 1;
        padding: 0.5rem 1rem;

        background-color: ${(props) => props.theme.colors.backgroundLevel1};
        color: ${(props) => props.theme.colors.textColorBase};

        border: 1px solid ${(props) => props.theme.colors.borderBase};
        border-radius: 0.25rem;

        &::placeholder {
          color: ${(props) => props.theme.colors.textColorLevel1};
        }

        &:focus {
          border: 1px solid;
          border-color: ${(props) => props.theme.colors.success};
        }

        &:focus-visible {
          outline: none;
        }
      }
    }

    input {
      width: 100%;
      padding: 0.5rem 1rem;

      background-color: ${(props) => props.theme.colors.backgroundLevel1};
      color: ${(props) => props.theme.colors.textColorBase};

      border: 1px solid ${(props) => props.theme.colors.borderBase};
      border-radius: 0.25rem;

      &::placeholder {
        color: ${(props) => props.theme.colors.textColorLevel1};
      }

      &:focus {
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.success};
      }

      &:focus-visible {
        ::placeholder {
          color: ${(props) => props.theme.colors.backgroundLevel1};
        }
        outline: none;
      }
    }

    .error-feedback {
      align-self: flex-start;
      padding-left: 0.5rem;
      font-size: 0.75rem;
      font-weight: 500;
      color: ${(props) => props.theme.colors.red};
    }

    .thumbnail {
      width: 100%;
      height: 200px;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid ${(props) => props.theme.colors.borderBase};
      border-radius: 0.25rem;

      div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.25rem;
      }
    }

    button {
      width: 100%;
      padding: 0.5rem 2rem;

      background-color: ${(props) => props.theme.colors.red};
      color: #fff;

      border: none;
      border-radius: 0.25rem;

      cursor: pointer;

      &:disabled {
        background-color: #666;
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
`
