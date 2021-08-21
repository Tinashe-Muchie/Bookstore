import React, { useState, useContext } from 'react';
import styled, { keyframes} from 'styled-components';
import { BiHome } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
import { device } from '../../Components/index';
import AddressForm from './Address/AddressForm';
import Payment from './Payment/PaymentForm';
import { Confirmation } from './Confirmation/Confirmation';
import { GlobalContext } from '../../Context/Context';

function Checkout() {

  const { Order, Err } = useContext(GlobalContext);
  /*shippingdata is used to hold a client's shipping data, put put into the form*/  
  const [ shippingdata, setShippingdata ] = useState({});

  /*functions to handle moving between the address form and payment form*/
  const [ active, setActive ] = useState(0);
  const Next = () => {setActive((prevActiveStep) => prevActiveStep + 1)}
  const Prev = () => {setActive((prevActiveStep) => prevActiveStep - 1)}

  /*next is a function used to retrieve the client's shipping data so that it can 
  be sent forward to the payment component */ 
  const next = (data) => {
    setShippingdata(data);
    Next();
  }

  /*switch statement to alternate between address form, payment form and 
  confirmation form*/
  const getStep = (step) => {
    switch(step) {
      case 0:
        return <AddressForm next={next}/>
      case 1:
        return <Payment 
                  Shippingdata={shippingdata}
                  Next={Next}
                  Prev={Prev}
                  timeout={timeout}
                />
      case 2: 
        return <Confirmation 
                  Order={Order}
                  Err={Err}
                  Done={done}
                />
      default: throw new Error()
    }
  }

  /*declare done using useState to show when a process is done and then use it in timeout
  function. The timeout function is used to set a timeout for the payment confirmation 
  message */
  const [done, setDone] = useState(false)
  const timeout = () => {
    setTimeout(()=>{
      setDone(true)
    }, 7000)
  }

  return (
    <StepperWrapper>
      <StepperContainer>
        {
          (active === 0)
          ?   <ActiveStep> <BiHome /> </ActiveStep>
          :   <Step> <BiHome /> </Step>
        }
        {
          (active === 1)
          ?   <ActiveStep>  <MdPayment /> </ActiveStep>
          :   <Step1> <MdPayment /> </Step1>
        }  
      </StepperContainer>
      { getStep(active) }
    </StepperWrapper>  
  );  
}

export default Checkout;

/*defining styles with styled components*/

const StepperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.2rem;

  @media ${device.tablet} {
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items:center;
      margin: 0vh 10vw;
      padding: 2vh 0vw;
    }
`;
const StepperContainer = styled.div`
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0C0032;
  border: hidden;
  border-radius: .2rem;
  margin-top: .5rem;

@media ${ device.tablet } {
  width: 30rem;
  margin-top: 0rem;
} 
`;

const Step = styled.div`
  width: 10rem;
  padding: 0.5rem 0;
  color: #C5C6C7;
  text-align: center;
  border-right: .1rem solid #C5C6C7;

  @media ${ device.tablet } {
  width: 15rem;
  }
`;

const animate = keyframes`
  from{ background-color: #fff}
  to{ background-color: #C5C6C7}
`;
const ActiveStep = styled.div`
  width: 10rem;
  padding: 0.5rem 0;
  color: #0C0032;
  text-align: center;
  border: .1rem solid #C5C6C7;
  border-radius: .4rem;
  animation: ${animate} 4s ease-in-out infinite;
  background-color: #fff;

  @media ${ device.tablet } {
  width: 15rem;
  }
`;

const Step1 = styled.div`
  width: 10rem;
  padding: 0.5rem 0;
  color: #C5C6C7;
  text-align: center;

  @media ${ device.tablet } {
  width: 15rem;
  }
`;

