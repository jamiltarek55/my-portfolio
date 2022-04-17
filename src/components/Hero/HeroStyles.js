import styled from 'styled-components';


export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
padding: -rem;
place-items: left;
column-gap: 2rem;
row-gap: -1rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: -1;
}

`;
export const Img = styled.img`
  width:70%;
  height:100%;
  object-fit: flip;
  overflow: hidden;
  padding-top:1.5rem;
  padding-bottom:1.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: auto;
}
`;
export const LeftSection = styled.div `
width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 3 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
