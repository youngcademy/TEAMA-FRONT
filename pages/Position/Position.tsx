import React, { useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../../components/grid/position/columns";
import { rows } from "../../components/grid/position/row";
import { Grid, Box } from "@material-ui/core";
import styles from "../styles/Position.module.scss";

function Position() {
  const columnData = useMemo(() => columns, [columns]);
  const rowData = useMemo(() => rows, [rows]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box bgcolor="info.main" p={2}>
            1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="info.main" p={2}>
            2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="info.main" p={2}>
            3
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            검색구분
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            검색어
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            검색버튼
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            수정/삭제 버튼
          </Box>
        </Grid>
      </Grid>
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