import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";

export default function DataGrid({ columns, rows, sx }) {
  return (
    <MuiDataGrid
      hideFooter
      disableAutosize
      disableColumnMenu
      disableColumnResize
      disableColumnFilter
      disableColumnSorting
      disableColumnSelector
      getRowHeight={() => "auto"}
      sx={{
        borderColor: "#264475",
        borderRadius: "20px",
        "& .MuiDataGrid-scrollbar": {
          overflow: "hidden",
        },
        "& .MuiDataGrid-columnHeader": {
          backgroundColor: "#04824B",
          color: "#FFFFFF",
          fontFamily: "Dax",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "32px",
          padding: "20px",
          minHeight: "72px",
        },
        "& .MuiDataGrid-cell": {
          backgroundColor: "#FFFFFF",
          color: "#264475",
          fontFamily: "Dax",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "32px",
          padding: "10px 20px",
        },
        "& .MuiDataGrid-main": {
          borderRadius: "20px",
        },
        "& .MuiDataGrid-row": {
          borderBottom: "1px solid #264475",
        },
        "& .MuiDataGrid-columnSeparator": {
          display: "none",
        },
        "& .MuiDataGrid-filler": {
          display: "none",
        },
        ...sx,
      }}
      columns={columns}
      rows={rows}
    />
  );
}
