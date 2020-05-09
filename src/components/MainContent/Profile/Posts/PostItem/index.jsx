import React from "react";
import "./postitem.scss";

const PostItem = (props) => {
  console.log(props)
  return (
    <div>
      <div className="author"></div>
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default PostItem;
