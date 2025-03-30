## Inspiration
Studies has shown that regular low-intensity running has long term benefits, being able to reduced risks of death from all causes and cardiovascular diseases (https://www.jacc.org/doi/10.1016/j.jacc.2014.04.058?articleID=1891600). Our project was inspired by one of our team member's passion in doing physical activities and aims to make running rewarding and fun.

## What it does
Turns each running session into a rewarding challenge by joining a themed team (updates monthly) and compete for regional victories. Each individual can track their own progress by badges (for example streaks) and get trophies by participating in a team's victory in a region, this incentives users to run in different regions to collect different trophies.

<img width="1728" alt="original (1)" src="https://github.com/user-attachments/assets/c569b97a-9e1b-45a5-bd95-71a0b423fce4" />

<img width="1726" alt="original (2)" src="https://github.com/user-attachments/assets/b184cb94-3ad3-428b-b6d2-c8291291c528" />

<img width="1728" alt="original (3)" src="https://github.com/user-attachments/assets/c334c088-6336-430f-999c-5812d03c3d9c" />

<img width="1726" alt="original (4)" src="https://github.com/user-attachments/assets/9180b1b7-0560-43b9-be77-3b572ae5edcd" />

<img width="1728" alt="original (5)" src="https://github.com/user-attachments/assets/54c0a7f1-fee5-457b-a703-383805c5daaf" />

<img width="1728" alt="original (6)" src="https://github.com/user-attachments/assets/b91c7028-ee68-490f-9405-688cbe37fa1f" />

<img width="1728" alt="original" src="https://github.com/user-attachments/assets/d302d0cd-7ab5-48b3-bfa7-4fcf20ee3c56" />

## How we built it
- **Frontend**: React/Typescript with Google Maps API for sector/region visualization
- **Backend**: Node, Express
- **Database**: Firebase to Store user & teams data, regions

## How to run
- `npm i` to install the necessary packages
- `npm run dev` to start the backend
- `cd frontend` then `npm run dev` to start the front end.

`http://localhost:5173/` in a browser to connect.

## Challenges we ran into
Took us a long time to figure out how to make a choropleth map using google api and react/ts
Learning a new tech stack: it was the first time using this tech stack for every team member from frontend to backend & we had to get help from our lovely mentors to overcome challenges we ran into
Due to the time constraint, we weren't able to implement all of our ideas into this hackathon project, but we can see the potential in making our app a lot better in the future!

## Accomplishments that we're proud of
Integrating google maps api to our project
Actually making the choropleth map reflect on our backend data!
Learning React/Typescript in a day and making a decent looking prototype
Integrating firestore on the backend

## What's next for Sector
Our original idea including getting data from a user's strava account, obtaining the start/end coordinates and miles ran to use it as a score for each team, we want to make integration of that data to be seamless for anyone to participate
Badges & trophies to motivate users to not only participate in the team challenges, but also challenge each individual with their own health goals
