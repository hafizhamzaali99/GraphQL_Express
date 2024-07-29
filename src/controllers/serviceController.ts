import Service from "../models/serviceModel.js";

const createService = async (
  parent: any,
  arg: { name: String; info: String; price: String }
) => {
  const service = await Service.create(arg);
  console.log(service);
//   return service;
  return "Service created successfully";
};

const getAllServices = async () => {
  const services = Service.find();
  return services;
};

export { createService, getAllServices };
