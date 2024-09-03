# Simple Calculator

## Overview

This project is a simple calculator built with React, using JavaScript for functionality and styled-components for styling. The calculator allows users to perform basic mathematical operations: addition, subtraction, multiplication, and division.

Created as part of the [zrozumiecreact.pl](https://zrozumiecreact.pl) course.

## Features

- **Basic Operations::** The calculator supports the four basic arithmetic operations:
  - Addition (+)
  - Subtraction (-)
  - Multiplication (*)
  - Division (/)

## Getting started

To run the application follow the steps:

1. **Clone the repository**:
   ```shell
   git clone https://github.com/Tchorzu/react-calculator
   cd todo-list-react
   ```

2. **Install dependencies**:

   Make sure you have [Node.js](https://nodejs.org/en/download/package-manager) installed, then run:

    ```shell
    npm install
    ```

3. **Start the development server**:

    ```shell
    npm run dev
    ```

## Usage

- Input the numbers and operators by clicking the buttons on the calculator.
- The result will be displayed on the screen once you press the = button.
- You can clear the input by pressing the C button.

## Technologies Used
- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server.
- **styled-components:** A library for styling React components with tagged template literals.

## Note
The **eval()** function is used to perform the calculations. While it simplifies the implementation, be cautious when using eval() in production environments as it can pose security risks if user input is not properly sanitized.
