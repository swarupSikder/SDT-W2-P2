🍽️ Foodie – Meal Finder App
Foodie is a simple and elegant meal search web app that lets users search for meals by name and view detailed information including ingredients, category, instructions, and area of origin. It uses the free TheMealDB API for fetching meal data.

🚀 Features
🔍 Search meals by name

🍲 View meal thumbnails, categories, and brief instructions

📋 Display detailed information with ingredients and full recipe

🎨 Responsive UI using Bootstrap 5

💡 Error handling for empty or invalid results


# Live Link
> https://swarupsikder.github.io/SDT-W2-P2/


🛠️ Tech Stack
HTML5, CSS3

JavaScript (Vanilla)

Bootstrap 5.3.6

TheMealDB Public API




📂 Project Structure
📁 Foodie/
├── 📁 assets/
│   ├── favicon.png
│   └── empty.png
├── 📁 scripts/
│   └── index.js
├── 📁 bootstrap-5.3.6-dist/
│   ├── css/
│   └── js/
├── index.css
├── index.html
└── README.md





🔗 API Reference
API Endpoint: https://www.themealdb.com/api/json/v1/1/search.php?s=mealName

Example: Searching for Chicken will return all meals with "chicken" in the name.





📌 Notes
Requires internet connection for API access and FontAwesome kit

Works offline for Bootstrap only if the local bootstrap-5.3.6-dist is included correctly

Custom styles are written in index.css