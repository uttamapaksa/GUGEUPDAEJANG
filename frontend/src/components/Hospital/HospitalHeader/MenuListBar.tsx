import { Dispatch, SetStateAction } from "react";
import { Item, MenuBox } from "./HopsitalHeader.style";
import { deleteLogout } from "/src/apis/auth";
import { useNavigate } from "react-router-dom";
import PATH from "/src/constants/path";
import { useSetRecoilState } from "recoil";
import { prevMapType } from "/src/recoils/HospitalAtoms";

interface Headertype {
  setMenuIsShown: Dispatch<SetStateAction<boolean>>;
}

const MenuListBar = ({ setMenuIsShown }: Headertype) => {

  const navigate = useNavigate();
  const goLogin = () => {
    navigate(`${PATH.Login}`);
  };
  const axiosLogout = async (): Promise<void> => {
    try {
      const response = await deleteLogout();
      if (response === 200) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        console.log("로그아웃 완료");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MenuBox onMouseEnter={() => setMenuIsShown(true)} onMouseLeave={() => setMenuIsShown(false)}>
      <Item
        onClick={() => {
          axiosLogout();
          goLogin();
          localStorage.removeItem("recoil-persist");
        }}
      >
        로그아웃
      </Item>
    </MenuBox>
  );
};

export default MenuListBar;
