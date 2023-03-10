//@desc Get All Contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).json({message : `Get all contacts`});
};

//@desc Create a Contact
//@route POST /api/contact/:id
//@access public
const createContact = (req, res) => {
    console.log("The request body :", req.body);
    res.status(200).json({message : `Create A Contact`});
};

//@desc Get A Contact
//@route GET /api/contact/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({message : `Get A Contact`});
};

//@desc Update a Contact
//@route PUT /api/contact/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({message : `Update A Contact`});
};

//@desc Delete a Contact
//@route DELETE /api/contact/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({message : `Delete A Contact`});
};

module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact
};