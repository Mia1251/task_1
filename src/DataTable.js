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
      <thead className='p-3 bg-dark text-white'>
          <th className='col-1 p-3'>Id</th>
          <th className='col-3 p-3'>First Name</th>
          <th className='col-3 p-3'>Last Name</th>
          <th className='col-2 p-3'>Age</th>
          <th className='col-3 p-3'>Action</th>
      </thead>
    );
  };

  const TableAction = (props) => { 
    
    const showData = () => {
      setShowDetails(true);
      console.log("SHOW DATA", props.student);
      setStudent(props.student);
    };
    return (<button type='button' className='btn btn-primary text-black'onClick={showData}>Details</button>);
  };

  const ShowStudentDetails = () => {

    if (showDetails) {
      return (
        <div className='col-6'>
          <div className='card'>
            <div className='card-header bg-info text-black'>
              STUDENT INFORMATION
            </div>
            <div className='card-body bg-warning'>
              <h5 className='card-title'>{student.country} {student.city}</h5>
              <p className='card-text'>Id: {student.id}</p>
              <p className='card-text'>Name: {student.firstName} {student.lastName}</p>
              <p className='card-text'>BirthDate: {student.birthDate}</p>        
              <button type='button' className='btn btn-outline-success' onClick={() => {setShowDetails(false); setStudent(studentDefaultData)}}>Hide</button>
            </div>
          </div>
        </div>
        
      );
    } else {
      return ("");
    }
  };

  const TableRow = (props) => {
    return(
      <tbody>
        {
          props.list.map((student) => (
              <tr className='table-success' key={student.id}>
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
      <br/>
      <h3 className="text-left">Student List</h3>
      <br/>
      <table className='table table-striped table-hover'>
        <TableHeader/>
        <TableRow list={studentList}/>
      </table>
      <br/>
      <ShowStudentDetails/>
    </div>
  );
};

export default DataTable;