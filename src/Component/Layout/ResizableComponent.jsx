import "./ResizableLayout.css";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ChildContainer from "./ChildContainer";

function LayoutContainer(props) {
 
  return (
    <div className="container">
      <PanelGroup direction="vertical">
        <Panel>
          <PanelGroup direction="horizontal">
            <Panel defaultSize={20} minSize={20} maxSize={75}>
              <ChildContainer  {...props} number={1}  name="child1" />
            </Panel>
            <PanelResizeHandle />
            <Panel defaultSize={50} minSize={20} maxSize={75}>
              <ChildContainer {...props} number={2} name="child2" />
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={40} minSize={20} maxSize={75}>
          <ChildContainer {...props} number={3} name="child3" />
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default LayoutContainer;
