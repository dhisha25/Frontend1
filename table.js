import { Button, EditableText, InputGroup, Toaster } from '@blueprintjs/core';
import { useEffect, useState } from 'react';

const AppToaster = Toaster.create({
  position: "top"
});

function Application() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmailAddress, setNewEmailAddress] = useState("");
  const [newMobileNumber, setNewMobileNumber] = useState("");
  const [newCollegeName, setNewCollegeName] = useState("");
  const [newYearOfGraduation, setNewYearOfGraduation] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  function addUser() {
    const Name = newName.trim();
    const EmailAddress = newEmailAddress.trim();
    const MobileNumber = parseInt(newMobileNumber,10)
    const CollegeName = newCollegeName.trim();
    const YearOfGraduation = parseInt(newYearOfGraduation,10)
    const Sno = users.length+1

    if (Name && EmailAddress && MobileNumber && CollegeName && YearOfGraduation) {
      fetch("http://localhost:5000/users", {
        method: "POST",
        body: JSON.stringify({
          Name,
          EmailAddress,
          MobileNumber,
          CollegeName,
          YearOfGraduation,
          Sno
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      }).then((response) => response.json())
        .then(data => {
          setUsers([...users, data]);
          AppToaster.show({
            message: "User added successfully",
            intent: 'success',
            timeout: 3000
          });
          setNewName("");
          setNewEmailAddress("");
          setNewMobileNumber("");
          setNewCollegeName("");
          setNewYearOfGraduation("");
        });
    }
  }


 
  
  


  function onchangeHandler(_id, key, value) {
    setUsers((users) => {
      return users.map(user => {
        return user._id === _id ? { ...user, [key]: value } : user;
      });
    });
  }

  function updateUser(_id) {
    const user = users.find((user) => user._id === _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    }).then((response) => response.json())
      .then(() => {
        AppToaster.show({
          message: "User updated successfully",
          intent: 'success',
          timeout: 3000
        });
      });
  }


  // function updateUser(_id, updatedData) {
  //   fetch(`http://localhost:5000/users/${_id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(updatedData), // Send only updated fields
  //     headers: {
  //       "Content-Type": "application/json; charset=UTF-8"
  //     }
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       AppToaster.show({
  //         message: "User updated successfully",
  //         intent: 'success',
  //         timeout: 3000
  //       });
  //       console.log("Updated User:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error updating user:", error);
  //       AppToaster.show({
  //         message: "Failed to update user",
  //         intent: 'danger',
  //         timeout: 3000
  //       });
  //     });
  // }
  
 
  
 


  function deleteUser(_id) {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((response) => {
        // Check if the response has a JSON body
        if (response.ok && response.headers.get("content-type")?.includes("application/json")) {
          return response.json(); // Parse JSON if present
        }
        // If no JSON, return an empty object or a success message
        return { message: "User deleted successfully" };
      })
      .then((data) => {
        console.log(data); // Optional: Log the response from the backend
        setUsers((users) => {
          return users.filter((user) => user._id !== _id);
        });
        AppToaster.show({
          message: data.message || "User deleted successfully",
          intent: "success",
          timeout: 3000,
        });
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        AppToaster.show({
          message: "Failed to delete user",
          intent: "danger",
          timeout: 3000,
        });
      });
  }
  
  
  return (
    <div className="App">
      <table className='bp4-html-table modifer'>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>EmailAdress</th>
            <th>MobileNumber</th>
            <th>CollegeName</th>
            <th>YearOfGraduation</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td><EditableText onChange={value => onchangeHandler(user._id, 'Name', value)} value={user.Name} /></td>
              <td><EditableText onChange={value => onchangeHandler(user._id, 'EmailAddress', value)} value={user.EmailAddress} /></td>
              <td><EditableText onChange={value => onchangeHandler(user._id, 'MobileNumber', value)} value={user.MobileNumber} /></td>
              <td><EditableText onChange={value => onchangeHandler(user._id, 'CollegeName', value)} value={user.CollegeName} /></td>
              <td><EditableText onChange={value => onchangeHandler(user._id, 'YearOfGraduation', value)} value={user.YearOfGraduation} /></td>
              <td>
                <Button intent='primary' onClick={() => updateUser(user._id)}>Update</Button>
                &nbsp;
                <Button intent='danger' onClick={() => deleteUser(user._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td><InputGroup value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='Enter Name...' /></td>
            <td><InputGroup value={newEmailAddress} onChange={(e) => setNewEmailAddress(e.target.value)} placeholder='Enter Email...' /></td>
            <td><InputGroup value={newMobileNumber} onChange={(e) => setNewMobileNumber(e.target.value)} placeholder='Enter MobileNumber...' /></td>
            <td><InputGroup value={newCollegeName} onChange={(e) => setNewCollegeName(e.target.value)} placeholder='Enter CollegeName...' /></td>
            <td><InputGroup value={newYearOfGraduation} onChange={(e) => setNewYearOfGraduation(e.target.value)} placeholder='Enter YearOfGraduation...' /></td>
            <td>
              <Button intent='success' onClick={addUser}>Add User</Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Application;




// import { Button, EditableText, InputGroup, Toaster } from '@blueprintjs/core';
// import { useEffect, useState } from 'react';

// const AppToaster = Toaster.create({
//   position: "top"
// });

// function Application() {
//   const [users, setUsers] = useState([]);
//   const [newName, setNewName] = useState("");
//   const [newEmailAddress, setNewEmailAddress] = useState("");
//   const [newMobileNumber, setNewMobileNumber] = useState("");
//   const [newCollegeName, setNewCollegeName] = useState("");
//   const [newYearOfGraduation, setNewYearOfGraduation] = useState("");

//   useEffect(() => {
//     fetch('http://localhost:5000/users')
//       .then((response) => response.json())
//       .then((json) => setUsers(json))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   function addUser() {
//     const Name = newName.trim();
//     const EmailAddress = newEmailAddress.trim();
//     const MobileNumber = parseInt(newMobileNumber,10);
//     const CollegeName = newCollegeName.trim();
//     const YearOfGraduation = parseInt(newYearOfGraduation,10);
//     const Sno = users[users.length-1].Sno+1;

//     if (Name && EmailAddress && MobileNumber && CollegeName && YearOfGraduation) {
//       fetch("http://localhost:5000/users", {
//         method: "POST",
//         body: JSON.stringify({
//           Name,
//           EmailAddress,
//           MobileNumber,
//           CollegeName,
//           YearOfGraduation,
//           Sno
//         }),
//         headers: {
//           "Content-Type": "application/json; charset=UTF-8"
//         }
//       }).then((response) => response.json())
//         .then(data => {
//           setUsers([...users, data]);
//           AppToaster.show({
//             message: "User added successfully",
//             intent: 'success',
//             timeout: 3000
//           });
//           setNewName("");
//           setNewEmailAddress("");
//           setNewMobileNumber("");
//           setNewCollegeName("");
//           setNewYearOfGraduation("");
//         });
//     }
//   }

//   function onchangeHandler(_id, key, value) {
//     setUsers((users) => {
//       return users.map(user => {
//         return user._id === _id ? { ...user, [key]: value } : user;
//       });
//     });
//   }

//   function updateUser(_id) {
//     const user = users.find((user) => user._id === _id);
//     fetch(`http://localhost:5000/users/${_id}`, {
//       method: "PUT",
//       body: JSON.stringify(user),
//       headers: {
//         "Content-Type": "application/json; charset=UTF-8"
//       }
//     }).then((response) => response.json())
//       .then(() => {
//         AppToaster.show({
//           message: "User updated successfully",
//           intent: 'success',
//           timeout: 3000
//         });
//       });
//   }

 


//   function deleteUser(_id) {
//     fetch(`http://localhost:5000/users/${_id}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         // Check if the response has a JSON body
//         if (response.ok && response.headers.get("content-type")?.includes("application/json")) {
//           return response.json(); // Parse JSON if present
//         }
//         // If no JSON, return an empty object or a success message
//         return { message: "User deleted successfully" };
//       })
//       .then((data) => {
//         console.log(data); // Optional: Log the response from the backend
//         setUsers((users) => {
//           return users.filter((user) => user._id !== _id);
//         });
//         AppToaster.show({
//           message: data.message || "User deleted successfully",
//           intent: "success",
//           timeout: 3000,
//         });
//       })
//       .catch((error) => {
//         console.error("Error deleting user:", error);
//         AppToaster.show({
//           message: "Failed to delete user",
//           intent: "danger",
//           timeout: 3000,
//         });
//       });
//   }
  
  
//   return (
//     <div className="App">
//       <table className='bp4-html-table modifer'>
//         <thead>
//           <tr>
//             <th>S.no</th>
//             <th>Name</th>
//             <th>EmailAdress</th>
//             <th>MobileNumber</th>
//             <th>CollegeName</th>
//             <th>YearOfGraduation</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(users) && users.map((user, index) => (
//             <tr key={user.id}>
//               <td>{index + 1}</td>
//               <td>{user.Name}</td>
//               <td><EditableText onChange={value => onchangeHandler(user._id, 'EmailAddress', value)} value={user.EmailAddress} /></td>
//               <td><EditableText onChange={value => onchangeHandler(user._id, 'MobileNumber', value)} value={user.MobileNumber} /></td>
//               <td>{user.CollegeName}</td>
//               <td>{user.YearOfGraduation}</td>
//               <td>
//                 <Button intent='primary' onClick={() => updateUser(user._id)}>Update</Button>
//                 &nbsp;
//                 <Button intent='danger' onClick={() => deleteUser(user._id)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td></td>
//             <td><InputGroup value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='Enter Name...' /></td>
//             <td><InputGroup value={newEmailAddress} onChange={(e) => setNewEmailAddress(e.target.value)} placeholder='Enter Email...' /></td>
//             <td><InputGroup value={newMobileNumber} onChange={(e) => setNewMobileNumber(e.target.value)} placeholder='Enter MobileNumber...' /></td>
//             <td><InputGroup value={newCollegeName} onChange={(e) => setNewCollegeName(e.target.value)} placeholder='Enter CollegeName...' /></td>
//             <td><InputGroup value={newYearOfGraduation} onChange={(e) => setNewYearOfGraduation(e.target.value)} placeholder='Enter YearOfGraduation...' /></td>
//             <td>
//               <Button intent='success' onClick={addUser}>Add User</Button>
//             </td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   );
// }

// export default Application;





