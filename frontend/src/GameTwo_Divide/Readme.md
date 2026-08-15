# Divide: A Rouguelite Tower Defense



### Plans

Each room is a different tower defense. Progress through "rooms" each "run", in a Slay the Spire type loop.

Map for the room is generated on a grid of tiles. Creeps find a path to your base (use a* search). 
Real-time movement for enemies & firing rates, pausable.

Placement types:
- wall (cheap, blocks enemies)
- Tower (ranged)
- Trap (no range, enhances effects)
- NOT MVP Amplifier (enhance touching placements)

Upgrades
Upgrades are the bread and butter of a run, the main resource.
- Stable, in your inventory between rooms in one run. 
- Place upgrades in placements (each placement can get 1)
- Can be purchased / enhanced / combined by spending money
- Types of upgrades shown below

Boons
- Last the rest of the run
- Rewarded after boss rooms

Primitives that users can wiggle in MVP:
Range, AOE size,
rate of fire, effect duration, 
damage, gold gain.

Primitives can be combined into common conceptual roles:
Sniper (lots of damage, 1 target, range)
shotgun (low damage, lots of targets, short range)
mortar (lots of targets long range)
flamethrower/poison, (deals hp damage over time, AOE or not) 
freeze ray (reduce monster speed for the effect duration)
gold mine (drains gold for the duration based on enemy HP lost during that time)

Upgrades, placements, or boons can be leaning towards a role.

Monsters/enemies have defense that subtracts from incoming damage.  damageTaken = projectileDamage - defense. Effects like Poison/flamethrower ignores it.

Can spend gold to build placements or improve upgrades in real time. Upgrades last between rooms not between runs. Can sell upgrades.

Sending a monster that reaches your base back to the beginning costs gold. If you can't, you lose.
