import { styled } from 'styled-components';
import Payment from '../assets/payment.svg'
import MadeMake from './makeMade';

const Thanks = () => {
    return (
        <Main>
            <img src={Payment} alt="Payment" />
            <P>You selected 4 out of 5</P>
            <MadeMake title="Thank you!" review="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!" />
        </Main>
    );
}

export default Thanks;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
        width: 14.4rem;
        height: auto;
        background-color: transparent;
        padding: 0;
    }
    p {
        font-size: 1.55rem;
    }
`

const P = styled.p`
    color: #FC7614;
    font-size: 1.4rem;
    padding: .5rem 1.2rem;
    background-color: #262E38;
    border-radius: 2.25rem;
    line-height: 2.2rem;
    margin: 2.4rem 0 .8rem 0;
`