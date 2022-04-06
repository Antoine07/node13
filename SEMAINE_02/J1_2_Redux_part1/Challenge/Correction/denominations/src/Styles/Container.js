import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
`;

const Container = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}



export default Container;
