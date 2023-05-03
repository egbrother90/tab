import React from "react";
import Tab from "./components2/Tab";
import TabGroup from "./components2/TabGroup";
import TabMenu from "./components2/TabMenu";
// import TabPanel from "./components2/TabPanel";

const App2 = () => {
  return (
    <>
      <Tab>
        <TabGroup>
          <TabMenu
            tabTitle="탭 "
            tabValue={1}
          />
          <TabMenu
            tabTitle="탭 "
            tabValue={2}
          />
        </TabGroup>
      </Tab>
    </>
  )
}

export default App2;