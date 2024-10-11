const User = require('../model/userModel');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { name, email, address, phone, password, confirmPassword } = req.body;

  if (!name || !email || !address || !phone || !password || !confirmPassword) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const newUser = new User({ name, email, address, phone, password });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    await User.findByIdAndDelete(req.user.id);
    res.status(200).json({ message: 'User account deleted successfully' });
  } catch (error) {
    console.error("Error during user deletion:", error); 
    res.status(500).json({ message: 'Server error', error: error.message }); 
  }
};

const updateUser = async (req, res) => {
  const { name, address, phone } = req.body;

  if(!name || !address || !phone){
    return res.status(400).json({ message: 'Please provide name, address and phone'})
  }

  try{
    const user = await User.findById(req.user.id)

    if(!user) {
      return res.status(404).json({ message: 'User not found'})
    }

    user.name = name;
    user.address = address;
    user.phone = phone;


    await user.save();

    res.status(200).json({ message: 'User details updated successfully', user: user.toObject({ versionKey: false }) });
  }catch(error){
    console.error("Error updating user details: ", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}

module.exports = { register, login, getUserDetails, deleteUser, updateUser };
