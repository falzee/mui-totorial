import React from 'react'
import { Paper,Grid,Typography,Box,Rating,Link } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { createTheme,ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});
const paperSX = {
  "&:hover": {
    color: "blue",
  },
};

const Cards = ({tour}) => {
  return (
    <Grid item xs={4} md={3}>
        <ThemeProvider theme={theme}>
        <Paper elevation={2}>
            <img className="img" src={tour.image} alt="" />
            <Box paddingX={1}> {/* box 1  paper title*/}
                <Link 
                href="../pages/Tour" underline="none" color="black"
                sx={paperSX}>
                {tour.name}
                </Link>
            </Box>
            <Box     /* box 2 times+icons */
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
                paddingX={1}>
                    <AccessTime style={{ width: 12.5 }} />
                    <Typography variant="body2" component="p" marginLeft={0.5}>
                    {tour.duration} Jam
                    </Typography>
            </Box>
            <Box /* box 3 value star */
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
                marginTop={2}
                paddingX={1}
                >
                <Rating
                    name="size-small"
                    size="small"
                    value={4.5}
                    precision={0.25}
                    marginLeft={1.5}
                    readOnly
                />
                    <Typography variant="body2" component="p" marginLeft={0.5}>
                    {tour.rating}
                    </Typography>
                    <Typography variant="body3" component="p" marginLeft={1.5}>
                    ({tour.numberOfReviews} review)
                    </Typography>
            </Box>
            <Box /* box 4 money */
                sx={{
                    display: "flex",
                }}
                paddingX={1}
                >
                <Typography variant="h6" component="h2" marginTop={0}>
                    Mulai ${tour.price}
                </Typography>
            </Box>
        </Paper>
        </ThemeProvider>
    </Grid>);
};

export default Cards;
