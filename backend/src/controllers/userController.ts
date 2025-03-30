import { Request, Response } from 'express';
import { firestore } from '../firebase';
// import { collection, getDocs } from "firebase/firestore";

interface RedDoc {
    UserID: string;
    StartLatLong: [number, number];
    EndLatLong: [number, number];
    km: number;
    PlaceID: string;
  }

interface GreenDoc {
    UserID: string;
    StartLatLong: [number, number];
    EndLatLong: [number, number];
    km: number;
    PlaceID: string;
  }

  interface YellowDoc {
    UserID: string;
    StartLatLong: [number, number];
    EndLatLong: [number, number];
    km: number;
    PlaceID: string;
  }

export const getGreen = async (_req: Request, res: Response) => {
    try {
      const snapshot = await firestore.collection('Green').get();
      if (snapshot.empty) {
        return res.json({ message: 'No data found' });
      }
  
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      return res.json(docs);
    } catch (error) {
      return res.status(500).json({ error: 'Server error' });
    }
  };

export const getYellow = async (_req: Request, res: Response) => {
    try {
      const snapshot = await firestore.collection('Yellow').get();
      if (snapshot.empty) {
        return res.json({ message: 'No data found' });
      }
  
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      return res.json(docs);
    } catch (error) {
      return res.status(500).json({ error: 'Server error' });
    }
  };

export const getRed = async (_req: Request, res: Response) => {
    try {
      const snapshot = await firestore.collection('Red').get();
      if (snapshot.empty) {
        return res.json({ message: 'No data found' });
      }
  
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      return res.json(docs);
    } catch (error) {
      return res.status(500).json({ error: 'Server error' });
    }
  };

export const getRedTotalKm = async (_req: Request, res: Response) => {
    try {
        const snapshot = await firestore.collection('Red').get();

        if (snapshot.empty) {
            return res.json({ totalKm: 0, message: 'No data found' });
        }

        const docs = snapshot.docs.map((doc) => {
            const data = doc.data() as RedDoc; 
            return {
              id: doc.id,
              ...data
            };
          });

        const totalKm = docs.reduce((acc, doc) => acc + doc.km, 0);
        
        return res.json({ totalKm });

    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
  };

export const getYellowTotalKm = async (_req: Request, res: Response) => {
    try {
        const snapshot = await firestore.collection('Yellow').get();

        if (snapshot.empty) {
            return res.json({ totalKm: 0, message: 'No data found' });
        }

        const docs = snapshot.docs.map((doc) => {
            const data = doc.data() as YellowDoc; 
            return {
              id: doc.id,
              ...data
            };
          });

        const totalKm = docs.reduce((acc, doc) => acc + doc.km, 0);
        
        return res.json({ totalKm });

    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
};


export const getGreenTotalKm = async (_req: Request, res: Response) => {
    try {
        const snapshot = await firestore.collection('Green').get();

        if (snapshot.empty) {
            return res.json({ totalKm: 0, message: 'No data found' });
        }

        const docs = snapshot.docs.map((doc) => {
            const data = doc.data() as GreenDoc; 
            return {
              id: doc.id,
              ...data
            };
          });

        const totalKm = docs.reduce((acc, doc) => acc + doc.km, 0);
        
        return res.json({ totalKm });

    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
};

export const getWinnersForAllPlaces = async (req: Request, res: Response) => {
    try {
      const teams = ['Red', 'Green', 'Yellow'];
  
      const results: Record<string, { teams: Record<string, number> }> = {};
  
      for (const team of teams) {
        const snapshot = await firestore.collection(team).get();
  
        snapshot.forEach((doc) => {
          const data = doc.data();
          const placeId = data.PlaceID;
          const km = typeof data.km === 'number' ? data.km : 0;
  
  
          const teamKey = team.toLowerCase();
  
          if (!results[placeId]) {
            results[placeId] = { teams: {} };
          }
          if (!results[placeId].teams[teamKey]) {
            results[placeId].teams[teamKey] = 0;
          }

          results[placeId].teams[teamKey] += km;
        });
      }
  
      const output: Record<string, { teams: Record<string, number>; winner: string | null }> = {};
  
      Object.entries(results).forEach(([placeId, data]) => {
        let winner: string | null = null;
        let maxKm = -Infinity;

        Object.entries(data.teams).forEach(([teamName, totalKm]) => {
          if (totalKm > maxKm) {
            maxKm = totalKm;
            winner = teamName;
          }
        });
        output[placeId] = {
          teams: data.teams,
          winner: winner,
        };
      });
  
      return res.json(output);
    } catch (error) {
      return res.status(500).json({ error: 'Server error' });
    }
  };

  interface TeamData {
    kmRun: number;
    color: string;
  }
  
  interface PlaceData {
    [teamName: string]: TeamData;
  }
  
  interface Result {
    [placeName: string]: PlaceData;
  }

export const getWinners = async (req: Request, res: Response) => {
    try {
    //   const teams = ['Red', 'Green', 'Yellow'];
  
      const results: Record<string, { teams: Record<string, number> }> = {};
  
    //   for (const team of teams) {
    // const snapshot = await firestore.collection(team).get();
    const runsRef = firestore.collection('runs');
    const snapshot = await runsRef.get();

    const placeTeamRunsMap = new Map();

    for (const doc of snapshot.docs) {
        const data = doc.data();
        const placeName = data.placeName;
        const km = data.km
        const teamName = data.team;
        let color = data.color // default grey

        if (!placeTeamRunsMap.has(placeName)) {
            placeTeamRunsMap.set(placeName, new Map());
        }

        const teamMap = placeTeamRunsMap.get(placeName)
        if (!teamMap.has(teamName)) {
            teamMap.set(teamName, {km, color})
        } else {
            const existingData = teamMap.get(teamName);
            existingData.km += km;
            teamMap.set(teamName, existingData);
        }
    }

        const result: Result = {};
        placeTeamRunsMap.forEach((teamMap : Map<string, TeamData>, placeName : string) => {
            result[placeName] = {};
            teamMap.forEach((teamData, teamName) => {
                result[placeName][teamName] = teamData;
            });
        });
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching team runs:', error);
        res.status(500).json({ error: 'Failed to fetch team runs data' });
    }        
  };

  export const signup = async (req: Request, res: Response) => {
    try {
      const { userId, password } = req.body;
      if (!userId || !password) {
        return res.status(400).json({ error: 'Missing userId or password' });
      }
  
      const userRef = firestore.collection('UserAuthentication').doc(userId);
      const userSnapshot = await userRef.get();
      if (userSnapshot.exists) {
        return res.status(400).json({ error: 'User already exists' });
      }
  
      await userRef.set({
        userId,
        password, 
        createdAt: new Date(),
      });
  
      return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error during signup:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
  
  export const login = async (req: Request, res: Response) => {
    try {
      const { userId, password } = req.body;
      if (!userId || !password) {
        return res.status(400).json({ error: 'Missing userId or password' });
      }
  
      const querySnapshot = await firestore
        .collection('UserAuthentication')
        .where('UserID', '==', userId)
        .limit(1)
        .get();
  
      if (querySnapshot.empty) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
  
      if (!userData || userData.Password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      return res.status(200).json({
        message: 'Login successful',
        user: { userId: userData.UserID },
      });
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  };




