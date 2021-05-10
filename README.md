# Shopify Image Repository - Eric Chen Back End Internship Application

The following application demonstrates an image uploading service where users can create a personal account, uploading images, and view their private images or other users' public images. 

## Getting Started

1. Go to [https://github.com/EricChen96/shopify-image-repository](https://github.com/EricChen96/shopify-image-repository) and clone the repository.
2. You would have to "npm install" the packages in three locations. 
    - "npm install" in root directory
    - "npm install" in client directory
    - "npm install" in server directory
3. In the server directory, create an ".env" file
    - In the .env file, you would need a
        1. SERVER_SECRET
        2. AWSAccessKeyId 
        3. AWSSecretKey 
        4. AWSBucket
4. Go back to root directory, and run the "npm run start" in the terminal to launch the site
5. Enjoy!

## Description

There are 4 Main Pages: "Public Images", "Private Images", "Upload Images", and "Login/Signup and SignOut".

Public Images - This Page will display all public images regardless of user. 

Private Images - This page holds the user's personal images. Here, they can delete the pictures individually or all at once.

Upload Images - This page is for uploading single or multiple images. Simply click the box or drag the image files into the folder to upload the pictures. There is a toggle button to choose where the images should be public or private.

Signout/Login/Signup - This page is for creating unique user accounts and signing into or out of the accounts. Signup is simple as it only asks for username and password. 

## Technologies Used
Front end: Axios, Bootstrap, cuid, jwt-decode, React, React-dropzone

Back end: AWS S3, Express, Mongoose, MongoDB, multer, multer-s3

## Future Enhancements
1. The site can use visual enhancements such as adding more css. This can be achieved with Bootstrap or CSS.
2. Add Watermark to Public Image Gallery. Given the time constraints, I did not have time to add in more security for users' images. When uploading the image, it might be best to save two files (one with watermark and one without). The watermark image would be display in the Public Image Gallery so other users can not steal the image. Upon sale of an image, the original image would be sent.
3. Search Bar. On the public gallery page, adding a search bar to filter images by titles, users, categories, or similar images. Filtering by properties should be as simple as adding a category option on the MongoDB Image model and then searching by category. 
4. More User Profile enhancements. Add other information such as email, user profile, profile picture. This would also enhance the Public Gallery Page.
5. Add market system. Adding price to the images and giving the users the ability to buy the images. A market system would require adding additional properties to the images such as quantity and price. Moreover, it would require adding in a "credit-card" payment package. 

## About Me
Github: [https://github.com/EricChen96](https://github.com/EricChen96)

Profile: [Portfolio](https://ericchen96.github.io/react_portfolio/#/)

Email: ericchen201896@gmail.com

LinkedIn: [https://www.linkedin.com/in/eric-chen-48724b110/](https://www.linkedin.com/in/eric-chen-48724b110/)