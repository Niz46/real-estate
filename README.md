# Real Estate Photo Carousel Project

## Overview

This project is a **React-based real estate listing application** that showcases property details and photos in an interactive photo carousel. It allows users to browse through property images, view essential details like the city and style, and interact with the properties using features like a favorite button.

## Features

- **Photo Carousel**:
  - Displays grouped photos (up to 10 per group).
  - Supports navigation with previous/next buttons.
  
- **Dynamic Property Details**:
  - Shows the city and property style from the API data.

- **Favorite Button**:
  - Users can "heart" their favorite properties.

- **Responsive Design**:
  - Adapted for various screen sizes using Tailwind CSS.

## Technologies Used

- **React**: Core library for building the UI.
- **Redux**: State management for handling photo indices and carousel logic.
- **Tailwind CSS**: Styling framework for consistent and responsive design.
- **React Icons**: For navigation and favorite button icons.
- **API Integration**: Fetching real estate data dynamically.

## File Structure

``` markdown
src/
│
├── components/
│   ├── Item.jsx        // Displays the carousel and property details.
│   ├── Button.jsx      // Reusable button component for navigation.
│   ├── HeartBtn.jsx    // Favorite button component.
│
├── store/
│   ├── slice/
│   │   └── photoSlice.js    // Redux slice for managing photo indices.
│   ├── selectors/
│       └── photoSelector.js // Selector for grouped photo indices.
│
├── App.js           // Entry point for the app.
├── index.js         // Renders the app.
└── styles.css       // Global styles (optional if using Tailwind CSS).
```

## API Data Format

The app uses a real estate API that returns property data in the following structure:

### Example Data

```redux
    const response = await fetch(
        "https://api.simplyrets.com/properties")
```

### Extracted Details

- **City**: `address.city`
- **Style**: `property.style`
- **Photos**: Array of image URLs.

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/real-estate-carousel.git
   cd real-estate-carousel
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm start
   ```

4. **API Integration**:
   - Replace `data` prop in the `Item` component with real API calls.
   - Use a tool like Axios or `fetch` for fetching API data.

## Future Improvements

- Add pagination for large photo collections.
- Implement search and filter options (e.g., by city, price, style).
- Add animations for smoother transitions in the carousel.
- Include more property details (e.g., price, area, number of bedrooms).

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it.

Feel free to contribute to this project or raise issues for feature requests!
