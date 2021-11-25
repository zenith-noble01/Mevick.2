import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from 'axios'
import './student.css'
import { Link } from "react-router-dom";


export default function DataTable() {
  const handleDelete = (id) => {
    setStudent(student.filter((item) => item.id !== id));
  };
  
  const PF = "https://mevick-moon.herokuapp.com/images/"
  const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Student Name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={PF + params.row.img} alt="" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    editable: true,
  },
  {
    field: "stock",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "class",
    headerName: "Class",
    type: "number",
    width: 150,
    editable: false,
  },
  {
    field: "price",
    headerName: "School Fees",
    type: "number",
    width: 150,
    editable: false,
  },
  {
    field: "pric",
    headerName: "Action",
    type: "number",
    width: 150,
    editable: false,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/students/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline
            className="userListDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  }
  ];
  const [student, setStudent] = useState([])
  useEffect(() => {
    const getStudent = async () =>{
      const res = await axios.get('https://mevick-moon.herokuapp.com/api/dummydata')
      setStudent(res.data)
      console.log(res.data);
    }
    getStudent()
  }, [])
  
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={student}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
