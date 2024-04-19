# MySQL Database
The MySQL database handling is made with the [mysql](https://www.npmjs.com/package/mysql#table-of-contents) npm package.

#### Most of the contents of this documentation is a edit of the docs in the [mysql](https://www.npmjs.com/package/mysql#table-of-contents) npm package. This is due to the implementation only having minor tweeks on how it works. Therefor we recommend checking out their documentation for more info on how to use it in generel and for info about the things we don't cover here.

## Quick introduction

To use our implementation you first need to import the connection. 

### Importing into a message command.
```js
import { connection } from "../utils/database.js"; // Gets the connection to the database.
//Code for the message command (DEFAULT EXAMPLE WITH SOME TWEEKS TO SHOWCASE THE IMPORTING)
export const MsgCommand = {
    name: "databaseInfo",
    // Other Command Options
    aliases: ["dbInfo"],
    run: (client, message, args) => {
        message.channel.send({
            content: `I'm connected to the database named **${connection.config.database}**.`
        });
    }
};
```

### Importing into a slash command.
```js
import { connection } from "../../utils/database.js"; // Gets the connection to the database.
//Code for the slash command (DEFAULT EXAMPLE WITH SOME TWEEKS TO SHOWCASE THE IMPORTING)
export const Slash = {
    name: "databaseInfo",
    description: "Gets the name of the database the bot is connected to",
    run: (interaction, client) => {
        interaction.reply({
            content: `I'm connected to the database named **${connection.config.database}**.`
        })
    }
};
```

# For more information read the docs on the [npm package.](https://www.npmjs.com/package/mysql#table-of-contents) It's allmost 100% the same.