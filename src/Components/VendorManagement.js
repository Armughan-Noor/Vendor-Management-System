import React, { useState } from "react";
import GoBackComponent from "./GoBackButton";
import {
  Typography,
  TextField,
  List,
  ListItem,
  Paper,
  makeStyles,
} from "@material-ui/core";
import { Button } from "@mui/material";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  fileInput: {
    margin: theme.spacing(2, 0),
  },
}));

const VendorManagement = () => {
  const classes = useStyles();

  const [vendors, setVendors] = useState([]);
  const [newVendor, setNewVendor] = useState({
    name: "",
    products: [],
    website: "",
    review: "",
    pdfFile: null, // New field for PDF file
    // ... add more fields based on your requirements
  });

  const handleAddVendor = () => {
    // Logic to add a new vendor to the data repository
    setVendors([...vendors, newVendor]);
    setNewVendor({
      name: "",
      products: [],
      website: "",
      review: "",
      pdfFile: null, // Reset PDF file
      // ... reset other fields
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setNewVendor({ ...newVendor, pdfFile: file });
  };

  const handleViewPdf = () => {
    // Stubbed logic to view PDF; replace with your implementation
    alert(`Viewing PDF: ${newVendor.pdfFile.name}`);
  };

  return (
    <>
    <Navbar/>
    <GoBackComponent/>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
        margin: 'auto',
        maxWidth: 'fit-content',
        padding: '20px'
      }}
    >
      <Paper className={classes.root}>
        <Typography variant="h4" style={{
          fontSize: '2em',
          fontWeight: 'bolder'
        }}>Vendor Management</Typography>
        {/* Form to add a new vendor */}
        <form className={classes.form}>
          <TextField
            label="Vendor Name"
            variant="outlined"
            value={newVendor.name}
            onChange={(e) =>
              setNewVendor({ ...newVendor, name: e.target.value })
            }
          />
          <TextField
            label="Website"
            variant="outlined"
            value={newVendor.website}
            onChange={(e) =>
              setNewVendor({ ...newVendor, website: e.target.value })
            }
          />
          <TextField
            label="Review"
            variant="outlined"
            multiline
            rows={4}
            value={newVendor.review}
            onChange={(e) =>
              setNewVendor({ ...newVendor, review: e.target.value })
            }
          />
          {/* File input for PDF */}
          <input
            type="file"
            accept=".pdf"
            className={classes.fileInput}
            onChange={handleFileChange}
          />
          {/* Add more fields as needed */}
          <Button
              variant="outlined"
              sx={{
                backgroundColor: "#000",
                color: "white",
                borderRadius: "8px",
                padding: '7px',
                "&:hover": {  color: '#FF8C00', background: 'black' },
              }}
              onClick={handleAddVendor}
            >
              Add Vendor
            </Button>
        </form>

        {/* Display existing vendors */}
        <List>
          {vendors.map((vendor, index) => (
            <ListItem key={index}>
              {vendor.name}{" "}
              {vendor.pdfFile && (
                <Button
                  variant="outlined"
                  style={{
                    background: "black",
                    color: "white",
                  }}
                  onClick={handleViewPdf}
                >
                  View PDF
                </Button>
              )}
            </ListItem>
            // Display more vendor details as needed
          ))}
        </List>
      </Paper>
    </div>
    </>
  );
};

export default VendorManagement;
