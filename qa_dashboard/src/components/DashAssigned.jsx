import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "../assets/styles/styledTable";

function DashAssigned({ data }) {
  return (
    <div className="dash-assigned-container">
      <div>
        <h6>
          Best <span>Performing</span>
        </h6>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ Color: "#b51b1a" }}>
                  Test Lead Name
                </StyledTableCell>
                <StyledTableCell align="right">Total</StyledTableCell>
                <StyledTableCell align="right">Active </StyledTableCell>
                <StyledTableCell align="right">Completed</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">
                    {row._id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.total}</StyledTableCell>
                  <StyledTableCell align="right">{row.Active}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.completed}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default DashAssigned;
