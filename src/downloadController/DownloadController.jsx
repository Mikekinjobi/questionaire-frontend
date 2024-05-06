import React from "react";

const jsonDataArray = [
  {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    hobbies: ["reading", "hiking", "cooking"]
  },
  {
    name: "Jane Smith",
    age: 25,
    email: "jane@example.com",
    hobbies: ["painting", "swimming", "gardening"]
  }
];

const DownloadExcelController = () => {
  const downloadExcelFile = () => {
    const fileName = "data.csv";
    const csvContent = convertJsonArrayToCsv(jsonDataArray);

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    if (window.navigator.msSaveBlob) {
      // For IE and Edge
      window.navigator.msSaveBlob(blob, fileName);
    } else {
      // For other browsers
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const convertValueToString = (value) => {
    if (Array.isArray(value)) {
      return value.join(", "); // Flatten arrays into strings
    }
    return value;
  };

  const convertJsonArrayToCsv = (jsonArray) => {
    if (jsonArray.length === 0) return "";

    const headers = Object.keys(jsonArray[0]);
    const rows = [headers.join(",")];

    for (let obj of jsonArray) {
      const values = headers.map(header => convertValueToString(obj[header]));
      rows.push(values.join(","));
    }
    
    return rows.join("\n");
  };

  return (
    <button onClick={downloadExcelFile}>
      Download Excel File
    </button>
  );
};

export default DownloadExcelController;