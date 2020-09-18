# Final Group Project 3: Gera's Automotive Detailing Service - MERN Stack Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Group Project 3 tasked the team to find a client and build an application or website that solves an issue they are currently experiencing. The main requirements for this project was that the application had to be built with a MERN stack.

For this project, our client had a small mobile vehicle detailing business that he wanted to develop a web presense for to grow inbound business and visibility. This present a handful of issues and obsticales we had to overcome while working with the client to develop what they had in mind.

As this was a side business for the owner, he would have to work new appointments around his existing schedule which was always chainging due to his primary employment and other variables in his life. In addition to this, his method of quoting for different packages depended on a handful of
different factors. Lastly, he had different preferences for taking payment for services completed which played into how we would build out the booking service flow on the website.

The two factors of having a unperdictable and fulud schedule mixed with the dynamic pricing system the owner uses for different types of vehicle resulted in the creation of the request a quote booking type form rather than a scheduling form. Rather than scheduling the appointment directly, the form
acts as an aid for the owner to find out when the customer wants to have their vehcile serviced and what type of vehicle they have along with some other inforamtion. Once the form is submitted, the owner receives an email with the request information as well as this information being stored on the
back end via a NoSQL MongoDB database. The owener then uses the inforamtion from the form to provide a specific quote and to find a time that fits both of their schedules based on the availability of the owner for that requested day. Lastly, per the request of the owner, payment happens apon
completion of the services.

Another area of difficulty was the lack of social presense for the business owner. As this was a side business, we had limited access to images of the services he provided and reviews from past customers. We encouraged the owner to start building this presese and getting reviews from services
provided which we could add in the future. In anticipation of this we had a reviews component ready to go on the application. This also factored into the component we were going to build out for an image gallery. This was going to be linked to his instagram but he did not have a fully dedicated
business instagram or facebook that we could take images from. Originally we planned to implement an instagram NPM plugin to accomplish this, however, due to constraints for account type and lack of presense/images, this is something we will need to resvisit in the future to implement.

Lastly, for triggering emails, we looked into MailChimp and SendGrid, of which we settled on Sendgrid. This is currently set up to trigger emails for the contact component and on successful submission of the booking form.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Credits](#credits)
-   [License](#license)
-   [Contributing](#contributing)
-   [Questions](#questions)

## Installation

As this is a mobile website build from the Create React App with a back end via Node/Expres, installation would include forking the repository, cloning the repo to your local machine, and then installing the dependencies with npm install or yarn install. Once fully installed, you can run the app
from the parent folder via the run start command using either npm or yarn. This will pull up the website on Localhost 3000

## Usage

Once on the website, you can view and choose a wash/cleaning package from the package page. To view more inforamtion, click the button for more information. Once you decide on a package, you can click Book Now, this will then open up a form within a Modal to be filled in. Once filly filled in and
validated, you will be able to submit the form. This submitted form will trigger two emails to be dispatched. One goes to the user who submitted the service request as a confirmation while the other goes to the company owner to provide a quote and schedule the wash with the user.

On the back end, each new submission of this form will create a database entry with all the information from the form. This can then be viewed on an admin panel on the company owener's login page. This inforamtion will be displayed and can be updated via this panel to confirm washes once they are
booked.

## Credits

This application was completed by Jeff Quittman, Curtis Pike, and Jonathan Kim as a project for UCLA/Trilogy's Full Stack Software Development Bootcamp.

Credits for this application include:

Create React App, MongoDb, Express, Node.js, Axios, Bcrypt, Mongoose, Morgan, Pasport, Sendgrid, Material Design Framework, React Router, React Router Hash Link.

## License

    								MIT License

    		Unit 13 Express-Handlebars: Eat-Da-Burger!   Copyright (C) 2020 Jeffrey Quittman

    		Permission is hereby granted, free of charge, to any person obtaining a copy
    		of this software and associated documentation files (the "Software"), to deal
    		in the Software without restriction, including without limitation the rights
    		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    		copies of the Software, and to permit persons to whom the Software is
    		furnished to do so, subject to the following conditions:

    		The above copyright notice and this permission notice shall be included in all
    		copies or substantial portions of the Software.

    		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    		SOFTWARE.

## Contributing

If you would like to contribute to this application, please feel free to email me via the email found in the questions section and we can discuss how to collaborate and enhance this application

## Questions

-   For any questions related to this applicaiton, please contact of of the group memegers at: JeffQuittman@gmail.com, cpike46@gmail.com, jonathan213kim@gmail.com
