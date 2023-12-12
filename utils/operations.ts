export function generateRandomByDigits(numDigits: number) {
    const min = Math.pow(10, numDigits - 1); 
    const max = Math.pow(10, numDigits) - 1; 
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

