import "./styles.css";
import styled from "styled-components";
import { Card } from "./components/Cards";
export default function App() {
  return (
    <div className="App">
      <Conatiner>
        <Text>
          Foods that you may fall
          <br /> in love with
        </Text>
        <Card></Card>
        <Button>Load More</Button>
      </Conatiner>
    </div>
  );
}

const Conatiner = styled.div`
  height: 155vh;

  border-radius: 0px;

  background: black;

  position: sticky;

  padding: 5px 0px;
  top: 0px;
`;
const Text = styled.h1`
  height: 36px;
  margin: 60px 30px;

  font-family: Open Sans;
  font-size: 52px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: -0.5px;
  text-align: center;
  color: white;
`;

const Button = styled.button`
  border: solid white 1px;
  border-radius: 20px;
  background: transparent;
  color: white;
  padding: 25px 100px;
  font-family: Overpass;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0px;
  text-align: center;
`;
