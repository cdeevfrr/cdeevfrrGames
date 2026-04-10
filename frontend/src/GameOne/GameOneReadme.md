## Architecture Overview

The app works based on a game state object, with type specified in GameStateTypes.ts. 

It can render the player as standing in the base, standing in a dungeon, or in a battle; based on the currentSession.mode flag.

The game state object updates on player move in the dungeon; on player action in the base; or on end of turn in a battle. The Battle component should do its own tracking of eg the player moving things on the grid or taking other actions, and then when the turn is over, finalize the turn with a callback. It can use local state to track the previous turn's state, and then do animations from last state to current (passed in) state whenever last state is not null. 

Gems will have a species, which has a base value for attack strength, block strength, and capacity (number of orbs it can grab this turn.) For each of attack and block, the total final number for this turn is a function of orbs grabbed of that color, and total matches of that color.

Shared data
```
{
   [gemSpecies: number]: {
      baseAttack: number,
      baseBlock: number,
      baseOrbCapacity: number,
    }
}
calculateAttackPowers(gemSpecies, gemLevel, size, growthType)
```

Example calculation:

Gem species A has base values of {baseAttack: 2, baseBlock: 5, baseCapacity 10}. Someone has a gem of species A, level 4, size 1, growth type slow-growth; no fragments added. Its attack is (baseAttack) * (sqrt(level)) * (growth factor), or 2*2*2 = 6. If it was a fast growth, it would be 2 * 2 * 1; if it was level 9, 2 * 3 * 2.

If, in one turn, it matches 3 orbs of its attack color; 3 orbs of a different color; and then 4 orbs of its attack color. The match count for its color is 2; the orb count is 7. 

Total damage this turn is:
(floorModifier + countModifier * 7 + gainModifier ^ 2) * 6



