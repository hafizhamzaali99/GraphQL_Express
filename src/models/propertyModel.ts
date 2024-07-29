import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
    default: 1, // Set the starting ID
  },
  images: {
    type: Array,
    default: [],
  },
  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: [true, "This field is required"],
  },
  lat: {
    type: Number,
    default: null,
  },
  lng: {
    type: Number,
    default: null,
  },
  sherwin_williams_account: {
    type: String,
    default: null,
  },
  sherwin_williams_store_email: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
    required: [true, "This field is required"],
  },
  street_name: {
    type: String,
    default: null,
    required: [true, "This field is required"],
  },
  city: {
    type: String,
    default: null,
    required: [true, "This field is required"],
  },
  state: {
    type: String,
    default: null,
    required: [true, "This field is required"],
  },
  zip: {
    type: String,
    default: null,
    required: [true, "This field is required"],
  },
  garage_code: {
    type: String,
    default: null,
  },
  manager_name: {
    type: String,
    default: null,
  },
  manager_contact_sms: {
    type: String,
    default: null,
  },
  manager_contact_email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  maintenance_name: {
    type: String,
    default: null,
  },
  maintenance_contact_sms: {
    type: String,
    default: null,
  },
  maintenance_contact_email: {
    type: String,
    default: null,
  },
  property_username: {
    type: String,
    default: null,
  },
  property_password: {
    type: String,
    default: null,
  },
});

const propertyModel = mongoose.model("properties", propertySchema);
export default propertyModel;
