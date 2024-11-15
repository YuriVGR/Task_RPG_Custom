import { RPGPlayerProps, RPGInventoryProps } from "@/types";

export default function playerDetails() {
  let index = 1;
  let playerInventory: RPGInventoryProps[] = [];

  let player: RPGPlayerProps = {
    name: "Player",
    experience: 0,
    level: 0,
    currentStats: {
      hp: 10,
      mp: 5,
      atk: 5.5,
      def: 2.5,
      int: 2,
      spd: 2.5,
    },
    inventory: playerInventory,
  };

  const thresholds = [
    { level: 1, exp: 50 },
    { level: 2, exp: 65 },
    { level: 3, exp: 85 },
    { level: 4, exp: 110 },
    { level: 5, exp: 140 },
    { level: 6, exp: 175 },
    { level: 7, exp: 215 },
    { level: 8, exp: 260 },
    { level: 9, exp: 310 },
    { level: 10, exp: 365 },
    { level: 11, exp: 420 },
  ];

  if (player.experience >= thresholds[index].exp) {
    index++
  }

  player.level = thresholds[index].level;

  return player;
}
