import React from "react";

export default function LeftAlignedTable({ data }) {
  return (
    <div className={"table-container"}>
      {data.map((row, index) => (
        <div className="row" key={index}>
          {row.map((cell, cellIndex) => (
            <div className="cell" key={cellIndex}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}