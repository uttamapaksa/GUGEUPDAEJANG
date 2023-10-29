import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Hospital from '../pages/Hospital/Main/Main';
import HospitalSocket from '../sockets/HospitalSocket';
import HospitalHistory from '../pages/Hospital/History/History';
import HospitalStatistic from '../pages/Hospital/Statistic/Statistic';
import Paramedic from '../pages/Paramedic/Main/Main';
import ParamedicCall from '../pages/Paramedic/Call/Call';
import ParamedicHistory from '../pages/Paramedic/History/History';
import ParamedicStatistic from '../pages/Paramedic/Statistics/Statistic';
import ParamedicWaitMove from '../pages/Paramedic/WaitMove/WaitMove';
import ParamedicSocket from '../sockets/ParamedicSocket';
import Guest from '../pages/Guest/Main/Main'

const PAGE = {
  Login,
  Signup,
  Hospital,
  HospitalSocket,
  HospitalHistory,
  HospitalStatistic,
  Paramedic,
  ParamedicCall,
  ParamedicHistory,
  ParamedicStatistic,
  ParamedicWaitMove,
  ParamedicSocket,
  Guest,
};

export default PAGE;
