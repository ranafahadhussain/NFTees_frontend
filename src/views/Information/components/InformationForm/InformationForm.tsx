import { CartActionButton, ReturnButton } from "components/Button";
import InputField from "components/Input";
import styled, { useTheme } from "styled-components";
import { FormHeading } from "views/Information/style";
import ReturnDark from "assets/images/icons/returnDarkIcon.svg";
import ReturnLight from "assets/images/icons/returnLightIcon.svg";

const InformationForm: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <InformationFormContainer>
      <div className="contactSection">
        <FormHeading>Contact information</FormHeading>
        <InputField placeHolder="Country/Resion" />
      </div>

      <div className="shippingSection">
        <FormHeading>Shipping address</FormHeading>
        <InputField placeHolder="Country/Resion" />

        <div className="d-flex flex-input justify-content-between">
          <div>
            <InputField placeHolder="First Name" />
          </div>
          <div>
            <InputField placeHolder="Last Name" />
          </div>
        </div>

        <InputField placeHolder="Company ( Optional )" />
        <InputField placeHolder="Address" />
        <InputField placeHolder="Apartment, suite, etc. ( optional )" />

        <div className="d-flex flex-input justify-content-between">
          <div>
            <InputField placeHolder="City" />
          </div>
          <div>
            <InputField placeHolder="Post Code" />
          </div>
        </div>

        <InputField placeHolder="Phone" />

        
      </div>


      <div className="d-flex actionSection">
          <ReturnButton>
            <img src={isDark ? ReturnLight :  ReturnDark} alt="" />
            Return to Cart
          </ReturnButton>

          <CartActionButton>
          Continue to shipping 
          </CartActionButton>
        </div>
    </InformationFormContainer>
  );
};

export default InformationForm;

const InformationFormContainer = styled.div`
  padding: 15px 40px 25px 0px;
  .contactSection {
    margin-bottom: 3rem;
  }
  .shippingSection {
    .flex-input {
      div {
        width: 47.5%;
      }
    }
  }
  .actionSection {
    justify-content : space-between;
  }

  ${({ theme }) => theme.mediaQueries.MaxSm} {
    padding: 15px 0px 25px 0px;
    .actionSection {
      flex-direction: column;
    }
  }
`;
