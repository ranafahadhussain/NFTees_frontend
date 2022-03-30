import Breadcrumbs from "components/Breadcrumbs";
import Container from "components/layout/Container";
import InformationForm from "./components/InformationForm";
import { CartInformationContainer, FlexContainer } from "./style";

const CartInformation: React.FC = () => {
  return (
    <Container>
      <CartInformationContainer>
        <FlexContainer>
          <div className="first-col">
            <Breadcrumbs />
            <InformationForm/>
          </div>
          <div className="second-col">asdad</div>
        </FlexContainer>
      </CartInformationContainer>
    </Container>
  );
};

export default CartInformation;

