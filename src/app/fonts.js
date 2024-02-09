import { Orbitron, Exo_2, Gentium_Book_Plus, MedievalSharp } from "next/font/google";

export const orbitron = Orbitron({
    subsets: ['latin'],
    variable: '--font-orbitron',
});

export const gentium = Gentium_Book_Plus({
    subsets: ['latin'],
    variable: '--font-gentium',
    weight: ['400', '700'], // Specify available weights
    fallback: 'serif',
});

export const exo2 = Exo_2({
    subsets: ['latin'],
    variable: '--font-exo2',
});

export const medievalSharp = MedievalSharp({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-medievalSharp',
});
