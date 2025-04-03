# Squad Up, Team Up: Welcome to Sector Running!
Turn your runs into a thrilling competition with Sector Running, the ultimate program to gamify your fitness journey. Gather your team and challenge others to claim dominance over your local postal code. Every mile you run brings your team closer to becoming the reigning Kings of the Sector.

🏃‍♀️ **How it Works:** 

- Compete with other teams to log the most kilometres in a sector (separated by postal code) of your choosing.
- At the end of the month, the team with the highest mileage is crowned. 🥇🥈🥉
- Squads stick together, teams auto-balance at the turn of each month, with "match making" ensuring no team has a distinct advantage over another.
- Defend your title: Rival teams can aim to dethrone you in the following month!

Ready to lace up, build your team, and run your way to victory? The crown is yours for the taking—if you can keep up!

## Inspiration
Studies has shown that regular low-intensity running has long term benefits, being able to reduced risks of death from all causes and cardiovascular diseases (https://www.jacc.org/doi/10.1016/j.jacc.2014.04.058?articleID=1891600). Our project was inspired by our passion in doing physical activities and aims to make running rewarding and fun.

## What it does
Turns each running session into a rewarding challenge by joining a themed team (updates monthly) and compete for regional victories. Each individual can track their own progress by badges (for example streaks) and get trophies by participating in a team's victory in a region, this incentives users to run in different regions to collect different trophies.

<img width="1726" alt="original (2)" src="https://github.com/user-attachments/assets/b184cb94-3ad3-428b-b6d2-c8291291c528" />

<img width="1728" alt="original (5)" src="https://github.com/user-attachments/assets/54c0a7f1-fee5-457b-a703-383805c5daaf" />

## How it's built
- **Frontend**: React/Typescript with Google Maps API for sector/region visualization
- **Backend**: Node, Express
- **Database**: Firebase to Store user & teams data and regions

## How to run
- `npm i` to install the necessary packages
- `npm run dev` to start the backend
- `cd frontend` then `npm run dev` to start the front end.

`http://localhost:5173/` in a browser to connect.

## What's next for Sector
Our original idea included getting data from a user's strava account, obtaining the start/end coordinates and miles ran to use it as a score for each team, we want to make integration of that data to be seamless for anyone to participate
Badges & trophies to motivate users to not only participate in the team challenges, but also challenge each individual with their own health goals
