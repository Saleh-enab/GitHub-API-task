# GitHub Hunter

GitHub Hunter is a command-line application designed to fetch and store GitHub user repository names using the GitHub API.

## Installation

To use GitHub Hunter, you need to have Node.js installed on your system. Then, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the repository directory in your terminal.
3. Install dependencies by running `npm install`.

## Usage

GitHub Hunter provides a command-line interface to fetch and store GitHub user repository names. Follow the steps below to use it:

1. Open your terminal.
2. Navigate to the directory where GitHub Hunter is installed.
3. Run the following command to fetch user repository names:
```
node index.js fetch
```
4. You will be prompted to enter the username for which you want to fetch repository names.
```
Enter the username:
```
5. After entering the username, GitHub Hunter will fetch the repository names associated with that user and store them in a text file named `<username>.txt` inside the `users_repos` directory.

## Commands

### Fetch Command

The fetch command (`fetch` or `f`) is used to fetch user repository names. It prompts the user to enter a GitHub username and then fetches and stores the repository names associated with that username.

Example:
node index.js fetch
