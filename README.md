# StoreBazaar - Ionic E-Commerce App 🛒

[![Angular](https://img.shields.io/badge/Angular-16+-DD0031?logo=angular)](https://angular.io/)
[![Ionic](https://img.shields.io/badge/Ionic-7+-3880FF?logo=ionic)](https://ionicframework.com/)

Modern e-commerce application with dynamic shopping cart, payment processing, and digital receipts. Built with Angular and Ionic for a cross-platform experience.

### Home Page

![Demo Screenshot](src/assets/screenshots/home.png)

### Cart Page

![Demo Screenshot](src/assets/screenshots/cart.png)

### Product Page

![Demo Screenshot](src/assets/screenshots/product.png)

## Key Features ✨
- 🛍️ **Smart Cart System**
  - Real-time management using `BehaviorSubject`
  - LocalStorage persistence
  - Automatic total calculations
- 💳 **Secure Payment Flow**
  - Integrated form validation
  - Digital receipt generation
- ⏳ **Reusable Loading Screen**
  - Configurable redirection
  - Responsive overlay design
  - Support for multiple navigation flows

## Core Technologies 🛠️
- **Frontend**: 
  ![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white)
  ![Ionic](https://img.shields.io/badge/-Ionic-3880FF?logo=ionic&logoColor=white)
  ![RxJS](https://img.shields.io/badge/-RxJS-B7178C?logo=reactivex&logoColor=white)
- **State Management**: `BehaviorSubject` + Reactive Services
- **Styling**: SCSS + Ionic CSS Variables
- **Build Tools**: Angular CLI

## Prerequisites 📋
- Node.js v18+
- npm v9+
- Ionic CLI v7+
- Angular CLI v16+

## Installation 🚀
```bash
# 1. Clone repository
git clone https://github.com/Dandelionield/StoreBazaar.git

# 2. Install dependencies
cd StoreBazaar
npm install

# 3. Run development server
ionic serve