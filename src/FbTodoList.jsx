import React from "react";
import db from "./firebase";

const FbTodoList = () => {
  const clickHandler = () => {
    db.collection("todos")
      .add({
        name: "a simple todo from app",
        note: "it is a test note",
        start: "9/21/2020",
        status: false,
      })
      .then((docRef) => console.log("document written with Id: " + docRef.id))
      .catch((error) => console.error("error adding document:" + error));
  };

  const readButtonClickHandler = () => {
    db.collection("todos")
      .get()
      .then((querySnapshots) => {
        querySnapshots.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().name}`);
        });
      });
  };

  return (
    <div>
      <input type="button" onClick={clickHandler} value="Add Data" />
      <input type="button" onClick={readButtonClickHandler} value="Read Data" />
    </div>
  );
};

export default FbTodoList;
