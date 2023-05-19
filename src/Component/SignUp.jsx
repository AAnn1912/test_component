import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export default function SignUp() {
  const [isShowHideUp, setisShowHideUp] = useState(true);
  const [isShowHideIn, setisShowHideIn] = useState(false);
  const formVaid = useFormik({
    initialValues: {
      user: "",
      passWord: "",
      repeatPass: "",
      name: "",
      email: "",
    },
    validationSchema: yup.object().shape({
      user: yup.string().required("phần này không được bỏ trống"),
      passWord: yup.string().required(),
      repeatPass: yup.string().required(),
      name: yup.string().required(),
      email: yup.string().required().email(),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });
  console.log(formVaid.errors);
  return (
    <div>
      <div className="wapper_signUp">
        <div className="signIn mx-auto p-3">
          <i className="bx bxs-user-circle fs-1 text-primary"></i>
          <p className="fs-4 fw-bold">Đăng Ký</p>
          <form onSubmit={formVaid.handleSubmit}>
            {/* User input */}
            <div className="form-outline mb-4">
              <input
                type="user"
                id="form1Example1"
                className="form-control"
                name="user"
                onInput={formVaid.handleChange}
                onBlur={formVaid.handleBlur}
              />
              <label className="form-label" htmlFor="form1Example1">
                Tài khoản *
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "88.8px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>
            {formVaid.errors.user && (
              <p className="text-danger text-start">{formVaid.errors.user}</p>
            )}
            {/* Password input */}
            <div className="input-group form-outline mb-4">
              <input
                id="form1Example2"
                className="form-control"
                type={isShowHideIn ? "text" : "password"}
                name="passWord"
                onInput={formVaid.handleChange}
              />
              <label className="form-label" htmlFor="form1Example2">
                Mật khẩu *
              </label>
              <span
                className="input-group-text border border-white"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (isShowHideIn) {
                    setisShowHideIn(false);
                    return;
                  }
                  setisShowHideIn(true);
                }}
              >
                <i className={`bx bx-${isShowHideIn ? "show" : "hide"}`}></i>
              </span>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "88.8px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>
            {/* Repeat-Pass */}
            <div className="input-group form-outline mb-4">
              <input
                id="form1Example3"
                className="form-control"
                type={isShowHideUp ? "password" : "text"}
                name="repeatPass"
                onInput={formVaid.handleChange}
              />
              <label className="form-label" htmlFor="form1Example3">
                Nhập lại mật khẩu *
              </label>
              <span
                className="input-group-text border border-white"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (isShowHideUp) {
                    setisShowHideUp(false);
                    return;
                  }
                  setisShowHideUp(true);
                }}
              >
                <i className={`bx bx-${isShowHideUp ? "hide" : "show"}`}></i>
              </span>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "88.8px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>
            {/* Tên */}
            <div className="form-outline mb-4 ">
              <input
                type="text"
                id="form1Example4"
                className="form-control"
                name="name"
                onInput={formVaid.handleChange}
              />
              <label className="form-label" htmlFor="form1Example4">
                Họ tên *
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "88.8px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>
            {/* email */}
            <div className="form-outline mb-4 ">
              <input
                type="email"
                id="form1Example5"
                className="form-control"
                name="email"
                onInput={formVaid.handleChange}
              />
              <label className="form-label" htmlFor="form1Example5">
                Email *
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "88.8px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>
            {/* Submit button */}
            <button type="submit" className="btn btn-primary btn-block">
              Đăng Ký
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
