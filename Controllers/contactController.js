const asyncHandler = require("express-async-handler");
const theContacts = require("../models/contactModal");
//@desc Get All Contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await theContacts.find();
    res.status(200).json(contacts);
});

//@desc Create a Contact
//@route POST /api/contact/:id
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is 1 :", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All Field are mandatory");
    }
    const contact = await theContacts.create({
        name,
        email,
        phone,
    });
    res.status(200).json(contact);
});  

//@desc Get A Contact
//@route GET /api/contact/:id
//@access public
const getContact =  asyncHandler(async (req, res) => {
    const contact = await theContacts.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
}); 

//@desc Update a Contact
//@route PUT /api/contact/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await theContacts.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error ("Contact not found");
    }

    const updatecontact = await theContacts.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(200).json(updatecontact);
});  

//@desc Delete a Contact
//@route DELETE /api/contact/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await theContacts.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error ("Contact not found");
    }
    await theContacts.remove(contact);
    res.status(200).json(contact);
}); 

module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact
};
