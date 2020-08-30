import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import file from "./Rohit.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class Resume extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  render() {
    const { pageNumber } = this.state;
    return (
      <div>
        <div style={{ width: 600 }}>
          <Document file={file} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={1000} />
          </Document>
        </div>
      </div>
    );
  }
}

export default Resume;
