import fs from "fs";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import schema from "./cycladicArtifact.schema.json";

const ajv = new Ajv();
addFormats(ajv); // ✅ Υποστήριξη format όπως "uri"

const validate = ajv.compile(schema);

export function validateFile(path: string): boolean {
  const data = JSON.parse(fs.readFileSync(path, "utf-8"));
  const valid = validate(data);
  if (valid) {
    console.log(`✅ ${path} is valid`);
  } else {
    console.error(`❌ ${path} errors:`, validate.errors);
  }
  return valid;
}
