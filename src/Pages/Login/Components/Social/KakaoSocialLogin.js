import axios from "axios";
import { KAKAO_LOGIN_API } from "../../../../config";
const { Kakao } = window;

export const KakaoSocialLogin = (history) => {
  Kakao.Auth.login({
    success: (auth) => {
      axios
        .get(KAKAO_LOGIN_API, {
          headers: {
            "Content-Type": "application/json",
            Authorization: auth.access_token,
          },
        })
        .then((res) => {
          localStorage.setItem("kakao_token", res.token);
          alert("최고에 오신걸 환영합니다.");
          history.push("/");
        });
    },
    fail: (err) => {
      alert(JSON.stringify(err));
    },
  });
};
