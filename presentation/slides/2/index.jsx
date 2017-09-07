import React from 'react';
import {
  Slide,
  Heading,
  Layout,
  Fill,
  Appear,
  ListItem,
  List,
  Fit,
} from 'spectacle';

export default (
  <Slide>
    <Heading size={5} margin="0.25rem auto 1rem auto">
      About Me
    </Heading>
    <Layout>
      <Fill>
        <Heading size={6}>Career</Heading>
        <List padding="0 1rem 0 0">
          <Appear>
            <ListItem>Eng. Network and Computer Systems</ListItem>
          </Appear>
          <Appear>
            <ListItem>Full stack developer at iUZ Technologies</ListItem>
          </Appear>
          <Appear>
            <ListItem>Front-end developer at Seedstars SA</ListItem>
          </Appear>
          <Appear>
            <ListItem>Front-end developer at Mindera</ListItem>
          </Appear>
        </List>
      </Fill>

      <Fill>
        <Appear>
          <Fill>
            <Heading size={6}>Hobbies</Heading>
            <List padding="0 0 0 1rem">
              <ListItem>Board Games</ListItem>
              <ListItem>Virtual Games</ListItem>
              <ListItem>Bass Player / Music</ListItem>
              <ListItem>
                Trying to be a homebrew master (just starting)
              </ListItem>
            </List>
          </Fill>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);
