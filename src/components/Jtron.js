import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function Jtron() {
  return (
    <Jumbotron fluid>
      <Container fluid className="mr-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            id="curve"
            fill="#0099ff"
            d="M0,128L21.8,144C43.6,160,87,192,131,208C174.5,224,218,224,262,229.3C305.5,235,349,245,393,250.7C436.4,256,480,256,524,266.7C567.3,277,611,299,655,298.7C698.2,299,742,277,785,250.7C829.1,224,873,192,916,154.7C960,117,1004,75,1047,48C1090.9,21,1135,11,1178,10.7C1221.8,11,1265,21,1309,32C1352.7,43,1396,53,1418,58.7L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
          <text width="1000">
            <textPath alignment-baseline="bottom" xlink:Href="#curve">
              Dangerous Curves Ahead
            </textPath>
          </text>
        </svg>
      </Container>
    </Jumbotron>
  );
}
