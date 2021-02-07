import React, { useState, useEffect } from 'react'
import Posts from './posts'
import './mainContent.css'
import Card from 'react-bootstrap/Card'
import { Button, Form, Row, Col } from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'

const postsPerPage = 10
let arrayForHoldingPosts = []

const MainContent = () => {
  const api_key = '8YSDbd7fDE4s6P51mc2eiiwGJlxYsl0VYLgIKkxv'
  const [allCards, setAllCards] = useState([])
  const [rover, setRover] = useState('opportunity')
  const [sol, setSol] = useState('100')
  const [camera, setCamera] = useState('fhaz')
  //
  const [postsToShow, setPostsToShow] = useState([])
  const [next, setNext] = useState(10)

  const loopWithSlice = (start, end) => {
    const slicedPosts = allCards.slice(start, end)
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts]
    setPostsToShow(arrayForHoldingPosts)
    console.log(slicedPosts)
  }

  useEffect(() => {
    loopWithSlice(0, postsPerPage)
  }, [allCards])

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage)
    setNext(next + postsPerPage)
  }

  //

  function sendRequest(method, url) {
    return fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setAllCards(data.photos)
      })
  }

  console.log(allCards)

  return (
    <div className='content-container'>
      <div className='queries-container'>
        <h2>Choose Rover:</h2>
        <div className='rovers-container'>
          <Card className='card-container color' border='primary'>
            <Card.Img
              variant='top'
              src='https://spacenews.com/wp-content/uploads/2015/03/opportunity-illus-879x485.jpg'
            />
            <Card.Body>
              <Card.Title>Opportunity</Card.Title>
              <Card.Text>
                <b>Дата посадки:</b> 25 січня 2004 р. <br />
                <b>Вартість:</b> 400 мільйонів USD
              </Card.Text>
              <Button
                variant='primary'
                value='opportunity'
                onClick={(e) => setRover(e.currentTarget.value)}
              >
                {rover === 'opportunity' ? 'Choosed' : 'Choose opportunity'}
              </Button>
            </Card.Body>
          </Card>
          <Card className='card-container color' border='primary'>
            <Card.Img
              variant='top'
              src='https://cdni.rt.com/files/news/29/10/c0/00/551041main_pia14156-full_full.si.jpg'
            />
            <Card.Body>
              <Card.Title>Curiosity</Card.Title>
              <Card.Text>
                <b>Дата посадки:</b> 5 серпня 2012 <br />
                <b>Вартість:</b> 2,5 мільярди USD (2012)
              </Card.Text>
              <Button
                variant='primary'
                value='curiosity'
                onClick={(e) => setRover(e.currentTarget.value)}
              >
                {rover === 'curiosity' ? 'Choosed' : 'Choose curiosity'}
              </Button>
            </Card.Body>
          </Card>
          <Card className='card-container color' border='primary'>
            <Card.Img
              variant='top'
              src='https://www.universetoday.com/wp-content/uploads/2008/10/five_years_on_mars-4_10240768.jpg'
              height='143px'
            />
            <Card.Body>
              <Card.Title>Spirit</Card.Title>
              <Card.Text>
                <b>Дата посадки:</b> 4 січня, 2004 <br />
                <b>Вартість:</b> 400 мільйонів USD
              </Card.Text>
              <Button
                variant='primary'
                value='spirit'
                onClick={(e) => setRover(e.currentTarget.value)}
              >
                {rover === 'spirit' ? 'Choosed' : 'Choose spirit'}
              </Button>
            </Card.Body>
          </Card>
        </div>
        {console.log(rover)}
        <h2>Choose camera:</h2>
        <div className='camera-container'>
          <Button
            value='FHAZ'
            onClick={(e) => setCamera(e.currentTarget.value)}
          >
            {camera === 'FHAZ' ? <DoneOutlineIcon /> : 'FHAZ'}
          </Button>
          <Button
            value='RHAZ'
            onClick={(e) => setCamera(e.currentTarget.value)}
          >
            {camera === 'RHAZ' ? <DoneOutlineIcon /> : 'RHAZ'}
          </Button>
          <Button
            value='MAST'
            onClick={(e) => setCamera(e.currentTarget.value)}
          >
            {camera === 'MAST' ? <DoneOutlineIcon /> : 'MAST'}
          </Button>
          <Button
            value='CHEMCAM'
            onClick={(e) => setCamera(e.currentTarget.value)}
          >
            {camera === 'CHEMCAM' ? <DoneOutlineIcon /> : 'CHEMCAM'}
          </Button>
          <Button
            value='MAHLI'
            onClick={(e) => setCamera(e.currentTarget.value)}
          >
            {camera === 'MAHLI' ? <DoneOutlineIcon /> : 'MAHLI'}
          </Button>
          <Button
            value='MARDI'
            onClick={(e) => setCamera(e.currentTarget.value)}
          >
            {camera === 'MARDI' ? <DoneOutlineIcon /> : 'MARDI'}
          </Button>
          <Button
            value='NAVCAM'
            onClick={(e) => setCamera(e.currentTarget.value)}
          >
            {camera === 'NAVCAM' ? <DoneOutlineIcon /> : 'NAVCAM'}
          </Button>
          <Button
            value='PANCAM'
            onClick={(e) => setCamera(e.currentTarget.value)}
          >
            {camera === 'PANCAM' ? <DoneOutlineIcon /> : 'PANCAM'}
          </Button>
          <Button
            value='MINITES'
            onClick={(e) => setCamera(e.currentTarget.value)}
          >
            {camera === 'MINITES' ? <DoneOutlineIcon /> : 'MINITES'}
          </Button>
        </div>
        <h2>Enter Sol day: </h2>

        <Form className='range'>
          <Form.Group as={Row}>
            <Col xs='8'>
              <RangeSlider
                className='range-slider'
                onChange={(e) => setSol(e.target.value)}
                min={1}
                max={1000}
                size='lg'
              />
            </Col>
            <Col xs='4'>
              <Form.Control
                value={sol}
                onChange={(e) => setSol(e.target.value)}
              />
            </Col>
          </Form.Group>
        </Form>
        {allCards.length === 0 ? (
          <Button
            className='submit-btn'
            onClick={() => {
              sendRequest(
                'GET',
                `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${api_key}`
              )
            }}
          >
            SEE RESULTS
          </Button>
        ) : (
          <Button
            className='submit-btn'
            onClick={() => {
              window.location.reload()
            }}
          >
            CLEAR
          </Button>
        )}
      </div>
      <Posts postsToRender={postsToShow} />
      {allCards.length === 0 ? (
        <div></div>
      ) : (
        <Button className='submit-btn' onClick={handleShowMorePosts}>
          Load more
        </Button>
      )}
    </div>
  )
}

export default MainContent
