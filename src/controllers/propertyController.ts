import property from "../models/propertyModel"


export const getAllProperties = async ()=>{
    const properties = await property.find()
    return properties
}