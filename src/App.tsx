import { useState } from 'react'
import './App.css'
import { GlobalScrollbar } from 'mac-scrollbar';
import { Button, Drawer } from 'antd';

function App() {
  const [count, setCount] = useState(0)
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  return (
    <>
      <GlobalScrollbar />
      <div className='container' style={{position: "relative"}}>
        <div className='rect' style={{width: "500px", height: "300px", border: "1px solid", overflow: "auto"}}>
          <Button type="primary" onClick={() => setShowDrawer(!showDrawer)}>Open drawer</Button>

          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
        </div>

        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={() => setShowDrawer(false)}
          open={showDrawer}
          getContainer={false}
          style={{position: "absolute"}}
        >
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
          <p>Long long text for scrollbar</p>
        </Drawer>
      </div>
    </>
  )
}

export default App
