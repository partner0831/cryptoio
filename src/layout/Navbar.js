import React, { useState, useEffect, useRef } from "react";
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
  const [menushow, setMenushow] = useState(false);
  // const [userAccount, setUserAccount] = useState();
  // const menustate = localStorage.getItem("rightmenu");

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
          >
            <Text fontWeight="bold">1addrdX......3E4a</Text>
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
