import styled from 'styled-components/macro';

export const Container = styled.div `
    padding-top: 50px;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div `
    display: flex;
    padding: 0 45px 40px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
    
    @media (max-width: 600px) {
        padding: 0 5% 50px;
    }
`;

export const Title = styled.h1`
    max-width: 815px;
    padding: 0 45px;
    font-size: 50px;
    font-weight: normal;
    line-height: 1.1;
    margin: 0 auto 8px;
    color: #fff;
    text-align: center;
    
    @media (max-width: 600px) {
        padding: 0 5%;
        font-size: 35px;
    }
`;

export const Item = styled.div`
    max-width: 100%;
    color: white;
    margin-bottom: 10px;
    
    &:first-of-type {
        margin-top: 3em;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1px;
    padding: 0.8em 1.2em;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    user-select: none;
    cursor: pointer;
    
    img {
        filter: brightness(0) invert(1);
        width: 24px;
        
        @media (max-width: 600px) {
            width: 16px;
        }
    }
    
    @media (max-width: 600px) {
        font-size: 16px;
    }
`;

export const Body = styled.div`
    max-height: 1200px;
    transition: max-height .5s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: 0.8em 2.2em 0.8em 1.2em;
    white-space: pre-wrap;
    user-select: none;
    
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;