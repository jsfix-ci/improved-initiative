export enum HpVerbosityOption {
  ActualHP = "Actual HP",
  ColoredLabel = "Colored Label",
  MonochromeLabel = "Monochrome Label",
  DamageTaken = "Damage Taken",
  HideAll = "Hide All"
}

export interface PlayerViewSettings {
  ActiveCombatantOnTop: boolean;
  AllowPlayerSuggestions: boolean;
  AllowTagSuggestions: boolean;
  MonsterHPVerbosity: HpVerbosityOption;
  PlayerHPVerbosity: HpVerbosityOption;
  HideMonstersOutsideEncounter: boolean;
  DisplayRoundCounter: boolean;
  DisplayTurnTimer: boolean;
  DisplayPortraits: boolean;
  DisplayCombatantColor: boolean;
  SplashPortraits: boolean;
  CustomCSS: string;
  CustomStyles: PlayerViewCustomStyles;
  CustomEncounterId: string;
}

export interface PlayerViewCustomStyles {
  mainBackground: string;
  combatantBackground: string;
  combatantText: string;
  activeCombatantIndicator: string;
  headerBackground: string;
  headerText: string;
  backgroundUrl: string;
  font: string;
}
