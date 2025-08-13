# Pro Wrestling Prediction League MVP

This project contains a minimal React application for a pro wrestling prediction league. It is pre‑configured with TailwindCSS and includes several pages to demonstrate the core flow: login, dashboard, predictions, leaderboard and leagues.

## Features

* **Login page** – a placeholder form for email and password. This page is ready to integrate with Supabase or another auth provider.
* **Dashboard** – shows an upcoming event (SummerSlam 2025 in this demo) and a list of the user’s leagues.
* **Predictions** – users can select winners for each match of the upcoming event and mark one match as a “joker” for double points. Data is stored in component state for demo purposes.
* **Leaderboard** – displays a table of users and points with mock data that refreshes every few seconds to simulate live updates.
* **Leagues** – lists leagues the user belongs to and offers a button to create a new league (non‑functional in the demo).

## Getting Started

Follow these instructions to run the project locally and then push it to your own GitHub repository for deployment.

1. **Install dependencies**. In the project directory run:

   ```bash
   npm install
   ```

2. **Start the development server**. Run:

   ```bash
   npm start
   ```

   The app will be served at `http://localhost:3000`.

3. **Create a new GitHub repository**. Go to <https://github.com/new> and create a repository called something like `wrestling‑prediction‑league`. Don’t add any files yet.

4. **Push the code to GitHub**. From a terminal in the project root run:

   ```bash
   git init
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git branch -M main
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

5. **Deploy to Vercel**. Visit <https://vercel.com/new>, connect your GitHub account, select your repository and click **Deploy**. Accept the default build settings. Once deployment completes you’ll receive a URL you can open on your phone.

## Extending the App

This MVP is structured to support easy extension:

* Replace the dummy login form with Supabase Auth or another authentication provider.
* Connect the dashboard and predictions pages to real event and match data (e.g., via a scraper or manual entry).
* Persist prediction selections to a database instead of local component state.
* Implement the create league flow and join existing leagues via invite codes.
* Connect the leaderboard to actual scores after events conclude.

Feel free to modify and extend this code to build your full‑featured wrestling prediction league!