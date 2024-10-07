import YAML from "yamljs";
import path from "path";
import fs from "fs";

const yamlAPIDirectory = path.join(__dirname, "swagger-api-docs");
const yamlSchemaDirectory = path.join(__dirname, "swagger-schema-docs");

const yamlAPIDocuments: Record<string, any> = {};
const yamlSchemaDocuments: Record<string, any> = {};

// Read all files from the swagger-api-docs directory
fs.readdirSync(yamlAPIDirectory).forEach((file) => {
  // Filter only .yaml or .yml files
  if (file.endsWith(".yaml") || file.endsWith(".yml")) {
    const filePath = path.join(yamlAPIDirectory, file);

    // Using the file as a key without the extension
    const fileNameWithoutExtension = path.basename(file, path.extname(file));
    try {
      yamlAPIDocuments[fileNameWithoutExtension] = YAML.load(filePath);
    } catch (error: any) {
      console.error(`Error loading ${file}`, error);
    }
  }
});

// Read all files from the swagger-schema-docs directory
fs.readdirSync(yamlSchemaDirectory).forEach((file) => {
  // Filter only .yaml or .yml files
  if (file.endsWith(".yaml") || file.endsWith(".yml")) {
    const filePath = path.join(yamlSchemaDirectory, file);

    // Using the file as a key without the extension
    const fileNameWithoutExtension = path.basename(file, path.extname(file));
    try {
      yamlSchemaDocuments[fileNameWithoutExtension] = YAML.load(filePath);
    } catch (error: any) {
      console.error(`Error loading ${file}`, error);
    }
  }
});

const sampleAPI = yamlAPIDocuments["sample-api"];
const sampleSchema = yamlSchemaDocuments["sample-schema"];
const userSchema = yamlSchemaDocuments["users-schema"];

const OPENAPI_DOCS_SPEC = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Create-Node-App CLI tools",
    description:
      "CLI to scaffold a Node.js project with database, ORM and swagger ui documentation setup",
  },
  paths: {
    ...sampleAPI.paths,
  },
  components: {
    schemas: {
      ...sampleSchema.schemas,
      ...userSchema.schemas,
    },
  },
};

export default OPENAPI_DOCS_SPEC;