# 💄 HER Cosmetics

An e-commerce store showcasing real-world online shopping features.

<img src="public/assets/demo.png" alt="Demo" width="900" height="500">

## About the project 🚀

**HER Cosmetics** is a frontend e-commerce website originally built using **React and Tailwind CSS**, and later **fully migrated into a scalable Next.js + TypeScript architecture**.

This project started as a UI-heavy React application, but was then restructured to simulate a real-world production frontend system — focusing on **scalability, maintainability, and modern Next.js engineering practices**.

The goal was not just to build features, but to **refactor and evolve a messy component-based project into a clean, structured, and scalable codebase** similar to how real frontend teams work in production.

## ⚙️ Architecture Upgrade (React → Next.js)

This project went through a full architectural upgrade:

- ➤ Migrated from React SPA → **Next.js App Router architecture**
- ➤ Refactored entire codebase into **feature-based folder structure**
- ➤ Split **client and server components** for performance and scalability
- ➤ Separated logic into reusable components, custom hooks, and context providers
- ➤ Added **TypeScript across the entire project** for type safety and reliability
- ➤ Added skeleton loading UI for product pages and cards to improve perceived performance
- ➤ Implemented debounced search input to reduce unnecessary re-renders and improve efficiency
- ➤ Used dynamic imports for code splitting (cart, product pages, heavy components)
- ➤ Optimized images using Next.js Image component for lazy loading and responsiveness
- ➤ Built toast notification system for add/remove cart actions
- ➤ Improved product filtering and search rendering logic

### Previous Version (v1)

<details>
<summary>Click to view v1 (React + Tailwind CSS version)</summary>
<br>

The original version of **HER Cosmetics** was built using React and Tailwind CSS with a basic frontend structure. The codebase was loosely organized, with repeated patterns across components and no proper structure or consistency. It was also not type-safe as TypeScript was not used.

This version primarily focused on UI implementation rather than scalable architecture or production-level structure.

#### 🔗 [View V1 Repository](https://github.com/areebamoosa/HER-Cosmetics)

</details>

## ✨ Key Features

- 🛍️ Product discovery with category-based browsing
- 🔎 Live product search with debounced input handling
- 🛒 Cart system with state management
- 💳 Checkout flow UI
- 🔐 Authentication pages (Sign up / Sign in)
- 📄 Brand and informational pages
- 📱 Fully responsive design across all devices
- ⚡ Optimized UI with improved loading states and user feedback (skeletons + toasts)

---

## 🛠️ Technologies Used

- `Next.js`
- `TypeScript`
- `Tailwind CSS`

---

## 🎥 Demo / 🖼️ Screenshots

<table align="center">
  <tr>
    <td align="center" width="220">
      <!-- <img src="/src/assets/hero.png" width="220" height="460" />  <br/> -->
      <img src="public/assets//hero.png" width="220" height="460" />  <br/>
      <b>Homepage</b>
    </td>
    <td align="center" width="220">
      <img src="public/assets/cosmetic.png" width="220" height="460" /><br/>
      <b>Cosmetic's Collection</b>
    </td>
    <td align="center" width="220">
      <img src="public/assets/fragrance.png" width="220" height="460" /><br/>
      <b>Fragrance Collection</b>
    </td>
    <td align="center" width="220">
      <img src="public/assets/skin-page.png" width="220" height="460" /><br/>
      <b>Skin Care Collection</b>
    </td>
  </tr>

  <tr>
    <td align="center" width="220">
      <img src="public/assets/ad.png" width="220" height="460" /><br/>
      <b>Featured Product</b>
    </td>
    <td align="center" width="220">
      <img src="public/assets/discover.png" width="220" height="460" /><br/>
      <b>Discover Page</b>
    </td>
    <td align="center" width="220">
      <img src="public/assets/faq.png" width="220" height="460" /><br/>
      <b>About the Brand</b>
    </td>
    <td align="center" width="220">
      <img src="public/assets/login.png" width="220" height="460" /><br/>
      <b>User Login</b>
    </td>
  </tr>
</table>

### 🌐 Live Demo :

➜ [View Live Website](https://herr-cosmetics.vercel.app)
