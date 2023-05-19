import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Header() {
  return (
    <div>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="'btn btn-primary mt-2'"
          data-mdb-toggle="modal"
          data-mdb-target="#exampleModal"
        >
          Đăng nhập
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <SignUp />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-mdb-dismiss="modal"
                >
                  Đóng
                </button>
                <button type="button" className="btn btn-primary">
                  Đăng ký tài khoản
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
