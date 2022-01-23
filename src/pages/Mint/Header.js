import React from "react";
// @import Component
import { Col, Row } from "../../components/Layout";
import { Text } from "../../components/Text";
import { CustomInput } from "../../components/Input";

import { StyledHeader } from "../../style/Mint/style";
// import { theme } from "../../theme";
import "react-toastify/dist/ReactToastify.css";
import { AiTwotoneSetting, AiOutlineDownCircle } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
const Header = () => {
  // const [count, setCount] = useState(1);
  return (
    <StyledHeader>
      <Col align="center" width="740px">
        <Row
          margin="100px 0 0 0"
          mgap="0 30px 0 0"
          width="100%"
          justify="space-between"
        >
          <Row
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            mgap="0 20px 0 0"
            cursor="pointer"
          >
            <Text fontWeight="bold" fontSize="20px">
              Add to collection
            </Text>
            <AiOutlineDownCircle size="40" color="white" />
          </Row>
          <Row
            padding="28px 25px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            cursor="pointer"
          >
            <Text fontWeight="bold" fontSize="20px">
              New collection
            </Text>
          </Row>
        </Row>
        <Row
          margin="25px 0 0 0"
          mgap="0 20px 0 0"
          width="100%"
          justify="space-between"
        >
          <Row
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            cursor="pointer"
          >
            <Text fontWeight="bold" fontSize="20px">
              Single NFT
            </Text>
          </Row>

          <Row
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            margin="0 0 0 20px"
            cursor="pointer"
          >
            <Text fontWeight="bold" fontSize="20px">
              Multiple NFTs
            </Text>
          </Row>
        </Row>

        <Row
          margin="25px 0 0 0"
          mgap="0 30px 0 0"
          width="100%"
          justify="space-between"
        >
          <Row
            padding="20px 33px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            cursor="pointer"
          >
            <Text fontWeight="bold" fontSize="20px">
              Single File
            </Text>
          </Row>

          <Row
            padding="20px 33px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            margin="0 0 0 20px"
            cursor="pointer"
          >
            <Text fontWeight="bold" fontSize="20px">
              Multiple Files
            </Text>
          </Row>
        </Row>
        <Row margin="25px 0 0 0" mgap="0 30px 0 0">
          <Col
            backgroundColor="grey"
            width="350px"
            height="250px"
            padding="30px 30px"
            align="center"
          >
            <Text fontWeight="bold" fontSize="30px" align="center">
              DISPLAY FILE
            </Text>
            <Text fontWeight="bold" fontSize="18px" align="center">
              This file is displayed on the CryptoHipHop marketplace.
            </Text>
          </Col>
          <Col
            backgroundColor="grey"
            width="350px"
            height="250px"
            padding="30px 30px"
            align="center"
          >
            <Text fontWeight="bold" fontSize="30px">
              MINTERFACE
            </Text>
            <Text fontWeight="bold" fontSize="18px" align="center">
              Upload your file that is meant to be the NFTs content. We upload
              it either to Arweave or IPFS depending on the file size
            </Text>
          </Col>
        </Row>
        <Row
          margin="25px 0 0 0"
          mgap="0 30px 0 0"
          width="100%"
          justify="space-between"
        >
          <Col maxWidth="45%">
            <CustomInput
              fontWeight="bold"
              fontSize="20px"
              placeholder="Variant name..."
              backgroundColor="transparent"
              fontColor="white"
              padding="20px 30px"
              border="10px solid #5ce1e6 !important"
              borderRadius="10px"
              width="100%"
            />

            <Row justify="space-between" margin="20px 0 0 0" width="100%">
              <Text fontWeight="bold" fontSize="20px" align="center">
                Advanced Settings
              </Text>
              <AiTwotoneSetting size="50" color="grey" cursor="pointer" />
            </Row>
          </Col>
          <CustomInput
            maxWidth="48%"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            padding="0 30px"
            width="400px"
            height="200px"
            fontSize="20px"
            fontWeight="bold"
            placeholder="Description"
            backgroundColor="transparent"
          />
        </Row>

        <Row
          margin="25px 0 0 0"
          width="100%"
          justify="space-between"
          position="relative"
        >
          <CustomInput
            fontWeight="bold"
            fontSize="20px"
            placeholder="Variant name..."
            backgroundColor="transparent"
            fontColor="white"
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            width="45%"
          />
          <CustomInput
            fontWeight="bold"
            fontSize="20px"
            placeholder="Variant name..."
            backgroundColor="transparent"
            fontColor="white"
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            width="48%"
          />
          <Row
            backgroundColor="white"
            borderRadius="100%"
            position="absolute"
            zIndex="2"
            right="-70px"
            padding="8px"
            cursor="pointer"
          >
            <GoPlus size="30" color="black"></GoPlus>
          </Row>
        </Row>
        <Row margin="25px 0 50px 0">
          <Row
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            cursor="pointer"
          >
            <Text fontWeight="bold" fontSize="20px">
              MINT NOW
            </Text>
          </Row>
        </Row>
      </Col>
    </StyledHeader>
  );
};
export default Header;
