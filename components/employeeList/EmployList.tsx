import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Rows, Columns } from "./List";

export default function EmployList() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={Rows}
        columns={Columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
