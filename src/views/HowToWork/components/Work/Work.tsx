import {
  StyleWork,
  Listitem,
  BoxBullet,
  HideBoxBullet,
} from "views/HowToWork/style";

const Work: React.FC = () => {
  return (
    <StyleWork>
      <Listitem className="">
        <BoxBullet className="" />
        <div className="questionHeading">How to Work?</div>
      </Listitem>
      <Listitem className="">
        <HideBoxBullet className="" />
        <div className="d-flex align-items-baseline">
          <div className="questionHeading font20">Step 1</div>
          <div className="questionText">Create an Ethereum Wallet</div>
        </div>
      </Listitem>
    
      <Listitem className="">
        <HideBoxBullet className="" />
        <div className="d-flex align-items-baseline">
          <div className="questionHeading font20">Step 2</div>
          <div className="questionText"> Connect your wallet on 0xnftees.io</div>
        </div>
      </Listitem>
      <Listitem className="">
        <HideBoxBullet className="" />
        <div className="d-flex align-items-baseline">
          <div className="questionHeading font20">Step 3</div>
          <div className="questionText">Buy or Bid on your favourite NFTs</div>
        </div>
      </Listitem>
      <Listitem className="">
        <HideBoxBullet className="" />
        <div className="d-flex align-items-baseline">
          <div className="questionHeading font20">Step 4</div>
          <div className="questionText"> Fill out Shipping Form</div>
        </div>
      </Listitem>
      <Listitem className="">
        <HideBoxBullet className="" />
        <div className="d-flex align-items-baseline">
          <div className="questionHeading font20">Step 5</div>
          <div className="questionText">View your wearable NFTs in wallet</div>
        </div>
      </Listitem>
      <Listitem className="">
        <HideBoxBullet className="" />
        <div className="d-flex align-items-baseline">
          <div className="questionHeading font20">Step 6</div>
          <div className="questionText"> Receive your Tees at Home</div>
        </div>
      </Listitem>
      
    </StyleWork>
  );
};

export default Work;
