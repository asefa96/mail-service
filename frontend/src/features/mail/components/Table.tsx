import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { IMail } from "../interfaces/IMail";

export default function MailTable(props: { inMails: IMail[] }) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="mail table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: 600 }}>
                Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 600 }}>
                Company
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 600 }}>
                Email
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 600 }}>
                Phone
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 600 }}>
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.inMails.map((mail) => (
              <TableRow
                key={mail.createdAt}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {mail.name}
                </TableCell>
                <TableCell align="center">{mail.company}</TableCell>
                <TableCell align="center">{mail.mail}</TableCell>
                <TableCell align="center">{mail.phone}</TableCell>
                <TableCell align="center">{mail.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Stack
          mt={1}
          sx={{
            alignItems: "center",
          }}
        >
          <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
      </TableContainer>
    </>
  );
}
