import styled from "styled-components";

////////////////////////////////////////////////////
export const StyledHeader = styled.div`
  display: flex;
  transition: all 0.45s;
  flex-direction: column;
  background-size: cover;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #000 0%, #5a007d 100%);
  position: relative;
  .header-text {
    font-family: "horizon";
  }
  .space-img {
  }
  .header_view {
    max-width: 1250px;
  }
  @media screen and (max-width: 1300px) {
    .header_view {
      max-width: 1100px;
    }
  }
  @media screen and (max-width: 1150px) {
    .header_view {
      max-width: 1000px;
    }
  }
  @media screen and (max-width: 1000px) {
    .header_view {
      max-width: 850px;
    }
  }
  @media screen and (max-width: 850px) {
    .header_view {
      max-width: 700px;
    }
  }
  .date-selector {
    padding: 10px;
    border-radius: 10px;
    width: 200px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
  }
  .react-datepicker-wrapper {
    width: auto;
  }
  .react-datepicker-popper {
    z-index: 3;
  }
  .react-datepicker-ignore-onclickoutside {
    padding: 10px;
    outline: none;
    font-weight: bold;
  }
  .appt-time {
    width: 200px;
    border: none;
    outline: none;
    padding: 8px 10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1rem;
  }
  .rc-time-picker-input {
    font-weight: bold;

    height: 38px;
  }
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
`; ////////////////////////////////////////////////////
export const OverviewSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .dotborder {
    border-top: 4px dotted !important;
    width: 90%;
    border-color: white !important;
  }
  @media screen and (max-width: 850px) {
    .overview_header {
      font-size: 35px;
      text-align: center;
      padding: 0 10px;
    }
    .describe_header {
      width: 100%;
      font-size: 23px;
      text-align: center;
    }
    .overview_container {
      flex-direction: column;
      align-items: center;
    }
    .overview_description {
      padding: 0;
      margin-bottom: 20px;
      font-size: 19px;
    }
  }
`;

////////////////////////////////////////////////////
export const DigitalView = styled.div`
  width: 100%;
  display: flex;
  margin: 50px 0 50px 0;

  justify-content: center;
  .dotborder {
    border-top: 4px dotted !important;
    width: 90%;
    border-color: white !important;
  }
  @media screen and (max-width: 850px) {
    .digital_container {
      flex-direction: column-reverse;
      align-items: center;
    }
  }
  @media screen and (max-width: 600px) {
    .digital_header {
      font-size: 35px;
    }
  }
`;
////////////////////////////////////////////////////
export const StyledRoadmap = styled.div`
  width: 100%;
  .dotborder {
    border-top: 4px dotted !important;
    width: 90%;
    border-color: white !important;
  }
  @media screen and (max-width: 850px) {
    .roadmap_header {
      font-size: 35px;
    }
  }
`;
////////////////////////////////////////////////////
export const StyledTeam = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  align-items: center;
  .dotborder {
    border-top: 4px dotted !important;
    width: 90%;
    border-color: white !important;
  }
  @media screen and (max-width: 850px) {
    .team_header {
      font-size: 35px;
    }
  }
  @media screen and (max-width: 750px) {
    .team_grid {
      grid-template: repeat(2, 1fr) / repeat(2, 1fr) !important;
    }
  }
  @media screen and (max-width: 500px) {
    .team_grid {
      gap: 50px !important;
      grid-template: repeat(4, 1fr) / repeat(1, 1fr) !important;
    }
  }
`;
export const CustomArea = styled.textarea`
  background-color: transparent;
  border-color: transparent;
  font-weight: bold;
  font-size: 20px;
  color: white;
  outline: none;
  width: 100%;
  height: 100%;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(255, 255, 255, 0.5);
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, 0.5);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgba(255, 255, 255, 0.5);
  }
`;
export const CustomButton = styled.button`
  cursor: ${(props) => props.cursor || "unset"};
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 100%;
  position: absolute;
  z-index: 2;
  right: -70px;
  padding: 0px;
  outline: none;
  border: none;
`;
