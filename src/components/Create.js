import React, { useState } from "react";

const Create = () => {

  
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setID] = useState(null);

  //   const [data, setData] = useState({
  // name: "",
  // email: "",
  //   });
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setData((preVal) => {
  //       return { ...preVal, [name]: value };
  //     });
  //   };

  const submitUser = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
    };
    if (name==""&& email==""){
        return alert ("please enter all the fields")
    }
    

    if(edit) {
      //update user
      let copy = users;
      Object.assign(copy[id], data);
      setUsers([...copy])
      setEdit(false);
      setID(null);
    } else {
      //add user
      setUsers([...users, data]);
    }

    setEmail("");
    setName("");
    console.log(data);

    // setData({name:"" ,email:""})
  };

  const EditUser = (index) => {
    
    const user = users[index];
    setName(user.name);
    setEmail(user.email);
    setEdit(true);
    setID(index);
  };

  const deleteUser = (index) => {
    if (window.confirm("are you sure want to delete")){
        let copy = users.filter((item) => item !== index);
        setUsers([...copy]);
    } 
    
   
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-2xl shadow-2xl w-80 mt-10 h-50 ">
          <div className="grid  justify-center">
            <h1 className="text-2xl font-bold">Add your details</h1>
            <form className="mt-4">
              <h1> name: </h1>
              <input
                name="name"
                onChange={(e) => setName(e.target.value)}
                // onChange={handleChange}
                className="border-2 mb-2"
                placeholder=" Enter Your name"
                type="text"
                // value={data.name}
                value={name}
              />
              <h2>email:</h2>
              <input
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                // onChange={handleChange}
                placeholder=" Enter Your Email"
                className=" border-2 mb-2"
                type="email"
                // value={data.email}
                value={email}
              />
            </form>
            <button onClick={submitUser} className="bg-blue-400  mt-2 mb-2">
              {edit ? "update" : "Add"}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 mx-8">
        <table className="">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-80" scope="col">
                name
              </th>
              <th className="px-6 py-3" scope="col">
                email
              </th>
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-80" scope="col">
                Delete
              </th>
              <th className="px-6 py-3" scope="col">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((value, index) => {
              return (
                <>
                  {/* <div className="mt-4 grid justify-center" key={index}> */}

                  <tr className="" key={index}>
                    <td className="px-6 py-4">{value.name}</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {value.email}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => deleteUser(value)}
                        className=" font-bold px-2 bg-red-400"
                      >
                        delete
                      </button>
                    </td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      <button
                        className="  font-bold px-2 bg-blue-600"
                        onClick={() => EditUser(index)}
                      >
                        edit
                      </button>
                    </td>
                  </tr>

                  {/* </div> */}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Create;
