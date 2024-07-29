"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const propertySchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
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
const propertyModel = mongoose_1.default.model("properties", propertySchema);
exports.default = propertyModel;
