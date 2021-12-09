const { Command } = require("commander");
const program = new Command();
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
    .option("-a, --action <type>", "choose type")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone")

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);