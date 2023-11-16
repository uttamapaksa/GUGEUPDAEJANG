import HospitalMap from "./HospitalMap/HospitalMap";
import HospitalMainSidebar from "./HospitalMainSidebar/HospitalMainSidebar";
import { Container } from "./HospitalMain.styls";

const HospitalMain = () => {

  return (
    <Container>
      <HospitalMainSidebar />
      <HospitalMap/>
    </Container>
  );
};

export default HospitalMain;
