import React, { useState } from 'react';

const DataTable = () => {

  const initialData = [
  {id:1,firstName:"Mehrdad",lastName:"Javan",age:33,birthDate:"1989-02-27",country:"Sweden",city:"Växjö"},
  {id:2,firstName:"Maria",lastName:"Svensson",age:21,birthDate:"2001-06-18",country:"Sweden",city:"Växjö"},
  {id:3,firstName:"Charles",lastName:"Rudahusha",age:31,birthDate:"1991-02-27",country:"Sweden",city:"Stockholm"},
  {id:4,firstName:"Fredrik",lastName:"Odin",age:41,birthDate:"1981-02-28",country:"Sweden",city:"Växjö"},
  {id:5,firstName:"Tobias",lastName:"Lundgren",age:36,birthDate:"1986-07-22",country:"Sweden",city:"Haparanda"},
  {id:6,firstName:"Gvargis",lastName:"Demir",age:29,birthDate:"1993-02-27",country:"Sweden",city:"Gothenburg"},
  ];
  const [studentList, setStudentList] = useState(initialData);
  const [showDetails, setShowDetails] = useState(false);
  const studentDefaultData = {id: 0, firstName: "", lastName: "", age: 0, birthDate: "", country: "", city: ""}
  const [student, setStudent] = useState(studentDefaultData);

  const TableHeader = () => {
    return(
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };

  const TableAction = (props) => { 
    
    const showData = () => {
      setShowDetails(true);
      console.log("SHOW DATA", props.student);
      setStudent(props.student);
    };
    return (<button type='button' className='btn btn-info'onClick={showData}>Details</button>);
  };

  const TableRow = (props) => {
    return(
      <tbody>
        {
          props.list.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.age}</td>
            <td><TableAction student={student}/></td>
          </tr>
              ) )
        }
      </tbody>
    );
  };




  return (
    <div className='container'>
      <table className='table table-striped'>
        <TableHeader/>
        < TableAction/>
        <TableRow/>
      </table>
      
    </div>
  );
};

export default DataTable;