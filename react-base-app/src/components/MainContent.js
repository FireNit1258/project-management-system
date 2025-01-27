import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import {  getFrontProjects,getFrontCategories } from "../services/apiService";


const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

function Author({ authors,skills,date }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              src={process.env.REACT_APP_API_URL+'uploads/'+author.image_name }
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {skills}
        </Typography>
      </Box>
      <Typography variant="caption">{date}</Typography>
    </Box>
  );
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};


export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = useState(null);
  const [projectData, setProjectData] = useState([]);
   const [categoryData, setCategoryData] = useState([]);
   
   const [selectedCategory, setSelectedCategory] = useState('featured');

  useEffect(() => {
    getProjectData('featured');
    getCategoryData();
    
  }, []);

  

  const getProjectData = async (filter) => {
   
    try {
      const response = await getFrontProjects(filter);
      if (response) {
        if (response.success === true) {
            setProjectData(response.data);
        } 
      }
    } catch (err) {
     console.log(err)
    } 
  };



  const getCategoryData = async () => {
   
    try {
      const response = await getFrontCategories();
      if (response) {
        if (response.success === true) {
          setCategoryData(response.data);
        } 
      }
    } catch (err) {
     console.log(err)
    } 
  };

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const startSearch = (keyword) => {


    if (keyword.length > 3) {
      getProjectData(keyword);
    }

  };

  

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClickCategory = (id) => {
    setSelectedCategory(id)
    getProjectData(id);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Featured Projects
        </Typography>
        <Typography>Stay in the loop with the latest about our products/projects</Typography>
      </div>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
          overflow: 'auto',
        }}
      >
        <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined" >
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        onChange={(e) => startSearch(e.target.value)}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}  >
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
        <IconButton size="small" aria-label="RSS feed">
          <RssFeedRoundedIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'center' },
          gap: 4,
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'row',
            gap: 3,
            overflow: 'auto',
          }}
        >
          <Chip onClick={  () => handleClickCategory('featured')  } size="medium" label="All categories" sx={ selectedCategory!=='featured' ? { backgroundColor: 'transparent', border: 'none',} : {}    } />
          
          {categoryData.map((item) => (
          <Chip
            onClick={ () => handleClickCategory(item.id)}
            size="medium"
            label={item.name}
            sx={ selectedCategory!==item.id ? { backgroundColor: 'transparent', border: 'none',} : {}    }
          />
        ))}

          
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            gap: 1,
            width: { xs: '100%', md: 'fit-content' },
            overflow: 'auto',
          }}
        >
          <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined" >
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        onChange={(e) => startSearch(e.target.value)}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}  >
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
          <IconButton size="small" aria-label="RSS feed">
            <RssFeedRoundedIcon />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={2} columns={12}>

      {projectData.map((item) => (
        <Grid size={{ xs: 12, md: 6 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(0)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={process.env.REACT_APP_API_URL+'uploads/'+item.images[0].image_name}
              sx={{
                aspectRatio: '16 / 9',
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {item.project_category.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
              {item.project_name}
              </Typography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
              {item.project_short_description}
              </StyledTypography>
            </SyledCardContent>
            <Author authors={item.images} skills={item.project_technology} date={item.completed_duration} />
          </SyledCard>
        </Grid>
        ))}

      </Grid>
    </Box>
  );
}
