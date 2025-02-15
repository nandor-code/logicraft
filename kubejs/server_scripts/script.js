// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info(
  "Hello, World! (You will see this line every time server resources reload)"
);

onEvent("recipes", (event) => {
  event.remove({ mod: "theoneprobe" });
  event.remove({ output: "extradisks:infinite_storage_block" });
  event.remove({ output: "extradisks:infinite_storage_part" });
  event.remove({ output: "extradisks:infinite_storage_disk" });
  event.remove({ output: "extradisks:infinite_fluid_storage_block" });
  event.remove({ output: "extradisks:infinite_fluid_storage_part" });
  event.remove({ output: "extradisks:infinite_fluid_storage_disk" });
});

onEvent("item.tags", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
