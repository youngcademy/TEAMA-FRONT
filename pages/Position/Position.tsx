import React, { useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../../components/grid/position/columns";
import { rows } from "../../components/grid/position/row";
import { Grid, Box } from "@material-ui/core";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
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
            cd 검색어
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
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        <TreeItem nodeId="1" label="Applications">
          <TreeItem nodeId="2" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="10" label="OSS" />
          <TreeItem nodeId="6" label="MUI">
            <TreeItem nodeId="8" label="index.js" />
          </TreeItem>
        </TreeItem>
      </TreeView>
    </div>
  );
}

export default Position;
