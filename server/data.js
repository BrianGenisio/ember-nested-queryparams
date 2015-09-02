var idCount = 0;
var bikes = [{
  id: idCount++,
  brand: "Specialized",
  model: "Tricross",
  isNew: false,
  style: "Cyclocross",
  condition: "fair"
}, {
  id: idCount++,
  brand: "Specialized",
  model: "Sirrus",
  isNew: true,
  style: "Fitness"
}, {
  id: idCount++,
  brand: "Surly",
  model: "Cross Check",
  isNew: true,
  style: "Cyclocross"
}];

module.exports = {
  bikes: bikes
};