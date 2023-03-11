const asyncHandler = require("express-async-handler");
//@desc Get All Contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message : `Get all contacts`});
}); 

//@desc Create a Contact
//@route POST /api/contact/:id
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body :", req.body);
    res.status(200).json({message : `Create A Contact`});
}); 

//@desc Get A Contact
//@route GET /api/contact/:id
//@access public
const getContact =asyncHandler(async (req, res) => {
    res.status(200).json({message : `Get A Contact`});
}); 

//@desc Update a Contact
//@route PUT /api/contact/:id
//@access public
const updateContact =asyncHandler(async (req, res) => {
    res.status(200).json({message : `Update A Contact`});
}); 

//@desc Delete a Contact
//@route DELETE /api/contact/:id
//@access public
const deleteContact =asyncHandler(async (req, res) => {
    res.status(200).json({message : `Delete A Contact`});
}); 

module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact
};
