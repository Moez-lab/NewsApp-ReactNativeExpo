# 🗞️ React Native News App (Expo)

A modern mobile app built with **React Native** and **Expo** that lets users **search and browse the latest news** using a live **News API**. It provides real-time updates, clean UI, and responsive design optimized for both Android and iOS.

---

## 🔍 Features

- 🔎 **Search for news** by keyword or topic
- 📰 **View latest headlines** from trusted sources
- 🖼️ Clean and minimalist **UI with images, titles, and snippets**
- ⚡ Real-time news fetched from external API
- 🌐 Uses **REST API** integration for live content
- 📱 Built with **React Native + Expo** for smooth cross-platform experience

---

## 📸 Screenshots

> _(Add screenshots here of home screen, search results, and article preview)_

---

## 🚀 Getting Started

### 1. 📦 Clone the Repository

```bash
git clone https://github.com/yourusername/react-native-news-app.git
cd react-native-news-app
```

### 2. 🔧 Install Dependencies

 ```bash  
npm install
# or
yarn install
```

### 3. 📱 Run the App

```bash
npx expo start
```
Use Expo Go on your mobile to scan the QR code and run the app.

### 🔐 API Key Setup
This app uses the NewsAPI (or similar).
You need an API key to fetch the news.

1. Sign up at newsapi.org and get your API key.

2. Create a .env file in your project root:
```bash
NEWS_API_KEY=your_api_key_here
```
3. Load the API key in your app using expo-constants or react-native-dotenv

### 📁 Project Structure
```bash
.
├── assets/                  # App assets (icons, images)
├── components/              # Reusable components (NewsItem, SearchBar)
├── screens/                 # Screens like Home, Search
├── api/                     # API call functions
├── App.js                   # Main entry point
└── README.md
```

 ### 🔧 Built With
 
- ⚛️ React Native
- 📦 Expo
- 🌐 Fetch / Axios (for API calls)
- 🧩 React Navigation
- 💅 Styled Components / Tailwind / CSS-in-JS

### 👨‍💻 Author
[Connect on LinkedIn](https://www.linkedin.com/in/moezzakir/)
