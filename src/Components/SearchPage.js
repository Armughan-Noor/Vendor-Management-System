import React, { useState } from 'react';
import PdfViewer from './PdfViewer'; // Import the PdfViewer component
import GoBackComponent from './GoBackButton';
import Navbar from './Navbar';
import {
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  Paper,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const SearchPage = () => {
  const classes = useStyles();

  const [searchCriteria, setSearchCriteria] = useState({
    vendorName: '',
  });
  const [searchResults, setSearchResults] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  const handleSearch = () => {
    // Logic to search vendors based on criteria
    // Update searchResults state

    // For simplicity, assume the first search result as the selected vendor
    const selectedVendor = searchResults[0];
    

    // Show the VendorManagement component when the search is successful
    setSelectedVendor(selectedVendor);
    handlePdfView();
  };

  const handlePdfView = () => {
    setShowPdfViewer(true);
    // setSearchResults([]);

  };

  return (
    <>
    <Navbar/>
    <GoBackComponent/>
    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: 'fit-content', margin: 'auto', padding:'30px', boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
 }}>
      { !showPdfViewer && (
        <Paper className={classes.root} >
          <Typography variant="h4" style={{
            fontWeight: 'bolder',
            fontSize: '2em'
          }}>Search Vednor</Typography>
          <form className={classes.form}>
            <TextField
              label="Vendor Name"
              variant="outlined"
              value={searchCriteria.vendorName}
              onChange={(e) => setSearchCriteria({ ...searchCriteria, vendorName: e.target.value })}
            />
            <Button variant="contained" style={{
                color: 'white',
                background: 'black'
            }} onClick={handleSearch}>
              Search
            </Button>
          </form>
          <List>
            {searchResults.map((result, index) => (
              <ListItem key={index}>
                {result.name}{' '}
                {result.pdfFile && (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setSelectedVendor(result)}
                  >
                    View PDF
                  </Button>
                )}
              </ListItem>
              // Display more details about the search result
            ))}
          </List>
        </Paper>
      )}


      {showPdfViewer && selectedVendor && (
        <PdfViewer pdfFile={selectedVendor.pdfFile} onClose={() => setShowPdfViewer(false)} />
      )}
    </div>
    </>
  );
};

export default SearchPage;
