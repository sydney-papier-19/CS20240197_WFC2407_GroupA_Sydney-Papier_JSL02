const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

//Converts the text to lowercase.
//Removes any punctuation using a regular expression.
//Trims extra whitespace.
const normalizeText = (text) => {
    return text.toLowerCase().replace(/[^\w\s]/g, '').trim();
};

const addNewGoal = () => {
    const goalInput = normalizeText(document.querySelector('#goalInput').value);
    const goalList = document.querySelector('#goalList');

    //If input is empty an alert is sent to user
    if (goalInput === "") {
        alert("Please enter a goal.");
        return;
    }

    //If the goal already exists in the list a different alert is sent 
    const existingGoals = goalList.querySelectorAll('li');
    for ( let goal of existingGoals) {
        if (normalizeText(goal.textContent) === goalInput) {
            alert("This goal already exist!");
            return;
        }
    } 
    
// Created a new list item and added it to the list
    const newGoal = document.createElement('li');
    newGoal.textContent = document.querySelector('#goalInput').value;
    goalList.appendChild(newGoal);

//Clear input field after goal is added
    document.querySelector('#goalInput').value = '';
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
