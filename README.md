# Ng-Flix 🎬

Welcome to **Ng-Flix**, a sleek and modern movie streaming platform built with Angular! This project is designed to provide users with an immersive experience for browsing, searching, and discovering various movies and TV shows. Whether you're a Movie or TV shows enthusiast or a developer looking to explore Angular, Ng-Flix has something for everyone.

![Ng-Flix Demo](./public/images/dashboard.png)

## Features ✨

- 🎥 **Movie Browsing**: Explore a vast collection of movies with stunning posters and detailed descriptions. Dive into the world of cinema effortlessly!
- 🔍 **Search Functionality**: Easily search for your favorite movies by title, genre, or keyword. Find what you’re looking for in seconds!
- 📱 **Responsive Design**: Enjoy a seamless experience across all devices, whether you're on a desktop, tablet, or mobile phone. It’s cinema on the go!
- 🎬 **Movie Details**: Get in-depth information about each movie, including synopsis, ratings, cast, trailers, and more. Everything you need to know in one place!
- 🖥️ **User-Friendly Interface**: Navigate through the app with ease thanks to its intuitive and clean design. A smooth and enjoyable experience for everyone!

## Technologies Used 🛠️

- **Angular**: A powerful front-end framework for building dynamic web applications.
- **TypeScript**: Adds type safety and enhances JavaScript development.
- **RxJS**: For reactive programming and handling asynchronous operations.
- **SCSS**: For styling and creating a visually appealing design.
- **PrimeNG**: A rich UI component library for Angular to create a consistent, modern, and feature-rich design.

## Project Structure 🗂️
```bash
src/
├── app/
│ ├── components/ # Reusable UI components (e.g., banner, show-item, slider, video-embed)
│ ├── pages/ # Main views/pages (e.g., home, movies, tv, genres)
│ ├── services/ # Angular services for API calls and business logic
│ ├── models/ # TypeScript interfaces/models for data structures
│ ├── pipes/ # For transforming certain data before interpolating to the template
│ ├── shared/ # Shared components for all pages (e.g., header, footer)
│ ├── app-routing.module.ts # Angular routing configuration
│ ├── app.component.ts # Root component
│ └── app.module.ts # Root module
├── styles/ # Global styles and SCSS files
└── main.ts # Application entry point
```

## Getting Started 🚀

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js (v14 or higher)
- Angular CLI (v12 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YoussefGaafar/ng-flix.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd ng-flix
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run the development server**

   ```bash
   ng serve *OR* npm start
   ```

5. **Open your browser and visit**
   ```bash
   http://localhost:4200/
   ```

## Contributing 🤝

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork the Project**

2. **Create your Feature Branch**

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit your Changes**

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

---

## License 📄

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments 🙏

- **Angular Team**: For creating an amazing framework.
- **The Movie Database (TMDb)**: For providing the API used in this project.
- **You**: For checking out this project and supporting open-source!
