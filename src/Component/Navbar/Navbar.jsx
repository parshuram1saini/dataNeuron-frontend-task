import React, { useEffect, useState } from "react";
import "./navbar.css";
import FormModel from "../common/model";
import { addUsers, editUsers, fetchCount } from "../../apiCalls/UserRequest";

function Navbar({ data, setData }) {
  const { title, description, identifier } = data;
  const [totalCount, setTotalCount] = useState(0);
  const [isModal, setIsModal] = useState(0);
  const [user, setUser] = useState({
    title: "",
    description: "",
  });

  console.log("data", data);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchCount();
        const { totalCount } = response.data[0];
        setTotalCount(totalCount);
      } catch (error) {
        console.error("Error fetching count:", error);
      }
    })();
  }, []);

  const userAddHandler = async () => {
    try {
      const body = {
        title: user.title,
        description: user.description,
      };

      setIsModal(0);
      const response = await addUsers(body);
      const { title, description, id } = response.data.data;
      setData({
        title: title,
        description: description,
        identifier: id,
      });
      setUser({
        title: "",
        description: "",
      });
    } catch (error) {
      console.error("Error fetching count:", error);
    }
  };

  const userEditHandler = async () => {
    try {
      setIsModal(0);
      const response = await editUsers(identifier);
      const result = response.data[0];
      setData({
        title: result.title,
        description: result.description,
        identifier: result.id,
      });
    } catch (error) {
      console.error("Error fetching count:", error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (isModal === 1) {
      setUser((prev) => ({ ...prev, [name]: value }));
    } else if (isModal === 2) {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-list">
        <h2 className="menu-bar" onClick={() => setIsModal(1)}>
          Add Entry
        </h2>
        <h2 className="menu-bar" onClick={() => setIsModal(2)}>
          Edit Entry
        </h2>
        <h2>Total Count: {totalCount || 0}</h2>
      </div>
      {isModal === 1 && (
        <FormModel
          heading={"Add Entry"}
          title={user.title}
          description={user.description}
          setIsModal={setIsModal}
          setData={setData}
          handleChange={handleChange}
          submitText={"Add"}
          action={() => {
            userAddHandler();
          }}
        />
      )}
      {isModal === 2 && (
        <FormModel
          heading={"Edit Entry"}
          title={title}
          description={description}
          submitText={"Edit"}
          handleChange={handleChange}
          setIsModal={setIsModal}
          setData={setData}
          action={() => {
            userEditHandler();
          }}
        />
      )}
    </div>
  );
}

export default Navbar;
