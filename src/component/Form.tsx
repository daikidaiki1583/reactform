import React from "react";
import Inputform from "./Inputform";
import "./Form.css";

const Form = () => {
  return (
    <form>
      <Inputform type="rext" placeholder="ユーザー名" id="username_form" />
      <Inputform type="email" placeholder="メールアドレス" id="email_form" />
      <Inputform type="password" placeholder="パスワード" id="password_form" />
      <Inputform
        type="password"
        placeholder="パスワード(確認用)"
        id="confirmpassword_form"
      />
    </form>
  );
};

export default Form;
