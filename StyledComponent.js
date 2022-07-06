import styled, { css } from 'styled-components';

const Box = styled.div`
    background: ${props => props.color || 'blue'};
    display: flex;
    padding: 1rem;

    width: 1440px;
    margin: 0 auto;
    @media (max-width:1024px) {
        width: 1024px;
        background: red;
    }
    @media (max-width:768px) {
        width: 100%;
        background: pink;
    }
    // 리액트 반응형

`;

const Button = styled.button`
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    background: white;

    &:hover {
        background: rgba(255, 255, 255, 0.8);
    }

    ${props => props.inverted &&
    css`
        background: none;
        color: white;
        border: 2px solid white;
        &:hover {
            background: white;
            color: black;
        }
    `};

    & + button {
        margin-left: 1rem;
    }

;`

function StyledComponent() {
    return(
        <Box color="black">
            <Button>안녕</Button> 
            <Button inverted={true}>잘가</Button>    
        </Box> 
    ) 
} 

export default StyledComponent;
    

/* true false값으로 적용 확인 */