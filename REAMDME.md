# Jadoo Travel Agency Website

This is a responsive, multi-language (English and Arabic), and dark-mode enabled landing page for a travel agency, built primarily using **Bootstrap 5.3.0**.

## Project Features

### 1. Structure and Design
* **Bootstrap 5.3.0 Exclusive**: The layout is structured using the Bootstrap Grid System (`container-lg`, `row`, `col-*`) and components.
* **Custom Styling**: Limited custom CSS (`style.css`) is used mainly for typography, dark mode variables, specific element positioning (`.jadoo-hero-decore`), and hover effects.
* **Typography**: Uses Google Fonts: 'Volkhov' (for body/global) and 'Poppins'.
* **Hover Effects**: Custom hover transitions are applied to cards, social icons, and client logos for an interactive feel.
* **Hero Section**: Features a decorative background element (`.jadoo-hero-decore`).

### 2. Dark Mode Functionality
* **Implementation**: Dark mode is controlled by a `darkModeToggle` button in the navigation bar.
* **Mechanism**: The `script.js` file handles toggling the `dark-mode` class on the `<body>` element.
* **Persistence**: The preferred mode is saved in `localStorage` for continuity across sessions.
* **CSS Styles**: The `.dark-mode` class in `style.css` inverts colors for backgrounds, text, cards, and specific Bootstrap components (e.g., `.bg-white`, `.text-dark`).

### 3. Multi-Language (i18n) Support
* **Languages**: Supports English (`en`) and Arabic (`ar`).
* **Mechanism**: The `script.js` file manages language switching, saving the preference to `localStorage`.
* **RTL Support**: When 'ar' is selected:
    * The `<html>` element is set to `dir="rtl"` and `lang="ar"`.
    * The standard Bootstrap CSS is disabled, and the **Bootstrap RTL CSS** (`bootstrap.rtl.min.css`) is enabled for correct layout and text direction.
* **Translation**: Content is translated using a key-value map in `script.js`, targeting elements with the `data-lang-key` attribute.

## Setup and Running

1.  Clone or download the project files.
2.  Open `index.html` in your web browser.

## Dependencies (via CDN)

* Bootstrap 5.3.0 (CSS & JS Bundle)
* Bootstrap RTL 5.3.0 (CSS)
* Bootstrap Icons
* Remix Icons
* Google Fonts (Volkhov)