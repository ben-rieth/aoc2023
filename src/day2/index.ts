import { Day } from "../day";

class Day2 extends Day {

    constructor(){
        super(2);
    }

    solveForPartOne(input: string): string {
        const games = input.split("\n").map(line => line.trim());
        const maxMap = new Map([
            ['red', 12],
            ['green', 13],
            ['blue', 14]
        ]);

        let sum = 0;

        for (let game of games) {
            const [gameString, setsString] = game.split(': ');

            const gameNumber = gameString.replace('Game ', '');

            const sets = setsString.split('; ');

            let gamePossible = true;

            for (let set of sets) {
                const colors = set.split(', ');
                for (let colorString of colors) {
                    const [number, color] = colorString.split(' ');
                    const max = maxMap.get(color) ?? 0;
                    if (Number(number) > max) {
                        gamePossible = false;
                        break;
                    }
                }

                if (!gamePossible) break;
            }

            if (gamePossible) sum += Number(gameNumber);
        }

        return sum.toString();
    }

    solveForPartTwo(input: string): string {
        const games = input.split("\n").map(line => line.trim());
        const maxMap = new Map();

        let sum = 0;

        for (let game of games) {
            maxMap.set('red', 0);
            maxMap.set('green', 0);
            maxMap.set('blue', 0);

            const [gameString, setsString] = game.split(': ');

            const gameNumber = gameString.replace('Game ', '');

            const sets = setsString.split('; ');

            for (let set of sets) {
                const colors = set.split(', ');
                for (let colorString of colors) {
                    const [number, color] = colorString.split(' ');

                    const currMax = maxMap.get(color) ?? 0;
                    if (Number(number) > currMax) {
                        maxMap.set(color, Number(number));
                    }
                }
            }

            const power = maxMap.get('red') * maxMap.get('blue') * maxMap.get('green');
            sum += power;
        }

        return sum.toString();
    }
}

export default new Day2;