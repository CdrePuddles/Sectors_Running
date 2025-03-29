import { Request, Response } from 'express';
import { firestore } from '../firebase';

export const getExample = async (_req: Request, res: Response) => {
    try {
        const doc = await firestore.collection('examples').doc('hello-doc').get();
        if (doc.exists) {
            res.json({ message: doc.data()?.message });
        } else {
            res.json({ message: 'No data found' });
        }
    } catch (error) {
        console.error('Firestore error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};