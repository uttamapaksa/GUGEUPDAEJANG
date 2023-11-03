import HospitalMap from "./HospitalMap/HospitalMap";
import HospitalMainSidebar from "./HospitalMainSidebar/HospitalMainSidebar";
import { Container } from "./HospitalMain.styls";

const HospitalMain = (props:{type:string}) => {

  return (
    <Container>
      <HospitalMainSidebar />
      <HospitalMap {...props} />

    </Container>
  );
};

export default HospitalMain;
