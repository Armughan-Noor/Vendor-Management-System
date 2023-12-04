import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button } from '@material-ui/core';

const PdfViewer = ({ pdfFile, onClose }) => {
  // Assuming you have a PDF rendering component or library (e.g., react-pdf)
  // Replace 'YourPdfViewerComponent' with the actual PDF viewer you're using
  // Adjust the props based on the requirements of your PDF viewer component

  // Replace this with your actual PDF rendering logic
  const YourPdfViewerComponent = () => (
    <div>
      <DialogTitle>{pdfFile.name}</DialogTitle>
      <DialogContent>
        {/* Your PDF rendering component or library goes here */}
        {/* For example, if using react-pdf, you might do something like this: */}
        {/* <PdfDocument file={pdfFile} /> */}
      </DialogContent>
    </div>
  );

  return (
    <Dialog open={true} onClose={onClose}>
      <YourPdfViewerComponent />
      <Button color="primary" onClick={onClose}>
        Close
      </Button>
    </Dialog>
  );
};

export default PdfViewer;
