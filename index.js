import inquirer from 'inquirer';
console.log("Welcome to contact numbers menu \n");
let phonebook = [];
let contactSerialNumber = 1;
async function contactMenu() {
    const inputContact = await inquirer.prompt({
        name: 'contact',
        type: 'list',
        message: 'Select your option',
        choices: ["Add Contact", "View Contacts", "Close Menu"]
    });
    let { contact } = inputContact;
    if (contact == "Add Contact")
        addContact();
    if (contact == "View Contact")
        viewContact();
    if (contact == "Close Menu")
        console.log("\n Thank you for using contact menu!");
}
contactMenu();
async function addContact() {
    const inputContactDetails = await inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter name'
        },
        {
            name: 'number',
            type: 'number',
            message: 'Enter number'
        }
    ]);
    let { name, number } = inputContactDetails;
    phonebook.push({ ID: contactSerialNumber++, Name: name, Number: number });
    console.log("\n New Contact number has been added \n");
    contactMenu();
}
function viewContact() {
}
