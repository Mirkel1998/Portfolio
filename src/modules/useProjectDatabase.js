import { ref } from 'vue'

export const useProjectDatabase = () => {
    const movies = ref([
        {
            title: "Shrek",
            descripton: "A movie about a green ogre",
            movieCover: "https://picsum.photos/400/600",
            duration: "1h 30m",
            genre: "Animation",
            rating: 4.5,
            publisher: "DreamWorks",
            ageRecomendation: "7+",
            director: "Andrew Adamson",
            releaseDate: "2001",
            actors: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"]
        },
        {
            title: "Get Out",
            descripton: "A movie about racial tensions",
            movieCover: "https://picsum.photos/400/600",
            duration: "1h 44m",
            genre: "Horror",
            rating: 4.7,
            publisher: "Universal Pictures",
            ageRecomendation: "16+",
            director: "Jordan Peele",
            releaseDate: "2017",
            actors: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"]
        },
        {
            title: "Fight Club",
            descripton: "A movie about an underground fight club",
            movieCover: "https://picsum.photos/400/600",
            duration: "2h 19m",
            genre: "Drama",
            rating: 4.8,
            publisher: "20th Century Fox",
            ageRecomendation: "18+",
            director: "David Fincher",
            releaseDate: "1999",
            actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
        }
    ])
    return {
        movies 
    }




}