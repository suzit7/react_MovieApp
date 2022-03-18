import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router";
import { useStyles } from "./Style";
import "./index.css";

import { db, useAuth } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

function createData(Username, Ratings) {
  return { Username, Ratings };
}

export default function BasicTable() {
  const classes = useStyles();

  const { id } = useParams();

  const [users, setUsers] = React.useState([]);

  const usersCollectionRef = collection(db, "Rating"); //collecting datas from database from firebase to display

  React.useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };
    getUsers();
  }, []);

  return (
    <>
      <div>
        <h1 className={classes.movieRatings}>⭐️⭐️ MOVIE RATINGS ⭐️⭐️</h1>

        <TableContainer
          component={Paper}
          style={{ borderRadius: "25px", backgroundColor: "black" }}
        >
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "red", fontSize: "25px" }}>
                  USERNAME
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "red", fontSize: "25px" }}
                >
                  RATING
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .filter((row) => row.MovieId == id)
                .map((row, ind) => (
                  <TableRow
                    key={row.MovieId}
                    //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ color: "white", fontSize: "15px" }}
                    >
                      {row.UserId}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "gold", fontSize: "20px" }}
                    >
                      {row.Rating == "Useless" ? <h4>⭐️</h4> : null}

                      {row.Rating == "Poor" ? <h4>⭐️⭐️</h4> : null}

                      {row.Rating == "Ok" ? <h4>⭐️⭐️⭐️</h4> : null}

                      {row.Rating == "Good" ? <h4>⭐️⭐️⭐️⭐️</h4> : null}

                      {row.Rating == "Excellent" ? (
                        <h4>⭐️⭐️⭐️⭐️⭐️</h4>
                      ) : null}
                    </TableCell>
                    {/* <TableCell align="right">{row.MovieId}</TableCell> */}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
