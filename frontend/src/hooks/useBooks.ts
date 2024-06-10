import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
    query GetBooks {
        books {
            title
            author
            coverPhotoURL
        }
    }
`;

export const useBooks = () => {
    const { data, loading, error } = useQuery(GET_BOOKS);

    return {
        books: data ? data.books : [],
        loading,
        error,
    };
};
