import React from "react";
import { Link } from "react-router-dom";

function ArchivePage() {
  return (
    <div className="CheckPage">
      <div className="home_title">
        <Link to="/archive/check">아카이브 바로가기</Link>
      </div>
    </div>
  );
}

export default ArchivePage;
