import React, { useState, useEffect, useRef } from "react";
import { useAdaContext } from "../context/CardanoContext";
// @import component
import { Row, Col } from "../components/Layout";
import { Image } from "../components/Image";
import { Text } from "../components/Text";
// @import style
import { StyledNavbar } from "./style";

// @import social icon
import { FaBars } from "react-icons/fa";
import { BarView } from "./style";

import Sidebar from "./Sidebar";

const Navbar = () => {
  const menuRef = useRef(null);
  const { currentAcc } = useAdaContext();
  const [menushow, setMenushow] = useState(false);

  useEffect(() => {
    setMenushow(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const MenuShow = () => {
    console.log(menushow);
    setMenushow(menushow ? false : true);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && menuRef.current.contains(e.target)) {
      return;
    }
    setMenushow(false);
  };
  const connectWallet = async () => {
    if (window.cardano) {
      let cardano = window.cardano;
      await cardano.enable();
    } else {
      window.alert("Please install Nami Wallet");
    }
  };
  return (
    <StyledNavbar>
      <Sidebar menushow={menushow} menuRef={menuRef} />
      <Col
        height="120px"
        backgroundColor="#000000"
        align="center"
        justify="center"
        padding="5px 5px"
      >
        <Row
          justify="space-between"
          width="100%"
          maxWidth="1250px"
          margin="0 15px 0 0"
        >
          <Row height="100%">
            <Image
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_150,h_150/https://www.cryptohiphop.io/wp-content/uploads/2021/10/chhlogofontwebsiteheaderwhite-150x150.png"
              height="120px"
            />
            <Row
              height="100%"
              margin="0 0 0 20px"
              backgroundColor="grey"
              padding="0 30px"
            >
              <Text fontWeight="bold">MINTERFACE</Text>
            </Row>
          </Row>
          <Row
            padding="20px 10px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            cursor="pointer"
            onClick={() => connectWallet()}
          >
            <Text fontWeight="bold">
              {currentAcc && currentAcc[0]
                ? `${currentAcc[0].slice(0, 6)}.....${currentAcc[0].slice(
                    currentAcc[0].length - 4,
                    currentAcc[0].length
                  )}`
                : "Connect Wallet"}
            </Text>
          </Row>
        </Row>
      </Col>
      <BarView>
        <FaBars size="30" color="white" onClick={MenuShow} />
      </BarView>
    </StyledNavbar>
  );
};
export default Navbar;
