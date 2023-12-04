import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import Navbar from "./Components/Navbar";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    minWidth: "100vw",
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-around',
    minWidth: 300,
    minHeight: 150,
    margin: theme.spacing(2),
    textAlign: "center",
    cursor: "pointer",
    
  },
  CardBody:{
    display: "flex",
    flexDirection: "column",
    gap: '30px'
  }
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
    <Navbar/>
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        {/* Add Vendor Card */}
        <Grid item>
          <Link to="/add-vendor" style={{ textDecoration: "none" }}>
            <Card className={classes.card}>
              <CardContent className={classes.CardBody}>
                <Typography variant="h5" style={{
                    fontWeight: 'bolder',
                    fontSize: '2em'
                }}>Add Vendor</Typography>
                {/* <Button style={{
                    background: 'black',
                    color: 'white'
                }}
                sx={{
                    "&:hover": {  color: '#FF8C00' },
                  }}
                >Go to Add Vendor</Button> */}
                <Button
              variant="outlined"
              sx={{
                backgroundColor: "#000",
                color: "white",
                borderRadius: "8px",
                padding: '7px',
                "&:hover": {  color: '#FF8C00',  backgroundColor: "#000",},
              }}
            >
              Go to Add Vendor
            </Button>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        {/* Search Vendor Card */}
        <Grid item>
          <Link to="/search-vendor" style={{ textDecoration: "none" }}>
            <Card className={classes.card}>
              <CardContent className={classes.CardBody}>
                <Typography variant="h5" style={{
                    fontWeight: 'bolder',
                    fontSize: '2em'
                }}>Search Vendor</Typography>
                {/* <Button  style={{
                    background: 'black',
                    color: 'white'
                }}>Go to Search Vendor</Button> */}
                <Button
              variant="outlined"
              sx={{
                backgroundColor: "#000",
                color: "white",
                borderRadius: "8px",
                padding: '7px',
                "&:hover": {  color: '#FF8C00',  backgroundColor: "#000",},
              }}
            >
              Go to Search Vendor
            </Button>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </div>
    </>
  );
};

export default HomePage;
