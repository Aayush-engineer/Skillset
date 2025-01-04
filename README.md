# **Skillset - A Social Learning Platform for Students**

Skillset is a **social learning platform** where students can share study resources, collaborate, and interact with peers and educators in a dynamic and engaging way. With a rich set of features designed for learning and social interaction, Skillset brings the best of both worlds: **education and social networking**.

---

## **Features**

### **Core Features**

- **Live Classes & Study Groups**: Create, manage, and join live study sessions or group study rooms.
- **Post System**: Share and post study materials, notes, resources, or learning updates.
- **Likes, Comments & Mentions**: Engage with content via likes, comments, and mentions to foster discussions.
- **Bookmark System**: Save important resources or posts for later reference.
- **Notifications**: Get notified when someone likes, comments, or mentions your posts.
- **Direct Messages (DMs)**: Chat with other users privately to discuss topics or share resources.
- **Hashtags**: Use hashtags to categorize and search for study resources by subject or topic.
- **Follow System**: Follow other users, teachers, or study groups to stay updated with new content.

### **Social Media & Collaboration**

- **Interactive Learning**: Real-time quizzes, feedback, and collaboration in study groups.
- **Resource Sharing**: Upload, share, and collaborate on study materials with your peers.
- **Real-Time Communication**: Engage in live discussions with classmates or instructors in real-time.
- **User Profiles**: Students and educators can create profiles to showcase their academic journey, achievements, and resources.

---

## **Technologies**

### **Frontend:**

- **Next.js 15**: The latest version of Next.js for building optimized, server-rendered React applications.
- **TanStack React Query**: Used for managing server-state and optimizing data fetching and caching in React.
- **Optimistic Updates**: Provides a more responsive experience by updating UI optimistically before the server responds.
- **Infinite Scrolling Feeds**: Displays an endless feed of posts or study resources, perfect for academic content.
- **Tailwind CSS**: Utility-first CSS framework for creating responsive layouts, paired with Shadcn UI components for pre-designed UI elements.
- **Dark Mode & Light Mode**: Support for dark, light, and system-wide themes for an adaptable user experience.
- **Mobile-Responsive Layout**: Fully optimized for mobile, ensuring a smooth experience on all devices.

### **Backend:**

- **Server Actions & Server Components**: Enable server-side logic and components to interact directly with the database, minimizing client-side overhead.
- **Lucia Authentication**: Secure authentication system using both username/password and Google OAuth2.
- **Prisma ORM**: For easy and powerful database management with PostgreSQL as the primary database.
- **Postgres Database**: Structured relational database with Prisma ORM for efficient data storage and retrieval.
- **Full-Text Search**: Enables robust search functionality to find content, resources, or users quickly.
- **Cron Job Setup**: Automates server-side tasks like notifications or reminders on a scheduled basis.

### **Features & Integrations:**

- **File Uploads**: Drag and drop or copy-paste support for uploading files, including study resources, notes, and documents using **UploadThing**.
- **TipTap Editor**: A powerful rich-text editor for creating educational posts and content.
- **Advanced Caching & Revalidation**: Efficient data fetching and caching to minimize redundant server requests and provide fast load times.

### **Real-Time Features:**

- **DM System (Stream-powered)**: Real-time messaging system for direct, private communication.
- **Real-Time Form Validation**: React Hook Form and Zod are used for validation to provide immediate feedback on user inputs.

---

## **Deployment & Setup**

### **1. Clone the Repository:**

```bash
git clone https://github.com/your-username/Skillset.git
cd Skillset
```
