const Ajv = require("ajv");
const ajv = new Ajv();
// json scheme
const schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    debt: { type: "string", maxLength: 2 },
  },
  required: ["name", "debt"],
  additionalProperties: false,
};

module.exports= ajv.compile(schema);