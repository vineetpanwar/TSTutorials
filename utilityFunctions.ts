
    export function CalculateLateFee( daysLate: number): number {
            return daysLate * .25;
    }

    export function MaxBooksAllowed(age: number): number {
        if(age < 12) {
            return 3;
        } else {
            return 10;
        }
    }

    function privateFunc(): void {
        console.log('This is private...');
    }

    export function Purge<t>(inventory: Array<t>): Array<t> {
        return inventory.splice(2,inventory.length);
    }
