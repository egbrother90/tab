import React from "react";

const TabMenu = ({ tabTitle, tabValue }) => {
  return (
    <>
      <button
        type="button"
        tabValue={tabValue}
      >
        {tabTitle}{tabValue}
      </button>
    </>
  )
}

export default TabMenu;