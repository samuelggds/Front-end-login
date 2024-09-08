import styled from "styled-components";

export const Container = styled.div`
background-color: #181f36;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 20px;

`

export const TopBackground = styled.div`
background: linear-gradient(to right , #fe7e5d , #7f3841);
height: 30vh;
width: 90vw;
border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;
max-width: 800px;

img {
    max-width: 100%;
    max-height: 100%;
}
`
export const Title = styled.h2`
color: #fff;
text-align: center;
font-size: 38px;
font-weight: 600;
margin-top: 20px;

`
export const ContainerUsers = styled.div`
display: grid;
grid-template-columns: repeat(2 , 1fr);
gap: 20px;
margin: 30px 0;

@media (max-width: 750px) {
    grid-template-columns: repeat(1 , 1fr);
}

`
export const CardUsers = styled.div`
 display: flex;
 background-color: #252d48;
 padding: 16px;
 border-radius: 32px;
 justify-content: space-between;
 align-items: center;
 gap: 20px;
 max-width: 380px;

p {
    color: #fff;
    font-size: 14px;
    font-weight: 200;
}

h3 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 3px;
    text-transform: capitalize;
}
`
export const AvatarUser = styled.img`
height: 60px;
border-radius: 50px;


`
export const TrashIcon = styled.img`
cursor: pointer;
padding-left: 30px;

&:hover {
    opacity: 0.8;
}
&:active {
    opacity: 0.5;
}
`