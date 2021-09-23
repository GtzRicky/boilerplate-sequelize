const getDataValues = (sequelizeObj) => {
    return JSON.parse(JSON.stringify(sequelizeObj));
  }
  
  module.exports = getDataValues;
  