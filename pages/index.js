import { useState } from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Home() {
//when the user clicks the button
//I want you to load the data in a stateful variable called quoteData
//I want you to show it on the page

  const [quoteData, setQuoteData] = useState()

  const getRandomQuote = async () => {
    //since the endpoint is on the same domain (localhost:3000) we don't need to specify the path

    //handle requests use a try catch
    try {
      //make the request
      const response = await fetch('/api/random_quote')
      const data = await response.json()
      //set the state
      setQuoteData(data)
    } catch(error) {
      // this error we're not handling, but you should
      // display something to the user, otherwise they are just left hanging
      console.log(error)
    }


  }

  return (
    <div>
      <Head>
        <title>We Love Quotes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            We Love Quotes
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Typography variant="h5" align="center" color="text.primary" paragraph>
              {quoteData && quoteData.quote}
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.secondary"
              gutterBottom
            >
              {quoteData && quoteData.author}
            </Typography>
            <Box
             display="flex"
             justifyContent="center"

            >
              <Button
                variant="contained"
                onClick={getRandomQuote}
              >
                Get New Quote
              </Button>
            </Box>
          </Box>
        </Container>
      </main>
    </div>
  )
}
