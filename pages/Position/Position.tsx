import React, { useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../../components/grid/position/columns";
import { rows } from "../../components/grid/position/row";
import styles from "../styles/Position.module.scss";

function Position() {
  const columnData = useMemo(() => columns, [columns]);
  const rowData = useMemo(() => rows, [rows]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowData}
        columns={columnData}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        isRowSelectable={(params: any) => params.row.OrderAmount > 1}
      />
    </div>
  )
}

export default Position;
