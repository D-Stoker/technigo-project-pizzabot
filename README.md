# The Pizzabot Shop

### **Pizzabot**  

#### **Project Overview**  
Pizzabot is a JavaScript-driven interactive project designed to simulate a simple ordering experience for a fictional pizzeria. The project demonstrates core JavaScript concepts, user interaction, and basic validation techniques.  

#### **Features**  
- Interactive prompts to guide users through food selection, including main course, specific sub-options, and age-group-based customization.  
- Input validation with limited attempts for user-friendly error handling.  
- A final order confirmation step with a summary of user choices.  

#### **Approach**  
1. **Planning**:  
   - Drafted the project's structure using pseudocode to outline the sequence of interactions and decision points.  
   - Identified reusable logic to maintain clean and efficient code.  
2. **Implementation**:  
   - Leveraged JavaScript `prompt`, `alert`, and `confirm` dialogs for user interaction.  
   - Incorporated arrays for menu management, allowing easy updates or expansions.  
   - Used validation loops to ensure accurate input from users.  
3. **Testing and Debugging**:  
   - Ran multiple test scenarios to verify input handling and flow.  
   - Refined messaging and logic based on edge cases (e.g., invalid inputs or unexpected behaviors).  

#### **Challenges and Solutions**  
- **Input Validation**: Ensuring user input matched expected values while providing meaningful feedback.  
  - Solution: Implemented loops to validate input and guide users to correct options.  
- **Dynamic Sub-Choice Handling**: Managing multiple menus and ensuring accurate confirmation details.  
  - Solution: Used arrays and indices to retrieve corresponding menu items efficiently.  

#### **Stretch Goals**  
- Refactor the code by replacing the if, else-if, and else conditionals with a more organized approach using JavaScript's switch statement to improve code readability and maintainability.
- Create a new switch.js file to demonstrate both the current and refactored approaches.

#### **Live Demo**  
Visit the deployed project here: https://thepizzabotshop.netlify.app/.  

#### **Technologies Used**  
- JavaScript  
- HTML5  
- CSS  

#### **Next Steps**  
If more time were available, I would:  
- Implement a graphical user interface for a better user experience.  
- Integrate a backend for persistent order storage.  