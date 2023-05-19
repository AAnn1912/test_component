import React, { useState } from "react";

export default function SignIn() {
  const [isShowHide, setisShowHide] = useState(false);
  return (
    <div>
      <div className="wapper_signIn">
        <div className="signIn mx-auto p-3">
          <i className="bx bxs-user-circle fs-1 text-primary"></i>
          <p className="fs-4 fw-bold">Đăng nhập</p>
          <form>
            {/* Email input */}
            <div className="form-outline mb-4 ">
              <input type="email" id="form1Example1" className="form-control" />
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
            {/* Password input */}
            <div className="input-group form-outline mb-4">
              <input
                id="form1Example2"
                className="form-control"
                type={isShowHide ? "text" : "password"}
              />
              <label className="form-label" htmlFor="form1Example2">
                Mật khẩu *
              </label>
              <span
                className="input-group-text border border-white"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (isShowHide) {
                    setisShowHide(false);
                    return;
                  }
                  setisShowHide(true);
                }}
              >
                <i className={`bx bx-${isShowHide ? "show" : "hide"}`}></i>
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
            {/* 2 column grid layout for inline styling */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                {/* Checkbox */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="form1Example3"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    {" "}
                    Nhớ tài khoản{" "}
                  </label>
                </div>
              </div>
              <div className="col">
                {/* Simple link */}
                <a href="#!">Quên mật khẩu ?</a>
              </div>
            </div>
            {/* Submit button */}
            <button type="submit" className="btn btn-primary btn-block">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
