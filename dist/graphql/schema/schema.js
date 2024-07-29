"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
exports.schema = `#graphql

  type User{
    _id:ID,
    team:ID,
    approved_jobs:[ID],
    awaiting_approved: [ID],
    pay_rate_users: [ID],
    is_superuser: Boolean,
    is_active:Boolean,
    date_joined: String,
    username: String,
    name: String,
    email: String,
    phone_number: String,
    street: String,
    city:String,
    zip: String,
    state:String,
    workers_comp_expiration:String,
    deactivated:Boolean,
    discount: Int,
    password: String,
    decoded_password: String,
    user_type: String,
    attachments: [ID],
    token:String,
  }

  type Property{
    id:ID!,
    images: [ID!],
    client_id: ID!,
    lat: Float,
    lng: Float,
    sherwin_williams_account:String,
    sherwin_williams_store_email: String,
    name: String,
    street_name: String,
    city: String,
    state:String,
    zip: String,
    garage_code:String,
    manager_name:String,
    manager_contact_sms: String,
    manager_contact_email:String,
    maintenance_name: String,
    maintenance_contact_sms: String,
    maintenance_contact_email: String,
    property_username:String,
    property_password:String,
  }

  type Service {
    _id:ID!
    name:String!,
    info:String!
    price:String!,
  }

  type Mutation {
    newService(name:String!,info:String!,price:String!):String
  }

  type Query {
    users: [User],
    user(id:ID!): User,
    properties: [Property],
    services:[Service]
  }
  

  
`;
