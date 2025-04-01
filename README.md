# Video Carousel App

## Overview

This project is a React application built using **Vite** for optimized bundling and faster load times. It features a **Video Carousel** component that allows users to scroll through videos, play/pause, and mute/unmute them. The application follows a structured and modular approach, making it maintainable and scalable.

## Features

- **Tailwind CSS & Styled Components**: Used for styling and responsiveness.
- **Reusable Components**: The Video Carousel is designed as a standalone reusable component that can be easily imported and configured.
- **Lazy Loading**: Implemented lazy loading for routes to optimize performance and improve initial load times.
- **Optimized File Structure**:
  - `assets/` - Contains images and other static assets.
  - `components/` - Houses reusable UI components.
  - `hooks/` - Custom React hooks.
  - `layouts/` - Defines layout structures.
  - `pages/` - Contains application pages.
  - `services/` - Handles API calls and data fetching.
  - `utils/` - Utility functions.
  - `routes/` - Manages application routes.
- **Cloudinary for Media Storage**: Videos and images are hosted on Cloudinary, ensuring lightweight assets and fast access via a CDN.
- **Global Error Handling**: Implemented an error boundary to catch runtime errors without crashing the entire application.
- **TypeScript**: Used to define interfaces and types for better type safety and to reduce runtime errors.
- **Barrel Files**: Managed imports and exports efficiently to improve maintainability and ease of navigation.

## Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/your-username/video-carousel-app.git
   cd video-carousel-app
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Start the Development Server**:
   ```sh
   npm run dev
   ```

4. **Build the Project for Production**:
   ```sh
   npm run build
   ```

5. **Preview the Production Build**:
   ```sh
   npm run preview
   ```

## Usage

- The **Video Carousel** component can be imported into different pages and used by passing video links as props.
- Navigation controls allow infinite scrolling through the carousel.
- On page load, the first video automatically plays and sets itself as active.


