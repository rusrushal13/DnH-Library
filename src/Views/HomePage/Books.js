import React from "react";
import data from "../../API/GetBooks.json";
import { Card, Grid } from "@material-ui/core";
import "./Homepage.css";

const Books = () => {
  const HandleGoodReadsLink = link => {
    window.open(link);
  };

  return (
    <div className={"bookDiv"}>
      {data.books.map((book, index) => (
        <Card
          key={index}
          onClick={() => HandleGoodReadsLink(book.GoodreadsLink)}
          className={"bookCard"}
        >
          <Grid container alignItems="center">
            <Grid item xs={3} className={"gridItem"}>
              {book.Name}
            </Grid>
            <Grid item xs={3} className={"gridItem"}>
              {book.Author}
            </Grid>
            <Grid item xs={3} className={"gridItem"}>
              {book.DonatedBy}
            </Grid>
            <Grid item xs={3} className={"gridItem"}>
              {book.CurrentOwner}
            </Grid>
          </Grid>
        </Card>
      ))}
    </div>
  );
};

export default Books;
