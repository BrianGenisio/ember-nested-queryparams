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
}, {
  id: idCount++,
  brand: "Trek",
  model: "Madone",
  isNew: false,
  style: "Race",
  condition: "good"
}, {
  id: idCount++,
  brand: "Trek",
  model: "Superfly",
  isNew: true,
  style: "Mountain"
}, {
  id: idCount++,
  brand: "Trek",
  model: "Cali",
  isNew: false,
  style: "Mountain",
  condition: "rough"
}, {
  id: idCount++,
  brand: "Specialized",
  model: "Allez",
  isNew: true,
  style: "Road"
}];

module.exports = {
  bikes: bikes
};