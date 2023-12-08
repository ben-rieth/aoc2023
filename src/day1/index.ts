import { Day } from "../day";

class Day1 extends Day {

    constructor(){
        super(1);
    }

    solveForPartOne(input: string): string {
        const lines = input.split('\n');
        
        let sum = 0;

        for (let line of lines) {
            let first = undefined;
            let last = undefined;
            for (let char of line.trim()) {
                if (isNaN(Number(char))) continue;

                if (!first) {
                    first = char.trim();
                } else {
                    last = char.trim();
                }
            }

            let value;
            if (!last) {
                value = first?.concat(first);
            } else {
                value = first?.concat(last);
            }

            sum += Number(value);
        }

        return sum.toString();
    }

    solveForPartTwo(input: string): string {
        const map: Map<string, string> = new Map([
            ["one", "1"],
            ["two", "2"],
            ["three", "3"],
            ["four", "4"],
            ["five", "5"],
            ["six", "6"],
            ["seven", "7"],
            ["eight", "8"],
            ["nine", "9"],
        ]);
        const lines = input.split('\n');
        let sum = 0;

        for (let lineUntrimmed of lines) {
            let first = undefined;
            let last = undefined;
            const line = lineUntrimmed.trim();
            for (let i = 0; i < line.length; i++) {
                const char = line[i];

                let curr;
                if (char === 'o') {
                    curr = map.get(line.slice(i, i+3));
                } else if (char === 't') {
                    curr = map.get(line.slice(i, i+3)) ?? map.get(line.slice(i, i+5));
                } else if (char === 'f') {
                    curr = map.get(line.slice(i, i+4));
                } else if (char === 's') {
                    curr = map.get(line.slice(i, i+3)) ?? map.get(line.slice(i, i+5));
                } else if (char === 'e') {
                    curr = map.get(line.slice(i, i+5));
                } else if (char === 'n') {
                    curr = map.get(line.slice(i, i+4));
                }

                if (curr) {
                    if (!first) first = curr.trim();
                    else last = curr.trim();
                }

                if (isNaN(Number(char))) continue;

                if (!first) first = char.trim();
                else last = char.trim();
            }

            let value;
            if (!last) {
                value = first?.concat(first);
            } else {
                value = first?.concat(last);
            }
            sum += Number(value);
        }

        return sum.toString();
    }
}

export default new Day1;