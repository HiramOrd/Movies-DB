export const getUserImage = (image: string | null | undefined): string => {
    return image
        ? `https://image.tmdb.org/t/p/w500${image}`
        : '/assets/user.jpg';
};
