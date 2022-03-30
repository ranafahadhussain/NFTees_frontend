import Container from "components/layout/Container";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { StaticRoutesEnum } from "utils/enums";
import NftCard from "./components/NftCard";

const Collections: React.FC = () => {
  const history  = useHistory()
  return (
    <Container>
      <Row className="mx-0 mt-4">
        <Col lg={3} md = {4} xs = {6} onClick = {()=> {
          history.push(StaticRoutesEnum.PRODUCT_DETAIL)
        }}>
        <NftCard />
        </Col>
         <Col lg={3} md = {4} xs = {6} onClick = {()=> {
          history.push(StaticRoutesEnum.PRODUCT_DETAIL)
        }}>
        <NftCard />
        </Col>
         <Col lg={3} md = {4} xs = {6} onClick = {()=> {
          history.push(StaticRoutesEnum.PRODUCT_DETAIL)
        }}>
        <NftCard />
        </Col>
         <Col lg={3} md = {4} xs = {6} onClick = {()=> {
          history.push(StaticRoutesEnum.PRODUCT_DETAIL)
        }}>
        <NftCard />
        </Col>
         <Col lg={3} md = {4} xs = {6} onClick = {()=> {
          history.push(StaticRoutesEnum.PRODUCT_DETAIL)
        }}>
        <NftCard />
        </Col>
         <Col lg={3} md = {4} xs = {6} onClick = {()=> {
          history.push(StaticRoutesEnum.PRODUCT_DETAIL)
        }}>
        <NftCard />
        </Col>
         <Col lg={3} md = {4} xs = {6} onClick = {()=> {
          history.push(StaticRoutesEnum.PRODUCT_DETAIL)
        }}>
        <NftCard />
        </Col>
         <Col lg={3} md = {4} xs = {6} onClick = {()=> {
          history.push(StaticRoutesEnum.PRODUCT_DETAIL)
        }}>
        <NftCard />
        </Col>
      </Row>

    </Container>
  );
};

export default Collections;
