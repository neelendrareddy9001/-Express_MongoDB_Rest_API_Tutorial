const express = require("express");
const router = express.Router();
const {getContacts} = require("../Controllers/contactController");
const {createContact} = require("../Controllers/contactController");
const {getContact} = require("../Controllers/contactController");
const {updateContact} = require("../Controllers/contactController");
const {deleteContact} = require("../Controllers/contactController");


router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;
