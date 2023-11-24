import React, { useState, useEffect } from "react";

function Completed(props) {
  return (
    <>
      <app-completed _nghost-hqm-c8>
        <div
          id="header"
          style={{
            background: "transparent",
            margin: "0 auto",
            textAlign: "-webkit-center",
          }}
        >
          {/* <img
            alt="Huyndai"
            className="d-none d-xl-block"
            src="https://hyundai.tcmotor.vn/images/logo-HTV-01.svg"
            style={{ width: 287 }}
          /> */}
        </div>
        <div className="complete" style={{ height: "100vh" }}>
          <div className="txtArea">
            <p className="tit" style={{ opacity: 1, top: "0px" }}>
              Khảo sát đã hoàn tất.
            </p>
            <div className="txt" style={{ opacity: 1, top: "0px" }}>
              <p>
                Cảm ơn Quý khách đã dành thời gian và đưa ra ý kiến phản hồi quý
                giá.
                <br /> Ý kiến của Quý khách rất quan trọng đối với chúng tôi và
                chúng tôi sẽ sử dụng ý kiến của Quý khách để nâng cao chất lượng
                dịch vụ.
                <br /> Xin chân thành cảm ơn Quý Khách!
                <br /> HYUNDAI|TC MOTOR{" "}
              </p>
            </div>
          </div>
        </div>
      </app-completed>
      <div id="footer">
        {" "}
        Copyright © 2018 Hyundai Motor Company. All rights reserved.
      </div>
    </>
  );
}

export default Completed;
