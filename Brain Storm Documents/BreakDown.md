This document will be used to break down the functionality of the application.

# Pirate Plus

## Home Page
    - Will have a rotating set of past mental health check-ins
      - Specifically a picture from the day and a how you said you were feeling
        - these will probably only be from days where you said you felt good
        - There is probably gonna be a database where daily check-ins are stored, and info from random days could be pulled from this
    - Will likely also have a randomly chosen inspirational quote
      - This can be selected from either an internal (created by us) or an external database (list made by someone else and imported by us)
      - Can also be used if this is the user's first time with the app and they do not have any pictuers

## Ridesharing
    - Allows people to post rides they are willing to give
      - They can post info on their ride which includes name, destination, time, how many seats are available, and requested payment (if any)
        - If someone requesting a ride clicks on an entry, they can see more info such as more details on the driver (name, pic, phone number, Venmo account, etc.)
        - A potential rider can filter/sort by things such as destination, time, and requested price when searching for rides
      - Someone who wants to request a ride will need to contact the driver. Ideally, they will then talk about the trip and/or payment and see if it is a good fit. If so, the driver can mark a seat as filled, changing the info of the ride on the main screen (and hiding it if the last seat has been filled)
      - For now, validity of payments and rides will need to be based on the honor system, we aren't sure if implementing our own payment system is viable, especially if we need to deal with refunds for missed rides. 
    - This section will also be built around a database which holds all of the pending rides

## Daily Check-in
    - Allows users to report on their mood on a daily basis
    - Once a day at a random time, a notification will prompt the user to log their mood
      - This is optional of course, but the success of apps like BeReal shows this may be desirable
      - In addition, daily check-ins will be able to be completed before the notifcation
      - The notification will go out to users at a random time wthin a set range, for example, anytime between 9AM and 9PM
      - The notification will likely be able to be handled by Azure
    - If a user's mood is good, the app will give the option for the user to take a picture of themselves for later memories and give them a place to log why they feel good
      - Similarly, if a user reports feeling bad, there will be the option for them to log why or write out what they feel
      - These logs will be able to be viewed (and deleted if desired) by only the user in the future
      - These logs/pictures are the ones that will show up on the user's home screen (probably only good memories)
      - This will use another database. We will need to figure out how to implement picture functionality
    - If a user has a trend of feeling bad, the app may suggest seeking out a campus counselor and then giving their contact info
      - One way this may be done is assigning a value to the quality of mood (ex: 5 is a very good mood, 1 is a very bad mood) and if the average over the past x days is low enough, it will trigger the suggestion

## Events
    - This will allow for users to post events they are involved with
      - The info of the post will include event name, time, and details (e.g. club running it, theme, etc.)
      - We may need a system where only authorized posters can create events, but this may also drive down usage
      - This will be focused on Whitworth campus events, but (especially if anyone can add an event) Spokane-area events may be possible too
        - One thing we have thought of is matching this with people offering rides to Spokane-area events, but we'll have to figure out how to do this
    - Users can also flag events they are interested in/planning to go to
      - It will help users keep track of everything as there should be a single place for users to see the events they have flagged
        - We may also have a space on the home page for users to see their soonest upcoming flagged event
    - All of this should be able to be built on a SQL server

## Food
    - A user will be able to see the amount of flex dollars and swipes they have
      - We will need to likely have access to Whitworth's servers and/or have SSO. We don't know if this is doable yet
    - There will be a map (probably a Google or Azure/Microsoft map api) that will have pins for recommended food places
      - All of the food places will have info on hours, type of food, pricing, and whether they take flex bucks (this would be more useful for schools other than Whitworth).
      - We may also do a table version of this with additional distance/location info for each food option
      - This could probably be done with databases and the map api

## Account Page
    - This page will contain info on your account
      - Basic info such as name, year, gender, etc
      - There will also be additional info useful in the app such as interests and Venmo account (both for the ridesharing portion of the app)
      - If we are ideally able to get SSO with Whitworth, we will get the basic info from the school's servers
        - Also, password handling will be easier with SSO
        - In addition, SSO means we may be able to get accounts for all current students automatically (like HonorFollowServe for example)