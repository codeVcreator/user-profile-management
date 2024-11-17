# Profile Management Web Application

## Overview

The Profile Management Web Application allows users to view and interact with a list of profiles. Each profile includes basic information and an interactive map showing the profile's address. This app is built using **React** and incorporates custom components, hooks, and a simple modal for profile details.

## Features

- **Profile List**: Displays a list of profiles with key details.
- **Interactive Map**: Click on any profile to view its address on a map.
- **Search Functionality**: Search through profiles with debounced search.
- **Modal Display**: View detailed information about a profile in a custom modal.
- **Responsive Design**: Works across various screen sizes.

## Technologies Used

- **Frontend**: React, JavaScript
- **State Management**: React useState, useMemo, useCallback
- **Styling**: Custom CSS for responsive design
- **Map**: Google Maps API (or alternative)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/codeVcreator/user-profile-management.git
    ```

2. Navigate into the project directory:

    ```bash
    cd user-profile-management
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## Usage

- **View Profiles**: Once the app is loaded, you will see a list of profiles with their names and brief information.
- **Search Profiles**: Use the search bar at the top to filter through profiles.
- **View Profile Details**: Click on a profile to open a modal showing additional details and an interactive map with the profile's address.
- **Responsive Layout**: The app is designed to work on both mobile and desktop devices.


## Future Improvements

- Integrate real-time data from an API for profile information.
- Add authentication for profile management.
- Improve UI/UX for better accessibility.
