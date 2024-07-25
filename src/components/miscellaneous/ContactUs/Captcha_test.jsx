import React, { useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import "./css/Captcha.css";

export const doSubmit = () => {
  let user_captcha = document.getElementById("user_captcha_input").value;

  if (validateCaptcha(user_captcha) === true) {
    loadCaptchaEnginge(6);
    document.getElementById("user_captcha_input").value = "";
    return true;
  } else {
    document.getElementById("user_captcha_input").value = "";
    return false;
  }
};

const CaptchaTest = () => {
  useEffect(() => {
    loadCaptchaEnginge(8);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="form-group">
          <div className="col mt-3">
            <LoadCanvasTemplate reloadColor="black" />
          </div>
          <div className="col mt-3">
            <div className="input-field field">
              <input
                type="text"
                placeholder="Enter Captcha Value"
                id="user_captcha_input"
                name="user_captcha_input"
                className="captcha"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptchaTest;
