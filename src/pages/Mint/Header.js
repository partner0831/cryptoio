import React from "react";
// @import Component
import { Col, Row } from "../../components/Layout";
import { Text } from "../../components/Text";
import Switch from "../../components/Switch";

import { StyledHeader } from "../../style/Mint/style";
// import { theme } from "../../theme";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import { AiTwotoneSetting, AiOutlineDownCircle } from "react-icons/ai";
const Header = () => {
  return (
    <StyledHeader>
      <Col align="center" width="700px">
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
          >
            <Text fontWeight="bold" fontSize="20px">
              Add to collection
            </Text>
            <AiOutlineDownCircle size="40" color="white" />
          </Row>
          <Row
            padding="28px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
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
          >
            <Text fontWeight="bold" fontSize="20px">
              Single NFT
            </Text>
          </Row>
          <Switch />
          <Row
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            margin="0 0 0 20px"
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
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
          >
            <Text fontWeight="bold" fontSize="20px">
              Single File
            </Text>
          </Row>
          <Switch />
          <Row
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            margin="0 0 0 20px"
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
          <Col maxWidth="40%">
            <Row
              padding="20px 30px"
              border="10px solid #5ce1e6 !important"
              borderRadius="10px"
              width="100%"
            >
              <Text fontWeight="bold" fontSize="20px">
                Variant name...
              </Text>
            </Row>
            <Row>
              <Text fontWeight="bold" fontSize="20px" align="center">
                Advanced Settings
              </Text>
              <AiTwotoneSetting size="100" color="grey" />
            </Row>
          </Col>
          <Row
            maxWidth="50%"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            padding="30px 30px"
            width="400px"
            height="200px"
            align="flex-start"
            width="100%"
            justify="space-between"
          >
            <Text fontWeight="bold" fontSize="20px">
              Description
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
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            width="45%"
          >
            <Text fontWeight="bold" fontSize="20px">
              Variant name...
            </Text>
          </Row>
          <Row
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            width="50%"
          >
            <Text fontWeight="bold" fontSize="20px">
              Variant...(not required)
            </Text>
          </Row>
        </Row>
        <Row margin="25px 0 50px 0">
          <Row
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
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
