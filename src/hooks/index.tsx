export const arabicToDevanagari = (number: number): string => {
    const arabicDigits: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const devanagariDigits: string[] = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

    const arabicNumberString: string = number.toString();
    let devanagariNumberString: string = '';

    for (let i = 0; i < arabicNumberString.length; i++) {
        const digit: string = arabicNumberString.charAt(i);
        const index: number = arabicDigits.indexOf(digit);
        if (index !== -1) {
            devanagariNumberString += devanagariDigits[index];
        } else {
            devanagariNumberString += digit;
        }
    }

    return devanagariNumberString;
}

export const getRemainingDays = (selectedDateString: string): number => {
    if (!selectedDateString) return 0; // Add a check for undefined or null

    // Get the current date
    const currentDate: Date = new Date();

    // Split the selectedDateString into year, month, and day
    const [year, month, day]: number[] = selectedDateString.split('-').map(Number);

    // Create a Date object for the event date
    const selectedDate: Date = new Date(year, month - 1, day); // Month is zero-based

    // Calculate the time difference in milliseconds
    const timeDifference: number = selectedDate.getTime() - currentDate.getTime();

    // Convert time difference from milliseconds to days
    const remainingDays: number = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return remainingDays;
}


export const nepaliDaysRemaining = (remainingDays: number): JSX.Element | null => {
    if (remainingDays < 0 && remainingDays !== -1) {
        return (
            <>
                {arabicToDevanagari(remainingDays).replace("-", "")}{" "}
                दिन पहिले
            </>
        )
    } else if (remainingDays === -1) {
        return (
            <>हिजो</>
        )
    } else if (remainingDays === 0) {
        return (
            <>आज</>
        )
    } else if (remainingDays === 1) {
        return (
            <>भोलि</>
        )
    } else if (remainingDays > 0 && remainingDays !== 1) {
        return (
            <>
                {arabicToDevanagari(remainingDays)}{" "}
                दिन बाकी</>
        )
    } else {
        return null;
    }
}
export const englishDaysRemaining = (remainingDays: number): JSX.Element | null => {
    if (remainingDays < 0 && remainingDays !== -1) {
        return (
            <>
                {String(remainingDays).replace("-", "")}{" "}
                days ago
            </>
        )
    } else if (remainingDays === -1) {
        return (
            <>Yesterday</>
        )
    } else if (remainingDays === 0) {
        return (
            <>Today</>
        )
    } else if (remainingDays === 1) {
        return (
            <>Tommorow</>
        )
    } else if (remainingDays > 0 && remainingDays !== 1) {
        return (
            <>
                {remainingDays}{" "}
                days remaining</>
        )
    } else {
        return null;
    }
}
