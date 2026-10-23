import { Plugin } from 'obsidian';
import { DEFAULT_SETTINGS, SoulSacrificeSettings } from './settings';

export default class SoulSacrificePlugin extends Plugin {
  settings!: SoulSacrificeSettings;

  async onload() {
    await this.loadSettings();
  }

  onunload() {
  }

  async loadSettings() {
    this.settings = Object.assign(
      {},
      DEFAULT_SETTINGS,
      (await this.loadData()) as Partial<SoulSacrificeSettings>,
    );
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
