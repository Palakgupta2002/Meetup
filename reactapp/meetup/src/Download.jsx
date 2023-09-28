import React from 'react'
import { RWebShare } from "react-web-share";
import { useState  } from 'react';

function Download() {
    const [Share,ClickShare]=useState(null);
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
    const onbuttonshare=()=>{
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                
                ClickShare = fileURL;
            })
        })

    }
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <div>
        <button onClick={onButtonClick}>
                    Download PDF
                </button>
        </div>
        <div> <RWebShare
                data={{
                    text: "Web Share - GfG",
                    url: Share,
                    title: "GfG",
                }}
                onClick={() => console.log("shared successfully!")}

            >
                <button onClick={onbuttonshare} >Share </button>
            </RWebShare></div>
    </div>
  )
}


export default Download