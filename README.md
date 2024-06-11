<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">HEALTH_TRACKER</h1>
</p>
<p align="center">
    <em>Web-based application to track health indicators and store them in local database for further analysis. </em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/FabianTraxler/health_tracker?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/FabianTraxler/health_tracker?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/FabianTraxler/health_tracker?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/FabianTraxler/health_tracker?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running health_tracker](#-running-health_tracker)
> - [ Contributing](#-contributing)

---

##  Overview

Web-based application to track health indicators and store them in local database for further analysis. 

---

##  Features

Log and store your personal health data from your mobile phone. Simple application that can be deployed on a Raspberry Pi or one of the Cloud providers. 

---

##  Repository Structure

```sh
└── health_tracker/
    ├── api
    │   ├── data.js
    │   ├── db.js
    │   ├── health_queries.js
    │   ├── nutrition_queries.js
    │   └── time_queries.js
    ├── db
    │   ├── db_init.sql
    │   └── documentation.md
    ├── frontend
    │   ├── .gitignore
    │   ├── README.md
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── public
    │   │   ├── health.ico
    │   │   ├── health_64.png
    │   │   ├── index.html
    │   │   ├── manifest.json
    │   │   └── robots.txt
    │   └── src
    │       ├── App.css
    │       ├── App.js
    │       ├── App.test.js
    │       ├── index.css
    │       ├── index.js
    │       ├── logo.svg
    │       ├── modules
    │       │   ├── DataContainer.js
    │       │   ├── DataPoint.js
    │       │   └── style
    │       │       ├── DataContainer.css
    │       │       ├── DataPoint.css
    │       │       └── calendar.png
    │       ├── serviceWorker.js
    │       ├── setupTests.js
    │       └── test.js
    ├── package-lock.json
    ├── package.json
    ├── server.js
    └── start-frontend.js
```

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **Node**: `version 18.1.0`

###  Installation

1. Clone the health_tracker repository:

```sh
git clone https://github.com/FabianTraxler/health_tracker
```

2. Change to the project directory:

```sh
cd health_tracker
```

3. Install the dependencies:

```sh
npm install
```

###  Running health_tracker

Use the following command to run health_tracker in development mode:

```sh
npm run dev
```

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/FabianTraxler/health_tracker/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/FabianTraxler/health_tracker/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/FabianTraxler/health_tracker/issues)**: Submit bugs found or log feature requests for Health_tracker.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/FabianTraxler/health_tracker
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---


