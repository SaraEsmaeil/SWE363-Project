# SWE363-Project

# mainPage.html
This is the login page for the KFUPMLenders website. Users can log in by entering their registered phone number and password. 
The site uses a dummy database for demonstration purposes, containing the following sample account:

## Sample Account
- **First Name:** Shahad
- **Last Name:** Sulais
- **Phone Number:** +966505865948
- **Password:** Shahad123456

## Features

### 1. Login Process
- If the user provides valid credentials, they will successfully log in.
- If the credentials are invalid, an appropriate error message will be displayed.

### 2. Account Creation
- Users can create a new account by clicking the **Sign Up** button and entering their details. 
  These details will be added to the dummy database.

### 3. Forgot Password
- If a user forgets their password, they can click the **Forgot Password** button.
- The system will prompt the user to enter the phone number linked to their profile.
- An SMS with a validation code will be sent to the entered phone number. 
  *(For demonstration purposes, the validation code is always `123456`.)*

### 4. Password Reset
- After entering the correct validation code, the user can reset and confirm their new password.
- Messages will guide the user through the process.

### 5. Invalid Validation Code
- If the user enters the wrong validation code, they will see two options:
  - **Resend:** Send a new validation code *(fixed as `123456` for this demonstration)*.
  - **Try Again:** Retry the same code without requesting a new one.

### 6. Manager Profile
The Manager Profile page displays important information about the manager, such as their role and the date they joined the platform. It also provides key platform statistics, like the total number of users, the average rating, and the number of completed transactions. This page allows the manager to update their profile by adding new information. After making changes, the manager must verify these modifications with a verification code, which expires after 1 minute. If the time limit is exceeded, the page will show two buttons: "Try Again" and "Back to Edit Profile."

### 7. Personal Profile
The Personal Profile page works similarly to the manager profile but is designed for individual users. It shows user information and recent activities, such as borrowing history. Users can edit their profile by adding personal details, and they will need to verify the changes with a phone number verification code. This process is also time-sensitive, with a timer counting down for 1 minute to complete the verification. If the timer expires, users will see options to either "Try Again" or "Back to Edit Profile."

### 8. Add Items
The Add Item page enables users to add items they want to lend. The page includes fields for the item name, description, and a photo to showcase the item’s quality. Users can also select the item’s availability using a calendar. The page requires users to complete all fields, and if any information is missing, an alert will prompt them to fill in the required details. Once all information is entered, the user will receive a confirmation message saying "Info Added Successfully." The item can also be categorized, and after submitting the details, the user can click the "Add Item" button to submit the item, which will redirect them to the home page.
### 9. home page
- About Us: Learn more about the team behind the platform.
- Lender Information: Understand how you can list your items as a lender.
- Borrower Information: Learn how to borrow items.
### 10. User dashboard
- Announcements: The page displays the latest updates related to the platform.
- User Notifications: Any important alerts or actions, like successful bookings or messages from lenders, will appear in a notification section at the top of the dashboard.
### 11. Item details
- Item Description: The top section displays a detailed description of the item.
- Item Picture: The item image is displayed to give users a clear view of what they are considering for borrowing.
- Lender Information: Below the description, users can find the name of the lender.
- Reviews Section: Users can view reviews left by other borrowers.
- Contact Lender: If users want to contact the lender for more information or to book the item, there is a Contact Lender button.
- The button will open the email to mail to support@kfupmlenders.com if there is any problem with contacting the lender.
# Categories and items.html
	•	Navbar: Includes a logo, search functionality, notifications, and profile options.
	•	Categories Section: Displays featured categories with clickable cards for navigation.
	•	Items Section: Dynamically loads items within a selected category by clicking on a category card.
	•	Reviews Section: Showcase user reviews to build trust and credibility.
	•	Footer: Provides information about the platform, quick links, and contact details.

Overview
This repository contains a web application, KFUPMLeanders, with multiple pages using HTML, CSS, and JavaScript that have been distributed among our team. The purpose of the ALL PAGES 2.zip is to show some of the application's functionality. For example, rating item, manager dashboard and categories manager view.

Setup Instructions
1.	Open the project, for example: rating item, in code editor ( I have used VSCode ) / browser. 
2.	Make sure that HTML, CSS, and JavaScript files are exist.
3.	Ensure that you download the images inside the Images folder in your computer then please place the path for each image to the appropriate location. 
4.	Run the application. 

Project Structure
The project is organized into feature specific folders, with each folder containing the essential files needed for its functionality, (HTML, CSS, and JavaScript). These folders represent individual features like notifications icon, ratings item, and active listings, making the project modular and easier to evaluate. The Images folder serves as a shared resource, containing all the images used across the webpages.

Usage Guidelines
As I mentioned above for preparing the images, ensure that the Images folder is downloaded. P.S I understand the above approach of placing the paths is not the most practical. I have searched for a better one and found it but unfortunately, I ran out of time to fully implement it across the project, I apologize.
