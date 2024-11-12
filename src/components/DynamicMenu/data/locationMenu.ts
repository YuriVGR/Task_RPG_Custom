import { LocationProps, MenuSetter } from "@/types";
import { shopMenu } from "./shopMenu";



export function createLocationMenu(setMenu: MenuSetter) {
  const menu: LocationProps[] = [
    {
      name: "Cidade",
      menu: [
        {
          label: "Explorar",
          action: () => console.log("Explorar"),
          text: "",
        },
        {
          label: "Caçar",
          action: () => console.log("Caçar"),
          text: "",
        },
        {
          label: "Loja de Armas",
          action: () => setMenu(shopMenu[0].menu, shopMenu[0].name),
          text: "",
        },
        {
          label: "Loja de Armaduras",
          action: () => setMenu(shopMenu[1].menu, shopMenu[1].name),
          text: "",
        },
        {
          label: "Viajar",
          action: () => setMenu(menu[4].menu, menu[4].name),
          text: "",
        },
      ],
    },
    {
      name: "Vila",
      menu: [
        {
          label: "Explorar",
          action: () => console.log("Explorar"),
          text: "",
        },
        {
          label: "Caçar",
          action: () => console.log("Caçar"),
          text: "",
        },
        {
          label: "Loja de Armas",
          action: () => setMenu(shopMenu[0].menu, shopMenu[0].name),
          text: "",
        },
        {
          label: "Loja de Poções",
          action: () => setMenu(shopMenu[2].menu, shopMenu[2].name),
          text: "",
        },
        {
          label: "Viajar",
          action: () => setMenu(menu[4].menu, menu[4].name),
          text: "",
        },
      ],
    },
    {
      name: "Floresta",
      menu: [
        {
          label: "Explorar",
          action: () => console.log("Explorar"),
          text: "",
        },
        {
          label: "Caçar",
          action: () => console.log("Caçar"),
          text: "",
        },
        {
          label: "Loja de Armas",
          action: () => console.log("Loja de Armas"),
          text: "",
        },
        {
          label: "Loja de Armaduras",
          action: () => console.log("Loja de Armaduras"),
          text: "",
        },
        {
          label: "Viajar",
          action: () => setMenu(menu[4].menu, menu[4].name),
          text: "",
        },
      ],
    },
    {
      name: "Dungeon",
      menu: [
        {
          label: "Explorar",
          action: () => console.log("Explorar"),
          text: "",
        },
        {
          label: "Caçar",
          action: () => console.log("Caçar"),
          text: "",
        },
        {
          label: "Loja de Armas",
          action: () => console.log("Loja de Armas"),
          text: "",
        },
        {
          label: "Loja de Armaduras",
          action: () => console.log("Loja de Armaduras"),
          text: "",
        },
        {
          label: "Viajar",
          action: () => setMenu(menu[4].menu, menu[4].name),
          text: "",
        },
      ],
    },
    {
      name: "Viajar",
      menu: [
        {
          label: "Cidade",
          action: () => setMenu(menu[0].menu, menu[0].name),
          text: "",
        },
        {
          label: "Vila",
          action: () => setMenu(menu[1].menu, menu[1].name),
          text: "",
        },
        {
          label: "Floresta",
          action: () => setMenu(menu[2].menu, menu[2].name),
          text: "",
        },
        {
          label: "Dungeon",
          action: () => setMenu(menu[3].menu, menu[3].name),
          text: "",
        },
      ],
    },
  ];

  return menu;
}
