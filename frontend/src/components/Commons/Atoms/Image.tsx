import styled from "styled-components"

// hospital
import logo_hospital from "/src/assets/hospital/logo-hospital.png"
import map_marker_hospital from "/src/assets/hospital/map-marker-hospital.png"
import map_marker_ambulance from "/src/assets/hospital/map-marker-ambulance.png"
import transfer_activate from "/src/assets/hospital/transfer-activate.png"
import transfer_deactivate from "/src/assets/hospital/transfer-deactivate.png"
import history_activate from "/src/assets/hospital/history-activate.png"
import history_deactivate from "/src/assets/hospital/history-deactivate.png"
import statistic_activate from "/src/assets/hospital/statistic-activate.png"
import statistic_deactivate from "/src/assets/hospital/statistic-deactivate.png"
import setup_activate from "/src/assets/hospital/setup-activate.png"
import setup_deactivate from "/src/assets/hospital/setup-deactivate.png"

// paramedic
import ambulance from "/src/assets/paramedic/ambulance.png"
import ambulance_active from "/src/assets/paramedic/ambulance-active.png"
import request_bell from "/src/assets/paramedic/request-bell.png"
import request_bell_active from "/src/assets/paramedic/request-bell-active.png"
import cellphone from "/src/assets/paramedic/cellphone.png"
import cellphone_gray from "/src/assets/paramedic/cellphone-gray.png"
import record_video_black from "/src/assets/paramedic/record-video-black.png"
import record_video_pink from "/src/assets/paramedic/record-video-pink.png"
import record_camera_black from "/src/assets/paramedic/record-camera-black.png"
import record_camera_pink from "/src/assets/paramedic/record-camera-pink.png"
import record_voice_black from "/src/assets/paramedic/record-voice-black.png"
import record_voice_pink from "/src/assets/paramedic/record-voice-pink.png"
import arrow_pink_right from "/src/assets/paramedic/arrow-pink-right.png"
import arrow_black_right from "/src/assets/paramedic/arrow-black-right.png"
import recording_black from "/src/assets/paramedic/recording-black.png"
import recording_pink from "/src/assets/paramedic/recording-pink.png"

// share
import logo from "/src/assets/share/logo.png"
import logo_emergency_room from "/src/assets/share/logo-emergency-room.png"
import map_marker from "/src/assets/share/map-marker.png"
import arrow_right from "/src/assets/share/arrow-right.png"
import arrow_bottom from "/src/assets/share/arrow-bottom.png"
import arrow_left from "/src/assets/share/arrow-left.png"
import arrow_up from "/src/assets/share/arrow-up.png"
import bar from "/src/assets/share/bar.png"
import exit_black from "/src/assets/share/exit-black.png"
import exit_gray from "/src/assets/share/exit-gray.png"
import search_gray from "/src/assets/share/search-gray.png"

interface ImageProps {
  $height?: string;
  $width?: string;
  $margin?: string;
  $padding?: string;
  $border?: string;
  $borderRadius?: string;
  $boxSizing?: string;

  $position?: string;
  $transform?: string;
  $float?: string;
  $top?: string;
  $bottom?: string;
  $right?: string;
  $left?: string;
  $zIndex?: string;

  $cursor?: string;
}

const StyledImage = styled.img<ImageProps>`
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  border: ${(props) => props.$border};
  border-radius: ${(props) => props.$borderRadius};
  box-sizing: ${(props) => props.$boxSizing};

  position: ${(props) => props.$position};
  transform: ${(props) => props.$transform};
  float: ${(props) => props.$float};
  top: ${(props) => props.$top};
  bottom: ${(props) => props.$bottom};
  right: ${(props) => props.$right};
  left: ${(props) => props.$left};
  z-index: ${(props) => props.$zIndex}; 
  
  cursor: ${(props) => props.$cursor}; 
  `

// hospital
export const ImgLogoHospital = styled(StyledImage).attrs({src: logo_hospital})``;
export const ImgMapMarkerHospital = styled(StyledImage).attrs({src: map_marker_hospital})``;
export const ImgMapMarkerAmbulance = styled(StyledImage).attrs({src: map_marker_ambulance})``;
export const ImgTransferActivate = styled(StyledImage).attrs({src: transfer_activate})``;
export const ImgTransferDeactivate = styled(StyledImage).attrs({src: transfer_deactivate})``;
export const ImgHistoryActivate = styled(StyledImage).attrs({src: history_activate})``;
export const ImgHistoryDeactivate = styled(StyledImage).attrs({src: history_deactivate})``;
export const ImgStatisticActivate = styled(StyledImage).attrs({src: statistic_activate})``;
export const ImgStatisticDeactivate = styled(StyledImage).attrs({src: statistic_deactivate})``;
export const ImgSetupActivate = styled(StyledImage).attrs({src: setup_activate})``;
export const ImgSetupDeactivate = styled(StyledImage).attrs({src: setup_deactivate})``;

//paramedic
export const ImgAmbulance = styled(StyledImage).attrs({src: ambulance})``;
export const ImgAmbulanceActive = styled(StyledImage).attrs({src: ambulance_active})``;
export const ImgRequestBell = styled(StyledImage).attrs({src: request_bell})``;
export const ImgRequestBellActive = styled(StyledImage).attrs({src: request_bell_active})``;
export const ImgCellphone = styled(StyledImage).attrs({src: cellphone})``;
export const ImgCellphoneGray = styled(StyledImage).attrs({src: cellphone_gray})``;
export const ImgRecordVideoBlack = styled(StyledImage).attrs({src: record_video_black})``;
export const ImgRecordVideoPink = styled(StyledImage).attrs({src: record_video_pink})``;
export const ImgRecordCameraBlack = styled(StyledImage).attrs({src: record_camera_black})``;
export const ImgRecordCameraPink = styled(StyledImage).attrs({src: record_camera_pink})``;
export const ImgRecordVoiceBlack = styled(StyledImage).attrs({src: record_voice_black})``;
export const ImgRecordVoicePink = styled(StyledImage).attrs({src: record_voice_pink})``;
export const ImgArrowPinkRight = styled(StyledImage).attrs({src: arrow_pink_right})``;
export const ImgArrowBlackRight = styled(StyledImage).attrs({src: arrow_black_right})``;
export const ImgRecordingBlack = styled(StyledImage).attrs({src: recording_black})``;
export const ImgRecordingPink = styled(StyledImage).attrs({src: recording_pink})``;

// share
export const ImgLogo = styled(StyledImage).attrs({src: logo})``;
export const ImgLogoEmergencyRoom = styled(StyledImage).attrs({src: logo_emergency_room})``;
export const ImgMapMarker = styled(StyledImage).attrs({src: map_marker})``;
export const ImgArrowRight = styled(StyledImage).attrs({src: arrow_right})``;
export const ImgArrowBottom = styled(StyledImage).attrs({src: arrow_bottom})``;
export const ImgArrowLeft = styled(StyledImage).attrs({src: arrow_left})``;
export const ImgArrowUp = styled(StyledImage).attrs({src: arrow_up})``;
export const ImgBar = styled(StyledImage).attrs({src: bar})``;
export const ImgExitBlack = styled(StyledImage).attrs({src: exit_black})``;
export const ImgExitGray = styled(StyledImage).attrs({src: exit_gray})``;
export const ImgSearchGray = styled(StyledImage).attrs({src: search_gray})``;