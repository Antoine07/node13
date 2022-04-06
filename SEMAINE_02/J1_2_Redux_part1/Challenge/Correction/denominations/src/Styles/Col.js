import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    flex: auto;
    margin: 0.8rem;
`;

const Col = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}



export default Col;
