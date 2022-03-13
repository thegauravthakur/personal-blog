import styled from '@emotion/styled';

export const StyledNav = styled.nav`
    color: white;
    background-color: var(--background-main);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;
    @media (max-width: 930px) {
        padding: 0 50px;
    }
    @media (max-width: 830px) {
        padding: 0 40px;
    }
    @media (max-width: 780px) {
        padding: 0 20px;
    }
`;

export const StyledHeader = styled.a`
    display: flex;
    align-items: center;
    column-gap: 8px;
    font-weight: inherit;
    color: var(--title-main);
    text-decoration: none;
    font-size: 20px;
    transition: color 0.2s ease-out;
    cursor: pointer;
    &:focus-within {
        outline: 3px dotted var(--primary-main);
        outline-offset: 3px;
    }
`;

export const StyledToolbox = styled.ul`
    list-style: none;
    height: 100%;
    color: var(--text-main);
    display: flex;
    align-items: center;
    @media (max-width: 740px) {
        display: none;
    }
`;

export const ToolboxItem = styled.li`
    min-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    text-align: center;
    border-bottom: 5px solid transparent;
    border-top: 5px solid transparent;
    transition: border-bottom-color 0.2s ease-in;
    &:hover,
    &:focus-within {
        border-bottom: 5px solid var(--link-main);
        outline: none;
    }
`;

export const ToolBoxItemLink = styled.a`
    text-decoration: none;
    color: inherit;
    outline: none;
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`;
