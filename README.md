# 구급대장

### 📜 Contents
- [Overview](#overview)  
- [팀원 소개](#팀원-소개)
- [주요 기능](#주요-기능)  
- [개발 환경](#개발-환경)  
- [시스템 아키텍처](#시스템-아키텍처)  
- [기획 및 설계 산출물](#기획-및-설계-산출물)  
- [Conventions](#conventions)  


## Overview
구급 현장에서 빠르게 환자 상태를 작성하고 최적의 병원들에게 일괄 이송 요청을 보내는 구급 활동 지원 서비스입니다. 구급대원 태블릿 앱, 병원 콘솔 웹, 일반 사용자 모바일 앱에서 실시간 서비스를 사용할 수 있습니다.  
<div align="middle">
<img src="/img/logo.png" width="50%"/>
</div>

## 팀원 소개
<div align="middle">
<table>
    <tr>
        <td height="140px" align="center"> <a href="https://github.com/hyo-nu">
            <img src="https://avatars.githubusercontent.com/hyo-nu" width="140px" /> <br><br> 👑 정현우 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/swy0123">
            <img src="https://avatars.githubusercontent.com/swy0123" width="140px" /> <br><br> 🐲 이시영 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/uttamapaksa">
            <img src="https://avatars.githubusercontent.com/uttamapaksa" width="140px" /> <br><br> 🐟 김준섭 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/bbong-gu">
            <img src="https://avatars.githubusercontent.com/bbong-gu" width="140px" /> <br><br> 👻 이승종 <br>(Back-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/suyeonsu">
            <img src="https://avatars.githubusercontent.com/suyeonsu" width="140px" /> <br><br> 🐰 김수연 <br>(Back-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/210-reverof">
            <img src="https://avatars.githubusercontent.com/210-reverof" width="140px" /> <br><br> 💎 이원영 <br>(Back-End) </a> <br></td>
    </tr>
</table>
</div>

## 주요 기능
### 🚑 구급대원 페이지 (태블릿)
#### 로그인
<img src="/img/para_login.gif" width="45%">

- 구급대원 개인 이메일을 통해 로그인

#### 환자 상태 작성
<img src="/img/para_input2.gif" width="45%"/>  

- 중증도 분류와 인적정보 선택 후 환자 상태 상세 작성  
- 음성 인식(STT)을 통해 환자 상태 간편 작성 가능
- 사진 촬영, 파일 첨부 가능 

#### 환자 이송 요청 및 확정
<img src="/img/para_calling2.gif" width="45%"/>

- 현 위치 기반 응급실 가용 병상이 있는 병원에 일괄 이송 요청
- 병원의 응답에 따라 이송을 확정

#### 병원과 영상 통화
<img src="/img/para_openvidu.gif" width="45%"/>

- 이송 중에 병원과 영상 통화를 통해 환자 상태 실시간 공유 가능

#### 이송 기록
<img src="/img/para_history.gif" width="45%"/>

- 기간 설정을 통해 과거 이송 기록 조회
- 소속된 안전센터 전체의 이송 기록, 본인이 담당한 이송 기록 별로 조회 가능

### 🏥 병원 페이지 (웹)
#### 로그인
<img src="/img/로그인.gif" width="75%"/>

- 병원 이메일을 통해 로그인

#### 이송 요청 중인 목록 및 지도
<img src="/img/요청목록승인거절.gif" width="75%"/>

- 실시간으로 병원에 이송을 요청하고 있는 요청 목록 및 상세 조회
- 지도를 통해 사고 발생지(구급차 현위치)와 사건 정보 확인 가능

#### 이송 중인 환자 정보 목록 및 실시간 구급차 위치
<img src="/img/이송완료.gif" width="75%"/>

- 이송 확정 후 병원으로 이송 중인 정보 조회
- 지도를 통해 이동중인 구급차의 실시간 위치 확인 가능
- 구급대원이 이송을 완료했을 떄 실시간으로 메시지 수신

#### 구급차와 영상 통화
<img src="/img/오픈비두.gif" width="75%"/>

- 이송 중에 구급차와 영상 통화를 통해 환자 상태 실시간 공유 가능

#### 요청 기록
<img src="/img/요청기록.gif" width="75%"/>

- 다양한 필터링 옵션들을 통해 괴거 요청 기록 조회 가능

#### 병원 리포트
<img src="/img/hospital_report.gif" width="75%"/>

- 누적 데이터를 바탕으로 일별, 월별, 시간별 등의 다양한 통계 데이터 제공

### 🚑 게스트 페이지 (모바일)
#### 실시간 응급실 가용 병상 조회
<img src="/img/guestpage.gif" width="25%"/>

- 로그인 없이 현 위치 기반 응급실 가용 병상이 있는 병원 목록 조회 가능


## 개발 환경
## 👑 프론트엔드

<div align="middle">

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/pwa-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/recoil-000000?style=for-the-badge&logo=recoil&logoColor=white">
<img src="https://img.shields.io/badge/apex chart-FF6384?style=for-the-badge&logo=chart.js&logoColor=white">
<img src="https://img.shields.io/badge/kakaomap-FFCD00?style=for-the-badge&logo=kakao&logoColor=white">
<img src="https://img.shields.io/badge/stomp-010101?style=for-the-badge&logo=socket.io&logoColor=white">
<img src="https://img.shields.io/badge/webrtc-333333?style=for-the-badge&logo=webrtc&logoColor=white">

**Language |** Typescript 5.0.2

**Framework |** React 18.2.0

**Library |** Axios 1.5.1, Styled Components 6.1.0, Recoil 0.7.7

**Build Tool |** Vite 4.4.5



<br>
<br>

</div>

## 🎺 백엔드

<div align="middle">

<img src="https://img.shields.io/badge/java-3a75b0?style=for-the-badge&logo=java&logoColor=black"> 
<img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
<img src="https://img.shields.io/badge/spring boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
<img src="https://img.shields.io/badge/spring mvc-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
<img src="https://img.shields.io/badge/spring cloud-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
<img src="https://img.shields.io/badge/spring security-6DB33F?style=for-the-badge&logo=spring security&logoColor=white">
<img src="https://img.shields.io/badge/JPA Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white">
<img src="https://img.shields.io/badge/maria DB-4479A1?style=for-the-badge&logo=mariadb&logoColor=white">
<img src="https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white">
<img src="https://img.shields.io/badge/apache kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white">
<img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white">
<img src="https://img.shields.io/badge/stomp-010101?style=for-the-badge&logo=socket.io&logoColor=white">
<img src="https://img.shields.io/badge/webrtc-333333?style=for-the-badge&logo=webrtc&logoColor=white">
<img src="https://img.shields.io/badge/elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white">
<img src="https://img.shields.io/badge/fluentd-0E83C8?style=for-the-badge&logo=fluentd&logoColor=white">
<img src="https://img.shields.io/badge/kibana-005571?style=for-the-badge&logo=kibana&logoColor=white">
<img src="https://img.shields.io/badge/netflix oss-E50914?style=for-the-badge&logo=netflix&logoColor=white">
<img src="https://img.shields.io/badge/JUnit5-25A162?style=for-the-badge&logo=JUnit5&logoColor=white">
<img src="https://img.shields.io/badge/naver cloud-03C75A?style=for-the-badge&logo=naver&logoColor=white">

**Language |** Java 17

**Framework |** Spring Boot 3.1.5

**Data(RDBMS) |** Spring Data JPA 3.0.4

**Build Tool |** Gradle 8.2.3

</div>

<br>
<br>


## 🔑 인프라

<div align="middle">

<img src="https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white">
<img src="https://img.shields.io/badge/AWS EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white">
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
<img src="https://img.shields.io/badge/jenkins-111111?style=for-the-badge&logo=jenkins&logoColor=white">
<img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
<img src="https://img.shields.io/badge/docker_compose-e0319d?style=for-the-badge&logo=docker&logoColor=white">
<img src="https://img.shields.io/badge/apache groovy-4298B8?style=for-the-badge&logo=apachegroovy&logoColor=white">

**Infra |** Ubuntu, Git, SSH, Jenkins, Docker, Docker compose, Apache groovy

</div>

</br>
</br>


## 시스템 아키텍처
<div align="middle">
<img src="/img/architecture.png" width="75%">
</div>

</br>

## 기획 및 설계 산출물
### 요구사항 명세서
<img src="/img/요구1.png" width="55%">
<img src="/img/요구2.png" width="55%">

### API 명세서
<img src="/img/api1.png" width="55%">
<img src="/img/api2.png" width="55%">
<img src="/img/api3.png" width="55%">

### 에러코드 정의
<img src="/img/errorcode.png" width="55%">

</br>

## Conventions
<img src="/img/gitconvention.png" width="55%">
<img src="/img/jiraconvention.png" width="55%">