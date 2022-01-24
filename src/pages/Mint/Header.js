import React, { useState } from "react";
// @import Component
import { Col, Row } from "../../components/Layout";
import { Text } from "../../components/Text";
import { CustomInput } from "../../components/Input";
import { Radio, RadioGroup } from "@mui/material";

import { StyledHeader, CustomArea, CustomButton } from "../../style/Mint/style";
import "react-toastify/dist/ReactToastify.css";

import { AiTwotoneSetting, AiOutlineDownCircle } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { BiMinus } from "react-icons/bi";
const Header = () => {
  // const [count, setCount] = useState(1);
  const [flag, setFlag] = useState(false);
  const [value, setValue] = useState(false);
  const [mintValue, setMintValue] = useState([
    { num: 1, name: "mintedBy", value: "Cardahub.io", flag: true },
    { num: 2, name: "mintedBy", value: "Cardahub.io", flag: false },
    { num: 3, name: "mintedBy", value: "Cardahub.io", flag: true },
  ]);
  const onChangePlusMint = (num) => {
    // const data = mintValue;
    const data = mintValue.map((item) => {
      if (item.num === num) {
        item.flag = !item.flag;
      }
      return item;
    });
    data.push({ num: num + 1, name: "", value: "", flag: true });
    setMintValue(data);
  };
  const onChangeMinusMint = (num) => {
    let data = [];
    mintValue.map((item) => item.num !== num && data.push(item));
    setMintValue(data);
  };
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
          <Col maxWidth="40%" position="relative">
            <Col
              backgroundColor="#996b45"
              width="300px"
              height="250px"
              padding="30px 30px"
              align="center"
              position="absolute"
              zIndex="2"
              top="-150px"
              left="25px"
              display={flag ? "flex" : "none"}
            >
              <Text fontWeight="bold" fontSize="30px" align="center">
                ADVANCED SETTINGS
              </Text>
              <RadioGroup
                value={value}
                onChange={() => {
                  setValue(!value);
                }}
              >
                <Row width="100%">
                  <Text fontWeight="bold" fontSize="18px">
                    STORE ON IPFS
                  </Text>
                  <Radio />
                </Row>
                <Row width="100%">
                  <Text fontWeight="bold" fontSize="18px">
                    STORE ON ARWEAVE
                  </Text>
                  <Radio />
                </Row>
              </RadioGroup>
            </Col>

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
              <AiTwotoneSetting
                size="50"
                color="grey"
                cursor="pointer"
                onClick={() => {
                  setFlag(!flag);
                }}
              />
            </Row>
          </Col>
          <Row
            height="200px"
            maxWidth="48%"
            width="400px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            align="flex-start"
            padding="30px"
          >
            <CustomArea placeholder="Description"></CustomArea>
          </Row>
        </Row>
        {mintValue.map((item, key) => {
          return (
            <Row
              margin="25px 0 0 0"
              width="100%"
              justify="space-between"
              position="relative"
              key={key + 1}
            >
              <CustomInput
                fontWeight="bold"
                fontSize="20px"
                fontColor="white"
                placeholder={item.num === 1 ? "mintedBy" : "e.g.`Size`"}
                disabled={item.num === 1 ? true : false}
                backgroundColor="transparent"
                padding="20px 30px"
                border="10px solid #5ce1e6 !important"
                borderRadius="10px"
                width="45%"
              />
              <CustomInput
                fontWeight="bold"
                fontSize="20px"
                placeholder={item.num === 1 ? "Cardahub.io" : "e.g.`100m`"}
                disabled={item.num === 1 ? true : false}
                backgroundColor="transparent"
                fontColor="white"
                padding="20px 30px"
                border="10px solid #5ce1e6 !important"
                borderRadius="10px"
                width="48%"
              />
              <CustomButton
                disabled={true}
                cursor={item.num === 1 ? "not-allowed" : "pointer"}
              >
                {item.flag === false || item.num === 1 ? (
                  <BiMinus
                    size="30"
                    color="black"
                    onClick={() =>
                      item.num !== 1 && onChangeMinusMint(item.num)
                    }
                  />
                ) : (
                  <GoPlus
                    size="30"
                    color="black"
                    onClick={() => {
                      onChangePlusMint(item.num);
                    }}
                  />
                )}
              </CustomButton>
            </Row>
          );
        })}

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
