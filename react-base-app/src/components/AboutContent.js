import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {  getFrontPage } from "../services/apiService";
import { useParams } from 'react-router-dom';


export default function MainContent() {
    
  const { page_slug } = useParams(); 
  let page_id;

  if(page_slug === 'about-us' )
    page_id = 3;
  if(page_slug === 'terms-and-conditions' )
    page_id = 1;
  if(page_slug === 'privacy-policy' )
    page_id = 2;


  const [pageData, setPageData] = useState([]);
  const [pageSlug, setpageSlug] = useState(page_slug);
  useEffect(() => {
    getProjectData(page_id);
    }, [page_slug ]);

  

  const getProjectData = async (id) => {
   
    try {
      const response = await getFrontPage(id);
      if (response) {
        if (response.success === true) {
            setPageData(response.data);
        } 
      }
    } catch (err) {
     console.log(err)
    } 
  };


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          {pageData.page_title}
        </Typography>
       
        <div dangerouslySetInnerHTML={{ __html: pageData.page_short_description }} />
        <div dangerouslySetInnerHTML={{ __html: pageData.page_description }} />

      </div>
    </Box>
  );
}
