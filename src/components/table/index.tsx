import { useState } from "react";
import MapView from "../mapview";
import { useSelector } from "react-redux";
import { RootState } from "../../core/store";
import { Feature } from "../../types/data";
import "./table.style.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import TablePagination from "@mui/material/TablePagination";

const TableData = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const data = useSelector((state: RootState) => state.dataReducer.data);
  const view = useSelector((state: RootState) => state.dataReducer.view);
  const features: Feature[] = data?.features;

  return (
    <Paper className="table-wrapper">
      <TableContainer component={Paper}>
        <Table className="tabe-data" aria-label="data table" stickyHeader>
          <TableHead className="table-head">
            <TableRow>
              <TableCell
                align="left"
                className="table-head-cell"
                data-testid="test-header-cell"
              >
                NAME
              </TableCell>
              {view === "airports" ? (
                <TableCell
                  align="left"
                  className="table-head-cell"
                  data-testid="test-header-cell"
                >
                  COUNTRY
                </TableCell>
              ) : (
                <TableCell
                  className="table-head-cell"
                  data-testid="test-header-cell"
                >
                  CITY
                </TableCell>
              )}
              <TableCell
                align="left"
                className="table-head-cell"
                data-testid="test-header-cell"
              >
                STATE
              </TableCell>
              <TableCell
                align="left"
                className="table-head-cell"
                data-testid="test-header-cell"
              >
                MAP VIEW
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {features
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data: Feature) => (
                <TableRow
                  key={data.properties.GLOBAL_ID}
                  data-testid="test-body-row"
                >
                  <TableCell align="left">{data.properties.NAME}</TableCell>
                  <TableCell align="left">
                    {view === "airports"
                      ? data.properties.COUNTRY
                      : data.properties.CITY}
                  </TableCell>
                  <TableCell align="left">{data.properties.STATE}</TableCell>
                  <TableCell align="left">
                    <MapView {...data} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={features.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableData;
