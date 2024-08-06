const fs = require("fs");
const path = require("path");

const expectedStructure = {
  scientificName: "string",
  family: "string",
  traits: {
    size: "string",
    lifespan: "string",
    activityTime: "string",
    careLevel: "number",
    behaviour: "number",
    breedingDifficulty: "number",
  },
  tankInfo: {
    temperature: "string",
    volume: "number",
    gh: "string",
    ph: "string",
  },
};

const checkStructure = (obj, structure) => {
  for (const key in structure) {
    if (typeof structure[key] === "object") {
      if (typeof obj[key] !== "object") {
        return false;
      }
      if (!checkStructure(obj[key], structure[key])) {
        return false;
      }
    } else {
      if (typeof obj[key] !== structure[key]) {
        return false;
      }
    }
  }
  return true;
};

describe("check _info.json files structure", () => {
  const baseDir = path.join(process.cwd(), "./content");

  const findInfoFiles = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
      const filePath = path.join(dir, file, "_info.json");
      results.push(filePath);
    });

    return results;
  };

  const infoFiles = findInfoFiles(baseDir);

  infoFiles.forEach((file) => {
    const dirNames = file.split("/");
    const dirName = dirNames[dirNames.length - 2];

    test(`${dirName} should have the correct _info.json file`, () => {
      const data = JSON.parse(fs.readFileSync(file, "utf8"));
      expect(checkStructure(data, expectedStructure)).toBe(true);
    });
  });
});
