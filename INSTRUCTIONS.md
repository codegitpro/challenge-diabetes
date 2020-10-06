Center Health Front-end Code Project: Diabetes Mini-Dashboard
====================================

Welcome to the front-end code exercise for Center Health! Your task is to implement a simple dashboard showing a few diabetes-related statistics, similar to the Center Health webapp at https://www.center.health (please create an account to access the dashboard!)

This exercise consists of 3 steps: building a static wireframe, turning the stats into AngularJS components, and making these components dynamic. The exact time split is up to you but we hope to see a good balance of your skills in HTML, CSS, and JavaScript/AngularJS.

We ask that you please do not spend more than 3 hours total on this exercise, and that you return your submission to us within 24 hours of us sending it to you. Instructions on returning your submission can be found at the bottom of this page.

## Step 1: Wireframe 🖼️

This first part asks you to take a design and build it in the browser with HTML and CSS. No JavaScript is necessary at this point. You do not need to worry about making the design responsive, or supporting multiple browsers. Focus on the desktop experience only for the purposes of this test.

An example dashboard can be found in `example-dashboard.png`. You will need to create a simple header with the Center logo, a date selection component with an arrow to go back/forward one day, and 3 statistics: total events, average blood sugar, and % of events with values between 70 - 180. These values can be hardcoded for now.

1. You should use the `index.html` and `app.css` file within the `src/` folder.

2. You should use the images and webfonts included in `src/assets/` (the font "Nunito" has been pre-loaded for you)

3. We ask that you please do not use any additional UI frameworks unless absolutely necessary, as our goal is to evaluate your ability to write some basic HTML and CSS.

4. **Bonus**: make the design at least minimally responsive

## Step 2: Make It Dynamic 🏗️

This second part asks you make the date selector and statistics display data dynamically using JavaScript and AngularJS.

All necessary libraries have been pre-loaded for you, and you do not need to build the project to get started. You may assume a modern JavaScript environment, and can write in either ES5 or ES6. You do not need to worry about test cases.

1. You should use the `app.js` file within `src/` for your controller logic

2. The date selector should default to the current day, and clicking the arrows should go to the next/previous day. **MomentJS** has been pre-loaded for your convenience and we recommend using it for date manipulation and human-friendly formatting.

3. The statistics should display data dynamically from the controller. You can hardcode values in the controller for now (we will make them fully dynamic in Part 3).

4. We do not expect you to need any additional libraries, but if you choose to include any, we encourage you to do so thoughtfully.

5. **Bonus**: turn the date selector and statistics into their own reusable components using AngularJS directives

## Step 3: Tie It All Together ✨

Lastly, we ask that you tie the date selector and statistics together to make the dashboard fully functional!

1. We have provided some fake blood sugar events spanning the past 4 days, available as `DEMO_EVENTS` in the controller

2. You should calculate the statistics values dynamically based on the day. As a reminder, the 3 statistics are: total events for that day, average (or "mean") blood sugar, and % of the events that have a value between 70 and 180 mg/dL.

3. You should update the value of the statistics when the date is updated via the date selector.

4. For days where we have no data, you can display "Not enough events". For days where we have no data in the previous day, you can hide the "Previous day" value.

## Submission & Assessment Criteria ✅

Well done, you've made it to the end! To conclude your submission, please email us:

1. A ZIP file of your code
2. A brief description of your submission and any unique design choices you have made

Some email browsers may block ZIPs sent over email, in which case a Google Drive or Dropbox link may be helpful to bypass this issue.

Our goal is to find a talented teammate who shares our ambition to build incredibly beautiful and intuitive software that people use every day to manage their health. As such, you can expect our assessment to revolve around a few key areas:

1. A keen eye for design and pixel-perfect UI/UX

2. A clean, snappy experience for the end user

3. Clean, DRY, well-commented and documented code

4. Code that is performant and will scale to hundreds of thousands of events without compromising on elegance and simplicity

We look forward to hearing from you!