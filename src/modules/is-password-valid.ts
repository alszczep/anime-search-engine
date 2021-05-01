export const isPasswordValid = (password: string): boolean => {
    return (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password));
} 