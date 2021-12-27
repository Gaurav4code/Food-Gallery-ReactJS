import styled from "styled-components";

import Food1 from "../components/Food1.png";

import Food2 from "../components/Food2.png";
import Food3 from "../components/Food3.png";
import Food4 from "../components/Food4.png";
export const Card = () => {
  return (
    <Container>
      <Box>
        <Picture src={Food1} />

        <Text>
          Lorem ipsum dolor sit
          <br /> amet, consectetur
        </Text>
        <Info>Lorem ipsum</Info>
      </Box>
      <Box>
        <Picture src={Food2} />

        <Text>
          Lorem ipsum dolor sit
          <br /> amet, consectetur
        </Text>
        <Info>Lorem ipsum</Info>
      </Box>
      <Box>
        <Picture src={Food3} />

        <Text>
          Lorem ipsum dolor sit
          <br /> amet, consectetur
        </Text>
        <Info>Lorem ipsum</Info>
      </Box>
      <Box>
        <Picture src={Food4} />

        <Text>
          Lorem ipsum dolor sit
          <br /> amet, consectetur
        </Text>
        <Info>Lorem ipsum</Info>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  display: inline-block;
  margin: 30px 30px;
`;
const Text = styled.h1`
  font-family: Overpass;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -0.5px;
  text-align: left;
  color: white;
`;
const Picture = styled.img``;
const Info = styled.h3`
  font-family: Overpass;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0px;
  text-align: left;
  color: #d3d3d3;
`;
