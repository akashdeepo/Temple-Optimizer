# Vaal Temple Optimizer - Documentation

## Overview
A web-based tool for Path of Exile 2 players to plan and optimize their Vaal Temple layouts using the "snake chain" strategy for maximum divine/loot drops.

---

## Features

### Core Features
- **9x9 Diamond Grid**: Rotated 45° grid matching the in-game temple layout
- **Room Palette**: All 17 room types with official PoE2DB icons
- **Dynamic Icons**: Garrisons change to Legion Barracks (near Spy Master) or Transcendent Barracks (near Synth Lab)
- **Tier System**: Rooms upgrade from T1→T2→T3 based on adjacent synergies
- **Connection Validation**: Only allows valid room connections per game rules

### Round Planning
- **Medallion Input**: Track your Lock and Tier-up medallions
- **Card Picker**: Visual selection of your 6 drawn room cards
- **Optimizer**: "What Should I Do?" button provides placement recommendations
- **Scoring System**: Ranks placements by snake efficiency, synergies, and loot value

### Visual Features
- **SVG Connection Lines**: Glowing lines between connected rooms
  - Purple = Spy Master connections
  - Orange = Commander connections
  - Gold = Standard connections
- **Hover Tooltips**: Shows room tier name, effects, medallion drops, and valid connections
- **Destabilization Simulator**: Highlights at-risk rooms and simulates cascade effects

### Data Management
- **Save/Load**: LocalStorage persistence
- **Share URL**: Base64-encoded shareable links
- **Export Image**: PNG download of temple layout
- **Sample Temple**: Generate example optimal layout

---

## Room Connection Rules

| Room | Connects To |
|------|-------------|
| Path | Garrison, Generator, Path |
| Garrison | Commander, Armory, Spymaster, Synth Lab, Path |
| Spy Master | Garrison only |
| Commander | Garrison, Armory |
| Armoury | Garrison, Commander, Alchemy Lab, Thaumaturge, Smithy |
| Alchemy Lab | Armory, Thaumaturge, Corruption Chamber |
| Corruption | Alchemy Lab, Thaumaturge, Sacrificial Chamber |
| Thaumaturge | Armory, Alchemy Lab, Corruption, Sacrificial, Generator |
| Sacrificial | Thaumaturge, Generator, Corruption (limit 1 per temple) |
| Generator | Path, Sacrificial, Golem Works, Synth Lab, Smithy, Thaumaturge |
| Golem Works | Generator, Smithy |
| Synth Lab | Garrison, Generator, Flesh Surgeon |
| Flesh Surgeon | Synth Lab only |
| Smithy | Generator, Golem Works, Armory |
| Sealed Vault | Path only |

---

## The Snake Strategy

### Goal
Build a single chain with 6+ Spy Masters for self-sustaining lock medallions.

### Optimal Pattern
```
Garrison → Spy Master → Garrison → Armory → Garrison → Spy Master → repeat
```

### Why This Works
- **Spy Masters** = High chance for Lock medallions (Juatalotli's)
- **Garrisons adjacent to Spy Master** become Legion Barracks = more rare mobs + medallions
- **6 Spy Masters** = Self-sustaining locks forever (never lose your chain)

### Critical Rules
1. **COMMANDER BLOCKS SPY MASTERS** - Once Commander is in chain, NO more Spy Masters allowed!
2. **LOOPS = LOSE** - Never connect chain back to start (everything becomes deletable)
3. **Sacrificial Chamber = Chain Merger** - Only safe way to connect two chains
4. **Lock the END room** - Protects entire chain behind it
5. **Middle = Fodder** - Build straight up middle to bait destabilization

---

## Room Effects by Tier

### Garrison
| Tier | Pack Size | Normal Effectiveness |
|------|-----------|---------------------|
| T1 (Guardhouse) | +10% | +0% |
| T2 (Barracks) | +15% | +15% |
| T3 (Hall of War) | +20% | +30% |

### Spy Master
| Tier | Mod Amplification | Medallion Chance |
|------|-------------------|------------------|
| T1 | +8% | Low (Lock) |
| T2 | +15% | Low (Lock) |
| T3 (Omnipresent Panopticon) | +30% | HIGH (Lock) |

### Commander
| Tier | Rare Effectiveness | Medallion Chance |
|------|-------------------|------------------|
| T1 | +15% | Low (Tier-up) |
| T2 | +30% | Low (Tier-up) |
| T3 | +60% | Advanced Low |

### Armoury
| Tier | Humanoid Effectiveness |
|------|----------------------|
| T1 (Depot) | +15% |
| T2 (Arsenal) | +30% |
| T3 (Gallery) | +60% |

### Alchemy Lab
| Tier | Item Rarity | Gold Bonus |
|------|-------------|------------|
| T1 | +15% | +0% |
| T2 | +30% | +0% |
| T3 (Grand Phylactory) | +60% | +50% |

### Corruption Chamber
| Tier | Additional Mod Chance |
|------|-----------------------|
| T1 (Crimson Hall) | +15% |
| T2 (Catalyst of Corruption) | +30% |
| T3 (Locus of Corruption) | +60% |

### Generator
| Tier | Construct Effectiveness |
|------|------------------------|
| T1 (Dynamo) | +15% |
| T2 (Shrine of Empowerment) | +30% |
| T3 (Solar Nexus) | +60% |

---

## Medallion Types

| Medallion | Effect | Color |
|-----------|--------|-------|
| Juatalotli's | Prevent Destabilisation (LOCK) | Green |
| Quipolatl's | Increase Room Tier | Yellow |
| Hayoxi's | Reroll Restricted Room | Red |
| Uromoti's | Add specific Room | Purple |
| Xopec's | +6 Crystal Capacity | Blue |
| Azcapa's | +1 Medallion Capacity | Pink |
| Estazunti's | Extra Room Card after Architect | Teal |
| Puhuarte's | Reroll Room Cards | Orange |
| Zantipi's | +1 Waystone Modifier | Violet |

### Medallion Sources
- **Spy Master T3**: HIGH chance Lock medallions
- **Golem Works T3**: HIGH chance Tier-up medallions (needs 2 Generators)
- **Flesh Surgeon T3**: HIGH chance advanced medallions
- **Commander T3**: LOW chance high-tier medallions

---

## File Structure

```
Temple Optimizer/
├── index.html              # Main HTML structure
├── styles.css              # All CSS styling
├── app.js                  # JavaScript logic
├── DOCUMENTATION.md        # This file
├── connection_questions.txt # Connection rules reference
└── reference images/
    └── Temple_of_Atziri - PoE2DB, Path of Exile Wiki us_files/
        ├── IconGarrison.webp
        ├── IconViperSpymaster.webp
        ├── IconViperLegionBarracks.webp
        ├── IconTranscendentBarracks.webp
        ├── IconCommander.webp
        ├── IconArmoury.webp
        ├── IconAlchemyLab.webp
        ├── IconCorruption.webp
        ├── IconThaumaturge.webp
        ├── IconSacrificialChamber.webp
        ├── IconGenerator.webp
        ├── IconGolemWorks.webp
        ├── IconSynthflesh.webp
        ├── IconFleshSurgeon.webp
        ├── IconSmithy.webp
        ├── IconVault.webp
        ├── MedallionPreventDeletionOfRoom.webp
        ├── MedallionLevelUpRoom.webp
        └── ... (other medallion icons)
```

---

## Controls

### Basic
- **Click room in palette** → Select room type
- **Click empty grid cell** → Place selected room
- **Right-click placed room** → Remove room
- **Shift+click placed room** → Remove room (alternative)
- **Hover over room** → View tooltip with details

### Actions
- **Save** → Save layout to browser storage
- **Load** → Load saved layout
- **Share URL** → Copy shareable link
- **Reset** → Clear entire grid
- **Generate Sample Temple** → Create example optimal layout
- **Destab Sim** → Toggle destabilization simulation mode
- **Export Image** → Download PNG of layout

### Keyboard
- **Escape** → Close info modal

---

## Technical Details

### Tech Stack
- Vanilla JavaScript (no dependencies)
- CSS Grid with 45° rotation for diamond layout
- SVG overlay for connection lines
- Canvas API for image export
- LocalStorage for persistence
- Base64 encoding for URL sharing

### Key Functions
- `initGrid()` - Creates 9x9 grid with SVG overlay
- `canPlaceRoom()` - Validates room connections
- `recalculateTiers()` - Updates room tiers based on adjacencies
- `getDynamicIcon()` - Returns appropriate icon based on neighbors
- `drawConnectionLines()` - Renders SVG connection lines
- `optimize()` - Generates placement recommendations
- `simulateDestab()` - Shows destabilization cascade
- `exportAsImage()` - Creates PNG download

### State Object
```javascript
const state = {
    grid: [],              // 9x9 array of {type, tier}
    selectedRoom: null,    // Currently selected room type
    selectedCards: [],     // 6 selected room cards
    hasCommanderInChain: false,
    spymasterCount: 0,
    medallionChances: {}   // Tracked medallion drop chances
};
```

---

## Credits
- Room data and icons from [PoE2DB](https://poe2db.tw/)
- Strategy based on Fubgun & Milky's snake chain guides
- Built for Path of Exile 2 Temple of Atziri content

---

## Version History
- **v1.0** - Initial release with grid, room placement, connection validation
- **v1.1** - Added PoE2DB icons, dynamic garrison icons
- **v1.2** - Added card picker with visual icons
- **v1.3** - Added SVG connection lines, hover tooltips, right-click remove
- **v1.4** - Added destabilization simulator, export image, info modal
