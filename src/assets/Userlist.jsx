import axios from "axios";
import { useState, useEffect } from "react";

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setListOfUsers(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <>
        <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Name</th>
              <th style={tableHeaderStyle}>Email</th>
              <th style={tableHeaderStyle}>Address City</th>
              <th style={tableHeaderStyle}>Phone</th>
            </tr>
          </thead>
          <tbody>
            {listOfUsers.map((user, index) => (
              <tr key={index}>
                <td style={tableCellStyle}>{user.name}</td>
                <td style={tableCellStyle}>{user.email}</td>
                <td style={tableCellStyle}>{user.address.city}</td>
                <td style={tableCellStyle}>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}

const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  border: "1px solid black",
  padding: "8px",
};

const tableCellStyle = {
  border: "1px solid black",
  padding: "8px",
};

export default UserList;
