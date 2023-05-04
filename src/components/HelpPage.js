import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HelpPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>How to use our book review website</h1>
          <h2>Viewing books</h2>
          <p>
            To view books, simply go to the "home" page. 
            Here you can search for the books by typing in search bar or if you scroll down you can just click recommended books. 
            It will redirect you to the search page where you can sort the books by title, author, year etc
          </p>
          <p>
            Clicking on a book will take you to the book's individual page, where you can see more information about the book, including its cover image, a summary, and the reviews that have been posted about it.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Posting books</h2>
          <p>
            To post a book, first make sure you are logged in to your account. If you don't have an account yet, you can create one by clicking on the "Sign up" button in the top right corner of the page.
          </p>
          <p>
            Once you are logged in, go to the "Add Book" page. Here you can enter the book's title, author, cover image, summary, and etc. Once you have filled in all the required fields, click the "Post" button to post the book to our website.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Changing avatar</h2>
          <p>If you wanna change or set your avatar you can click to change avatar button and it will redirect to change avatar page if you are logged in. In there you can link the image url and you are good to go</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Login and Signup</h2>
          <p>There are two buttons in navigation bar one for signup and one for login. 
            From there you can create an account or login to your account. 
            You still can search for books without logging in but cannot add comments, give rating to books, set your profile picture or post books yourself.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HelpPage;
