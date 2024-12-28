import fs from "fs";

async function appendToArrayJsonFile(filePath: string, newData: any, spread = false) {
  try {
    let data = fs.readFileSync(filePath, "utf8");

    if (data === "") data = "[]";

    let jsonData = JSON.parse(data);
    
    if (!Array.isArray(jsonData)) {
      throw new Error("Data inside the file is not an array");
    }

    if (spread) {
      jsonData = [...jsonData, ...newData]
    }
    jsonData.push(newData);

    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
  
} catch (err) {
    console.error("Error appending the file:", err);
    throw err;
  }
  return;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { appendToArrayJsonFile, sleep };
