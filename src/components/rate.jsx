import { styled } from "styled-components";
import MadeMake from "../components/makeMade"
import Star from '../assets/Star.svg'
import Thanks from "./thanks";
import { useState } from "react";

const list = [ 1 , 2 , 3 , 4 , 5 ]

const Rate = () => {
    const [submit , setSubmit] = useState(true)
    const [rate , setRate] = useState(0)

    const handleClick = (e) => {
        setRate(parseInt(e.target.textContent))
    }
    return (
        <Main>
            {   submit ?
            <div>
                <Img src={Star} alt="Rate Star" />
                <MadeMake title="How did we do?" review="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!" />
                <div className="numbers">
                    {list.map(i => <HandleP about={(i === rate)} key={i-1} onClick={handleClick}>{i}</HandleP>)}
                </div>
                <button onClick={() => setSubmit(false)}>submit</button>
            </div>
                :
            <Thanks score={rate}/>
            }
        </Main>
    )
}

export default Rate;

const Main = styled.main`
    background: radial-gradient(98.96% 98.96% at 50.00% 0%, #232A34 0%, #181E27 100%);
    padding: 2.4rem;
    border-radius: 1.5rem;
    max-width: 35rem;

    .numbers {
        display: flex;
        justify-content: space-between;
    }
    button {
        background-color: #FC7614;
        color: white;
        width: 100%;
        border: 0;
        border-radius: 2.25rem;
        font-size: 1.4rem;
        font-weight: 700;
        letter-spacing: .1867rem;
        text-transform: uppercase;
        padding: 1.2rem 0;
    }

    @media (min-width: 768px) {
        max-width: 42.1rem;
        padding: 3.2rem 4rem 3.2rem 3.2rem;

        button {
            font-size: 1.5rem;
            padding: 1.1rem 0;
            letter-spacing: .2rem;
            cursor: pointer;
        }
        button:hover {
            background-color: #FFF;
            color: #FC7614;
        }
        .numbers p:hover {
            background-color: #7C8798;
            color: #FFF;
        }
    }
`
const Img = styled.img`
    width: 4.9rem;
    background-color: #262E38;
    padding: 1.6rem;
    border-radius: 50%;
`
const HandleP = styled.p`
    background-color: ${props => props.about ? '#FC7614': '#262E38'};
    color: ${props => props.about ? 'white' : '#7C8798'};
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2.4rem;
    letter-spacing: .0175rem;
    padding: .93rem 1.73rem .87rem 1.81rem;
    border-radius: 50%;
    margin: 2.4rem 0;

    @media (min-width: 768px) {
        font-size: 1.6rem;
        letter-spacing: .02rem;
        padding: 1.3rem 2.1rem 1.4rem 2.2rem;
        margin-bottom: 3.2rem;
        cursor: pointer;
    }
`