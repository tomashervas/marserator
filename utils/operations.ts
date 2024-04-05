export function generateRandomByDigits(numDigits: number) {
    const min = Math.pow(10, numDigits - 1); 
    const max = Math.pow(10, numDigits) - 1; 
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

export const generateRandomLowNumbers = (numDigits: number) => {
     const lowNumbersString = [];
     for (let index = 0; index < numDigits; index++) {
         lowNumbersString.push(Math.ceil(Math.random() * 4))
     }


     return Number(lowNumbersString.join(''))
}

export const calculateLevelAddition = (level: number): {numRows: number, digits: number, lowNumbers: boolean} => {
    if( level === 1 ) return {"numRows": 2, "digits": 1, "lowNumbers": false}
    if( level === 2 ) return {"numRows": 2, "digits": 2, "lowNumbers": true}
    if( level === 3 ) return {"numRows": 2, "digits": 2, "lowNumbers": false}
    if( level === 4 ) return {"numRows": 2, "digits": 3, "lowNumbers": true}
    if( level === 5 ) return {"numRows": 2, "digits": 3, "lowNumbers": false}
    if( level === 6 ) return {"numRows": 2, "digits": 4, "lowNumbers": true}
    if( level === 7 ) return {"numRows": 2, "digits": 4, "lowNumbers": false}
    if( level === 8 ) return {"numRows": 2, "digits": 5, "lowNumbers": true}
    if( level === 9 ) return {"numRows": 2, "digits": 5, "lowNumbers": false}
    if( level === 10 ) return {"numRows": 2, "digits": 6, "lowNumbers": true}
    if( level === 11 ) return {"numRows": 2, "digits": 6, "lowNumbers": false}
    if( level === 12 ) return {"numRows": 3, "digits": 4, "lowNumbers": false}
    if( level === 13 ) return {"numRows": 3, "digits": 5, "lowNumbers": false}
    if( level === 14 ) return {"numRows": 3, "digits": 6, "lowNumbers": false}
    if( level === 15 ) return {"numRows": 4, "digits": 5, "lowNumbers": false}
    if( level === 16 ) return {"numRows": 4, "digits": 6, "lowNumbers": false}
    if( level === 17 ) return {"numRows": 5, "digits": 6, "lowNumbers": false}
    if( level === 18 ) return {"numRows": 6, "digits": 6, "lowNumbers": false}
    if( level === 19 ) return {"numRows": 7, "digits": 6, "lowNumbers": false}
    if( level === 20 ) return {"numRows": 8, "digits": 6, "lowNumbers": false}
    if( level === 21 ) return {"numRows": 9, "digits": 6, "lowNumbers": false}
    if( level === 22 ) return {"numRows": 10, "digits": 6, "lowNumbers": false}
    return {"numRows": 2, "digits": 1, "lowNumbers": false}

}

export const calculateLevelSubtraction = (level: number): {numRows: number, digits: number, lowNumbers: boolean} => {
    if( level === 1 ) return {"numRows": 2, "digits": 1, "lowNumbers": false}
    if( level === 2 ) return {"numRows": 2, "digits": 2, "lowNumbers": true}
    if( level === 3 ) return {"numRows": 2, "digits": 2, "lowNumbers": false}
    if( level === 4 ) return {"numRows": 2, "digits": 3, "lowNumbers": true}
    if( level === 5 ) return {"numRows": 2, "digits": 3, "lowNumbers": false}
    if( level === 6 ) return {"numRows": 2, "digits": 4, "lowNumbers": true}
    if( level === 7 ) return {"numRows": 2, "digits": 4, "lowNumbers": false}
    return {"numRows": 2, "digits": 1, "lowNumbers": false}
}

export const selectColor = (color: string) => {
    if(color === '#f87171') return 'bg-[#f87171]'
    if(color === '#fdba74') return 'bg-[#fdba74]'
    if(color === '#fde047') return 'bg-[#fde047]'
    if(color === '#bef264') return 'bg-[#bef264]'
    if(color === '#86efac') return 'bg-[#86efac]'
    if(color === '#2dd4bf') return 'bg-[#2dd4bf]'
    if(color === '#67e8f9') return 'bg-[#67e8f9]'
    if(color === '#a5b4fc') return 'bg-[#a5b4fc]'
    if(color === '#f9a8d4') return 'bg-[#f9a8d4]'
}