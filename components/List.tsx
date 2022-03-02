import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 150,
    editable: true,
  },
  {
    field: "healthCertificate",
    headerName: "Health Certificate",
    width: 110,
    editable: true,
  },
  {
    field: "join",
    headerName: "Date of joining",
    width: 150,
    editable: true,
  },
  {
    field: "activate",
    headerName: "Activate",
    type: "boolean",
    width: 100,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: "Snow",
    phoneNumber: "010-1111-1111",
    healthCertificate: "O",
    join: "2021/08/31",
  },
  {
    id: 2,
    name: "Lannister",
    phoneNumber: "010-1111-1111",
    healthCertificate: "O",
    join: "2022/01/31",
  },
  {
    id: 3,
    name: "Lannister",
    phoneNumber: "010-1111-1111",
    healthCertificate: "X",
    join: "2019/06/27",
  },
  {
    id: 4,
    name: "Stark",
    phoneNumber: "010-1111-1111",
    healthCertificate: "O",
    join: "2020/04/02",
  },
  {
    id: 5,
    name: "Targaryen",
    phoneNumber: "010-1111-1111",
    healthCertificate: "O",
    join: "2021/07/16",
  },
  {
    id: 6,
    name: "Melisandre",
    phoneNumber: "010-1111-1111",
    healthCertificate: "O",
    join: "2021/05/21",
  },
  {
    id: 7,
    name: "Clifford",
    phoneNumber: "010-1111-1111",
    healthCertificate: "X",
    join: "2021/05/12",
  },
  {
    id: 8,
    name: "Frances",
    phoneNumber: "010-1111-1111",
    healthCertificate: "O",
    join: "2021/08/09",
  },
  {
    id: 9,
    name: "Roxie",
    phoneNumber: "010-1111-1111",
    healthCertificate: "O",
    join: "2021/03/15",
  },
];

export default function List() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
