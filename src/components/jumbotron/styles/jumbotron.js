import styled from 'styled-components/macro';

export const Item = styled.div `
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: #fff;
    overflow: hidden;    
`;

export const Inner = styled.div `
    display: flex;
    align-items: center;
    flex-direction: ${({direction}) => direction};
    justify-content: space-between;
    max-width: 1000px;
    margin: auto;
    
    @media (max-width: 1000px) {
        flex-direction: column;
        max-width: 100%;
    }
`;

export const Pane = styled.div`
    width: 50%;
    
    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 15px;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    font-weight: normal;
    line-height: 1.1;
    margin-bottom: 8px;
    
    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    
    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

export const Container = styled.div`
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;