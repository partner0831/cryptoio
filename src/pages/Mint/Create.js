import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { MdFileUpload } from "react-icons/md";

import { Text } from "../../components/Text";
import { Col, Row } from "../../components/Layout";
import { CustomInput } from "../../components/Input";

import { CustomArea } from "../../style/Mint/style";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "#808080",
  boxShadow: 24,
  p: 4,
  border: "none",
};

export default function CreateModal({ open, onCreateModal }) {
  return (
    <Modal
      open={open}
      onClose={() => {
        onCreateModal(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Col mgap="0 0 20px 0" align="center">
          <Text fontWeight="bold" fontSize="30px">
            CREATE NEW COLLECTION
          </Text>
          <CustomInput
            fontWeight="bold"
            fontSize="20px"
            fontColor="white"
            width="80%"
            placeholder="Variant name..."
            backgroundColor="transparent"
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
          />
          <Row
            width="80%"
            height="150px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            align="flex-start"
            padding="20px"
          >
            <CustomArea placeholder="Description.." />
          </Row>
          <Col
            backgroundColor="black"
            cursor="pointer"
            width="180px"
            align="center"
            padding="20px 0"
            mgap="0 0 15px 0"
          >
            <Text fontWeight="bold" fontSize="30px" align="center">
              BANNER
            </Text>
            <MdFileUpload size={50} color="white" />
          </Col>
          <Row
            padding="15px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            cursor="pointer"
          >
            <Text fontWeight="bold" fontSize="20px">
              DONE
            </Text>
          </Row>
        </Col>
      </Box>
    </Modal>
  );
}
