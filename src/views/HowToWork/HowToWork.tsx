import Container from "components/layout/Container";
import Work from "./components/Work";
import { StyleMainWork, Listitem, BoxBullet, HideBoxBullet } from "./style";

const HowToWork: React.FC = () => {
  return (
    <Container>
      <StyleMainWork className="mx-auto">
        <Listitem className="">
          <BoxBullet className="" />
          <div className="questionHeading">How to Purchase?</div>
        </Listitem>
        <Listitem className="">
          <HideBoxBullet className="" />
          <div className="questionText">

            Go to <a href= "http://metamask.com/" rel="noopener noreferrer" target= "_blank">metamask.com</a> and create a wallet.
          </div>
        </Listitem>
        <Listitem className="">
          <HideBoxBullet className="" />
          <div className="questionText">
            Head to <a href= "http://0xnftees.io/" rel="noopener noreferrer" target= "_blank"> 0xnftees.io </a> and log in using your <a href= "http://0xnftees.io/" rel="noopener noreferrer" target= "_blank">wallet.</a>
          </div>
        </Listitem>
        <Listitem className="">
          <HideBoxBullet className="" />
          <div className="questionText"> Buy or Bid on your favorite items</div>
        </Listitem>
        
        <Work />
      </StyleMainWork>
    </Container>
  );
};

export default HowToWork;
