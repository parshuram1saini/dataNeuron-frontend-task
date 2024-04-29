import React, { useEffect, useState } from "react";
import LayoutContainer from "./Layout/ResizableComponent";
import Navbar from "./Navbar/Navbar";
import { getUsers } from "../apiCalls/UserRequest";

function LayoutEditor() {
  const [data, setData] = useState({
    title: "",
    description: "",
    identifier: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await getUsers();
        const result = response.data[0];
        setData({
          title: result.title,
          description: result.description,
          identifier: result.id,
        });
      } catch (error) {
        console.error("Error fetching count:", error);
      }
    })();
  }, []);

  return (
    <div style={{margin: "40px"}}>
      <Navbar data={data} setData={setData} />
      <LayoutContainer data={data} />
    </div>
  );
}

export default LayoutEditor;
