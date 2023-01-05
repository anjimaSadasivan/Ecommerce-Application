import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Login = () => {
  return (
    <GoogleLogin
      onSuccess={(credentailResponse) => {
        console.log(credentailResponse.credential);
        if (credentailResponse.credential !== undefined) {
          var decoded = jwt_decode(credentailResponse.credential);
          console.log(decoded);
        }
      }}
      onError={() => {
        console.log("LOgin failed");
      }}
      useOneTap
    />
  );
};

export default Login;
