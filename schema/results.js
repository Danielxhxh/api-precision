const schema = {
  type: "object",
  properties: {
    FVC: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FEV1: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    PEF: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters/second"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FEF75: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters/seconds"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FEF2575: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters/seconds"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FET: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["seconds/100"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    "FEV1%": {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["percentage"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FEV6: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    "FEV6%": {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["percentage"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    "FEV6/FVC": {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["percentage"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FEF25: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters/second"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FEF50: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters/second"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FEV3p: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["percentage"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    DTPEF: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["milliseconds"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FEV05: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FEV05p: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["percentage"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FEV075: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FEV075p: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["percentage"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    VEXT: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FIVC: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FIV1: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    "FIV1%": {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["percentage"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    PIF: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters/seconds"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    FEV3: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    TIME_TO_PEF: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["milliseconds"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    HESITATION: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["milliseconds"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    "FLOW-VOLUME CURVE POINTS": {
      type: "array",
      items: {
        type: "object",
        properties: {
          flow: { type: "number" },
          volume: { type: "number" },
        },
        required: ["flow", "volume"],
        additionalProperties: false,
      },
    },
    acceptability: {
      type: "object",
      properties: {
        FVC: { type: "string" },
        FEV1: { type: "string" },
      },
      required: ["FVC", "FEV1"],
      additionalProperties: false,
    },
    "VOLUME-time CURVE POINTS": {
      type: "array",
      items: {
        type: "object",
        properties: {
          volume: { type: "number" },
          time: { type: "number" },
        },
        required: ["volume", "time"],
        additionalProperties: false,
      },
    },
    quality_control_grade: {
      type: "object",
      properties: {
        FVC: { type: "string" },
        FEV1: { type: "string" },
      },
      required: ["FVC", "FEV1"],
      additionalProperties: false,
    },
    variability: {
      type: "object",
      properties: {
        FVC: { type: "string" },
        FEV1: { type: "string" },
      },
      required: ["FVC", "FEV1"],
      additionalProperties: false,
    },
    "calculation of best maneuver": { type: "string" },
    "calculation of best 3 maneuvers": { type: "string" },
    EVC: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    IVC: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["centiliters"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    Set_or_sit: {
      type: "object",
      properties: {
        value: { type: "number" },
        unit: { type: "string", enum: ["milliseconds"] },
      },
      required: ["value", "unit"],
      additionalProperties: false,
    },
    pdf: {
      type: "object",
      properties: {
        value: { type: "string" },
      },
      required: ["value"],
      additionalProperties: false,
    },
  },
  required: [
    "FVC",
    "FEV1",
    "PEF",
    "FEF75",
    "FEF2575",
    "FET",
    "FEV1%",
    "FEV6",
    "FEV6%",
    "FEV6/FVC",
    "FEF25",
    "FEF50",
    "FEV3p",
    "DTPEF",
    "FEV05",
    "FEV05p",
    "FEV075",
    "FEV075p",
    "VEXT",
    "FIVC",
    "FIV1",
    "FIV1%",
    "PIF",
    "FEV3",
    "TIME_TO_PEF",
    "HESITATION",
    "FLOW-VOLUME CURVE POINTS",
    "acceptability",
    "VOLUME-time CURVE POINTS",
    "quality_control_grade",
    "variability",
    "calculation of best maneuver",
    "calculation of best 3 maneuvers",
    "EVC",
    "IVC",
    "Set_or_sit",
    "pdf",
  ],
  additionalProperties: false,
};

module.exports = schema;
