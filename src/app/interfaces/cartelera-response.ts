export interface CarteleraResponse {
    total_results: number;
    total_pages: number;
    results: Movie[];
    page: number;
    dates: Dates;
}

export interface Dates {
    minimum: Date;
    maximum: Date;
}

export interface Movie {
    poster_path: string;
    video: boolean;
    vote_average: number;
    id: number;
    vote_count: number;
    release_date: Date;
    popularity: number;
    adult: boolean;
    backdrop_path: string;
    overview: string;
    genre_ids: number[];
    title: string;
    original_language: OriginalLanguage;
    original_title: string;
}

export enum OriginalLanguage {
    En = 'en',
    Fr = 'fr',
    Ja = 'ja',
    Ko = 'ko',
}
