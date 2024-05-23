const Customer = require('../models/Customer');

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createCustomer = async (req, res) => {
  const newCustomer = new Customer(req.body);
  try {
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
