import React from "react";
import Tab from "./components/Tab";


function App() {
  const data = [
    {
      id: 1,
      tab: 'menu1',
      contents:
      <>
        <table>
          <thead>
            <tr>
              <th>th 1</th>
              <th>th 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1234</td>
              <td>1234</td>
            </tr>
          </tbody>
        </table>
      </>
    },
    {
      id: 2,
      tab: 'menu22',
      contents: '내용 22이 들어갑니다.'
    },
    {
      id: 3,
      tab: 'menu333',
      contents: '내용 333이 들어갑니다.'
    },
  ]
  return (
    <>
      <Tab
        tabData={data}
      />
    </>
  );
}

export default App;
