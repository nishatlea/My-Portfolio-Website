import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import chilling_sunday from "../assets/img/chilling_sunday.png";
export const Education = () => {
  const educationStyle = {
    margin: "30px 0",
  };
  const cardStyle = {
    // display: "flex", // Use flexbox for centering
    // justifyContent: "center", // Center horizontally
    // alignItems: "center", // Center vertically
  };
  return (
    <Container>
      <Row>
        <Col size={12} style={educationStyle}>
          <h2> Education</h2>
          <center>
            {/* card1 */}
            <Card sx={{ maxWidth: 800 }} style={cardStyle}>
              <CardMedia
                sx={{ height: 300 }}
                image={chilling_sunday}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </center>
        </Col>
      </Row>
    </Container>
  );
};
