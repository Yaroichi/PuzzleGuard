 Puzzle Guard App(currently in progress of developing authentication functionality)

Puzzle Guard is a productivity-focused desktop application that helps users stay focused by blocking distracting apps.  
Blocked apps can only be unlocked after completing a small task — such as solving a math exercise, a programming challenge,a riddle,a geogrpahy task or a computer scnience quiz(options will grow with succes of the first version).  
The app combines focus management with fun and learning, making it especially useful for students and pupils.

Moreover,this project will have website where app will be downloaded.

https://www.figma.com/design/LUSYS3phwEOzpt3QsgWX5c/PuzzleGuardWebSite?node-id=0-1&t=ntFizzZiZ2ri1vVf-1  - Website UI/Initial designs
https://www.figma.com/design/hPG977bv9t35BHmYVXRwYz/PuzzleGuard?node-id=0-1&t=48Jon7zngLABRjlg-1   -  Program UI/Initial designs
PuzzleGuard.docx - documentation
https://trello.com/invite/b/67437fc2a7c4044bc069b69d/ATTI3df9e663a4778c9bee4f0aa575eebbf9A31A2F0B/puzzleguard - Trello board link


## 🚀 Features

- Block and unblock chosen applications
- Unlock blocked apps by solving:
  - Math exercises
  - Programming tasks
  - Riddles (more options coming soon)
  - Geography quizes
  - Computer Science quizes
- User authentication and email verification(in progress)
- Password recovery via email code
- Subscription system:
  - **Free tier** with basic blocking features  
  - **Premium tiers** (two paid plans) offering extended functionality
- Modern and clean UI designed in **Figma**
- Frontend with JavaFx
- Backend services for authentication and data management

---

## 🛠️ Technologies Used/Will be used

**Frontend & UI:**
- JavaFX (based on Figma design)

**Backend:**
- Spring Boot
- PostgreSQL

**Other:**
- C# (planned) — for system-level app recognition and process blocking/unblocking
- Figma (UI/UX design)

---

## 📈 Future Roadmap

- [ ] Add more unlocking task types (language quizzes, logic puzzles,more school subjects)
- [ ] Add Different languages
- [ ] Integrate C# for native app recognition and blocking
- [ ] Add browser extension
- [ ] Improve analytics and user statistics
- [ ] Release cross-platform versions
- [ ] Add AI to generate tasks
- [ ] Add AI chatbot to website and the program for general quries 



## 🔐 Authentication Features

- Secure user registration and login
- Email-based password reset (verification code sent via email)
- Planned support for social login (Google, GitHub)

## 🔐 Subscription/Payment functionality


## 🔐Puzzle Guard will integrate with a PostgreSQL database to store all essential data:

-User accounts and authentication details
-Puzzles, quizzes, and other tasks
-Application usage data
-Subscription information

## 🔐 Dynamic Scene Switching (Backend-Driven Navigation)

The user interface dynamically will switch between scenes or pages based on backend commands, rather than reloading or preloading all UI elements at once.
This approach helps:

-Reduce unnecessary resource usage
-Keep transitions smooth,
-Allow the system to control what the user sees depending on their state (e.g., subscription status, login success, or puzzle completion).

## 🔐 Payment handling 
-Puzzle Guard will act as a secure intermediary between the user and external payment providers.
-When a user chooses to upgrade or subscribe, the program redirects them to trusted third-party payment gateways such as Google Pay, PayPal, or other supported services.

## 🔐 Puzzle Guard can automatically detect which applications are installed on the user’s computer.
-It dynamically loads the corresponding program icons into the user interface, allowing the user to select which apps they want to block.
-This makes the experience personalized and intuitive — users can manage blocking visually rather than manually typing program names.

## 🧰 Installation & Setup (in progress)

Setup instructions will be provided once the first public release is available.  
Currently, the project is under active development.

---

## 🧪 Project Status

🚧 **SmartBlocker** is currently in active development.  
Core features such as UI, basic backend, and authentication are already implemented.  
Upcoming updates will include payment handling and system-level app blocking.



## 💡 About

Puzzle Guard aims to merge productivity and education — transforming time spent away from distractions into opportunities for learning.
