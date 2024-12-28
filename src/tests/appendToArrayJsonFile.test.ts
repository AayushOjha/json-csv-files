import fs from "fs";
import path from "path";
import { appendToArrayJsonFile } from "../functions";

const tempDir = path.join(__dirname, "tempTestFiles");

// Utility function to create a temporary file
const createTempFile = (filePath: string, content: string) => {
  fs.mkdirSync(tempDir, { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
};

// Utility function to clean up temporary files
const cleanupTempFiles = () => {
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
};

describe("appendToArrayJsonFile - Real File Operations", () => {
  const tempFilePath = path.join(tempDir, "test.json");

  beforeAll(() => {
    cleanupTempFiles();
  });

  afterEach(() => {
    cleanupTempFiles();
  });

  afterAll(() => {
    cleanupTempFiles();
  });

  it("should append new data to the JSON array in the file", async () => {
    const initialData = [{ existing: "data" }];
    const newData = { key: "value" };

    createTempFile(tempFilePath, JSON.stringify(initialData));

    await appendToArrayJsonFile(tempFilePath, newData);

    const updatedContent = fs.readFileSync(tempFilePath, "utf8");
    const updatedJson = JSON.parse(updatedContent);

    expect(updatedJson).toEqual([...initialData, newData]);
  });

  it("should fail gracefully if the file does not exist", async () => {
    const nonExistentFilePath = path.join(tempDir, "nonexistent.json");
    const newData = { key: "value" };

    await expect(
      appendToArrayJsonFile(nonExistentFilePath, newData)
    ).rejects.toThrow();
    expect(fs.existsSync(nonExistentFilePath)).toBe(false);
  });

  it("should throw an error if  existing file content is not array", async () => {
    const initialData = { existing: "data" };
    const newData = "";

    createTempFile(tempFilePath, JSON.stringify(initialData));

    await expect(appendToArrayJsonFile(tempFilePath, newData)).rejects.toThrow(
      "not an array"
    );
  });
});



/**
 * TODO:
 * add tests to test spread feature
 */
