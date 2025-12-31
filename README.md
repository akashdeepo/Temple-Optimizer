# PoE2 Vaal Temple Optimizer

A visual temple planner for Path of Exile 2's Vaal Temple mechanic. Build optimal snake chains for maximum loot.

**[Live App](https://akashdeepo.github.io/Temple-Optimizer/)**

![Temple Optimizer Screenshot](https://img.shields.io/badge/PoE2-Temple%20Planner-af6025?style=for-the-badge)

## Features

- **Visual 9x9 Diamond Grid** - Plan your temple layout with an intuitive rotated grid
- **Smart Placement Advisor** - Get recommendations for where to place your cards
- **Lock Medallion Strategy** - Knows to lock the HEAD of your snake to protect the entire chain
- **Tier-Up Suggestions** - Prioritizes Spy Masters and high-value rooms
- **Destabilization Simulator** - See which rooms are at risk and simulate room removal
- **Real-time Stats** - Track pack size, rarity, effectiveness bonuses as you build
- **Share & Export** - Generate shareable URLs or export your layout as an image

## The Snake Strategy

The optimal temple strategy is building a single connected chain (snake) with 6+ Spy Masters:

```
Garrison → Spy Master → Garrison → Armory → repeat
```

**Why this works:**
- Spy Masters drop Lock Medallions (Juatalotli's)
- 6 Spy Masters = self-sustaining locks (you get back what you use)
- Locking the HEAD of your snake protects the entire chain from destabilization
- Garrisons adjacent to Spy Masters upgrade to Legion Barracks (bonus medallion drops)

**Warning:** Adding a Commander blocks future Spy Master placements!

## How to Use

1. **Place Rooms** - Click a room in the palette, then click an empty grid cell
2. **Remove Rooms** - Right-click or Shift+click on a placed room
3. **Plan Your Round** - Enter your medallions and select your 6 cards
4. **Get Advice** - Click "What Should I Do?" for placement recommendations

## Room Connections

| Room | Connects To |
|------|-------------|
| Garrison | Commander, Armory, Spy Master, Synth Lab |
| Spy Master | Garrison, Path |
| Commander | Garrison, Armory (blocks Spy Masters!) |
| Armory | Garrison, Commander, Alchemy Lab, Thaumaturge, Smithy |
| Alchemy Lab | Armory, Thaumaturge, Corruption Chamber |
| Generator | Path, Sacrificial, Golem Works, Synth Lab, Smithy, Thaumaturge |

## Credits

- Strategy based on community guides by **Fubgun** & **Milky**
- Game data sourced from [PoE2DB](https://poe2db.tw)
- Not affiliated with Grinding Gear Games

## License

MIT License - Feel free to fork and improve!
