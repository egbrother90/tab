import React, { useState } from "react";
import './Tab.scss';

const Tab = ({ tabData }) => {

  // 현재 선택된 탭의 index 상태값
  const [currentIdx, setCurrentIdx] = useState(0);


  const selectMenuHandler = (index) => {
    setCurrentIdx(index);
  }

  return (
    <>
      <div className="tab-wrap">
        <div className="tab-menu">
          <ul>
            {tabData.map((el, index) => (
              <li
                key={index}
                onClick={() => selectMenuHandler(index)}
              >{el.tab}</li>
            ))}
          </ul>
        </div>
        <div className="tab-contents">
          {tabData[currentIdx].contents}
        </div>
      </div>
    </>
  )
}

export default Tab;