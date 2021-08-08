const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    name: { type: String, required: true },
    color: {
      type: String,
      required: true,
      default: "blue",
      enum: ["blue", "orange", "purple", "green", "red"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { collection: "project" }
);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
