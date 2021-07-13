import mongoose from "mongoose"

const imagesSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default imagesSchema
