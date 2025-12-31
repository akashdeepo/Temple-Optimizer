// ============================================
// ROOM DATA WITH ICONS (Based on PoE2DB)
// ============================================
const ICON_PATH = 'assets/icons/';

const ROOMS = {
    path: {
        name: 'Path',
        icon: '═',
        iconImg: null, // No icon for path
        color: 'room-path',
        connects: ['garrison', 'generator', 'path', 'spymaster'],
        tierNames: ['Path', 'Path', 'Path'],
        effects: { chestAmount: [40, 40, 40] },
        medallions: { type: null, t1t2: null, t3: null }
    },
    garrison: {
        name: 'Garrison',
        icon: '⚔',
        iconImg: ICON_PATH + 'IconGarrison.webp',
        color: 'room-garrison',
        connects: ['commander', 'armory', 'spymaster', 'synth', 'path'],
        tierNames: ['Guardhouse', 'Barracks', 'Hall of War'],
        effects: {
            packSize: [10, 15, 20],
            normalEffectiveness: [0, 15, 30]
        },
        medallions: { type: null, t1t2: null, t3: null }
    },
    spymaster: {
        name: 'Spymaster',
        icon: '🗡',
        iconImg: ICON_PATH + 'IconViperSpymaster.webp',
        color: 'room-spymaster',
        connects: ['garrison', 'path'],
        tierNames: ["Spymaster's Study", 'Hall of Shadows', 'Omnipresent Panopticon'],
        effects: {
            modAmplification: [8, 15, 30]
        },
        medallions: { type: 'juatalotli', t1t2: 'low', t3: 'high' }
    },
    commander: {
        name: 'Commander',
        icon: '👑',
        iconImg: ICON_PATH + 'IconCommander.webp',
        color: 'room-commander',
        connects: ['garrison', 'armory'],
        tierNames: ["Commander's Chamber", "Commander's Hall", "Commander's HQ"],
        effects: {
            rareEffectiveness: [15, 30, 60]
        },
        medallions: { type: 'quipolatl', t1t2: 'low', t3: 'advanced-low' }
    },
    armory: {
        name: 'Armoury',
        icon: '🛡',
        iconImg: ICON_PATH + 'IconArmoury.webp',
        color: 'room-armory',
        connects: ['garrison', 'commander', 'alchemy', 'thaumaturge', 'smithy'],
        tierNames: ['Depot', 'Arsenal', 'Gallery'],
        effects: {
            humanoidEffectiveness: [15, 30, 60]
        },
        medallions: { type: null, t1t2: null, t3: null }
    },
    smithy: {
        name: 'Smithy',
        icon: '🔨',
        iconImg: ICON_PATH + 'IconSmithy.webp',
        color: 'room-smithy',
        connects: ['generator', 'golem', 'armory'],
        tierNames: ['Bronzeworks', 'Chamber of Iron', 'Golden Forge'],
        requiresGenerator: 1,
        effects: {
            chestRarity: [15, 30, 60]
        },
        medallions: { type: 'quipolatl', t1t2: 'low', t3: 'advanced-high' }
    },
    generator: {
        name: 'Generator',
        icon: '⚡',
        iconImg: ICON_PATH + 'IconGenerator.webp',
        color: 'room-generator',
        connects: ['path', 'sacrificial', 'golem', 'synth', 'smithy', 'thaumaturge'],
        tierNames: ['Dynamo', 'Shrine of Empowerment', 'Solar Nexus'],
        effects: {
            constructEffectiveness: [15, 30, 60]
        },
        medallions: { type: null, t1t2: null, t3: null }
    },
    golem: {
        name: 'Golem Works',
        icon: '🗿',
        iconImg: ICON_PATH + 'IconGolemWorks.webp',
        color: 'room-golem',
        connects: ['generator', 'smithy'],
        tierNames: ['Workshop', 'Automaton Lab', 'Stone Legion'],
        requiresGenerator: 2,
        effects: {
            modAmplification: [8, 15, 30]
        },
        medallions: { type: 'quipolatl', t1t2: 'low', t3: 'high' }
    },
    synth: {
        name: 'Synthflesh Lab',
        icon: '🧬',
        iconImg: ICON_PATH + 'IconSynthflesh.webp',
        color: 'room-synth',
        connects: ['garrison', 'generator', 'flesh'],
        tierNames: ['Prosthetic Research', 'Synthflesh Sanctum', 'Crucible of Transcendence'],
        requiresGenerator: 1,
        effects: {
            xpBonus: [10, 20, 40]
        },
        medallions: { type: null, t1t2: null, t3: null }
    },
    flesh: {
        name: 'Flesh Surgeon',
        icon: '💉',
        iconImg: ICON_PATH + 'IconFleshSurgeon.webp',
        color: 'room-flesh',
        connects: ['synth'],
        tierNames: ["Surgeon's Ward", "Surgeon's Theatre", "Surgeon's Symphony"],
        effects: {
            uniqueEffectiveness: [10, 20, 40]
        },
        medallions: { type: 'quipolatl', t1t2: 'low', t3: 'advanced-high' }
    },
    alchemy: {
        name: 'Alchemy Lab',
        icon: '⚗',
        iconImg: ICON_PATH + 'IconAlchemyLab.webp',
        color: 'room-alchemy',
        connects: ['armory', 'thaumaturge', 'corruption'],
        tierNames: ['Chamber of Souls', 'Core Machinarium', 'Grand Phylactory'],
        effects: {
            rarity: [15, 30, 60],
            goldBonus: [0, 0, 50]
        },
        medallions: { type: 'quipolatl', t1t2: 'low', t3: 'advanced-high' }
    },
    thaumaturge: {
        name: 'Thaumaturge',
        icon: '✦',
        iconImg: ICON_PATH + 'IconThaumaturge.webp',
        color: 'room-thaumaturge',
        connects: ['armory', 'alchemy', 'corruption', 'sacrificial', 'generator'],
        tierNames: ["Thaumaturge's Lab", "Thaumaturge's Cuttery", "Thaumaturge's Cathedral"],
        effects: {
            modAmplification: [8, 15, 30]
        },
        medallions: { type: 'quipolatl', t1t2: 'low', t3: 'advanced-high' }
    },
    corruption: {
        name: 'Corruption',
        icon: '☠',
        iconImg: ICON_PATH + 'IconCorruption.webp',
        color: 'room-corruption',
        connects: ['alchemy', 'thaumaturge', 'sacrificial'],
        tierNames: ['Crimson Hall', 'Catalyst of Corruption', 'Locus of Corruption'],
        effects: {
            additionalMod: [15, 30, 60]
        },
        medallions: { type: null, t1t2: null, t3: null }
    },
    sacrificial: {
        name: 'Sacrificial',
        icon: '†',
        iconImg: ICON_PATH + 'IconSacrificialChamber.webp',
        color: 'room-sacrificial',
        connects: ['thaumaturge', 'generator', 'corruption'],
        tierNames: ['Altar of Sacrifice', 'Hall of Offerings', 'Apex of Oblation'],
        effects: {
            rareChests: [15, 30, 60]
        },
        medallions: { type: 'quipolatl', t1t2: 'low', t3: 'advanced-high' },
        limit: 1
    },
    sealed: {
        name: 'Treasure Vault',
        icon: '📦',
        iconImg: ICON_PATH + 'IconVault.webp',
        color: 'room-sealed',
        connects: ['path'],
        tierNames: ['Sealed Vault', 'Sealed Vault', 'Sealed Vault'],
        effects: {
            areaRarity: [25, 25, 25]
        },
        medallions: { type: null, t1t2: null, t3: null },
        destabilizes: true
    },
    architect: {
        name: 'Architect',
        icon: '👁',
        iconImg: ICON_PATH + 'IconArchitect.webp',
        color: 'room-architect',
        connects: ['garrison', 'commander', 'armory', 'spymaster', 'alchemy', 'corruption', 'thaumaturge', 'generator', 'golem', 'synth', 'smithy', 'sacrificial', 'flesh', 'path', 'sealed'],
        tierNames: ['Architect', 'Architect', 'Architect'],
        effects: {},
        medallions: { type: null, t1t2: null, t3: null },
        isMarker: true, // Special flag - this is just a marker, not a real room
        limit: 1
    }
};

// Medallion types reference
const MEDALLIONS = {
    juatalotli: {
        name: "Juatalotli's",
        effect: 'Prevent Destabilisation (LOCK)',
        color: '#4ade80',
        iconImg: ICON_PATH + 'MedallionPreventDeletionOfRoom.webp'
    },
    quipolatl: {
        name: "Quipolatl's",
        effect: 'Increase Room Tier',
        color: '#fbbf24',
        iconImg: ICON_PATH + 'MedallionLevelUpRoom.webp'
    },
    hayoxi: {
        name: "Hayoxi's",
        effect: 'Reroll Restricted Room',
        color: '#f87171',
        iconImg: ICON_PATH + 'MedallionRerollRewardRoom.webp'
    },
    uromoti: {
        name: "Uromoti's",
        effect: 'Add specific Room',
        color: '#a78bfa',
        iconImg: ICON_PATH + 'MedallionBonusRoom.webp'
    },
    xopec: {
        name: "Xopec's",
        effect: '+6 Crystal Capacity',
        color: '#60a5fa',
        iconImg: ICON_PATH + 'MedallionIncreaseMaxTokens.webp'
    },
    azcapa: {
        name: "Azcapa's",
        effect: '+1 Medallion Capacity',
        color: '#f472b6',
        iconImg: ICON_PATH + 'MedallionIncreaseMaxMedallions.webp'
    },
    estazunti: {
        name: "Estazunti's",
        effect: 'Extra Room Card after Architect',
        color: '#34d399',
        iconImg: ICON_PATH + 'MedallionExtraRewardRoom.webp'
    },
    puhuarte: {
        name: "Puhuarte's",
        effect: 'Reroll Room Cards',
        color: '#fb923c',
        iconImg: ICON_PATH + 'MedallionRerollRemainingRewardRoom.webp'
    },
    zantipi: {
        name: "Zantipi's",
        effect: '+1 Waystone Modifier',
        color: '#c084fc',
        iconImg: ICON_PATH + 'MedallionRandomWaystoneModifier.webp'
    }
};

// ============================================
// GAME STATE
// ============================================
const state = {
    grid: [],
    selectedRoom: null,
    selectedCards: [null, null, null, null, null, null],
    hasCommanderInChain: false,
    spymasterCount: 0
};

// ============================================
// GRID INITIALIZATION
// ============================================
function initGrid() {
    const gridEl = document.getElementById('temple-grid');
    gridEl.innerHTML = '';
    state.grid = [];

    // Create SVG overlay for connection lines
    const svgOverlay = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgOverlay.id = 'connection-svg';
    svgOverlay.classList.add('connection-svg');
    gridEl.appendChild(svgOverlay);

    for (let row = 0; row < 9; row++) {
        state.grid[row] = [];
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;

            // Default path at the starting position (row 4, col 0) - connects to START
            if (row === 4 && col === 0) {
                state.grid[row][col] = { type: 'path', tier: 1 };
            } else {
                state.grid[row][col] = { type: null, tier: 0 };
            }

            cell.addEventListener('click', (e) => handleCellClick(row, col, e));
            // Right-click to remove rooms
            cell.addEventListener('contextmenu', (e) => handleCellRightClick(row, col, e));
            gridEl.appendChild(cell);
        }
    }

    // Update the display for the starting path
    updateCellDisplay(4, 0);
}

// ============================================
// ROOM PALETTE
// ============================================
function initRoomPalette() {
    const palette = document.getElementById('room-palette');
    palette.innerHTML = '';

    const roomOrder = ['garrison', 'spymaster', 'commander', 'armory',
                      'alchemy', 'corruption', 'thaumaturge', 'sacrificial',
                      'generator', 'golem', 'synth', 'flesh',
                      'smithy', 'sealed', 'path', 'architect'];

    roomOrder.forEach(roomId => {
        const room = ROOMS[roomId];
        const btn = document.createElement('button');
        btn.className = 'room-btn';
        btn.dataset.room = roomId;

        // Use image if available, otherwise emoji
        const iconHtml = room.iconImg
            ? `<img src="${room.iconImg}" alt="${room.name}" class="room-icon-preview-img">`
            : `<span class="room-icon-preview">${room.icon}</span>`;

        btn.innerHTML = `
            ${iconHtml}
            <span>${room.name}</span>
        `;
        btn.addEventListener('click', () => selectRoom(roomId));
        palette.appendChild(btn);
    });
}

function selectRoom(roomId) {
    state.selectedRoom = roomId;
    document.querySelectorAll('.room-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.room === roomId);
    });
    highlightValidPlacements();
}

// ============================================
// CARD INPUT
// ============================================
function initCardsInput() {
    const container = document.getElementById('cards-input');
    container.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        const cardSlot = document.createElement('div');
        cardSlot.className = 'card-slot';
        cardSlot.dataset.index = i;
        cardSlot.innerHTML = `<span class="card-slot-label">Card ${i + 1}</span>`;
        cardSlot.addEventListener('click', () => openCardPicker(i));
        container.appendChild(cardSlot);
    }
}

function openCardPicker(cardIndex) {
    // Remove existing picker if any
    const existingPicker = document.querySelector('.card-picker-overlay');
    if (existingPicker) existingPicker.remove();

    // Create picker overlay
    const overlay = document.createElement('div');
    overlay.className = 'card-picker-overlay';

    const picker = document.createElement('div');
    picker.className = 'card-picker';
    picker.innerHTML = '<div class="card-picker-title">Select Room Card</div>';

    const grid = document.createElement('div');
    grid.className = 'card-picker-grid';

    // Add "Clear" option
    const clearBtn = document.createElement('button');
    clearBtn.className = 'card-picker-item';
    clearBtn.innerHTML = '<span class="card-picker-icon">✕</span><span>Clear</span>';
    clearBtn.addEventListener('click', () => {
        state.selectedCards[cardIndex] = null;
        updateCardSlot(cardIndex);
        overlay.remove();
    });
    grid.appendChild(clearBtn);

    // Add room options
    const roomOrder = ['garrison', 'spymaster', 'commander', 'armory',
                      'alchemy', 'corruption', 'thaumaturge', 'sacrificial',
                      'generator', 'golem', 'synth', 'flesh',
                      'smithy', 'sealed', 'path'];

    roomOrder.forEach(roomId => {
        const room = ROOMS[roomId];
        const btn = document.createElement('button');
        btn.className = 'card-picker-item';

        const iconHtml = room.iconImg
            ? `<img src="${room.iconImg}" alt="${room.name}" class="card-picker-icon-img">`
            : `<span class="card-picker-icon">${room.icon}</span>`;

        btn.innerHTML = `${iconHtml}<span>${room.name}</span>`;
        btn.addEventListener('click', () => {
            state.selectedCards[cardIndex] = roomId;
            updateCardSlot(cardIndex);
            overlay.remove();
        });
        grid.appendChild(btn);
    });

    picker.appendChild(grid);
    overlay.appendChild(picker);

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });

    document.body.appendChild(overlay);
}

function updateCardSlot(cardIndex) {
    const slot = document.querySelector(`.card-slot[data-index="${cardIndex}"]`);
    const roomId = state.selectedCards[cardIndex];

    if (roomId) {
        const room = ROOMS[roomId];
        const iconHtml = room.iconImg
            ? `<img src="${room.iconImg}" alt="${room.name}" class="card-slot-icon">`
            : `<span class="card-slot-icon-text">${room.icon}</span>`;
        slot.innerHTML = `${iconHtml}<span class="card-slot-name">${room.name}</span>`;
        slot.classList.add('filled');
    } else {
        slot.innerHTML = `<span class="card-slot-label">Card ${parseInt(cardIndex) + 1}</span>`;
        slot.classList.remove('filled');
    }
}

// ============================================
// CELL HANDLING
// ============================================
function handleCellClick(row, col, event) {
    const cellData = state.grid[row][col];

    // Destabilization mode - simulate removal
    if (destabMode && cellData.type) {
        simulateDestab(row, col);
        return;
    }

    // Shift+click to remove
    if (event.shiftKey && cellData.type) {
        removeRoom(row, col);
        return;
    }

    // Place selected room
    if (state.selectedRoom && !cellData.type) {
        if (canPlaceRoom(row, col, state.selectedRoom)) {
            state.grid[row][col] = { type: state.selectedRoom, tier: 1 };
            updateCellDisplay(row, col);
            updateNeighborDisplays(row, col); // Update neighbors for dynamic icons
            updateConnections();
            drawConnectionLines(); // Draw SVG lines
            recalculateTiers();
            recalculateStats();
            checkWarnings();
        } else {
            showWarning('Invalid placement! Room must connect to a compatible adjacent room.');
        }
    }
}

// Right-click to remove rooms
function handleCellRightClick(row, col, event) {
    event.preventDefault();
    const cellData = state.grid[row][col];
    if (cellData.type) {
        removeRoom(row, col);
    }
}

// Remove a room from the grid
function removeRoom(row, col) {
    state.grid[row][col] = { type: null, tier: 0 };
    updateCellDisplay(row, col);
    updateNeighborDisplays(row, col); // Update neighbors for dynamic icons
    updateConnections();
    drawConnectionLines(); // Redraw SVG lines
    recalculateStats();
}

// Update neighboring cells' displays (for dynamic icon changes like Legion Barracks)
function updateNeighborDisplays(row, col) {
    const neighbors = getNeighbors(row, col);
    neighbors.forEach(([nr, nc]) => {
        if (state.grid[nr][nc].type) {
            updateCellDisplay(nr, nc);
        }
    });
}

function canPlaceRoom(row, col, roomType) {
    const room = ROOMS[roomType];
    if (!room) return false;

    // Check sacrificial chamber limit
    if (roomType === 'sacrificial') {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (state.grid[r][c].type === 'sacrificial') return false;
            }
        }
    }

    // Architect is a marker - can be placed on any empty cell adjacent to existing rooms
    if (roomType === 'architect') {
        // Check limit (only 1 architect allowed)
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (state.grid[r][c].type === 'architect') return false;
            }
        }
        // Must have an adjacent room to mark
        const neighbors = getNeighbors(row, col);
        for (const [nr, nc] of neighbors) {
            if (state.grid[nr][nc].type) return true;
        }
        return false;
    }

    // Special case: START connects to the left edge middle (row 4, col 0)
    // Garrison or Path can be placed there as the first room
    if (row === 4 && col === 0 && (roomType === 'path' || roomType === 'garrison')) {
        return true;
    }

    const neighbors = getNeighbors(row, col);
    for (const [nr, nc] of neighbors) {
        const neighborType = state.grid[nr][nc].type;
        if (neighborType) {
            // Normal room connection check
            if (room.connects.includes(neighborType)) {
                const neighborRoom = ROOMS[neighborType];
                if (neighborRoom && neighborRoom.connects && neighborRoom.connects.includes(roomType)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function getNeighbors(row, col) {
    const neighbors = [];
    const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (const [dr, dc] of deltas) {
        const nr = row + dr;
        const nc = col + dc;
        if (nr >= 0 && nr < 9 && nc >= 0 && nc < 9) {
            neighbors.push([nr, nc]);
        }
    }
    return neighbors;
}

// ============================================
// DISPLAY
// ============================================

// Get dynamic icon based on room type and neighbors
function getDynamicIcon(row, col, roomType) {
    const room = ROOMS[roomType];
    if (!room) return { icon: room?.icon || '?', iconImg: null, displayName: 'Unknown' };

    // Check for garrison upgrades based on neighbors
    if (roomType === 'garrison') {
        const neighbors = getNeighbors(row, col);
        const neighborTypes = neighbors.map(([nr, nc]) => state.grid[nr]?.[nc]?.type).filter(Boolean);

        // Garrison + Spy Master = Legion Barracks (higher priority)
        if (neighborTypes.includes('spymaster')) {
            return {
                icon: '⚔',
                iconImg: ICON_PATH + 'IconViperLegionBarracks.webp',
                displayName: 'Legion'
            };
        }

        // Garrison + Synth Lab = Transcendent Barracks
        if (neighborTypes.includes('synth')) {
            return {
                icon: '⚔',
                iconImg: ICON_PATH + 'IconTranscendentBarracks.webp',
                displayName: 'Trans'
            };
        }
    }

    // Default: use the room's base icon
    return {
        icon: room.icon,
        iconImg: room.iconImg,
        displayName: room.name.substring(0, 4)
    };
}

function updateCellDisplay(row, col) {
    const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    const cellData = state.grid[row][col];

    cell.className = 'cell';
    cell.classList.remove('connected-right', 'connected-bottom');

    if (cellData.type) {
        const room = ROOMS[cellData.type];
        cell.classList.add('has-room', room.color);

        // Always show tier number (1, 2, or 3)
        const tierNum = cellData.tier || 1;

        // Get dynamic icon based on neighbors
        const dynamicIcon = getDynamicIcon(row, col, cellData.type);

        // Use image if available, otherwise fallback to emoji
        const iconHtml = dynamicIcon.iconImg
            ? `<img src="${dynamicIcon.iconImg}" alt="${dynamicIcon.displayName}" class="room-icon-img">`
            : `<div class="room-icon">${dynamicIcon.icon}</div>`;

        cell.innerHTML = `
            <div class="room-content">
                ${iconHtml}
                <div class="room-name">${dynamicIcon.displayName}</div>
                <div class="tier-badge tier-${tierNum}">${tierNum}</div>
            </div>
        `;
    } else {
        cell.innerHTML = '';
    }
}

function updateConnections() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('connected-right', 'connected-bottom');
    });

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cellData = state.grid[row][col];
            if (!cellData.type) continue;

            const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);

            // Check right neighbor
            if (col < 8 && state.grid[row][col + 1].type) {
                if (areConnected(cellData.type, state.grid[row][col + 1].type)) {
                    cell.classList.add('connected-right');
                }
            }

            // Check bottom neighbor
            if (row < 8 && state.grid[row + 1][col].type) {
                if (areConnected(cellData.type, state.grid[row + 1][col].type)) {
                    cell.classList.add('connected-bottom');
                }
            }
        }
    }
}

function areConnected(type1, type2) {
    const room1 = ROOMS[type1];
    const room2 = ROOMS[type2];
    if (!room1 || !room2) return false;
    return room1.connects.includes(type2) && room2.connects.includes(type1);
}

// ============================================
// SVG CONNECTION LINES
// ============================================
function drawConnectionLines() {
    const svg = document.getElementById('connection-svg');
    if (!svg) return;

    // Clear existing lines
    svg.innerHTML = '';

    // Add glow filter definition
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    `;
    svg.appendChild(defs);

    const cellSize = 52;
    const gap = 3;
    const totalSize = cellSize + gap;
    const offset = cellSize / 2;

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cellData = state.grid[row][col];
            if (!cellData.type) continue;

            // Check right neighbor
            if (col < 8 && state.grid[row][col + 1].type) {
                if (areConnected(cellData.type, state.grid[row][col + 1].type)) {
                    const x1 = col * totalSize + offset + 5; // +5 for padding
                    const y1 = row * totalSize + offset + 5;
                    const x2 = (col + 1) * totalSize + offset + 5;
                    const y2 = y1;

                    drawLine(svg, x1, y1, x2, y2, cellData.type, state.grid[row][col + 1].type);
                }
            }

            // Check bottom neighbor
            if (row < 8 && state.grid[row + 1][col].type) {
                if (areConnected(cellData.type, state.grid[row + 1][col].type)) {
                    const x1 = col * totalSize + offset + 5;
                    const y1 = row * totalSize + offset + 5;
                    const x2 = x1;
                    const y2 = (row + 1) * totalSize + offset + 5;

                    drawLine(svg, x1, y1, x2, y2, cellData.type, state.grid[row + 1][col].type);
                }
            }
        }
    }
}

function drawLine(svg, x1, y1, x2, y2, type1, type2) {
    // Main line
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', getConnectionColor(type1, type2));
    line.setAttribute('stroke-width', '4');
    line.setAttribute('stroke-linecap', 'round');
    line.setAttribute('filter', 'url(#glow)');
    svg.appendChild(line);

    // Center glow dot
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', '3');
    circle.setAttribute('fill', getConnectionColor(type1, type2));
    circle.setAttribute('filter', 'url(#glow)');
    svg.appendChild(circle);
}

function getConnectionColor(type1, type2) {
    // Special connections get special colors
    if ((type1 === 'garrison' && type2 === 'spymaster') ||
        (type1 === 'spymaster' && type2 === 'garrison')) {
        return '#a78bfa'; // Purple for spy master connections
    }
    if ((type1 === 'garrison' && type2 === 'commander') ||
        (type1 === 'commander' && type2 === 'garrison')) {
        return '#f97316'; // Orange for commander connections
    }
    if (type1 === 'path' || type2 === 'path') {
        return '#666'; // Gray for path connections
    }
    // Default golden connection
    return '#af6025';
}

// ============================================
// HOVER TOOLTIPS
// ============================================
function initTooltips() {
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.id = 'room-tooltip';
    tooltip.className = 'room-tooltip';
    document.body.appendChild(tooltip);

    // Add event listeners to grid
    const gridEl = document.getElementById('temple-grid');
    gridEl.addEventListener('mouseover', handleTooltipShow);
    gridEl.addEventListener('mouseout', handleTooltipHide);
    gridEl.addEventListener('mousemove', handleTooltipMove);
}

function handleTooltipShow(e) {
    const cell = e.target.closest('.cell');
    if (!cell) return;

    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    const cellData = state.grid[row][col];

    if (!cellData.type) return;

    const tooltip = document.getElementById('room-tooltip');
    const room = ROOMS[cellData.type];
    const tier = cellData.tier || 1;
    const tierName = room.tierNames ? room.tierNames[tier - 1] : room.name;

    // Build tooltip content
    let content = `<div class="tooltip-header">${tierName}</div>`;
    content += `<div class="tooltip-tier">Tier ${tier}</div>`;

    // Effects
    const effects = [];
    Object.entries(room.effects).forEach(([key, values]) => {
        const value = values[tier - 1];
        if (value > 0) {
            effects.push(formatEffect(key, value));
        }
    });

    if (effects.length > 0) {
        content += `<div class="tooltip-effects">${effects.join('<br>')}</div>`;
    }

    // Medallion drops
    if (room.medallions && room.medallions.type) {
        const medalInfo = MEDALLIONS[room.medallions.type];
        const chance = tier === 3 ? room.medallions.t3 : room.medallions.t1t2;
        if (chance) {
            content += `<div class="tooltip-medallion">
                <span style="color:${medalInfo.color};">${chance.toUpperCase()}</span> chance: ${medalInfo.name} Medallion
            </div>`;
        }
    }

    // Connections
    const connectsTo = room.connects.map(c => ROOMS[c]?.name || c).join(', ');
    content += `<div class="tooltip-connects">Connects: ${connectsTo}</div>`;

    tooltip.innerHTML = content;
    tooltip.style.display = 'block';
}

function handleTooltipHide(e) {
    const cell = e.target.closest('.cell');
    const relatedCell = e.relatedTarget?.closest('.cell');

    // Hide if leaving cell area entirely
    if (cell && !relatedCell) {
        document.getElementById('room-tooltip').style.display = 'none';
    }
}

function handleTooltipMove(e) {
    const tooltip = document.getElementById('room-tooltip');
    if (tooltip.style.display === 'block') {
        // Position tooltip near cursor but offset
        const x = e.clientX + 15;
        const y = e.clientY + 15;

        // Keep tooltip on screen
        const rect = tooltip.getBoundingClientRect();
        const maxX = window.innerWidth - rect.width - 10;
        const maxY = window.innerHeight - rect.height - 10;

        tooltip.style.left = Math.min(x, maxX) + 'px';
        tooltip.style.top = Math.min(y, maxY) + 'px';
    }
}

function formatEffect(key, value) {
    const effectLabels = {
        packSize: `+${value}% Monster Packs`,
        normalEffectiveness: `Normal Monsters +${value}% Effectiveness`,
        humanoidEffectiveness: `Humanoid Monsters +${value}% Effectiveness`,
        constructEffectiveness: `Construct Monsters +${value}% Effectiveness`,
        rareEffectiveness: `Rare Monsters +${value}% Effectiveness`,
        uniqueEffectiveness: `Unique Monsters +${value}% Effectiveness`,
        rarity: `+${value}% Item Rarity`,
        areaRarity: `+${value}% Area Rarity`,
        chestRarity: `Chests +${value}% Rarity`,
        additionalMod: `Rare Monsters +${value}% Extra Mod chance`,
        rareChests: `+${value}% Rare Chests`,
        xpBonus: `+${value}% Experience`,
        goldBonus: `+${value}% Gold`,
        modAmplification: `+${value}% Temple Mod Effect`,
        chestAmount: `+${value}% Chests`
    };
    return effectLabels[key] || `${key}: ${value}`;
}

function highlightValidPlacements() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('highlight-best', 'highlight-good', 'highlight-bad');
    });

    if (!state.selectedRoom) return;

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (!state.grid[row][col].type) {
                const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
                if (canPlaceRoom(row, col, state.selectedRoom)) {
                    cell.classList.add('highlight-good');
                }
            }
        }
    }
}

// ============================================
// TIER CALCULATION
// ============================================
function recalculateTiers() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (state.grid[row][col].type && state.grid[row][col].type !== 'entrance') {
                state.grid[row][col].tier = 1;
            }
        }
    }

    let changed = true;
    while (changed) {
        changed = false;
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const cellData = state.grid[row][col];
                if (!cellData.type) continue;

                const neighbors = getNeighbors(row, col);
                const neighborTypes = neighbors.map(([nr, nc]) => state.grid[nr][nc].type).filter(Boolean);
                let newTier = 1; // Start at tier 1

                // Count adjacent connected rooms for tier calculation
                const connectedCount = neighborTypes.filter(nt => areConnected(cellData.type, nt)).length;

                // Base tier from connections (more connections = higher tier)
                if (connectedCount >= 3) newTier = 3;
                else if (connectedCount >= 2) newTier = 2;

                // Special tier rules for specific rooms
                if (cellData.type === 'garrison') {
                    // Garrison upgrades with Commander, Armory, or Spymaster adjacent
                    const hasCommander = neighborTypes.includes('commander');
                    const hasArmory = neighborTypes.includes('armory');
                    const hasSpymaster = neighborTypes.includes('spymaster');
                    if ((hasCommander && hasArmory) || (hasSpymaster && hasArmory)) newTier = 3;
                    else if (hasCommander || hasArmory || hasSpymaster) newTier = Math.max(newTier, 2);
                }

                if (cellData.type === 'spymaster') {
                    // Spymaster upgrades based on adjacent Garrisons
                    const garCount = neighborTypes.filter(t => t === 'garrison').length;
                    if (garCount >= 2) newTier = 3;
                    else if (garCount >= 1) newTier = Math.max(newTier, 2);
                }

                if (cellData.type === 'commander') {
                    // Commander upgrades with multiple Garrisons
                    const garCount = neighborTypes.filter(t => t === 'garrison').length;
                    if (garCount >= 3) newTier = 3;
                    else if (garCount >= 2) newTier = Math.max(newTier, 2);
                }

                if (cellData.type === 'armory') {
                    // Armory upgrades with Garrison + Commander or multiple connections
                    const hasGarrison = neighborTypes.includes('garrison');
                    const hasCommander = neighborTypes.includes('commander');
                    if (hasGarrison && hasCommander) newTier = 3;
                    else if (hasGarrison || hasCommander) newTier = Math.max(newTier, 2);
                }

                if (cellData.type === 'golem') {
                    // Golem Works needs 2 Generators for T3
                    const genCount = neighborTypes.filter(t => t === 'generator').length;
                    if (genCount >= 2) newTier = 3;
                    else if (genCount >= 1) newTier = 2;
                }

                if (cellData.type === 'generator') {
                    // Generator upgrades with multiple connections
                    if (connectedCount >= 2) newTier = Math.max(newTier, 2);
                    if (connectedCount >= 3) newTier = 3;
                }

                if (cellData.type === 'synth') {
                    // Synth Lab upgrades with Flesh Surgeon + Generator
                    const hasFlesh = neighborTypes.includes('flesh');
                    const hasGenerator = neighborTypes.includes('generator');
                    if (hasFlesh && hasGenerator) newTier = 3;
                    else if (hasFlesh || hasGenerator) newTier = Math.max(newTier, 2);
                }

                if (cellData.type === 'alchemy') {
                    // Alchemy upgrades with Thaumaturge
                    const hasThaumaturge = neighborTypes.includes('thaumaturge');
                    if (hasThaumaturge && connectedCount >= 2) newTier = 3;
                    else if (hasThaumaturge) newTier = Math.max(newTier, 2);
                }

                if (cellData.type === 'thaumaturge') {
                    // Thaumaturge upgrades with multiple magic rooms
                    const hasAlchemy = neighborTypes.includes('alchemy');
                    const hasCorruption = neighborTypes.includes('corruption');
                    if (hasAlchemy && hasCorruption) newTier = 3;
                    else if (hasAlchemy || hasCorruption) newTier = Math.max(newTier, 2);
                }

                if (cellData.type === 'corruption') {
                    // Corruption upgrades with Thaumaturge + Alchemy
                    const hasThaumaturge = neighborTypes.includes('thaumaturge');
                    const hasAlchemy = neighborTypes.includes('alchemy');
                    if (hasThaumaturge && hasAlchemy) newTier = 3;
                    else if (hasThaumaturge || hasAlchemy) newTier = Math.max(newTier, 2);
                }

                if (newTier !== cellData.tier) {
                    cellData.tier = newTier;
                    changed = true;
                    updateCellDisplay(row, col);
                }
            }
        }
    }
}

// ============================================
// STATS
// ============================================
function recalculateStats() {
    let chainLength = 0;
    let spymasterCount = 0;
    let hasCommander = false;

    const totals = {
        packSize: 0,
        normalEffectiveness: 0,
        humanoidEffectiveness: 0,
        constructEffectiveness: 0,
        rareEffectiveness: 0,
        uniqueEffectiveness: 0,
        rarity: 0,
        areaRarity: 0,
        additionalMod: 0,
        rareChests: 0,
        chestRarity: 0,
        xpBonus: 0,
        goldBonus: 0,
        modAmplification: 0
    };

    // Medallion tracking
    const medallionChances = {
        lockLow: 0,      // Juatalotli low chance
        lockHigh: 0,     // Juatalotli high chance
        tierLow: 0,      // Quipolatl low chance
        tierHigh: 0,     // Quipolatl high chance
        advancedHigh: 0  // Advanced medallions high chance
    };

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cellData = state.grid[row][col];
            if (!cellData.type) continue;

            chainLength++;
            const room = ROOMS[cellData.type];
            const tierIndex = (cellData.tier || 1) - 1; // 0-indexed

            if (cellData.type === 'spymaster') spymasterCount++;
            if (cellData.type === 'commander') hasCommander = true;

            // Sum effects using tier-indexed arrays
            Object.entries(room.effects).forEach(([key, values]) => {
                if (totals[key] !== undefined && Array.isArray(values)) {
                    totals[key] += values[tierIndex] || 0;
                }
            });

            // Track medallion drops
            if (room.medallions && room.medallions.type) {
                const tier = cellData.tier || 1;
                if (room.medallions.type === 'juatalotli') {
                    if (tier === 3 && room.medallions.t3 === 'high') {
                        medallionChances.lockHigh++;
                    } else if (room.medallions.t1t2 === 'low') {
                        medallionChances.lockLow++;
                    }
                } else if (room.medallions.type === 'quipolatl') {
                    if (tier === 3) {
                        if (room.medallions.t3 === 'high') {
                            medallionChances.tierHigh++;
                        } else if (room.medallions.t3 === 'advanced-high') {
                            medallionChances.advancedHigh++;
                        }
                    } else if (room.medallions.t1t2 === 'low') {
                        medallionChances.tierLow++;
                    }
                }
            }
        }
    }

    state.medallionChances = medallionChances;

    state.spymasterCount = spymasterCount;
    state.hasCommanderInChain = hasCommander;

    // Update chain stats
    document.getElementById('stat-chain').textContent = `${chainLength} rooms`;

    const spyEl = document.getElementById('stat-spymasters');
    spyEl.textContent = `${spymasterCount} / 6`;
    spyEl.className = 'stat-value ' + (spymasterCount >= 6 ? 'good' : 'warning');

    const cmdEl = document.getElementById('stat-commander');
    cmdEl.textContent = hasCommander ? 'Yes' : 'No';
    cmdEl.className = 'stat-value ' + (hasCommander && spymasterCount < 6 ? 'warning' : '');

    document.getElementById('stat-protected').textContent = spymasterCount >= 6 ? 'Self-sustaining!' : 'Need more Spy Masters';
    document.getElementById('stat-protected').className = 'stat-value ' + (spymasterCount >= 6 ? 'good' : 'warning');

    // Update loot stats (like in-game display)
    const lootEl = document.getElementById('loot-stats');
    const stats = [];

    if (totals.packSize > 0) {
        stats.push(`<div class="loot-stat quantity">${totals.packSize}% increased number of Monster Packs</div>`);
    }
    if (totals.normalEffectiveness > 0) {
        stats.push(`<div class="loot-stat effectiveness">Normal Monsters have ${totals.normalEffectiveness}% increased Effectiveness</div>`);
    }
    if (totals.humanoidEffectiveness > 0) {
        stats.push(`<div class="loot-stat effectiveness">Humanoid Monsters have ${totals.humanoidEffectiveness}% increased Effectiveness</div>`);
    }
    if (totals.constructEffectiveness > 0) {
        stats.push(`<div class="loot-stat effectiveness">Construct Monsters have ${totals.constructEffectiveness}% increased Effectiveness</div>`);
    }
    if (totals.rareEffectiveness > 0) {
        stats.push(`<div class="loot-stat effectiveness">Rare Monsters have ${totals.rareEffectiveness}% increased Effectiveness</div>`);
    }
    if (totals.uniqueEffectiveness > 0) {
        stats.push(`<div class="loot-stat effectiveness">Unique Monsters have ${totals.uniqueEffectiveness}% increased Effectiveness</div>`);
    }
    if (totals.rarity > 0) {
        stats.push(`<div class="loot-stat rarity">${totals.rarity}% increased Rarity of Items Dropped by Monsters</div>`);
    }
    if (totals.areaRarity > 0) {
        stats.push(`<div class="loot-stat rarity">${totals.areaRarity}% increased Rarity of Items found in this Area</div>`);
    }
    if (totals.chestRarity > 0) {
        stats.push(`<div class="loot-stat rarity">Chests have ${totals.chestRarity}% more Item Rarity</div>`);
    }
    if (totals.additionalMod > 0) {
        stats.push(`<div class="loot-stat special">Rare Monsters have ${totals.additionalMod}% chance for additional Modifier</div>`);
    }
    if (totals.rareChests > 0) {
        stats.push(`<div class="loot-stat special">${totals.rareChests}% increased amount of Rare Chests</div>`);
    }
    if (totals.xpBonus > 0) {
        stats.push(`<div class="loot-stat special">Monsters grant ${totals.xpBonus}% increased Experience</div>`);
    }
    if (totals.goldBonus > 0) {
        stats.push(`<div class="loot-stat special">${totals.goldBonus}% increased Gold found in this Area</div>`);
    }
    if (totals.modAmplification > 0) {
        stats.push(`<div class="loot-stat special">${totals.modAmplification}% increased effect of Temple Mods</div>`);
    }

    lootEl.innerHTML = stats.length > 0 ? stats.join('') : '<div class="loot-stat">Place rooms to see bonuses...</div>';

    // Update medallion stats
    updateMedallionStats(medallionChances);
}

function updateMedallionStats(chances) {
    const medalEl = document.getElementById('medallion-stats');
    if (!medalEl) return;

    const lines = [];

    if (chances.lockHigh > 0) {
        lines.push(`<div class="medallion-stat lock-high"><span style="color:#4ade80;">HIGH</span> Lock chance: ${chances.lockHigh} room(s) (Spymaster T3)</div>`);
    }
    if (chances.lockLow > 0) {
        lines.push(`<div class="medallion-stat lock-low"><span style="color:#86efac;">Low</span> Lock chance: ${chances.lockLow} room(s)</div>`);
    }
    if (chances.advancedHigh > 0) {
        lines.push(`<div class="medallion-stat advanced"><span style="color:#fbbf24;">HIGH</span> Advanced medallions: ${chances.advancedHigh} room(s)</div>`);
    }
    if (chances.tierHigh > 0) {
        lines.push(`<div class="medallion-stat tier-high"><span style="color:#fcd34d;">HIGH</span> Tier-up chance: ${chances.tierHigh} room(s)</div>`);
    }
    if (chances.tierLow > 0) {
        lines.push(`<div class="medallion-stat tier-low"><span style="color:#fef08a;">Low</span> Tier-up chance: ${chances.tierLow} room(s)</div>`);
    }

    if (lines.length > 0) {
        medalEl.innerHTML = lines.join('');
    } else {
        medalEl.innerHTML = '<div class="medallion-stat">No medallion sources yet...</div>';
    }
}

// ============================================
// WARNINGS
// ============================================
function checkWarnings() {
    const warnings = [];
    const panel = document.getElementById('warnings-panel');
    const list = document.getElementById('warnings-list');

    if (state.hasCommanderInChain && state.spymasterCount < 6) {
        warnings.push('Commander in chain blocks future Spy Masters! Aim for 6 Spy Masters first.');
    }

    if (warnings.length > 0) {
        panel.style.display = 'block';
        list.innerHTML = warnings.map(w => `<div class="warning-item">${w}</div>`).join('');
    } else {
        panel.style.display = 'none';
    }
}

function showWarning(msg) {
    const panel = document.getElementById('warnings-panel');
    const list = document.getElementById('warnings-list');
    panel.style.display = 'block';
    list.innerHTML = `<div class="warning-item">${msg}</div>`;
    setTimeout(() => checkWarnings(), 3000);
}

// ============================================
// OPTIMIZER - Smart Round Advisor
// ============================================
function optimize() {
    const lockMedallions = parseInt(document.getElementById('lock-medallions').value) || 0;
    const tierMedallions = parseInt(document.getElementById('tier-medallions').value) || 0;
    const cards = state.selectedCards.filter(c => c);

    const recommendations = [];
    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('highlight-best', 'highlight-good', 'highlight-bad');
    });

    // Get all placed rooms for analysis
    const placedRooms = [];
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = state.grid[row][col];
            if (cell.type && cell.type !== 'path') {
                placedRooms.push({ row, col, type: cell.type, tier: cell.tier || 1 });
            }
        }
    }

    // === STEP 1: LOCK RECOMMENDATIONS ===
    if (lockMedallions > 0) {
        const lockTargets = findBestLockTargets(placedRooms);
        if (lockTargets.length > 0) {
            const best = lockTargets[0];
            const room = ROOMS[best.type];
            recommendations.push({
                text: `<span style="color:#4ade80;">🔒 LOCK</span> <strong>${room.icon} ${room.name}</strong> at Row ${best.row + 1}, Col ${best.col + 1}`,
                reasons: best.reasons,
                type: 'lock',
                priority: 100
            });

            // Highlight the cell
            const cell = document.querySelector(`.cell[data-row="${best.row}"][data-col="${best.col}"]`);
            if (cell) cell.classList.add('highlight-best');
        } else {
            recommendations.push({
                text: `<span style="color:#4ade80;">🔒 LOCK</span>: Build more of your snake first`,
                reasons: ['Wait until you have a longer chain, then lock the HEAD'],
                type: 'info',
                priority: 50
            });
        }
    }

    // === STEP 2: TIER UP RECOMMENDATIONS ===
    if (tierMedallions > 0) {
        const tierTargets = findBestTierTargets(placedRooms);
        if (tierTargets.length > 0) {
            const best = tierTargets[0];
            const room = ROOMS[best.type];
            recommendations.push({
                text: `<span style="color:#fbbf24;">⬆ TIER UP</span> <strong>${room.icon} ${room.name}</strong> (T${best.tier} → T${best.tier + 1}) at Row ${best.row + 1}, Col ${best.col + 1}`,
                reasons: best.reasons,
                type: 'tier',
                priority: 90
            });

            const cell = document.querySelector(`.cell[data-row="${best.row}"][data-col="${best.col}"]`);
            if (cell) cell.classList.add('highlight-good');
        } else {
            recommendations.push({
                text: `<span style="color:#fbbf24;">⬆ TIER UP</span>: Save for a Spymaster or high-value room`,
                reasons: ['No good tier-up targets currently'],
                type: 'info',
                priority: 40
            });
        }
    }

    // === STEP 3: CARD PLACEMENT RECOMMENDATIONS ===
    if (cards.length === 0) {
        recommendations.push({
            text: `Select your 6 cards to get placement advice`,
            reasons: ['Use the dropdowns above'],
            type: 'info',
            priority: 0
        });
    } else {
        // Analyze each card
        const cardAnalysis = [];

        cards.forEach((cardType) => {
            const room = ROOMS[cardType];
            const placements = [];

            for (let row = 0; row < 9; row++) {
                for (let col = 0; col < 9; col++) {
                    if (!state.grid[row][col].type && canPlaceRoom(row, col, cardType)) {
                        const score = scorePlacement(row, col, cardType);
                        placements.push({ row, col, score, cardType });
                    }
                }
            }

            placements.sort((a, b) => b.score.total - a.score.total);

            if (placements.length > 0) {
                const best = placements[0];
                cardAnalysis.push({
                    cardType,
                    room,
                    best,
                    placements,
                    shouldPlace: best.score.total > -20 // Skip if very negative score
                });
            } else {
                cardAnalysis.push({
                    cardType,
                    room,
                    best: null,
                    placements: [],
                    shouldPlace: false
                });
            }
        });

        // Sort by score - best cards first
        cardAnalysis.sort((a, b) => {
            if (!a.best) return 1;
            if (!b.best) return -1;
            return b.best.score.total - a.best.score.total;
        });

        // Generate recommendations
        cardAnalysis.forEach((analysis, i) => {
            const { cardType, room, best, shouldPlace } = analysis;

            if (!best) {
                recommendations.push({
                    text: `<strong>${room.icon} ${room.name}</strong>: ❌ SKIP - No valid placement`,
                    reasons: ['Cannot connect to any existing room'],
                    type: 'danger',
                    priority: 10
                });
            } else if (!shouldPlace) {
                recommendations.push({
                    text: `<strong>${room.icon} ${room.name}</strong>: ⚠️ Consider SKIPPING`,
                    reasons: best.score.reasons,
                    type: 'warning',
                    priority: 20
                });
            } else {
                let type = 'normal';
                if (cardType === 'commander' && state.spymasterCount < 6) {
                    type = 'danger';
                } else if (cardType === 'spymaster') {
                    type = 'priority';
                }

                // Highlight cells
                const cell = document.querySelector(`.cell[data-row="${best.row}"][data-col="${best.col}"]`);
                if (cell && i === 0) cell.classList.add('highlight-best');
                else if (cell) cell.classList.add('highlight-good');

                recommendations.push({
                    text: `<strong>${room.icon} ${room.name}</strong> → Row ${best.row + 1}, Col ${best.col + 1}`,
                    reasons: best.score.reasons,
                    type,
                    priority: best.score.total
                });
            }
        });
    }

    // === STEP 4: STRATEGIC ADVICE ===

    // Snake HEAD protection tip
    const snakeHead = findSnakeHead();
    if (snakeHead && snakeHead.distance >= 3 && lockMedallions === 0) {
        const headRoom = ROOMS[snakeHead.type];
        recommendations.push({
            text: `💡 <strong>TIP:</strong> Lock the HEAD of your snake to protect the chain!`,
            reasons: [
                `Your HEAD is ${headRoom.icon} ${headRoom.name} (${snakeHead.distance} rooms deep)`,
                'One lock medallion protects your ENTIRE chain'
            ],
            type: 'tip',
            priority: -5
        });
    }

    if (state.spymasterCount < 6 && !cards.includes('spymaster')) {
        recommendations.push({
            text: `💡 <strong>TIP:</strong> You need ${6 - state.spymasterCount} more Spy Masters for self-sustaining locks`,
            reasons: ['Prioritize Spy Master cards when they appear'],
            type: 'tip',
            priority: -10
        });
    }

    if (state.hasCommanderInChain && state.spymasterCount < 6) {
        recommendations.push({
            text: `⚠️ <strong>WARNING:</strong> Commander blocks future Spy Masters!`,
            reasons: [`You only have ${state.spymasterCount}/6 Spy Masters`],
            type: 'danger',
            priority: 200
        });
    }

    // Sort by priority and render
    recommendations.sort((a, b) => b.priority - a.priority);

    const recEl = document.getElementById('recommendations');
    recEl.innerHTML = recommendations.map((rec) => `
        <div class="recommendation ${rec.type}">
            ${rec.text}
            <div class="reasons">${rec.reasons.join(' • ')}</div>
        </div>
    `).join('');
}

// Find the HEAD of the snake (room furthest from START via BFS)
// In snake strategy, locking the HEAD protects the ENTIRE chain behind it
function findSnakeHead() {
    // START connects to row 4, col 0 (the entrance)
    const startRow = 4;
    const startCol = 0;

    // Check if there's any room at the entrance
    const entranceCell = state.grid[startRow][startCol];
    if (!entranceCell.type) {
        return null; // No chain exists
    }

    // BFS from entrance to find the furthest room
    const visited = new Set();
    const queue = [{ row: startRow, col: startCol, distance: 0 }];
    visited.add(`${startRow},${startCol}`);

    let furthestRoom = { row: startRow, col: startCol, distance: 0 };

    while (queue.length > 0) {
        const current = queue.shift();
        const currentCell = state.grid[current.row][current.col];

        // Track the furthest room found
        if (current.distance > furthestRoom.distance) {
            furthestRoom = current;
        }

        // Explore connected neighbors
        const neighbors = getNeighbors(current.row, current.col);
        neighbors.forEach(([nr, nc]) => {
            const key = `${nr},${nc}`;
            if (visited.has(key)) return;

            const neighborCell = state.grid[nr][nc];
            if (!neighborCell.type) return;

            // Check if connected
            if (areConnected(currentCell.type, neighborCell.type)) {
                visited.add(key);
                queue.push({ row: nr, col: nc, distance: current.distance + 1 });
            }
        });
    }

    // Return the head room with its data
    const headCell = state.grid[furthestRoom.row][furthestRoom.col];
    return {
        row: furthestRoom.row,
        col: furthestRoom.col,
        type: headCell.type,
        tier: headCell.tier || 1,
        distance: furthestRoom.distance
    };
}

// Find best rooms to lock - ONLY the snake HEAD matters!
function findBestLockTargets(placedRooms) {
    const targets = [];

    // Find the HEAD of the snake
    const snakeHead = findSnakeHead();

    if (!snakeHead || snakeHead.distance === 0) {
        // No meaningful chain yet (only entrance room)
        return [];
    }

    // The HEAD is the ONLY room worth locking
    // Locking it protects the entire chain behind it
    const headRoom = snakeHead;
    const roomData = ROOMS[headRoom.type];

    const reasons = [
        `Snake HEAD (${headRoom.distance} rooms from START)`,
        'Locking HEAD protects ENTIRE chain!'
    ];

    // Add tier info
    if (headRoom.tier === 3) {
        reasons.push('T3 room = Maximum value');
    }

    // Add room type info
    if (headRoom.type === 'spymaster') {
        reasons.push('Spy Master = Lock medallion source');
    } else if (['alchemy', 'corruption', 'armory', 'sacrificial'].includes(headRoom.type)) {
        reasons.push('High loot value room');
    }

    targets.push({
        ...headRoom,
        score: 100, // HEAD is always the best target
        reasons
    });

    return targets;
}

// Find best rooms to tier up
function findBestTierTargets(placedRooms) {
    const targets = [];

    placedRooms.forEach(room => {
        if (room.tier >= 3) return; // Already max tier

        const roomData = ROOMS[room.type];
        let score = 0;
        const reasons = [];

        // Spy Master tier up is very valuable
        if (room.type === 'spymaster') {
            score += 80;
            reasons.push('Spy Master = More lock drops');
            if (room.tier === 2) {
                score += 40;
                reasons.push('T2→T3 = HIGH lock chance!');
            }
        }

        // Golem Works T3 needs 2 generators
        if (room.type === 'golem' && room.tier === 2) {
            score += 50;
            reasons.push('Golem T3 = HIGH medallion drops');
        }

        // High-effect rooms benefit more from tier up
        if (['alchemy', 'commander', 'armory', 'corruption'].includes(room.type)) {
            score += 30;
            reasons.push('High effect scaling');
        }

        // T1 → T2 is generally good value
        if (room.tier === 1) {
            score += 10;
            reasons.push('Unlock T2 effects');
        }

        if (score > 0) {
            targets.push({ ...room, score, reasons });
        }
    });

    targets.sort((a, b) => b.score - a.score);
    return targets;
}

function scorePlacement(row, col, roomType) {
    let total = 0;
    const reasons = [];

    if (roomType === 'spymaster') {
        if (state.spymasterCount < 6) {
            total += 25;
            reasons.push('+25 Spy Master priority');
        }
        if (!state.hasCommanderInChain) {
            total += 10;
            reasons.push('+10 No Commander blocking');
        }
    }

    if (roomType === 'commander' && state.spymasterCount < 6) {
        total -= 40;
        reasons.push('-40 Blocks Spy Masters!');
    }

    // Prefer extending toward edges for snake
    if (col !== 4) {
        total += 5;
        reasons.push('+5 Side column');
    }

    // Near entrance is good for starting
    if (row >= 6 && ['garrison', 'path'].includes(roomType)) {
        total += 8;
        reasons.push('+8 Good chain start');
    }

    // Synergies
    const neighbors = getNeighbors(row, col);
    let synergies = 0;
    neighbors.forEach(([nr, nc]) => {
        const nt = state.grid[nr][nc].type;
        if (nt && ROOMS[roomType].connects.includes(nt)) {
            synergies++;
        }
    });
    if (synergies > 0) {
        total += synergies * 5;
        reasons.push(`+${synergies * 5} Synergies`);
    }

    // Loot rooms bonus
    if (['alchemy', 'corruption', 'armory'].includes(roomType)) {
        total += 10;
        reasons.push('+10 Loot multiplier');
    }

    return { total, reasons };
}

// ============================================
// SAVE/LOAD
// ============================================
function saveLayout() {
    localStorage.setItem('vaal-temple', JSON.stringify(state.grid));
    showWarning('Layout saved!');
}

function loadLayout() {
    const saved = localStorage.getItem('vaal-temple');
    if (saved) {
        state.grid = JSON.parse(saved);
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                updateCellDisplay(r, c);
            }
        }
        updateConnections();
        drawConnectionLines();
        recalculateTiers();
        recalculateStats();
        checkWarnings();
        showWarning('Layout loaded!');
    } else {
        showWarning('No saved layout found.');
    }
}

function exportURL() {
    const encoded = btoa(JSON.stringify(state.grid));
    const url = window.location.href.split('?')[0] + '?l=' + encoded;
    navigator.clipboard.writeText(url).then(() => showWarning('URL copied!')).catch(() => prompt('Copy:', url));
}

function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    const layout = params.get('l');
    if (layout) {
        try {
            state.grid = JSON.parse(atob(layout));
            for (let r = 0; r < 9; r++) {
                for (let c = 0; c < 9; c++) {
                    updateCellDisplay(r, c);
                }
            }
            updateConnections();
            drawConnectionLines();
            recalculateTiers();
            recalculateStats();
            checkWarnings();
        } catch (e) {
            console.error('Failed to load from URL:', e);
        }
    }
}

function resetGrid() {
    if (confirm('Reset the entire grid?')) {
        initGrid();
        recalculateStats();
        document.getElementById('recommendations').innerHTML = '<p style="color: #666; font-size: 0.75rem;">Select your 6 cards and click "Optimize" to see recommendations.</p>';
    }
}

// ============================================
// DESTABILIZATION SIMULATOR
// ============================================
let destabMode = false;

function toggleDestabMode() {
    destabMode = !destabMode;
    const btn = document.getElementById('destab-btn');
    btn.classList.toggle('active', destabMode);

    if (destabMode) {
        showDestabRisks();
        showWarning('Destab mode ON. Click a room to simulate its removal.');
    } else {
        clearDestabHighlights();
        showWarning('Destab mode OFF.');
    }
}

function showDestabRisks() {
    clearDestabHighlights();

    // Find rooms that are at risk (chain endpoints, unprotected)
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cellData = state.grid[row][col];
            if (!cellData.type || cellData.type === 'path') continue;

            const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);

            // Check if room is locked (protected)
            if (cellData.locked) {
                cell.classList.add('protected');
            } else {
                // Check if this is a chain endpoint (more vulnerable)
                const neighbors = getNeighbors(row, col);
                const connectedCount = neighbors.filter(([nr, nc]) => {
                    const n = state.grid[nr][nc];
                    return n.type && areConnected(cellData.type, n.type);
                }).length;

                if (connectedCount === 1) {
                    cell.classList.add('at-risk');
                }
            }
        }
    }
}

function clearDestabHighlights() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('at-risk', 'will-destabilize', 'protected');
    });
}

function simulateDestab(row, col) {
    if (!destabMode) return;

    const cellData = state.grid[row][col];
    if (!cellData.type) return;

    clearDestabHighlights();

    // Highlight what would be affected
    const affected = findAffectedByDestab(row, col);

    affected.forEach(([r, c]) => {
        const cell = document.querySelector(`.cell[data-row="${r}"][data-col="${c}"]`);
        cell.classList.add('will-destabilize');
    });

    // Show info about the destab
    if (affected.length > 0) {
        showWarning(`Removing this would destabilize ${affected.length} room(s)!`);
    } else {
        showWarning('This room can be safely removed (no cascade).');
    }
}

function findAffectedByDestab(startRow, startCol) {
    // Simple simulation: find rooms that would lose their only connection
    const affected = [];
    const startType = state.grid[startRow][startCol].type;

    // Check neighbors of the removed room
    const neighbors = getNeighbors(startRow, startCol);

    neighbors.forEach(([nr, nc]) => {
        const neighborData = state.grid[nr][nc];
        if (!neighborData.type) return;

        // Check if this neighbor would lose its connection to the chain
        const neighborNeighbors = getNeighbors(nr, nc);
        const remainingConnections = neighborNeighbors.filter(([nnr, nnc]) => {
            // Skip the room being removed
            if (nnr === startRow && nnc === startCol) return false;
            const nn = state.grid[nnr][nnc];
            return nn.type && areConnected(neighborData.type, nn.type);
        });

        // If this neighbor would have no remaining connections, it gets destabilized too
        if (remainingConnections.length === 0) {
            affected.push([nr, nc]);
            // Could recursively check what those rooms would destabilize too
            // For now, just show immediate cascade
        }
    });

    return affected;
}

// ============================================
// EXPORT AS IMAGE
// ============================================
async function exportAsImage() {
    try {
        // Use html2canvas if available, otherwise manual canvas
        const gridSection = document.querySelector('.grid-section');

        // Try to capture with canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set canvas size based on grid
        const gridEl = document.getElementById('temple-grid');
        const rect = gridEl.getBoundingClientRect();

        // Create a higher resolution canvas for quality
        const scale = 2;
        canvas.width = 600 * scale;
        canvas.height = 650 * scale;
        ctx.scale(scale, scale);

        // Draw background
        ctx.fillStyle = '#0a0a0f';
        ctx.fillRect(0, 0, 600, 650);

        // Draw header
        ctx.fillStyle = '#af6025';
        ctx.font = 'bold 24px Segoe UI';
        ctx.textAlign = 'center';
        ctx.fillText('VAAL TEMPLE OPTIMIZER', 300, 35);

        // Draw grid background
        ctx.fillStyle = '#1a1510';
        ctx.fillRect(50, 60, 500, 500);
        ctx.strokeStyle = '#3d3526';
        ctx.lineWidth = 2;
        ctx.strokeRect(50, 60, 500, 500);

        // Draw cells
        const cellSize = 50;
        const gap = 4;
        const startX = 60;
        const startY = 70;

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const cellData = state.grid[row][col];
                const x = startX + col * (cellSize + gap);
                const y = startY + row * (cellSize + gap);

                // Draw cell background
                if (cellData.type) {
                    ctx.fillStyle = getRoomColor(cellData.type);
                } else {
                    ctx.fillStyle = '#1a1714';
                }
                ctx.fillRect(x, y, cellSize, cellSize);

                // Draw cell border
                ctx.strokeStyle = cellData.type ? '#4a3f2f' : '#2a2318';
                ctx.lineWidth = 1;
                ctx.strokeRect(x, y, cellSize, cellSize);

                // Draw room icon/name
                if (cellData.type) {
                    const room = ROOMS[cellData.type];
                    ctx.fillStyle = '#c4b998';
                    ctx.font = '18px Segoe UI';
                    ctx.textAlign = 'center';
                    ctx.fillText(room.icon, x + cellSize / 2, y + cellSize / 2 + 6);

                    // Draw tier badge
                    const tier = cellData.tier || 1;
                    ctx.fillStyle = tier === 3 ? '#00ff00' : tier === 2 ? '#ffff00' : '#888';
                    ctx.font = 'bold 10px Segoe UI';
                    ctx.fillText(tier.toString(), x + cellSize - 8, y + cellSize - 4);
                }
            }
        }

        // Draw connection lines
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const cellData = state.grid[row][col];
                if (!cellData.type) continue;

                const x = startX + col * (cellSize + gap) + cellSize / 2;
                const y = startY + row * (cellSize + gap) + cellSize / 2;

                // Right connection
                if (col < 8 && state.grid[row][col + 1].type) {
                    if (areConnected(cellData.type, state.grid[row][col + 1].type)) {
                        const x2 = startX + (col + 1) * (cellSize + gap) + cellSize / 2;
                        ctx.strokeStyle = '#af6025';
                        ctx.lineWidth = 3;
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x2, y);
                        ctx.stroke();
                    }
                }

                // Bottom connection
                if (row < 8 && state.grid[row + 1][col].type) {
                    if (areConnected(cellData.type, state.grid[row + 1][col].type)) {
                        const y2 = startY + (row + 1) * (cellSize + gap) + cellSize / 2;
                        ctx.strokeStyle = '#af6025';
                        ctx.lineWidth = 3;
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x, y2);
                        ctx.stroke();
                    }
                }
            }
        }

        // Draw stats at bottom
        ctx.fillStyle = '#888';
        ctx.font = '12px Segoe UI';
        ctx.textAlign = 'left';
        ctx.fillText(`Spy Masters: ${state.spymasterCount}/6`, 60, 590);
        ctx.fillText(`Commander: ${state.hasCommanderInChain ? 'Yes' : 'No'}`, 200, 590);

        // Add watermark
        ctx.fillStyle = '#666';
        ctx.font = '10px Segoe UI';
        ctx.textAlign = 'center';
        ctx.fillText('Generated by Vaal Temple Optimizer', 300, 630);

        // Download
        const link = document.createElement('a');
        link.download = 'vaal-temple.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        showWarning('Image exported!');
    } catch (e) {
        console.error('Export failed:', e);
        showWarning('Export failed. Try using browser screenshot instead.');
    }
}

function getRoomColor(type) {
    const colors = {
        garrison: '#8b2020',
        spymaster: '#6020a0',
        commander: '#b04010',
        armory: '#107080',
        alchemy: '#208020',
        corruption: '#901050',
        thaumaturge: '#4050b0',
        sacrificial: '#a01010',
        generator: '#a08010',
        golem: '#606050',
        synth: '#1090a0',
        flesh: '#c04080',
        smithy: '#806020',
        sealed: '#c0a020',
        path: '#404040'
    };
    return colors[type] || '#333';
}

// ============================================
// SAMPLE TEMPLE GENERATOR
// ============================================
function generateSampleTemple() {
    // Clear grid first
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            state.grid[r][c] = { type: null, tier: 0 };
        }
    }

    // Build a snake following the Fubgun pattern:
    // Garrison → Spy Master → Garrison → Armory → repeat
    // Then add some variety with Alchemy, Thaumaturge, Generator branch

    // Valid snake pattern following connection rules:
    // path → garrison → spymaster (spy connects back to garrison)
    // garrison → armory → garrison (armory connects both ways)
    // garrison → spymaster (repeat pattern)
    const snake = [
        // Start with Path at entrance
        { row: 4, col: 0, type: 'path' },

        // Garrison 1 connects to path
        { row: 4, col: 1, type: 'garrison' },
        { row: 3, col: 1, type: 'spymaster' },  // Spy Master 1 (connects to Garrison 1)

        // Armory 1 connects to Garrison 1
        { row: 4, col: 2, type: 'armory' },

        // Garrison 2 connects to Armory 1
        { row: 4, col: 3, type: 'garrison' },
        { row: 3, col: 3, type: 'spymaster' },  // Spy Master 2 (connects to Garrison 2)

        // Armory 2 connects to Garrison 2
        { row: 4, col: 4, type: 'armory' },

        // Garrison 3 connects to Armory 2
        { row: 4, col: 5, type: 'garrison' },
        { row: 3, col: 5, type: 'spymaster' },  // Spy Master 3 (connects to Garrison 3)

        // Armory 3 connects to Garrison 3
        { row: 4, col: 6, type: 'armory' },

        // Garrison 4 connects to Armory 3
        { row: 4, col: 7, type: 'garrison' },
        { row: 3, col: 7, type: 'spymaster' },  // Spy Master 4 (connects to Garrison 4)
        { row: 5, col: 7, type: 'spymaster' },  // Spy Master 5 (connects to Garrison 4)

        // Garrison 5 connects to Armory 3 (branching up)
        { row: 3, col: 6, type: 'garrison' },
        { row: 2, col: 6, type: 'spymaster' },  // Spy Master 6 (connects to Garrison 5)

        // Loot branch from Armory 2
        { row: 5, col: 4, type: 'alchemy' },     // Alchemy connects to Armory
        { row: 5, col: 5, type: 'thaumaturge' }, // Thaumaturge connects to Alchemy
        { row: 6, col: 5, type: 'corruption' },  // Corruption connects to Thaumaturge
    ];

    // Place all rooms
    snake.forEach(room => {
        state.grid[room.row][room.col] = { type: room.type, tier: 1 };
    });

    // Update display
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            updateCellDisplay(r, c);
        }
    }

    updateConnections();
    drawConnectionLines();
    recalculateTiers();
    recalculateStats();
    checkWarnings();

    showWarning('Sample temple generated! 6 Spy Masters + loot rooms.');
}

// ============================================
// INFO MODAL
// ============================================
function initInfoModal() {
    const infoBtn = document.getElementById('info-btn');
    const infoModal = document.getElementById('info-modal');
    const infoClose = document.getElementById('info-close');

    infoBtn.addEventListener('click', () => {
        infoModal.style.display = 'flex';
    });

    infoClose.addEventListener('click', () => {
        infoModal.style.display = 'none';
    });

    // Close on overlay click
    infoModal.addEventListener('click', (e) => {
        if (e.target === infoModal) {
            infoModal.style.display = 'none';
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && infoModal.style.display === 'flex') {
            infoModal.style.display = 'none';
        }
    });
}

// ============================================
// INIT
// ============================================
function init() {
    initGrid();
    initRoomPalette();
    initCardsInput();
    initTooltips();
    initInfoModal();
    loadFromURL();
    recalculateStats();
    drawConnectionLines();

    document.getElementById('optimize-btn').addEventListener('click', optimize);
    document.getElementById('save-btn').addEventListener('click', saveLayout);
    document.getElementById('load-btn').addEventListener('click', loadLayout);
    document.getElementById('export-btn').addEventListener('click', exportURL);
    document.getElementById('reset-btn').addEventListener('click', resetGrid);
    document.getElementById('sample-btn').addEventListener('click', generateSampleTemple);
    document.getElementById('destab-btn').addEventListener('click', toggleDestabMode);
    document.getElementById('export-img-btn').addEventListener('click', exportAsImage);
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
