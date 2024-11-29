import { createStore } from 'vuex'
export default createStore({
    state: {
        type: '',
        configfile: '',
        all_basics: '',
        all_drops: '',
        all_option: '',
        all_bossbar: '',
        all_aigoalselectors: '',
        all_aitargetselectors: '',
        all_equipment: '',
        all_damagemodifiers: '',
        all_killmessages: '',
        all_levelmodifiers: '',
    },
    mutations: {
        type(state, type) {
            state.type = type
        },
        all1(state) {
            state.configfile = state.all_basics +
                state.all_drops + state.all_option +
                state.all_bossbar +
                state.all_aigoalselectors +
                state.all_aitargetselectors +
                state.all_equipment +
                state.all_damagemodifiers +
                state.all_killmessages +
                state.all_levelmodifiers
        },
        basics(state, basics) {
            state.all_basics = ""
            state.configfile = ""
            if (basics[0] != "" && basics[0] != undefined) {
                state.all_basics = basics[0] + ':'
            }
            if (basics[1] != null && basics[1] != undefined) {
                state.all_basics = state.all_basics + "\n  Type: " + basics[1]
            }
            if (basics[2] != "" && basics[2] != undefined) {
                state.all_basics = state.all_basics + "\n  Display: " + basics[2]
            }
            if (basics[3] != "" && basics[3] != undefined) {
                state.all_basics = state.all_basics + "\n  Health: " + basics[3]
            }
            if (basics[4] != "" && basics[4] != undefined) {
                state.all_basics = state.all_basics + "\n  Damage: " + basics[4]
            }
            if (basics[5] != "" && basics[5] != undefined) {
                state.all_basics = state.all_basics + "\n  Armor: " + basics[5]
            }
            if (basics[6] != "" && basics[6] != undefined) {
                state.all_basics = state.all_basics + "\n  Faction: " + basics[6]
            }
            if (basics[7] != "" && basics[7] != undefined) {
                state.all_basics = state.all_basics + "\n  Mount: " + basics[7]
            }
        },
        drop(state, drop) {
            state.configfile = ""
            state.all_drops = ""
            if (drop.length != 0) {
                state.all_drops = state.all_drops + "\n  Drops:"
                for (var i = 0; i < drop.length; i++) {
                    state.all_drops = state.all_drops + "\n  " + drop[i]
                }
            }
        },
        option(state, option) {
            state.configfile = ""
            state.all_option = ""
            if (option.length != 0) {
                state.all_option = state.all_option + "\n  Options:"
                for (var i = 0; i < option.length; i++) {
                    state.all_option = state.all_option + "\n    " + option[i]
                }
            }
        },
        bossbar(state, bossbar) {
            state.configfile = ""
            state.all_bossbar = ""
            var s = 0
            for (var n = 0; n < bossbar.length; n++) {
                if (bossbar[n] != "" && bossbar[n] != null) {
                    s = 1
                }
            }
            if (s == 1) {
                var bossbar_config = ["Enabled", "Title", "Range", "Color", "Style", "CreateFog", "DarkenSky", "PlayMusic"]
                state.all_bossbar = "\n  BossBar:"
                for (var i = 0; i < bossbar.length; i++) {
                    if (bossbar[i] != "" && bossbar[i] != null) {
                        state.all_bossbar = state.all_bossbar + "\n    " + bossbar_config[i] + ": " + bossbar[i]
                    }
                }
            } else {
                state.all_bossbar = ""
            }
        },
        aigoalselectors(state, aigoalselectors) {
            state.configfile = ""
            state.all_aigoalselectors = ""
            if (aigoalselectors.length != 0) {
                state.all_aigoalselectors = state.all_aigoalselectors + "\n  AIGoalSelectors:"
                for (var i = 0; i < aigoalselectors.length; i++) {
                    state.all_aigoalselectors = state.all_aigoalselectors + "\n  - " + aigoalselectors[i]
                }
            }
        },
        aitargetselectors(state, aitargetselectors) {
            state.configfile = ""
            state.all_aitargetselectors = ""
            if (aitargetselectors.length != 0) {
                state.all_aitargetselectors = state.all_aitargetselectors + "\n  AITargetSelectors:"
                for (var i = 0; i < aitargetselectors.length; i++) {
                    state.all_aitargetselectors = state.all_aitargetselectors + "\n  - " + aitargetselectors[i]
                }
            }
        },
        equipment(state, equipment) {
            state.configfile = ""
            state.all_equipment = ""
            var n = ["Head", "Chest", "Legs", "Feet", "Hand", "OffHand"]
            var s = 0
            for (var k = 0; k < equipment.length; k++) {
                if (equipment[k] != "" && equipment[k] != undefined) {
                    s = 1
                }

            }
            if (s == 1) {
                state.all_equipment = state.all_equipment + "\n  Equipment:"
                for (var i = 0; i < equipment.length; i++) {
                    if (equipment[i] != "") {
                        state.all_equipment = state.all_equipment + "\n  - " + n[i] + ":" + equipment[i]
                    }
                }
            } else {
                state.all_equipment = ""
            }

        },
        damagemodifiers(state, damagemodifiers) {
            state.configfile = ""
            state.all_damagemodifiers = ""
            if (damagemodifiers != "") {
                state.all_damagemodifiers = state.all_damagemodifiers + "\n  DamageModifiers:"
                for (var i = 0; i < damagemodifiers.length; i++) {
                    state.all_damagemodifiers = state.all_damagemodifiers + "\n  - " + damagemodifiers[i]
                }
            } else {
                state.all_damagemodifiers = ""
            }

        },
        killmessages(state, killmessages) {
            state.configfile = ""
            state.all_killmessages = ""
            if (killmessages != "") {
                state.all_killmessages = "\n  KillMessages:"
                var s = killmessages.split("\n")
                for (var i = 0; i < s.length; i++) {
                    if (s[i] != "") {
                        state.all_killmessages = state.all_killmessages + "\n  - '" + s[i] + "'"
                    }
                }

            } else {
                state.all_killmessages = ""
            }
        },
        levelmodifiers(state, levelmodifiers) {
            state.configfile = ""
            state.all_levelmodifiers = ""
            if (levelmodifiers != "") {
                state.all_levelmodifiers = state.all_levelmodifiers + "\n  LevelModifiers:"
                for (var i = 0; i < levelmodifiers.length; i++) {
                    state.all_levelmodifiers = state.all_levelmodifiers + "\n    " + levelmodifiers[i]
                }
            } else {
                state.all_levelmodifiers = ""
            }

        },


    },
    actions: {},
})