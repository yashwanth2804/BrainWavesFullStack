import React from "react";
import "./Nav.css";

import { Row, Col } from "antd";
export default function Nav() {
  return (
    <div className={"nav"}>
      <Row>
        <Col span={8}>
          <h2>Swift Matching app</h2>
        </Col>
        <Col span={2} offset={6} />
        <Col span={6} offset={2}>
          <button className={"write"}>Logout</button>
        </Col>
      </Row>
    </div>
  );
}
