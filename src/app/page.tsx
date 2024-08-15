"use client"
import React from "react";
import B1 from "./components/Input";
import B2 from "./components/Select";
import B4 from "./components/FormRegister";
import B3 from "./components/FormLogin";
import B5 from "./components/Popup";
import B6 from "./components/Navigation";
import B7 from "./components/BaseButton";
import B8 from "./components/Pagination";
import B9 from "./components/BaseAlert";
import B10 from "./components/BaseCart";
import B11 from "./components/Select_Option";
import B12 from "./components/Date";

export default function page() {
  const handleSelectChange = (selectedOption: any) => {
    console.log("Selected option:", selectedOption);
    // You can handle the selected option here
  };
  return (
    <div>
      <B1 />
      <br />
      <B2 />
      <br />
      <B3 />
      <br />
      <B4 />
      <br />
      <B5 />
      <br />
      <B6 />
      <br />
      <B7 type="primary">Primary</B7>
      <B7 type="danger">Danger</B7>
      <B7 type="warning">Warning</B7>
      <B7 type="success">Success</B7>
      <br />
      <br />
      <B8 />
      <br />
      <br />
      <B9 type="success" children="Success Text" />
      <B9 type="primary" children="Info Text" />
      <B9 type="danger" children="Danger Text" />
      <B9 type="warning" children="Warning Text" />
      <br />
      <br />
      <B10
        content="Áo phông nam mát mẻ"
        title="Áo phông nam"
        image="https://cdn.chiaki.vn/unsafe/0x480/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2022/09/bo-quan-ao-the-thao-nam-bendu-ab6807-sieu-nhe-632190507323c-14092022152656.jpg"
        children={<B7 children="Thêm vào giỏ hàng" type="primary" />}
      />
      <br />
      <br />
      <B11
        options={[
          { value: 1, label: "HTML" },
          { value: 2, label: "CSS" },
          { value: 3, label: "JavaScript" },
          { value: 4, label: "NextJS" },
        ]}
        handleChange={handleSelectChange}
      />
      <br />
      <br />
      <B12/>
    </div>
  );
}
