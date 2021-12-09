const { program } = require("commander");
const contactsOperations = require('./db/contacts');


const invokeAction = async({ action, id, name, email, phone })=> {
  switch (action) {
      case 'list':
          const list = await contactsOperations.listContacts();
      console.log('list',list)
      break;

      case 'get':
          const get = await contactsOperations.getContactById(id);
       console.log('id',get)
      break;

      case 'add':
          const add = await contactsOperations.addContact({name, email, phone});
     console.log( 'name email phone', add)
      break;

      case 'remove':
          const remove = await contactsOperations.removeContact(id);
      console.log('id',remove)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

program
    .option("-a, --action <type>", "action type")
    .option("-i, --id <type>", "contact id")
    .option("-n, --name <type>", "contact name")
    .option("-e, --email <type>", "contact email")
    .option("-p, --phone <type>", "contact phone")

program.parse(process.argv);

const options = program.opts();

invokeAction(options);