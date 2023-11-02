import HospitalMap from "./HospitalMap/HospitalMap";
import HospitalMainSidebar from "./HospitalMainSidebar/HospitalMainSidebar";
import { Container } from "./HospitalMain.styls";
import { useRecoilValue } from "recoil";
import { hospitalComponentType, hospitalSidebarType } from "/src/recoils/HospitalAtoms";

const HospitalMain = (props:{type:string}) => {
  
  const sidebarType = useRecoilValue(hospitalSidebarType);
  const componentType = useRecoilValue(hospitalComponentType);
  

  return (
    <Container>
      <HospitalMainSidebar />
      <HospitalMap {...props} />

    </Container>
  );
};

export default HospitalMain;
