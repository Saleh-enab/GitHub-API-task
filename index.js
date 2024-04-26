import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs";
import https from "https";
import { error } from "console";

const program = new Command();



//Function to get repos names
const mappingFunc = (obj) => {
    return obj.name;
}


//Function to make fetch the data and store it in a new file
const requestFunc = (answers) => {
    const options = {
        headers: {
            'User-Agent': 'GitHub Hunter'
        }
    };
    const url = `https://api.github.com/users/${answers.username}/repos`
    https.get(url, options, (respose) => {

        let data = "";
        respose.on("data", (chunk) => {
            data += chunk;
        })
        respose.on("end", () => {

            const jsonData = JSON.parse(data);
            const reposNames = jsonData.map(mappingFunc);
            const convertedData = reposNames.join(", \n")

            if (convertedData.length === 0) {
                console.log("Invalid user name");
            } else {
                fs.writeFile(`./users_repos/${answers.username}.txt`, convertedData, "utf8", (err) => {
                    if (err) {
                        console.log("There is an Error " + err)
                    } else {
                        console.log("Process has been done successfully")
                    }
                })
            }


        })
    }).on("error", (error) => {
        console.log("Error in fetching data" + error)
    });
}


program
    .name("Github Hunter")
    .description("GitHub API Fetching app")
    .version("1.0.1")

program
    .command("fetch")
    .alias('f')
    .description("Fetching a new user data")
    .action(() => {
        inquirer.prompt([{
            type: "input",
            name: "username",
            message: "Enter the username: "
        }])
            .then(requestFunc)
            .catch((err) => {
                console.log("Inquirer Erroe: " + err)
            })
    })

program.parse();