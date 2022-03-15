import styled from 'styled-components';

export default function HomePage() {

    return(
        <Container>
            <p>Hello World</p>
        </Container>
    )
}


const Container = styled.div`
    height: 100%;
    width: 70vw;
    margin: 100px auto 0 auto;
   
    @media(max-width: 614px) {
        width: 90%;
        margin: 50px auto 0px auto;
    }
`