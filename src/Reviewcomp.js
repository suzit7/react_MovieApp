import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
// import { Button } from '@mui/material';
import { db, useAuth } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useStyles } from "./Style";

import { useDispatch, useSelector } from "react-redux";
import { loadPostStart, loadPostSuccess } from "./actions";
import { Button } from "@mui/material";
import { useParams } from "react-router";
import { flexbox } from "@mui/system";

const labels = {
  // 0.5: 'Useless',
  1: "Useless",
  // 1.5: 'Poor',
  2: "Poor",
  // 2.5: 'Ok',
  3: "Ok",
  // 3.5: 'Good',
  4: "Good",
  // 4.5: 'Excellent',
  5: "Excellent",
};

export default function HoverRating() {
  const [loading, setLoading] = React.useState(false);

  const { id, name } = useParams();

  const currentUser = useAuth();

  const stateapi = useSelector((state) => state.apiCallReducers.posts);

  const [users, setUsers] = React.useState([]);

  const usersCollectionRef = collection(db, "Rating"); //collecting datas from database from firebase to display

  React.useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };
    getUsers();
  }, []);

  console.log(stateapi);

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const [rate, setRate] = React.useState("");

  const userCollectionRef = collection(db, "Rating");

  const giveRating = async () => {
    await addDoc(userCollectionRef, {
      UserId: currentUser?.email,
      MovieId: id,
      Title: name,
      Rating: labels[value],
    });
    setLoading(true);
  };

  //LOCAL STOGARE CODE--------------------------->

  React.useEffect(() => {
    const data = localStorage.getItem("rate");
    if (data) {
      setValue(JSON.parse(data));
      setHover(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("rate", JSON.stringify(value));
  });

  //LOCAL STORAGE CODE------------------------------>

  return (
    <>
      {/* <h1>{currentUser}</h1> */}
      {/* {stateapi.map((ele,id)=>{
    return(
        <>
        <h2>{ele.Title}</h2>
        </>
    );
})} */}

      <Box
        sx={{
          width: 200,
          display: "flex",
          alignItems: "center",
          color: "white",
          marginLeft: "-50px",
          marginTop: "-30px",
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          precision={1}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          onClick={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />

        {value !== null && (
          <Box sx={{ ml: 1 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
        <Button
          disabled={loading}
          variant="outlined"
          style={{ color: "white", marginLeft: "20px", backgroundColor: "red" }}
          onClick={giveRating}
        >
          Submit
        </Button>
        <div>
          <h1 style={{ marginLeft: "900px" }}>{}</h1>
        </div>

        {users.map((ele, id) => {
          return (
            <>
              {/* <div style = {{color : 'black'}}>
<h3>Rating : {ele.Rating}</h3>
</div> */}
            </>
          );
        })}
      </Box>

      <div></div>

      {/* <input type = "text" placeholder = "review"
    onChange = {(e)=>{setRate(e.target.value)}}
  /> */}
    </>
  );
}
