import { App, PluginSettingTab } from 'obsidian';
import type SoulSacrificePlugin from './plugin';

export interface SoulSacrificeSettings {
}

export const DEFAULT_SETTINGS: SoulSacrificeSettings = {
};

export class SoulSacrificeSettingTab extends PluginSettingTab {
  plugin: SoulSacrificePlugin;

  constructor(app: App, plugin: SoulSacrificePlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();
  }
}
