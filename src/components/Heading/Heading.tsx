import styled from "styled-components";
import { Text } from "../Text";
import { tags,  HeadingProps } from "./types";

// const style = {
//   [sizes.MD]: {
//     fontSize: "20px",
//     fontSizeLg: "20px",
//   },
//   [sizes.LG]: {
//     fontSize: "24px",
//     fontSizeLg: "24px",
//   },
//   [sizes.XL]: {
//     fontSize: "32px",
//     fontSizeLg: "40px",
//   },
//   [sizes.XXL]: {
//     fontSize: "48px",
//     fontSizeLg: "64px",
//   },
// };

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.blackWhite};

  ${({ theme }) => theme.mediaQueries.MaxSm} {
    font-size: 25px;
    line-height: 25px;
    letter-spacing: 0.1em;
  }
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
