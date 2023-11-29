import logo from "../../assets/logo.svg";

import * as S from "./styles";

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={logo} alt="" />
    </S.HeaderContainer>
  );
}
