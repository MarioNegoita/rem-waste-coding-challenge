# Redesign Coding Challenge - Approach Explanation

I found this coding challenge to be a very engaging experience.

## Technologies Used

* **Vite:** For fast development and bundling.
* **React:** For building the user interface.
* **Tailwind CSS:** For styling and responsive design.

I opted to implement custom components rather than utilizing a UI component library, as the scope of the page was manageable.

## Design Goals

My primary goal was to create a **modern and intuitive design** that helps users make informed decisions about their waste skip size selection.

* **Clarity:** Ensuring all necessary information is readily accessible.
* **Professionalism:** Selecting a color palette with strong contrast for readability.
* **User Experience:** Giving the user enough information to make the best decision as well as making the app easy and intuitive to use.

## Implementation Details

### Mobile-First Design

I adopted a mobile-first design strategy.

* **Stepper (Mobile):** Implemented a progress circle accompanied by the page title and the subsequent step in the process.
* **Stepper (Desktop):** Adapted the existing stepper, incorporating the title above the description to provide clear context for each step.

### Skip Cards Section

refined the spacing and eliminated redundant text, such as "Select skip," to make the information as concise as possible. By restructuring the text hierarchy and adjusting the spacing, I aimed to maximize clarity and ensure users can easily discern their selected skip.

### Intermediate Modal

To provide comprehensive information, I introduced an intermediary modal step between skip selection and proceeding to the next phase. This modal displays an image illustrating the skip's size and a detailed description, leading to a more informed user decision.

## Conclusion

Thank you for providing this opportunity to demonstrate my skills. I look forward to hearing your feedback and discussing my approach further.

## Running the Project Locally

If you'd like to test this redesign on your own machine, follow these steps:

1.  **Fork the Repository:**

    * Click the "Fork" button at the top right of this repository's page on GitHub.
    * This will create a copy of the repository in your own GitHub account.

2.  **Clone the Forked Repository:**

    * Open your terminal and navigate to the directory where you want to clone the project.

        ```bash
        git clone [https://github.com/MarioNegoita/rem-waste-coding-challenge.git](https://www.google.com/search?q=https://github.com/MarioNegoita/rem-waste-coding-challenge.git)
        ```
    * Navigate to the cloned directory:
        ```bash
        cd MarioNegoita/rem-waste-coding-challenge
        ```

3.  **Install Dependencies:**

    * Run the following command to install the project's dependencies:

        ```bash
        npm install
        ```

4.  **Start the Development Server:**

    * Run the following command to start the Vite development server:

        ```bash
        npm run dev
        ```

    * This will launch the application in your browser. You can usually access it at `http://localhost:5173/`.
